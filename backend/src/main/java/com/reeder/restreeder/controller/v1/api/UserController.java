package com.reeder.restreeder.controller.v1.api;

import com.reeder.restreeder.model.user.User;
import com.reeder.restreeder.repository.user.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/api/v1/user")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

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
