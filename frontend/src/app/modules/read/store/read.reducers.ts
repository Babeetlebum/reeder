import { Action, createReducer, on } from '@ngrx/store';

import * as ReadActions from './read.actions';
import { BookContent } from './read.entities';

export const READ_STATE = 'read';

export interface State {
  bookContentLoading: boolean;
  bookContent: BookContent;
  errorMessage: string;
}

export const initialState: State = {
  bookContentLoading: false,
  bookContent: null,
  errorMessage: null,
};

const readReducer = createReducer(
  initialState,
  on(ReadActions.getBook, (state) => ({ ...state, bookContentLoading: true })),
  on(ReadActions.reederServiceGetBook, (state) => ({ ...state })),
  on(ReadActions.reederServiceGetBookSuccess, (state, { bookContent }) => ({
    ...state,
    bookContentLoading: false,
    bookContent,
  })),
  on(ReadActions.reederServiceGetBookFailure, (state, { error }) => ({
    ...state,
    bookContentLoading: false,
    errorMessage: error.message,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return readReducer(state, action);
}
