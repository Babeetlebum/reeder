package com.reeder.restreeder.dto.gutenberg;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

import java.util.ArrayList;
import java.util.Map;

@ToString
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(ignoreUnknown = true)
public class GutenbergBookMetadataDto {
    private Integer text_id;
    private String title;

    @JsonProperty("metadata")
    private void unpackNested(Map<String,Object> metadata) {
        this.title = ((ArrayList<String>)metadata.get("title")).get(0);
    }
}