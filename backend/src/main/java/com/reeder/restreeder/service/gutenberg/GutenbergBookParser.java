package com.reeder.restreeder.service.gutenberg;

import com.reeder.restreeder.exception.exceptions.BookParsingException;
import com.reeder.restreeder.model.book.Book;
import com.reeder.restreeder.model.book.Paragraph;
import com.reeder.restreeder.service.BookParser;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.StringReader;

@Service
public class GutenbergBookParser implements BookParser {

    @Override
    public Book parseBook(Integer bookId, String bookString) throws Exception {
        Book book = new Book()
                .setTitle("Book Title");

        StringReader streamReader = null;
        BufferedReader reader = null;

        try {
            String line;
            streamReader = new StringReader(bookString);
            reader = new BufferedReader(streamReader);
            while ((line = reader.readLine()) != null) {
                book.addParagraph(new Paragraph().setContent(line));
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

        return book;
    }

}
