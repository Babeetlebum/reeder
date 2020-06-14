import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutes, AuthRoutes } from '@app/routes';
import { LoginComponent } from '@core/auth/login/login.component';
import { SignUpComponent } from '@core/auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.LOGIN,
  },
  {
    path: AuthRoutes.LOGIN,
    component: LoginComponent,
  },
  {
    path: AuthRoutes.SIGNUP,
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
