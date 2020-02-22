package com.reeder.restreeder.model.book;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GenerationType;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.HashSet;
import java.util.Set;

import com.reeder.restreeder.model.book.Book;
import com.reeder.restreeder.model.book.Paragraph;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
public class Chapter {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name="book_id")
    private Book book;

    private String title;
    private Integer delta;

    @OneToMany(mappedBy="chapter", fetch = FetchType.EAGER)
    private Set<Paragraph> paragraphs = new HashSet<>();

    public Chapter addParagraph(Paragraph paragraph) {
		this.paragraphs.add(paragraph);
		paragraph.setChapter(this);

        return this;
	}
}
