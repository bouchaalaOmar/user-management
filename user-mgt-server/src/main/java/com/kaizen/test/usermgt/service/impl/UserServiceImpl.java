package com.kaizen.test.usermgt.service.impl;

import com.kaizen.test.usermgt.model.User;
import com.kaizen.test.usermgt.repository.UserRepository;
import com.kaizen.test.usermgt.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Component
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
}

    @Override
    public User save(User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
        if(userOptional.isPresent()){
            throw new IllegalStateException("email already taken");
        }
        return userRepository.save(user);
    }
}
