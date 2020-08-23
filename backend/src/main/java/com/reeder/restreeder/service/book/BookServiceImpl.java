package com.reeder.restreeder.service.book;

import com.reeder.restreeder.model.book.Book;
import com.reeder.restreeder.model.book.Paragraph;
import com.reeder.restreeder.repository.book.BookRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Integer.min;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final BookGetter bookGetter;
    private final BookParser bookParser;

    public BookServiceImpl(
            BookRepository bookRepository,
            BookGetter bookGetter,
            BookParser bookParser
    ) {
        this.bookRepository = bookRepository;
        this.bookGetter = bookGetter;
        this.bookParser = bookParser;
    }

    public Book getBook(Integer id) throws Exception {
        String bookTitle = bookGetter.getBookMetadata(id);
        String bookString = bookGetter.getBookBody(id);
        return bookParser.parseBook(id, bookTitle, bookString);
    }

    public Book keepOnlyParagraphsBetween(Book book, Integer paragraphsMin, Integer paragraphsMax) {
        int nbParagraphs = book.getParagraphs().size();

        final Integer endLoop = min(paragraphsMax, nbParagraphs);
        if (paragraphsMin >= endLoop) {
            // return book without any paragraphs
            return book.setParagraphs(new ArrayList<>());
        }

        List<Paragraph> newParagraphs = new ArrayList<>(endLoop - paragraphsMin);
        for (int i = paragraphsMin; i < endLoop; i++) {
            newParagraphs.add(book.getParagraphs().get(i));
        }
        return book.setParagraphs(newParagraphs);
    }

    public Book saveBook(Integer id) throws Exception {
        Book book = getBook(id);
        return bookRepository.save(book);
    }


}