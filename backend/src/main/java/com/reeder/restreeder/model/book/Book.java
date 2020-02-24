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

    private String externalId;

    private String title;

    @OneToMany(mappedBy="book", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private Set<Paragraph> paragraphs = new HashSet<>();

    public Book addParagraph(Paragraph paragraph) {
        paragraph.setDelta(this.paragraphs.size() + 1);
        paragraph.setBook(this);
        this.paragraphs.add(paragraph);

        return this;
	}
}
