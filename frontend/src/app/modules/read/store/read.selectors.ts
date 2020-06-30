import { createFeatureSelector, createSelector, select } from '@ngrx/store';

import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

import { READ_STATE, ReadState } from '@read/store/read.reducers';

export const selectRead = createFeatureSelector<ReadState>(READ_STATE);

export const selectBookContent = createSelector(selectRead, (state) => state.bookContent);
export const selectBookContentLoading = createSelector(selectRead, (state) => state.bookContentLoading);
export const selectErrorMessage = createSelector(selectRead, (state) => state.errorMessage);

export const selectHasErrorMessage = pipe(
  select(selectErrorMessage),
  filter((errorMessage) => errorMessage != null && errorMessage !== ''),
);
