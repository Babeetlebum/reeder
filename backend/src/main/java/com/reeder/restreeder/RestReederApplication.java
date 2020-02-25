package com.reeder.restreeder;

import com.reeder.restreeder.model.user.User;
import com.reeder.restreeder.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RestReederApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestReederApplication.class, args);
	}

	// TODO getBook only Chapters
	// TODO get list books
	// TODO add book save async, returns chapters (3min for add book)
	// TODO add properties to user (password, date created)
	// TODO add books to users
	// TODO migrate objects to immutables (Lombok Builder)
	//
	@Bean
	    CommandLineRunner init(
			@Autowired UserRepository userRepository
		) {
	        return args -> {
	            // Create a user
	            User user = userRepository.findByEmail("alfred.kwak@gmail.com");
	            if (user == null) {
	                user = new User()
                        .setEmail("alfred.kwak@gmail.com")
                        .setName("Alfred Kwak");
	                userRepository.save(user);
	            }

				// Create a book
//				Book book = bookRepository.findByTitle("My book");
//				if (book == null) {
//					Paragraph paragraph1 = new Paragraph()
//							.setContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
//					Paragraph paragraph2 = new Paragraph()
//							.setContent("Paragraph 2");
//					Paragraph paragraph3 = new Paragraph()
//							.setContent("Paragraph 3");
//					book = new Book()
//							.setTitle("My book")
//							.setExternalId("external-id")
//							.addParagraph(paragraph1)
//							.addParagraph(paragraph2)
//							.addParagraph(paragraph3);
//					bookRepository.save(book);
//				}

//				System.out.println("GutenbergBook");
//				try {
//					Book gutenbergBook = bookService.getBook(37106);
//					System.out.println("GutenbergBook");
//					bookRepository.save(gutenbergBook);
//				} catch(IOException e) {
//					System.out.println("CommandLineRunner - IOException");
//					System.out.println(e.getMessage());
//				} catch(Exception e) {
//					System.out.println("CommandLineRunner - Exception");
//					System.out.println(e.getMessage());
//				}
	    };
	}

}
