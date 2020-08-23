package com.reeder.restreeder;

import com.reeder.restreeder.model.user.User;
import com.reeder.restreeder.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class RestReederApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestReederApplication.class, args);
	}

	// TODO add book save async, returns chapters (3min for add book)
	// TODO add properties to user (date created)
	// TODO add books to users
	//
	@Bean
	    CommandLineRunner init(
			@Autowired UserRepository userRepository
		) {
	        return args -> {
	            // Create a user
	            User user = userRepository.findByEmail("joe@joe.com");
	            if (user == null) {
	                user = new User()
                        .setEmail("joe@joe.com")
                        .setName("joe")
	                	.setPassword("7SNjFrrqS6tTxRjxiKe3jzy4GRLcAAtJ");
	                userRepository.save(user);
	            }
	    };
	}

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
