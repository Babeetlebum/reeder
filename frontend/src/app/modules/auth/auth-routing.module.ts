import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthRoute } from '@auth/auth-route';
import { LoginComponent } from '@auth/login/login.component';
import { SignUpComponent } from '@auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AuthRoute.LOGIN,
  },
  {
    path: AuthRoute.LOGIN,
    component: LoginComponent,
  },
  {
    path: AuthRoute.SIGNUP,
    component: SignUpComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
