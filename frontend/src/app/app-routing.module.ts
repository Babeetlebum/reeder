import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent, PageLayoutComponent } from '@layout/layouts/';

export enum ROUTES {
  AUTH = 'auth',
  CHOOSE = 'choose',
}
export const DEFAULT_ROUTE = ROUTES.CHOOSE;

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.AUTH,
  },
  {
    path: ROUTES.AUTH,
    component: AuthLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: ROUTES.CHOOSE,
    component: PageLayoutComponent,
    loadChildren: () => import('./modules/choose/choose.module').then((m) => m.ChooseModule),
  },
  {
    path: '**',
    redirectTo: ROUTES.AUTH,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
