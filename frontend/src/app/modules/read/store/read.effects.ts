import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { ReederRepository } from '@read/reeder-api';
import {
  getBook,
  reederServiceGetBook,
  reederServiceGetBookFailure,
  reederServiceGetBookSuccess,
} from '@read/store/read.actions';
import { setPageTitle } from '@core/layout/store/layout.actions';

@Injectable()
export class ReadEffects {
  // clicking a "get book" button calls the reeder getBook action
  getBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBook),
      map((props) => reederServiceGetBook(props)),
    ),
  );

  // Getting book action calls the reeder repository
  getReederBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(reederServiceGetBook),
      exhaustMap(({ bookId }) =>
        this.reederRepository.getBook(bookId).pipe(
          map((bookContent) => reederServiceGetBookSuccess({ bookContent })),
          catchError((error) => of(reederServiceGetBookFailure({ error }))),
        ),
      ),
    ),
  );

  // Successfuly getting a book updates the page title
  getReederBookSuccessfuly = createEffect(() =>
    this.actions$.pipe(
      ofType(reederServiceGetBookSuccess),
      map(({ bookContent }) => setPageTitle({ pageTitle: bookContent.title })),
    ),
  );

  public constructor(private actions$: Actions, private reederRepository: ReederRepository) {}
}
