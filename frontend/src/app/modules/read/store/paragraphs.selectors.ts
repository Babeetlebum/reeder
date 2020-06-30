import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, ParagraphState, PARAGRAPHS_STATE } from './paragraphs.reducers';

const { selectAll } = adapter.getSelectors();

export const selectParagraphsState = createFeatureSelector<ParagraphState>(PARAGRAPHS_STATE);

export const selectAllParagraphs = createSelector(selectParagraphsState, selectAll);
