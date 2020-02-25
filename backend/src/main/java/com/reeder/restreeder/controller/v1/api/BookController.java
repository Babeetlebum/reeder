package com.reeder.restreeder.controller.v1.api;

import com.reeder.restreeder.dto.book.mapper.BookMapper;
import com.reeder.restreeder.dto.book.model.BookAddDto;
import com.reeder.restreeder.dto.book.model.BookDto;
import com.reeder.restreeder.exception.exceptions.BookNotFoundException;
import com.reeder.restreeder.model.book.Book;
import com.reeder.restreeder.repository.book.BookRepository;
import com.reeder.restreeder.service.BookService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@Controller
@RequestMapping(path="/api/v1/book")
public class BookController {

    private final BookRepository bookRepository;
    private final BookService bookService;
    private final BookMapper bookMapper;

    public BookController(BookRepository bookRepository, BookService bookService, BookMapper bookMapper) {
        this.bookRepository = bookRepository;
        this.bookService = bookService;
        this.bookMapper = bookMapper;
    }

    @GetMapping("/{bookId}")
    public @ResponseBody
    BookDto getWholeBooks(@PathVariable("bookId") Integer bookId) throws BookNotFoundException {
        Optional<Book> foundBook = bookRepository.findById(bookId);
        return foundBook
                .map(bookMapper::toDto)
                .orElseThrow(() -> new BookNotFoundException(bookId));
    }

    @PostMapping("/add")
    public @ResponseBody
    BookDto addNewBook(@Valid @RequestBody BookAddDto bookAddDto) throws Exception {
        Book book = bookService.getBook(bookAddDto.getBookId());
        bookRepository.save(book);
        return bookMapper.toDto(book);
    }

}
