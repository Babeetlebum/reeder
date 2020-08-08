package com.reeder.restreeder.service.book;

import java.io.IOException;

public interface BookGetter {

    String getBookBody(Integer id) throws IOException;
    String getBookMetadata(Integer id) throws IOException;

}
