import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppRoutes } from '@app/routes';
import * as fromAuth from '@core/auth/store/auth.reducers';
import { selectIsUserConnected } from '@core/auth/store/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isUserConnected$: Observable<boolean>;

  public constructor(private authStore: Store<fromAuth.State>, private router: Router) {
    this.isUserConnected$ = this.authStore.select(selectIsUserConnected);
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.isUserConnected$.pipe(
      map((isUserConnected) => (isUserConnected ? true : this.router.parseUrl(`/${AppRoutes.LOGIN}`))),
    );
  }
}
