package com.reeder.restreeder.exception;

import com.reeder.restreeder.exception.exceptions.BookNotFoundException;
import com.reeder.restreeder.exception.exceptions.BookParsingException;
import com.reeder.restreeder.exception.exceptions.GutenbergBookNotFoundException;
import com.reeder.restreeder.exception.exceptions.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({BookNotFoundException.class, UserNotFoundException.class})
    public final ResponseEntity<ErrorResponse> handleUserNotFound(Exception exception, HttpServletRequest request) {
        ErrorResponse error = this.getResponseError(HttpStatus.NO_CONTENT,"Record not found", exception, request);
        return new ResponseEntity<>(error, error.getHttpStatus());
    }

    @ExceptionHandler({BookParsingException.class, GutenbergBookNotFoundException.class})
    public final ResponseEntity<ErrorResponse> handleInternal(Exception exception, HttpServletRequest request) {
        ErrorResponse error = this.getResponseError(HttpStatus.INTERNAL_SERVER_ERROR,"Internal server error", exception, request);
        return new ResponseEntity<>(error, error.getHttpStatus());
    }

    ErrorResponse getResponseError(HttpStatus status, String error, Exception exception, HttpServletRequest request) {
        return new ErrorResponse()
                .setError(error)
                .setMessage(exception.getLocalizedMessage())
                .setTimestamp(LocalDateTime.now())
                .setPath(request.getRequestURI())
                .setHttpStatus(status);
    }

}
