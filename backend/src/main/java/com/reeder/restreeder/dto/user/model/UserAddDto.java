package com.reeder.restreeder.dto.user.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserAddDto {

    @NotEmpty(message = "Please provide a name")
    private String name;
    @NotEmpty(message = "Please provide an email")
    private String email;
}
