import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthRoute } from '@core/auth/auth-route';

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

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUserConnected$.pipe(
      map((isUserConnected) => (isUserConnected ? true : this.router.parseUrl(AuthRoute.LOGIN))),
    );
  }
}
