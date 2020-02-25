package com.reeder.restreeder.exception;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;
import lombok.Singular;
import lombok.ToString;
import org.springframework.http.HttpStatus;

import javax.xml.bind.annotation.XmlRootElement;
import java.time.LocalDateTime;
import java.util.List;

@XmlRootElement(name = "error")
@Data
@Builder
@ToString
public class ErrorResponse {

    private LocalDateTime timestamp;
    private Integer status;
    @JsonIgnore private HttpStatus httpStatus;
    private String error;
    @Singular private List<String> messages;
    private String path;

    @SuppressWarnings("unused")
    public static class ErrorResponseBuilder {
        // override the lombok builder method to serialize the http status as integer
        public ErrorResponseBuilder httpStatus(HttpStatus httpStatus) {
            this.httpStatus = httpStatus;
            this.status = httpStatus.value();
            return this;
        }
    }
}