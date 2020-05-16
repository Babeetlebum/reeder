import { createAction, props } from '@ngrx/store';

import { Book } from '@store/models';

export const getBooks = createAction('[Choose Component] Get Books List');
export const readBook = createAction('[Choose Component] Read book', props<{ bookId: number }>());

export const gutendexServiceGetBooks = createAction('[Gutendex Service] Get Books List');
export const gutendexServiceGetBooksSuccess = createAction(
  '[Gutendex Service] Get Books List - Success',
  props<{ bookList: Book[] }>(),
);
export const gutendexServiceGetBooksFailure = createAction(
  '[Gutendex Service] Get Books List - Failure',
  props<{ error: Error }>(),
);
