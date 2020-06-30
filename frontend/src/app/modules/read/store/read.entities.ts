export interface BookContent {
  id: number;
  externalId: number;
  title: string;
}

export interface Paragraph {
  id: number;
  delta: number;
  content: string;
  bookId: number;
}
