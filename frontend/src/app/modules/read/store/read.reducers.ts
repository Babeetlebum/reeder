import { Action, createReducer, on } from '@ngrx/store';

import * as ReadActions from './read.actions';

import { Book } from '@store/models';

export const READ_STATE = 'read';

export interface State {
  bookListLoading: boolean;
  bookList: Book[];
  errorMessage: string;
}

export const initialState: State = {
  bookListLoading: false,
  bookList: [],
  errorMessage: null,
};

const readReducer = createReducer(
  initialState,
  on(ReadActions.getBooks, (state) => ({ ...state, bookListLoading: true })),
  on(ReadActions.reederServiceGetBooks, (state) => ({ ...state, bookList: [] })),
  on(ReadActions.reederServiceGetBooksSuccess, (state, { bookList }) => ({
    ...state,
    bookListLoading: false,
    bookList,
  })),
  on(ReadActions.reederServiceGetBooksFailure, (state, { error }) => ({
    ...state,
    bookListLoading: false,
    errorMessage: error.message,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return readReducer(state, action);
}
