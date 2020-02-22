package com.reeder.restreeder.repository.book;

import org.springframework.data.repository.CrudRepository;

import com.reeder.restreeder.model.book.Book;

public interface BookRepository extends CrudRepository<Book, Integer> {
    Book findByTitle(String title);
    long deleteByTitle(String title);
}
