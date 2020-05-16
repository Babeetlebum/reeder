import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthRoute } from '@core/auth/auth-route';
import { LoginComponent } from '@core/auth/login/login.component';
import { SignUpComponent } from '@core/auth/sign-up/sign-up.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
