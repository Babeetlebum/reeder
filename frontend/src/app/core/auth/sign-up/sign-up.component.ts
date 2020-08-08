import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutes } from '@app/routes';
//
// import { AuthService } from '../../services/index';
//
// import { LoginRequestVariables, SignupRequestVariables, User } from '../../generated/graphql';
const PASSWORD_VALIDATOR = [Validators.required, Validators.minLength(6)];

@Component({
  selector: 'reed-sign-up',
  styleUrls: ['./sign-up.component.scss'],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  public signupForm = new FormGroup({
    confirmPassword: new FormControl('', PASSWORD_VALIDATOR),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', PASSWORD_VALIDATOR),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  //
  // protected isSignup: boolean = false;
  // protected user: User;
  public hidePassword = true;
  public hideConfirmPassword = true;

  public constructor(private router: Router) {}

  public goToLogin() {
    this.router.navigateByUrl(`${AppRoutes.LOGIN}`);
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
  public signUp() {
    console.warn(`Signup not implemented yet`);
    // const authForm: SignupRequestVariables = {
    //   email: this.signupForm.controls.email.value,
    //   password: this.signupForm.controls.password.value,
    //   username: this.signupForm.controls.username.value,
    // };
    // this.authService
    //   .signup(authForm)
    //   .then(() => {
    //     console.log("show 'account created with success' message");
    //     this.router.navigateByUrl('/login');
    //   })
    //   .catch(console.warn);
  }
  //
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
