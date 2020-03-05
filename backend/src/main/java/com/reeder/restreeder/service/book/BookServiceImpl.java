package com.reeder.restreeder.service.book;

import com.reeder.restreeder.model.book.Book;
import com.reeder.restreeder.model.book.Paragraph;
import com.reeder.restreeder.service.book.BookGetter;
import com.reeder.restreeder.service.book.BookParser;
import com.reeder.restreeder.service.book.BookService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Integer.min;

@Service
public class BookServiceImpl implements BookService {

    private final BookGetter bookGetter;
    private final BookParser bookParser;

    public BookServiceImpl(
            BookGetter bookGetter,
            BookParser bookParser
    ) {
        this.bookGetter = bookGetter;
        this.bookParser = bookParser;
    }

    public Book getBook(Integer id) throws Exception {
        String bookString = bookGetter.getBook(id);
        return bookParser.parseBook(id, bookString);
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
}