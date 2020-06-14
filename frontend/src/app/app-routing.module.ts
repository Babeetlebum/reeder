import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent, PageLayoutComponent } from '@core/layout/layouts/';
import { AuthGuard } from '@core/auth/guard/auth.guard';

export enum ROUTES {
  AUTH = 'auth',
  CHOOSE = 'choose',
  READ = 'read',
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
    loadChildren: () => import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: ROUTES.CHOOSE,
    component: PageLayoutComponent,
    loadChildren: () => import('./modules/choose/choose.module').then((m) => m.ChooseModule),
    canActivate: [AuthGuard],
  },
  {
    path: ROUTES.READ,
    component: PageLayoutComponent,
    loadChildren: () => import('./modules/read/read.module').then((m) => m.ReadModule),
    canActivate: [AuthGuard],
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
