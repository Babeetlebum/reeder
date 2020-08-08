package com.reeder.restreeder.service.book;

import com.reeder.restreeder.model.book.Book;

public interface BookParser {

    Book parseBook(Integer bookId, String bookTitle, String bookString) throws Exception ;

}
