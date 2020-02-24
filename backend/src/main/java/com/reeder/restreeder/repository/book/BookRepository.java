package com.reeder.restreeder.repository.book;

import com.reeder.restreeder.model.book.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Integer> {
}
