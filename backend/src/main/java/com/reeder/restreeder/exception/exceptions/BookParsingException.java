package com.reeder.restreeder.exception.exceptions;

public class BookParsingException extends RuntimeException {
    public BookParsingException(Integer bookId, String message) {
        super(String.format("Encountered error upon parsing book '%d' : '%s'", bookId, message));
    }
}
