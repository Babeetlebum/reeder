package com.reeder.restreeder.exception.exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Integer userId) {
        super("User id not found : " + userId);
    }
}
