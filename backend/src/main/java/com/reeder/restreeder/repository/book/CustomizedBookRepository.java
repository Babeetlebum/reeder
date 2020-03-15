package com.reeder.restreeder.repository.book;

import com.reeder.restreeder.model.book.Book;
import org.springframework.scheduling.annotation.Async;

public interface CustomizedBookRepository {
    @Async
    void asyncSave(Book book);
}