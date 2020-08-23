import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { reederServiceGetParagraphsSuccess } from './read.actions';
import { Paragraph } from './read.entities';

export const PARAGRAPHS_STATE = 'paragraphs';
export interface ParagraphState extends EntityState<Paragraph> {}
export const adapter = createEntityAdapter<Paragraph>({ selectId: selectParagraphId });
export const initialState: ParagraphState = adapter.getInitialState({});

const reducer = createReducer(
  initialState,
  on(reederServiceGetParagraphsSuccess, (state, { paragraphs }) => adapter.setAll(paragraphs, { ...state })),
);

export function paragraphsReducer(state: ParagraphState | undefined, action: Action) {
  return reducer(state, action);
}

export function selectParagraphId(paragraph: Paragraph): number {
  return paragraph.delta;
}
