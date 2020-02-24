package com.reeder.restreeder.exception;

import com.reeder.restreeder.dto.gutenberg.GutenbergErrorDto;

public class GutenbergBookNotFoundException extends RuntimeException {
    public GutenbergBookNotFoundException(Integer bookId, GutenbergErrorDto error) {
        super(String.format("Encountered error upon getting book '%d' from Gutenberg API : '%s'", bookId, error.getMessage()));
    }
}
