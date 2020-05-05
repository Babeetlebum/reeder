import { Action, createReducer, on } from '@ngrx/store';

import * as ChooseActions from './choose.actions';

import { Book } from '@store/models';

export const CHOOSE_STATE = 'choose';

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

const chooseReducer = createReducer(
  initialState,
  on(ChooseActions.getBooks, (state) => ({ ...state, bookListLoading: true })),
  on(ChooseActions.gutendexServiceGetBooks, (state) => ({ ...state, bookList: [] })),
  on(ChooseActions.gutendexServiceGetBooksSuccess, (state, { bookList }) => ({
    ...state,
    bookListLoading: false,
    bookList,
  })),
  on(ChooseActions.gutendexServiceGetBooksFailure, (state, { error }) => ({
    ...state,
    bookListLoading: false,
    errorMessage: error.message,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return chooseReducer(state, action);
}
