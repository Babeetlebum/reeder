import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { User } from './auth.entities';

export const AUTH_STATE = 'auth';

export interface AuthState {
  authLoading: boolean;
  user: User;
  errorMessage: string;
}

export const initialState: AuthState = {
  authLoading: false,
  user: null,
  errorMessage: null,
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, authLoading: true })),
  on(AuthActions.logout, (state) => ({ ...state, user: null })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, authLoading: false, user })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, authLoading: false, errorMessage: error.message })),
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
