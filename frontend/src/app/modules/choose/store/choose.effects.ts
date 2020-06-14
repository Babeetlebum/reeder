import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mapTo, tap } from 'rxjs/operators';

import { GutendexRepository } from '@choose/gutendex-api';
import {
  getBooks,
  readBook,
  gutendexServiceGetBooks,
  gutendexServiceGetBooksFailure,
  gutendexServiceGetBooksSuccess,
} from '@choose/store/choose.actions';
import { AppRoutes } from '@app/routes';

@Injectable()
export class ChooseEffects {
  // clicking the "get booklist" button calls the gutendex getBook action
  getBooks$ = createEffect(() => this.actions$.pipe(ofType(getBooks), mapTo(gutendexServiceGetBooks())));

  // Getting booklist action calls the gutendex repository
  getGutendexBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gutendexServiceGetBooks),
      exhaustMap(() =>
        this.gutendexRepository.getPopularBooks().pipe(
          map((bookList) => gutendexServiceGetBooksSuccess({ bookList })),
          catchError((error) => of(gutendexServiceGetBooksFailure({ error }))),
        ),
      ),
    ),
  );

  // clicking the "read book" button redirects to the read module
  readBooks$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(readBook),
        tap((action) => this.router.navigateByUrl(`${AppRoutes.READ}/${action.bookId}`)),
      ),
    { dispatch: false },
  );

  public constructor(
    private readonly actions$: Actions,
    private readonly gutendexRepository: GutendexRepository,
    private readonly router: Router,
  ) {}
}
