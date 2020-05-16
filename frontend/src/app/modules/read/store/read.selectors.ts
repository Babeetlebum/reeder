import { createFeatureSelector, createSelector, select } from '@ngrx/store';

import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

import { READ_STATE, State } from '@read/store/read.reducers';

export const selectRead = createFeatureSelector<State>(READ_STATE);

export const selectBookList = createSelector(selectRead, (state) => state.bookList);
export const selectBookListLoading = createSelector(selectRead, (state) => state.bookListLoading);
export const selectErrorMessage = createSelector(selectRead, (state) => state.errorMessage);

export const selectHasBooks = createSelector(
  selectBookList,
  (bookList) => Array.isArray(bookList) && bookList.length > 0,
);
export const selectHasErrorMessage = pipe(
  select(selectErrorMessage),
  filter((errorMessage) => errorMessage != null && errorMessage !== ''),
);
