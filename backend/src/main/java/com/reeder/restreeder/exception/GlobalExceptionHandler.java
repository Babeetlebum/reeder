package com.reeder.restreeder.exception;

import com.reeder.restreeder.exception.exceptions.BookNotFoundException;
import com.reeder.restreeder.exception.exceptions.BookParsingException;
import com.reeder.restreeder.exception.exceptions.GutenbergBookNotFoundException;
import com.reeder.restreeder.exception.exceptions.UserNotFoundException;
import org.jetbrains.annotations.NotNull;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    // 404
    @ExceptionHandler({BookNotFoundException.class, UserNotFoundException.class, GutenbergBookNotFoundException.class})
    public ResponseEntity<ErrorResponse> handleRecordNotFound(Exception exception, WebRequest request) {
        final ErrorResponse error = this.getResponseError(HttpStatus.NOT_FOUND,"Record not found", exception, request);
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(error);
    }

    // 500
    @ExceptionHandler({BookParsingException.class})
    public ResponseEntity<ErrorResponse> handleInternalExceptions(Exception exception, WebRequest request) {
        final ErrorResponse error = this.getResponseError(HttpStatus.INTERNAL_SERVER_ERROR,"Internal server error", exception, request);
        return ResponseEntity
                .status(error.getHttpStatus())
                .body(error);
    }

    // 400
    @NotNull
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            @NotNull MethodArgumentNotValidException exception,
            @NotNull HttpHeaders headers,
            @NotNull HttpStatus status,
            @NotNull WebRequest request
    ) {
        // get the error list from the exception
        List<String> errors = exception.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.toList());

        // send the error list to the response and ignore the exception message which reveal internal models
        ErrorResponse error = this.getResponseError(status, "Arguments are invalid", request, errors);

        return ResponseEntity
                .status(error.getHttpStatus())
                .body(error);

    }

    ErrorResponse getResponseError(HttpStatus status, String error, Exception exception, WebRequest request, List<String> additionalMessages) {
        // merge exception message and additional messages into a single list of messages
        List<String> messages = this.mergeMessages(exception.getLocalizedMessage(), additionalMessages);

        return ErrorResponse.builder()
                .error(error)
                .messages(messages)
                .timestamp(LocalDateTime.now())
                .path(request.getDescription((false)))
                .httpStatus(status)
                .build();
    }

    // method overload when no additional messages are required
    ErrorResponse getResponseError(HttpStatus status, String error, Exception exception, WebRequest request) {
        return getResponseError(status, error, exception, request, Collections.emptyList());
    }

    // method overload when the exception message should not be added to the response
    ErrorResponse getResponseError(HttpStatus status, String error, WebRequest request, List<String> additionalMessages) {
        return getResponseError(status, error, new Exception(), request, additionalMessages);
    }

    // merge exception message and additional messages into a single list
    List<String> mergeMessages(String exceptionMessage, List<String> additionalMessages) {
        return Stream.concat(Stream.of(exceptionMessage), additionalMessages.stream())
                .filter(message -> !StringUtils.isEmpty(message))
                .collect(Collectors.toList());
    }
}
