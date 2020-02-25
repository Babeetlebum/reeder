package com.reeder.restreeder.exception;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.springframework.http.HttpStatus;

import javax.xml.bind.annotation.XmlRootElement;
import java.time.LocalDateTime;

@XmlRootElement(name = "error")
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
public class ErrorResponse {

    private LocalDateTime timestamp;
    private Integer status;
    @JsonIgnore
    private HttpStatus httpStatus;
    private String error;
    private String message;
    private String path;

    public ErrorResponse setHttpStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
        this.status = httpStatus.value();
        return this;
    }
}