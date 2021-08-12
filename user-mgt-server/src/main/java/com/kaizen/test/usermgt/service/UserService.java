package com.kaizen.test.usermgt.service;

import com.kaizen.test.usermgt.model.User;

import java.util.List;

public interface UserService {

    List<User> findAll();

    User save(User user);
}
