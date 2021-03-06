import { createAction, props } from '@ngrx/store';

import { BookContent, Paragraph } from './read.entities';

export const getBook = createAction('[Read Component] Get Book From Route', props<{ bookId: number }>());

export const reederServiceGetBook = createAction('[Reeder Service] Get Book', props<{ bookId: number }>());
export const reederServiceGetBookSuccess = createAction(
  '[Reeder Service] Get Books - Success',
  props<{ bookContent: BookContent }>(),
);
export const reederServiceGetBookFailure = createAction(
  '[Reeder Service] Get Books - Failure',
  props<{ error: Error }>(),
);
export const reederServiceGetParagraphsSuccess = createAction(
  '[Reeder Service] Get Paragraphs - Success',
  props<{ paragraphs: Paragraph[] }>(),
);
