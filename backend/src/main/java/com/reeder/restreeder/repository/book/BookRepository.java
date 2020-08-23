package com.reeder.restreeder.repository.book;

import com.reeder.restreeder.model.book.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface BookRepository extends CrudRepository<Book, Integer> {
    Optional<Book> findByExternalId(Integer bookId);
}
