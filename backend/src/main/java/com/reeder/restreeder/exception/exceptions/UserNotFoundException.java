package com.reeder.restreeder.exception.exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Integer userId) {
        super("Book id not found : " + userId);
    }
}
