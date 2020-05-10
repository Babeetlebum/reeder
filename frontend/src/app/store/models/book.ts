import { Author } from '@store/models/author';

export interface IBook {
  id: number;
  title: string;
  authors: Author[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  downloadCount: number;
  coverUrl: string;
}

export class Book implements IBook {
  id: number;
  title: string;
  authors: Author[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  downloadCount: number;
  coverUrl: string;

  public constructor(bookConfig: IBook) {
    this.id = bookConfig.id;
    this.title = bookConfig.title;
    this.authors = bookConfig.authors;
    this.subjects = bookConfig.subjects;
    this.bookshelves = bookConfig.bookshelves;
    this.languages = bookConfig.languages;
    this.downloadCount = bookConfig.downloadCount;
    this.coverUrl = bookConfig.coverUrl;
  }
}
