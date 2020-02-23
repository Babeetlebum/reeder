package com.reeder.restreeder.service;

import com.reeder.restreeder.model.book.Book;

public interface BookService {
    Book getBook(Integer id) throws Exception;
}
