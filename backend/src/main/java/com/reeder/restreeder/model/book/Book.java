package com.reeder.restreeder.model.book;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ToString
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
