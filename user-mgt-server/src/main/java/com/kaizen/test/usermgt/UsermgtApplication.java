package com.kaizen.test.usermgt;

import com.kaizen.test.usermgt.model.Phone;
import com.kaizen.test.usermgt.model.User;
import com.kaizen.test.usermgt.repository.PhoneRepository;
import com.kaizen.test.usermgt.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class UsermgtApplication {

    public static void main(String[] args) {
        SpringApplication.run(UsermgtApplication.class, args);
    }


    @Bean
    public CommandLineRunner commandLineRunner(UserRepository userRepository) {
        return args -> {

            // create a new user
            User user = new User();
            user.setFirstName("omar");
            user.setLastName("bouchaala");
            user.setEmail("omar@gmail.com");

            user.addPhone(new Phone("TN", "+21627051311"));
            user.addPhone(new Phone("TN", "+21620014411"));
            user.addPhone(new Phone("TN", "+21625175311"));

            userRepository.save(user);

        };
    }

}
