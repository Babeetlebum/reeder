package com.reeder.restreeder.service.book;

import com.reeder.restreeder.model.book.Book;

public interface BookService {
    Book getBook(Integer id) throws Exception;

    Book keepOnlyParagraphsBetween(Book book, Integer paragraphsMin, Integer paragraphsMax);

}
