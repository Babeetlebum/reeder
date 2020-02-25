package com.reeder.restreeder.controller.v1.api;

import com.reeder.restreeder.dto.user.mapper.UserMapper;
import com.reeder.restreeder.dto.user.model.UserAddDto;
import com.reeder.restreeder.dto.user.model.UserDto;
import com.reeder.restreeder.exception.exceptions.UserNotFoundException;
import com.reeder.restreeder.model.user.User;
import com.reeder.restreeder.repository.user.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Controller
@RequestMapping(path="/api/v1/user")
public class UserController {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserController(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @GetMapping("/{userId}")
    public @ResponseBody
    UserDto getAllUsers(@PathVariable("userId") Integer userId) {
        return userRepository.findById(userId)
                .map(userMapper::toDto)
                .orElseThrow(() -> new UserNotFoundException(userId));
    }

    @GetMapping("/all")
    public @ResponseBody
    List<UserDto> getAllUsers() {
        return StreamSupport.stream(userRepository.findAll().spliterator(), false)
                .map(userMapper::toDto)
                .collect(Collectors.toList());
    }

    @PostMapping("/add")
    public @ResponseBody
    UserDto addNewUser(@RequestBody UserAddDto userAddDto) {
        User foundUser = userRepository.findByEmailOrName(userAddDto.getEmail(), userAddDto.getName());
        if (foundUser == null) {
            User user = userMapper.fromAddDto(userAddDto);
            userRepository.save(user);

            return userMapper.toDto(user);
        }
        return userMapper.toDto(foundUser);
    }

}
