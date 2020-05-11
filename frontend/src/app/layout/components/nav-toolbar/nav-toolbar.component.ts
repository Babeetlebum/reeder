import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromAuth from '@auth/store/auth.reducers';
import * as AuthActions from '@auth/store/auth.actions';
import { selectConnectedUserName, selectHasErrorMessage, selectIsUserConnected } from '@auth/store/auth.selectors';

@Component({
  selector: 'reed-nav-toolbar',
  styleUrls: ['./nav-toolbar.component.scss'],
  templateUrl: './nav-toolbar.component.html',
})
export class NavToolbarComponent implements OnDestroy, OnInit {
  isUserConnected$: Observable<boolean>;
  connectedUserName$: Observable<string>;
  errorMessageSubscription: Subscription;

  constructor(private store: Store<fromAuth.State>, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.connectedUserName$ = this.store.select(selectConnectedUserName);
    this.isUserConnected$ = this.store.select(selectIsUserConnected);
    this.errorMessageSubscription = this.store
      .pipe(selectHasErrorMessage)
      .subscribe((error) => this.snackBar.open('Authentication error', error, { duration: 5000 }));
  }

  ngOnDestroy() {
    this.errorMessageSubscription.unsubscribe();
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
