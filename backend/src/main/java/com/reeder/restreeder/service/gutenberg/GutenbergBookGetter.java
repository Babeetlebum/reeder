package com.reeder.restreeder.service.gutenberg;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.reeder.restreeder.dto.gutenberg.GutenbergBookDto;
import com.reeder.restreeder.dto.gutenberg.GutenbergErrorDto;
import com.reeder.restreeder.exception.GutenbergBookNotFoundException;
import com.reeder.restreeder.service.BookGetter;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Objects;

@Service
public class GutenbergBookGetter implements BookGetter {
    private final OkHttpClient client = new OkHttpClient();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String getBook(Integer bookId) throws IOException {
        Request request = new Request.Builder()
            .url(String.format("https://gutenberg.justamouse.com/texts/%s/body", bookId))
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

}
