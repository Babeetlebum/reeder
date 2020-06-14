import { createAction, props } from '@ngrx/store';

export const setPageTitle = createAction('[Read Page] Set Page Title', props<{ pageTitle: string }>());
