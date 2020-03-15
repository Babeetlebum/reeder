import { createFeatureSelector, createSelector, select } from '@ngrx/store';

import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AUTH_STATE, State } from '@store/auth/auth.reducers';

export const selectAuth = createFeatureSelector<State>(AUTH_STATE);

export const selectUser = createSelector(selectAuth, (state) => state.user);
export const selectAuthLoading = createSelector(selectAuth, (state) => state.authLoading);
export const selectErrorMessage = createSelector(selectAuth, (state) => state.errorMessage);

export const selectConnectedUserName = createSelector(selectUser, (user): string =>
  user == null ? '' : user.username,
);
export const selectIsUserConnected = createSelector(selectUser, (user): boolean => user != null);
export const selectHasErrorMessage = pipe(
  select(selectErrorMessage),
  filter((errorMessage) => errorMessage != null && errorMessage !== ''),
);
