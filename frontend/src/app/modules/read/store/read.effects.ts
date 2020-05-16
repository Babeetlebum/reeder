import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mapTo, tap } from 'rxjs/operators';

import { ReederRepository } from '@read/reeder-api';
import {
  getBooks,
  reederServiceGetBooks,
  reederServiceGetBooksFailure,
  reederServiceGetBooksSuccess,
} from '@read/store/read.actions';

@Injectable()
export class ReadEffects {
  // clicking the "get booklist" button call the reeder getBook action
  getBooks$ = createEffect(() => this.actions$.pipe(ofType(getBooks), mapTo(reederServiceGetBooks())));

  // Getting booklist action calls the reeder repository
  getReederBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(reederServiceGetBooks),
      exhaustMap(() =>
        this.reederRepository.getPopularBooks().pipe(
          map((bookList) => reederServiceGetBooksSuccess({ bookList })),
          catchError((error) => of(reederServiceGetBooksFailure({ error }))),
        ),
      ),
    ),
  );

  public constructor(private actions$: Actions, private reederRepository: ReederRepository) {}
}
