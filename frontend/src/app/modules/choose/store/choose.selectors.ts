import { createFeatureSelector, createSelector, select } from '@ngrx/store';

import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

import { CHOOSE_STATE, State } from '@choose/store/choose.reducers';

export const selectChoose = createFeatureSelector<State>(CHOOSE_STATE);

export const selectBookList = createSelector(selectChoose, (state) => state.bookList);
export const selectBookListLoading = createSelector(selectChoose, (state) => state.bookListLoading);
export const selectErrorMessage = createSelector(selectChoose, (state) => state.errorMessage);

export const selectHasBooks = createSelector(
  selectBookList,
  (bookList) => Array.isArray(bookList) && bookList.length > 0,
);
export const selectHasErrorMessage = pipe(
  select(selectErrorMessage),
  filter((errorMessage) => errorMessage != null && errorMessage !== ''),
);
