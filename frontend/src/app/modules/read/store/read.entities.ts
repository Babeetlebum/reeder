export interface BookContent {
  id: number;
  externalId: number;
  title: string;
  paragraphs: Paragraph[];
}

export interface Paragraph {
  id: number;
  delta: number;
  content: string;
}
