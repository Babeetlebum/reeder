import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as AuthActions from '@store/actions';
import * as fromRoot from '@store/reducers';
import { LoginCredentials, TEST_USER, TEST_PASSWORD } from '@store/models';
import { selectAuthLoading } from '@store/selectors';
import { authModuleRoute, AuthRoute } from '@auth/auth-route';
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

  public constructor(private router: Router, private store: Store<fromRoot.State>) {}

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
    this.router.navigateByUrl(`${authModuleRoute}/${AuthRoute.SIGNUP}`);
  }
}
