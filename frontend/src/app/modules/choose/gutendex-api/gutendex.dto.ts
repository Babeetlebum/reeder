export interface GutendexResponseDto {
  count: number;
  next: string;
  previous: string;
  results: GutendexItemDto[];
}

export interface GutendexItemDto {
  id: number;
  title: string;
  authors: [
    {
      name: string;
      birth_year: number;
      death_year: number;
    },
  ];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: 'Text';
  formats: {
    'application/zip': string;
    'text/plain; charset=utf-8': string;
    'application/x-mobipocket-ebook': string;
    'image/jpeg': string;
    'application/rdf+xml': string;
    'text/html; charset=utf-8': string;
    'application/epub+zip': string;
  };
  download_count: number;
}
