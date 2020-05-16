import { createAction, props } from '@ngrx/store';

import { Book } from '@store/models';

export const getBooks = createAction('[Read Component] Get Books List');

export const gutendexServiceGetBooks = createAction('[Gutendex Service] Get Books List');
export const gutendexServiceGetBooksSuccess = createAction(
  '[Gutendex Service] Get Books List - Success',
  props<{ bookList: Book[] }>(),
);
export const gutendexServiceGetBooksFailure = createAction(
  '[Gutendex Service] Get Books List - Failure',
  props<{ error: Error }>(),
);
