package com.reeder.restreeder.service.book.gutenberg;

import com.reeder.restreeder.exception.exceptions.BookParsingException;
import com.reeder.restreeder.model.book.Book;
import com.reeder.restreeder.model.book.Paragraph;
import com.reeder.restreeder.service.book.BookParser;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.StringReader;
import java.util.ArrayList;

@Service
public class GutenbergBookParser implements BookParser {

    @Override
    public Book parseBook(Integer bookId, String bookTitle, String bookString) throws Exception {
        Book book = new Book()
                .setTitle(bookTitle);
        book.setExternalId(bookId);

        StringReader streamReader = null;
        BufferedReader reader = null;

        // initialize the paragraphs array with a large capacity to save CPU cycles
        final ArrayList<Paragraph>paragraphs = new ArrayList<>(1000);

        try {
            String line;
            streamReader = new StringReader(bookString);
            reader = new BufferedReader(streamReader);


            while ((line = reader.readLine()) != null) {
                Paragraph paragraph = Paragraph.builder()
                        .content(line)
                        .delta(paragraphs.size() + 1)
                        .book(book)
                        .build();
                paragraphs.add(paragraph);
            }
        }
        catch (Exception e) {
            throw new BookParsingException(bookId, e.getMessage());
        }
        finally {
            if (streamReader != null) {
                streamReader.close();
            }
            if (reader != null) {
                reader.close();
            }
        }
        paragraphs.trimToSize();
        book.setParagraphs(paragraphs);
        return book;
    }

}
