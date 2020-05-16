import { Injectable } from '@angular/core';

import { Author, Book } from '@store/models';
import { ReederItemDto } from './reeder.dto';

@Injectable({ providedIn: 'root' })
export class ReederMapper {
  mapFromApi = (reederItem: ReederItemDto): Book => {
    const authors = reederItem.authors.map(
      (authorConfig) =>
        new Author({
          name: authorConfig.name,
          birthYear: new Date(authorConfig.birth_year),
          deathYear: new Date(authorConfig.death_year),
        }),
    );

    return new Book({
      id: reederItem.id,
      title: reederItem.title,
      authors,
      subjects: reederItem.subjects,
      bookshelves: reederItem.bookshelves,
      languages: reederItem.languages,
      downloadCount: reederItem.download_count,
      coverUrl: reederItem.formats['image/jpeg'],
    });
  };
}
