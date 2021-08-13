package com.kaizen.test.usermgt.repository;

import com.kaizen.test.usermgt.model.Phone;
import com.kaizen.test.usermgt.model.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Arrays;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository underTest;

    @AfterEach
    void tearDown() {
        underTest.deleteAll();
    }

    @Test
    void itShoudCheckWhenUserEmailExist() {

        //given
        User user = new User();
        String email = "bouchaala@gmail.com";
        user.setFirstName("Omar");
        user.setLastName("Bouchaala");
        user.setEmail(email);

        Phone phone = new Phone();
        phone.setNum("(+216)27051311");

        user.setPhones(Arrays.asList(phone));

        underTest.save(user);

        //when
        Optional<User> expected = underTest.findUserByEmail(email);

        //then
        assertThat(expected).isPresent();
    }

    @Test
    void itShoudCheckWhenUserEmailNotExist() {

        //given
        String email = "bouchaala@gmail.com";

        //when
        Optional<User> expected = underTest.findUserByEmail(email);

        //then
        assertThat(expected).isEmpty();
    }
}