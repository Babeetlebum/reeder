package com.reeder.restreeder.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(BookNotFoundException.class)
    public void handleNotFound(HttpServletResponse response) throws IOException {
        // 204
        response.sendError(HttpStatus.NO_CONTENT.value());
    }

    @ExceptionHandler({BookParsingException.class, GutenbergBookNotFoundException.class})
    public void handleInternal(HttpServletResponse response) throws IOException {
        // 500
        response.sendError(HttpStatus.INTERNAL_SERVER_ERROR.value());
    }
}
