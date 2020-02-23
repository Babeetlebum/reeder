package com.reeder.restreeder.repository.book;

import org.springframework.data.repository.CrudRepository;

import com.reeder.restreeder.model.book.Paragraph;

public interface ParagraphRepository extends CrudRepository<Paragraph, Integer> {
    Paragraph findByDelta(Integer delta);
}
