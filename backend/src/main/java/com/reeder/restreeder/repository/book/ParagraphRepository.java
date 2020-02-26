package com.reeder.restreeder.repository.book;

import com.reeder.restreeder.model.book.Paragraph;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ParagraphRepository extends CrudRepository<Paragraph, Integer> {
    Optional<List<Paragraph>> findByDeltaBetweenOrderByDelta(Integer chapterMin, Integer chapterMax);
}

