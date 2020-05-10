import { Injectable } from '@angular/core';

import { Author, Book } from '@store/models';
import { GutendexItemDto } from './gutendex.dto';

@Injectable({ providedIn: 'root' })
export class GutendexMapper {
  mapFromApi = (gutendexItem: GutendexItemDto): Book => {
    const authors = gutendexItem.authors.map(
      (authorConfig) =>
        new Author({
          name: authorConfig.name,
          birthYear: new Date(authorConfig.birth_year),
          deathYear: new Date(authorConfig.death_year),
        }),
    );

    return new Book({
      id: gutendexItem.id,
      title: gutendexItem.title,
      authors,
      subjects: gutendexItem.subjects,
      bookshelves: gutendexItem.bookshelves,
      languages: gutendexItem.languages,
      downloadCount: gutendexItem.download_count,
      coverUrl: gutendexItem.formats['image/jpeg'],
    });
  };
}
