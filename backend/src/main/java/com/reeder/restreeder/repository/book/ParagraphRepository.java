package com.reeder.restreeder.repository.book;

import com.reeder.restreeder.model.book.Paragraph;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ParagraphRepository extends CrudRepository<Paragraph, Integer> {
    @Query("SELECT p FROM Book b JOIN b.paragraphs p WHERE p.delta BETWEEN :chapterMin AND :chapterMax AND b.externalId = :bookId ORDER BY delta")
    Optional<List<Paragraph>> findByExternalBookIdAndDeltaBetweenOrderByDelta(
            @Param("bookId") Integer bookId,
            @Param("chapterMin") Integer chapterMin,
            @Param("chapterMax") Integer chapterMax
    );
}

