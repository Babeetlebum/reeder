package com.reeder.restreeder.controller.v1.api;

import com.reeder.restreeder.dto.book.mapper.BookMapper;
import com.reeder.restreeder.dto.book.model.BookAddDto;
import com.reeder.restreeder.dto.book.model.BookDto;
import com.reeder.restreeder.exception.exceptions.BookNotFoundException;
import com.reeder.restreeder.model.book.Book;
import com.reeder.restreeder.model.book.Paragraph;
import com.reeder.restreeder.repository.book.BookRepository;
import com.reeder.restreeder.repository.book.ParagraphRepository;
import com.reeder.restreeder.service.book.BookService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(path="/api/v1/book")
public class BookController {

    private final BookRepository bookRepository;
    private final ParagraphRepository paragraphRepository;
    private final BookService bookService;
    private final BookMapper bookMapper;

    public BookController(BookRepository bookRepository, ParagraphRepository paragraphRepository, BookService bookService, BookMapper bookMapper) {
        this.bookRepository = bookRepository;
        this.paragraphRepository = paragraphRepository;
        this.bookService = bookService;
        this.bookMapper = bookMapper;
    }

    @GetMapping("/{bookId}")
    public @ResponseBody
    BookDto getBook(@PathVariable("bookId") Integer bookId) throws BookNotFoundException {
        return retrieveBookWithParagraphs(bookId, 0, 100);
    }

    @GetMapping("/{bookId}/{paragraphMin}/{paragraphMax}")
    public @ResponseBody
    BookDto getBookWithChapters(
            @PathVariable("bookId") Integer bookId,
            @PathVariable("paragraphMin") Integer paragraphMin,
            @PathVariable("paragraphMax") Integer paragraphMax
    ) throws BookNotFoundException {
        return retrieveBookWithParagraphs(bookId, paragraphMin, paragraphMax);
    }

    @PostMapping("/add")
    public @ResponseBody
    BookDto addNewBook(@Valid @RequestBody BookAddDto bookAddDto) throws Exception {
        Book book = bookService.getBook(bookAddDto.getBookId());
        final Book savedBook = bookRepository.save(book);
        return retrieveBookWithParagraphs(savedBook.getId(), 0, 100);
    }

    private BookDto retrieveBookWithParagraphs(Integer bookId, Integer paragraphMin, Integer paragraphMax) {
        Book foundBook = bookRepository.findByExternalId(bookId)
                .orElseThrow(() -> new BookNotFoundException(bookId));

        List<Paragraph> foundParagraphs = paragraphRepository.findByDeltaBetweenOrderByDelta(paragraphMin, paragraphMax)
                .orElse(new ArrayList<>());

        return bookMapper.toDto(
                foundBook.setParagraphs(foundParagraphs)
        );
    }

}
