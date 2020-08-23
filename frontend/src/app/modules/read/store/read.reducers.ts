import { Action, createReducer, on } from '@ngrx/store';

import * as ReadActions from './read.actions';
import { BookContent } from './read.entities';

export const READ_STATE = 'read';

export interface ReadState {
  bookContentLoading: boolean;
  bookContent: BookContent;
  errorMessage: string;
}

export const initialState: ReadState = {
  bookContentLoading: false,
  bookContent: null,
  errorMessage: null,
};

const reducer = createReducer(
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
    bookContent: null,
  })),
);

export function readReducer(state: ReadState | undefined, action: Action) {
  return reducer(state, action);
}
