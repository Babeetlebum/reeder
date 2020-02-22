package com.reeder.restreeder.controller.v1.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;

import com.reeder.restreeder.repository.book.BookRepository;
import com.reeder.restreeder.model.book.Book;

@Controller
@RequestMapping(path="/api/v1/book")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/all")
    public @ResponseBody Iterable<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @PostMapping("/add")
    public @ResponseBody String addNewBook(
        @RequestParam String id
    ) {
        Book book = new Book();
        bookRepository.save(book);

        return String.format("Added book with name %s", book.getTitle());
    }

}
