package com.reeder.restreeder.dto.user.mapper;

import com.reeder.restreeder.dto.user.model.UserAddDto;
import com.reeder.restreeder.dto.user.model.UserDto;
import com.reeder.restreeder.model.user.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public UserDto toDto(User user) {
        return new UserDto()
                .setName(user.getName())
                .setEmail(user.getEmail());
    }

    public User fromAddDto(UserAddDto userAddDto) {
        return new User()
                .setName(userAddDto.getName())
                .setEmail(userAddDto.getEmail());
    }
}
