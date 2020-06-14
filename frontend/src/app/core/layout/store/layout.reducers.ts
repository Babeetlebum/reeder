import { Action, createReducer, on } from '@ngrx/store';
import { setPageTitle } from '@core/layout/store/layout.actions';

export const LAYOUT_STATE = 'layout';

export interface State {
  pageTitle: string;
}

export const initialState: State = {
  pageTitle: '',
};

const layoutReducers = createReducer(
  initialState,
  on(setPageTitle, (state, { pageTitle }) => ({ ...state, pageTitle })),
);

export function reducer(state: State | undefined, action: Action) {
  return layoutReducers(state, action);
}
