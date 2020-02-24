package com.reeder.restreeder.dto.book.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
public class BookDto {
    private String title;
    private List<ParagraphDto> paragraphs;
}
