package com.reeder.restreeder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.reeder.restreeder.repository.user.UserRepository;
import com.reeder.restreeder.repository.book.BookRepository;
import com.reeder.restreeder.repository.book.ChapterRepository;
import com.reeder.restreeder.repository.book.ParagraphRepository;
import com.reeder.restreeder.model.user.User;
import com.reeder.restreeder.model.book.Book;
import com.reeder.restreeder.model.book.Chapter;
import com.reeder.restreeder.model.book.Paragraph;

import java.util.HashSet;
import java.util.Arrays;

@SpringBootApplication
public class RestReederApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestReederApplication.class, args);
	}

	@Bean
	    CommandLineRunner init(
			@Autowired UserRepository userRepository,
	        @Autowired BookRepository bookRepository,
			@Autowired ChapterRepository chapterRepository,
	        @Autowired ParagraphRepository paragraphRepository
		) {
	        return args -> {
	            //Create a user and a book
	            // Role adminRole = roleRepository.findByRole("ADMIN");
	            // if (adminRole == null) {
	            //     adminRole = new Role();
	            //     adminRole.setRole("ADMIN");
	            //     roleRepository.save(adminRole);
	            // }
				//
	            // Role userRole = roleRepository.findByRole("PASSENGER");
	            // if (userRole == null) {
	            //     userRole = new Role();
	            //     userRole.setRole("PASSENGER");
	            //     roleRepository.save(userRole);
	            // }
				// .setRoles(new HashSet<>(Arrays.asList(adminRole)));

	            // Create an Admin user
	            User user = userRepository.findByEmail("alfred.kwak@gmail.com");
	            if (user == null) {
	                user = new User()
                        .setEmail("alfred.kwak@gmail.com")
                        .setName("Alfred Kwak");
	                userRepository.save(user);
	            }

				// Create a paragraph
	            Paragraph paragraph = paragraphRepository.findByDelta(1);
	            if (paragraph == null) {
	                paragraph = new Paragraph()
						.setDelta(1)
						// .setContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
						.setContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
	                paragraphRepository.save(paragraph);
	            }

				// Create a chapter
	            Chapter chapter = chapterRepository.findByDelta(1);
	            if (chapter == null) {
	                chapter = new Chapter()
						.setTitle("Chapitre Premier")
                        .setDelta(1)
						.addParagraph(paragraph);
	                chapterRepository.save(chapter);
					paragraphRepository.save(paragraph);
	            }

				// Create a book
	            Book book = bookRepository.findByTitle("My book");
	            if (book == null) {
	                book = new Book()
						.setTitle("My book")
                        .setGutenbergId("gutenberg-id")
						.addChapter(chapter);
	                bookRepository.save(book);
					chapterRepository.save(chapter);
	            }

	    };
	}

}
