package com.reeder.restreeder.exception;

public class BookParsingException extends RuntimeException {
    public BookParsingException(Integer bookId, String message) {
        super(String.format("Encountered error upon parsing book '%d' : '%s'", bookId, message));
    }
}
