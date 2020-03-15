package com.reeder.restreeder.repository.book;

import com.reeder.restreeder.model.book.Book;
import org.springframework.context.annotation.Lazy;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Component
public class BookRepositoryImpl implements CustomizedBookRepository {

    final BookRepository bookRepository;

    public BookRepositoryImpl(@Lazy BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Async
    public void asyncSave(Book book) {
        System.out.println("asyncSave BEGIN " + book.getParagraphs().size());
//        CompletableFuture.supplyAsync(() -> bookRepository.save(book));
//        bookRepository.save(book);
        try {
            Thread.sleep(5000);
        } catch (Exception e) {
            System.out.println("wtf sleep failed");
        }
        System.out.println("Execute method asynchronously. "
                + Thread.currentThread().getName());
        System.out.println("asyncSave END " + book.getParagraphs().size());
    }
}
