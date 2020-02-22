package com.reeder.restreeder.model.book;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GenerationType;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

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
public class Paragraph {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name="chapter_id")
    private Chapter chapter;

    private Integer delta;

    @Column(columnDefinition = "text")
    private String content;

}
