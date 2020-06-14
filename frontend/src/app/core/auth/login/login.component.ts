import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppRoutes } from '@app/routes';
import * as AuthActions from '@core/auth/store/auth.actions';
import * as fromAuth from '@core/auth/store/auth.reducers';
import { selectAuthLoading } from '@core/auth/store/auth.selectors';
import { LoginCredentials, TEST_USER, TEST_PASSWORD } from '@store/models';
const PASSWORD_VALIDATOR = [Validators.required, Validators.minLength(6)];

@Component({
  selector: 'reed-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(TEST_USER.email, [Validators.required, Validators.email]),
    password: new FormControl(TEST_PASSWORD, PASSWORD_VALIDATOR),
  });

  authLoading$: Observable<boolean>;
  hidePassword = true;

  public constructor(private router: Router, private store: Store<fromAuth.State>) {}

  ngOnInit() {
    this.authLoading$ = this.store.select(selectAuthLoading);
  }
  // no type safe solution for FormGroup for now, see https://github.com/angular/angular/issues/13721
  login(formData: { email: string; password: string }) {
    const credentials: LoginCredentials = {
      email: formData.email,
      password: formData.password,
    };
    this.store.dispatch(AuthActions.login({ credentials }));
  }

  public goToSignUp() {
    this.router.navigateByUrl(`${AppRoutes.SIGNUP}`);
  }
}
