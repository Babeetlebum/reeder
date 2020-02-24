package com.reeder.restreeder.exception;

public class BookNotFoundException extends RuntimeException {
    public BookNotFoundException(Integer id) {
        super("Book id not found : " + id);
    }
}
