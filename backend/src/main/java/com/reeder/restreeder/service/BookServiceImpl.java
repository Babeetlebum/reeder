package com.reeder.restreeder.service;

import com.reeder.restreeder.model.book.Book;
import org.springframework.stereotype.Service;

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

}
