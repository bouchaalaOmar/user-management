package com.kaizen.test.usermgt;

import com.kaizen.test.usermgt.model.Phone;
import com.kaizen.test.usermgt.model.User;
import com.kaizen.test.usermgt.repository.PhoneRepository;
import com.kaizen.test.usermgt.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
public class UsermgtApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsermgtApplication.class, args);
	}


	@Bean
	public CommandLineRunner commandLineRunner(UserRepository userRepository,
										 PhoneRepository phoneRepository) {
		return args -> {

			// create a new user
			User user = new User();
			user.setFirstName("omar");
			user.setLastName("bouchaala");
			user.setEmail("omar@gmail.com");

			// save the user
			userRepository.save(user);

			// create and save new phones
			phoneRepository.save(new Phone("27051311", user));
			phoneRepository.save(new Phone("2001411", user));
			phoneRepository.save(new Phone("25175311", user));
		};
	}

}
