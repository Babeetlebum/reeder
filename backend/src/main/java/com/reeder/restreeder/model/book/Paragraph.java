package com.reeder.restreeder.model.book;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Accessors(chain = true)
@Table(indexes = {@Index(columnList = "delta")})
public class Paragraph {

    @Id
    // use pooled id generation strategy to implement batch inserts
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "post_sequence"
    )
    @SequenceGenerator(
            name = "post_sequence",
            sequenceName = "post_sequence",
            allocationSize = 100
    )
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Book book;

    private Integer delta;

    @Column(columnDefinition = "text")
    private String content;

}
