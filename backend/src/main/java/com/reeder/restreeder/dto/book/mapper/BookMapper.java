package com.reeder.restreeder.dto.book.mapper;

import com.reeder.restreeder.dto.book.model.BookDto;
import com.reeder.restreeder.dto.book.model.ParagraphDto;
import com.reeder.restreeder.model.book.Book;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class BookMapper {

    public BookDto toDto(Book book) {
        return new BookDto()
                .setTitle(book.getTitle())
                .setParagraphs(
                       book
                            .getParagraphs()
                            .stream()
                            .map(paragraph -> new ModelMapper().map(paragraph, ParagraphDto.class))
                            .collect(Collectors.toList())
                );
    }

}
