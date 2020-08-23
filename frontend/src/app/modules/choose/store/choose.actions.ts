import { createAction, props } from '@ngrx/store';

import { Book } from '@store/models';

export const getBooks = createAction('[Choose Component] Get Books List');
export const searchBooks = createAction('[Choose Component] Search Books', props<{ search: string }>());
export const readBook = createAction('[Choose Component] Read book', props<{ bookId: number }>());

// get popular books on init
export const gutendexServiceGetBooks = createAction('[Gutendex Service] Get Books List');
export const gutendexServiceGetBooksSuccess = createAction(
  '[Gutendex Service] Get Books List - Success',
  props<{ bookList: Book[] }>(),
);
export const gutendexServiceGetBooksFailure = createAction(
  '[Gutendex Service] Get Books List - Failure',
  props<{ error: Error }>(),
);

// search for books
export const gutendexServiceSearchBooks = createAction('[Gutendex Service] Search Books', props<{ search: string }>());
export const gutendexServiceSearchBooksSuccess = createAction(
  '[Gutendex Service] Search Books - Success',
  props<{ bookList: Book[] }>(),
);
export const gutendexServiceSearchBooksFailure = createAction(
  '[Gutendex Service] Search Books - Failure',
  props<{ error: Error }>(),
);
