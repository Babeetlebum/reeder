package com.reeder.restreeder.service.gutenberg;

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

    @Override
    public String getBook(Integer id) throws IOException {
        Request request = new Request.Builder()
            .url("https://www.gutenberg.org/files/37106/37106-h/37106-h.htm")
            .build();

        // synchronous call
        Response response = client.newCall(request).execute();

        if (!response.isSuccessful()) {
            // TODO: exception handling
            throw new IOException("Unexpected code " + response);
        }

        return Objects.requireNonNull(response.body()).string();
    }

}
