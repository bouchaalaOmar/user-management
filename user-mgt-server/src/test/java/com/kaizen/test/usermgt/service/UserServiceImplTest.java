package com.kaizen.test.usermgt.service;

import com.kaizen.test.usermgt.model.Phone;
import com.kaizen.test.usermgt.model.User;
import com.kaizen.test.usermgt.repository.UserRepository;
import com.kaizen.test.usermgt.service.impl.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;
    private UserService underTest;

    @BeforeEach
    void setUp() {
        underTest = new UserServiceImpl(userRepository);
    }

    @Test
    void canGetAllUsers() {
        //when
        underTest.findAll();

        //then
        verify(userRepository).findAll();
    }

    @Test
    void canAddUser() {

        //given
        User user = new User();
        String email = "bouchaala@gmail.com";
        user.setFirstName("Omar");
        user.setLastName("Bouchaala");
        user.setEmail(email);

        Phone phone = new Phone();
        phone.setNum("(+216)27051311");

        //when
        underTest.save(user);

        //then
        ArgumentCaptor<User> userArgumentCaptor = ArgumentCaptor.forClass(User.class);

        verify(userRepository).save(userArgumentCaptor.capture());

        User capturedUser = userArgumentCaptor.getValue();

        assertThat(capturedUser).isEqualTo(user);

    }

    @Test
    void willThrowWhenEmailIsTaken() {

        //given
        User user = new User();
        String email = "bouchaalac1@gmail.com";
        user.setFirstName("Omar");
        user.setLastName("Bouchaala");
        user.setEmail(email);

        Phone phone = new Phone();
        phone.setNum("(+216)27051311");

        given(userRepository.findUserByEmail(email))
                .willReturn(Optional.of(user));
        //when
        //then
        assertThatThrownBy(() -> underTest.save(user))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("email already taken");

        verify(userRepository, never()).save(any());
    }

}