package com.reeder.restreeder.service;

import com.reeder.restreeder.model.book.Book;

public interface BookParser {

    Book parseBook(String bookString) throws Exception ;

}
