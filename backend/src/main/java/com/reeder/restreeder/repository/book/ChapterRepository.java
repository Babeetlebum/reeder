package com.reeder.restreeder.repository.book;

import org.springframework.data.repository.CrudRepository;

import com.reeder.restreeder.model.book.Chapter;

public interface ChapterRepository extends CrudRepository<Chapter, Integer> {
    Chapter findByDelta(Integer delta);
}
