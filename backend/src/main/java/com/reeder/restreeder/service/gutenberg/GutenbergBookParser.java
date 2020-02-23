package com.reeder.restreeder.service.gutenberg;

import com.reeder.restreeder.model.book.Book;
import com.reeder.restreeder.service.BookParser;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;

@Service
public class GutenbergBookParser implements BookParser {

    @Override
    public Book parseBook(String bookString) throws Exception {
        Document doc = Jsoup.parse(bookString);
        System.out.println("parseBook");

        Book book = this.initBookData(doc);

        Element chapterElement = doc.select("p #I").first();
        System.out.println(chapterElement.text());

        Element chapterTitleElement = chapterElement.nextElementSibling();
        if (chapterTitleElement == null) {
            throw new Exception("chapter title not found");
        }
        System.out.println(chapterTitleElement.text());

        Element firstParagraph = chapterTitleElement.nextElementSibling();
        if (firstParagraph == null) {
            throw new Exception("first paragraph not found");
        }
        System.out.println(firstParagraph.text());

        return book;
    }

    private Book initBookData(Document doc) {
        return new Book()
            .setTitle(doc.select("h1").text());
    }

}
