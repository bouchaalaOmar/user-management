package com.kaizen.test.usermgt.controller;

import com.kaizen.test.usermgt.model.User;
import com.kaizen.test.usermgt.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    /**
     *
     * @return
     */
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    /**
     *
     * @param user
     * @return
     */
    @PostMapping
    public User addNewUser(@RequestBody User user){
        return userService.save(user);
    }
}
