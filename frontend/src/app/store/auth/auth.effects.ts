import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { DEFAULT_ROUTE } from '@app/app-routing.module';
import { AuthService } from '@core/services';
import { login, loginFailure, loginSuccess } from '@store/auth/auth.actions';

@Injectable()
export class AuthEffects {
  // Login action calls the authService
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

  // Login success action redirects to the default route
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => this.router.navigateByUrl(DEFAULT_ROUTE)),
      ),
    { dispatch: false },
  );

  public constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}
}
