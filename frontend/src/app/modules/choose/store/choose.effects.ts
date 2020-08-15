import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mapTo, tap } from 'rxjs/operators';

import { GutendexRepository } from '@choose/gutendex-api';
import {
  getBooks,
  readBook,
  searchBooks,
  gutendexServiceGetBooks,
  gutendexServiceGetBooksFailure,
  gutendexServiceGetBooksSuccess,
  gutendexServiceSearchBooks,
  gutendexServiceSearchBooksFailure,
  gutendexServiceSearchBooksSuccess,
} from '@choose/store/choose.actions';
import { AppRoutes } from '@app/routes';

@Injectable()
export class ChooseEffects {
  // clicking the "get booklist" button calls the gutendex service getBook action
  getBooks$ = createEffect(() => this.actions$.pipe(ofType(getBooks), mapTo(gutendexServiceGetBooks())));
  // searching for books calls the gutendex service searchBook action
  searchBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchBooks),
      map(({ search }) => gutendexServiceSearchBooks({ search })),
    ),
  );

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

  // Searching for books calls the gutendex repository
  searchGutendexBooks = createEffect(() =>
    this.actions$.pipe(
      ofType(gutendexServiceSearchBooks),
      exhaustMap(({ search }) =>
        this.gutendexRepository.search(search).pipe(
          map((bookList) => gutendexServiceSearchBooksSuccess({ bookList })),
          catchError((error) => of(gutendexServiceSearchBooksFailure({ error }))),
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
