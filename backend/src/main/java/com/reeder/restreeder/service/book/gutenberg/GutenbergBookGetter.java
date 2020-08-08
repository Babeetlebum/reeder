package com.reeder.restreeder.service.book.gutenberg;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.reeder.restreeder.dto.gutenberg.GutenbergBookDto;
import com.reeder.restreeder.dto.gutenberg.GutenbergBookMetadataDto;
import com.reeder.restreeder.dto.gutenberg.GutenbergErrorDto;
import com.reeder.restreeder.exception.exceptions.GutenbergBookNotFoundException;
import com.reeder.restreeder.service.book.BookGetter;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Objects;

@Service
public class GutenbergBookGetter implements BookGetter {
    private final OkHttpClient client = new OkHttpClient();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${gutenberg.hostname}")
    private String gutenbergHostname;

    @Override
    public String getBookBody(Integer bookId) throws IOException {
        Request request = new Request.Builder()
            .url(String.format("%s/texts/%s/body", gutenbergHostname, bookId))
            .build();

        // synchronous call
        Response response = client.newCall(request).execute();

        if (!response.isSuccessful()) {
            GutenbergErrorDto error = objectMapper.readValue(Objects.requireNonNull(response.body()).string(), GutenbergErrorDto.class);
            throw new GutenbergBookNotFoundException(bookId, error);
        }
        GutenbergBookDto gutenbergBook = objectMapper.readValue(Objects.requireNonNull(response.body()).string(), GutenbergBookDto.class);
        return gutenbergBook.getBody();
    }

    @Override
    public String getBookMetadata(Integer bookId) throws IOException {
        Request request = new Request.Builder()
                .url(String.format("%s/texts/%s", gutenbergHostname, bookId))
                .build();

        // synchronous call
        Response response = client.newCall(request).execute();

        if (!response.isSuccessful()) {
            GutenbergErrorDto error = objectMapper.readValue(Objects.requireNonNull(response.body()).string(), GutenbergErrorDto.class);
            throw new GutenbergBookNotFoundException(bookId, error);
        }
        GutenbergBookMetadataDto gutenbergBookMetadata = objectMapper.readValue(Objects.requireNonNull(response.body()).string(), GutenbergBookMetadataDto.class);
        return gutenbergBookMetadata.getTitle();
    }

}
