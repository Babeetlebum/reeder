package com.reeder.restreeder.controller.v1.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;

import com.reeder.restreeder.repository.user.UserRepository;
import com.reeder.restreeder.model.user.User;

@Controller
@RequestMapping(path="/api/v1/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/add")
    public @ResponseBody String addNewUser(
        @RequestParam String name,
        @RequestParam String email
    ) {
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        userRepository.save(user);

        return String.format("Added user %s with email %s", user.getName(), user.getEmail());
    }

}
