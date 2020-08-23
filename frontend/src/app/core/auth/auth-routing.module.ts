import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutes, AuthRoutes } from '@app/routes';
import { LoginComponent } from '@auth/login/login.component';
import { SignUpComponent } from '@auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: AuthRoutes.LOGIN,
    component: LoginComponent,
  },
  {
    path: AuthRoutes.SIGNUP,
    component: SignUpComponent,
  },
  {
    path: 'auth/*',
    redirectTo: AppRoutes.LOGIN,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
