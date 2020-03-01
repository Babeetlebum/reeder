import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { authModuleRoute, AuthRoute } from '@auth/auth-route';
//
// import { AuthService } from '../../services/index';
//
// import { LoginRequestVariables, SignupRequestVariables, User } from '../../generated/graphql';
const PASSWORD_VALIDATOR = [Validators.required, Validators.minLength(6)];

@Component({
  selector: 'reed-login',
  styleUrls: ['./login.component.sass'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', PASSWORD_VALIDATOR),
  });
  //
  // protected isSignup: boolean = false;
  // protected user: User;
  protected hidePassword = true;

  public constructor(private router: Router) {}

  public goToSignUp() {
    this.router.navigateByUrl(`${authModuleRoute}/${AuthRoute.SIGNUP}`);
  }
  // protected redirectUrl: string = '/';
  //
  //
  // public ngOnInit() {
  //   // detect whether it is a signup or a login page
  //   this.isSignup = this.router.url.includes('signup');
  //
  //   // reset login status
  //   this.authService.logout();
  //
  //   // store the redirection rrl to use after login completes
  //   this.redirectUrl = this.route.snapshot.queryParams.redirectUrl || '/';
  // }
  //
  //
  // protected login() {
  //   const authForm: LoginRequestVariables = {
  //     email: this.loginForm.controls.email.value,
  //     password: this.loginForm.controls.password.value,
  //   };
  //   this.authService
  //     .login(authForm)
  //     .then(() => {
  //       console.log('show welcome messaage');
  //       this.router.navigateByUrl(this.redirectUrl);
  //     })
  //     .catch(console.warn);
  // }
  //
  // protected onCancel() {
  //   const urlTo = this.isSignup ? 'login' : 'signup';
  //   this.router.navigateByUrl(urlTo);
  // }
  //
  // protected checkPasswordMatch() {
  //   if (this.signupForm.controls.password == null || this.signupForm.controls.confirmPassword == null) {
  //     return false;
  //   }
  //   return this.signupForm.controls.password.value === this.signupForm.controls.confirmPassword.value;
  // }
}
