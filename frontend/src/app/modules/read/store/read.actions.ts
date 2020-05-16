import { createAction, props } from '@ngrx/store';

import { Book } from '@store/models';

export const getBooks = createAction('[Read Component] Get Books List');

export const reederServiceGetBooks = createAction('[Reeder Service] Get Books List');
export const reederServiceGetBooksSuccess = createAction(
  '[Reeder Service] Get Books List - Success',
  props<{ bookList: Book[] }>(),
);
export const reederServiceGetBooksFailure = createAction(
  '[Reeder Service] Get Books List - Failure',
  props<{ error: Error }>(),
);
