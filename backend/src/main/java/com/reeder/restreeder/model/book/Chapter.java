package com.reeder.restreeder.model.book;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

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
