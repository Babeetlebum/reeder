import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LAYOUT_STATE, State } from '@core/layout/store/layout.reducers';

export const selectLayout = createFeatureSelector<State>(LAYOUT_STATE);
export const selectPageTitle = createSelector(selectLayout, (state) => state.pageTitle);
