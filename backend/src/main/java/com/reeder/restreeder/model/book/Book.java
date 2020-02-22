package com.reeder.restreeder.model.book;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GenerationType;
import javax.persistence.GeneratedValue;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Id;

import java.util.HashSet;
import java.util.Set;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import com.reeder.restreeder.model.book.Chapter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
public class Book {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String gutenbergId;

    private String title;

    @OneToMany(mappedBy="book", fetch = FetchType.EAGER)
    private Set<Chapter> chapters = new HashSet<>();

    public Book addChapter(Chapter chapter) {
		this.chapters.add(chapter);
		chapter.setBook(this);

        return this;
	}
}
