package com.reeder.restreeder.model.book;

import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Accessors(chain = true)
@ToString
public class Book {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private Integer externalId;

    private String title;

    @OneToMany(mappedBy="book", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private List<Paragraph> paragraphs;
}
