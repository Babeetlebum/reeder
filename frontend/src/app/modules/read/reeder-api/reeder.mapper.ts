import { Injectable } from '@angular/core';

import { BookContent, Paragraph } from '@read/store/read.entities';
import { ReederItemDto, ReederItemParagraphDto } from './reeder.dto';

export interface ReederContent {
  bookContent: BookContent;
  paragraphs: Paragraph[];
}

@Injectable({ providedIn: 'root' })
export class ReederMapper {
  mapFromApi = (reederItem: ReederItemDto): ReederContent => {
    const { paragraphs, ...bookContent } = reederItem;
    return {
      bookContent,
      paragraphs: Array.isArray(paragraphs)
        ? paragraphs.map((paragraph) => mapParagraph(bookContent.id, paragraph))
        : [],
    };
  };
}

function mapParagraph(bookId: number, paragraphDto: ReederItemParagraphDto): Paragraph {
  return {
    ...paragraphDto,
    bookId,
  };
}
