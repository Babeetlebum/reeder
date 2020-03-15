import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { AuthService } from '@core/services';
import { login, loginFailure, loginSuccess } from '@store/auth/auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((user) => loginSuccess(user)),
          catchError((error) => of(loginFailure({ error }))),
        ),
      ),
    ),
  );

  public constructor(private actions$: Actions, private authService: AuthService) {}
}
