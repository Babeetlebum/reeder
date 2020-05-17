export type ReederResponseDto = ReederItemDto;

export interface ReederItemDto {
  id: number;
  externalId: number;
  title: string;
  paragraphs: ReederItemParagraphDto[];
}

export interface ReederItemParagraphDto {
  id: number;
  delta: number;
  content: string;
}
