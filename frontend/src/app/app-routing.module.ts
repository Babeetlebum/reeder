import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent, PageLayoutComponent } from '@core/layout/layouts/';
import { AuthGuard } from '@auth/guard/auth.guard';
import { AppRoutes } from '@app/routes';

export const DEFAULT_ROUTE = `/${AppRoutes.CHOOSE}`;

const routes: Routes = [
  {
    path: AppRoutes.AUTH,
    component: AuthLayoutComponent,
    loadChildren: () => import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: AppRoutes.CHOOSE,
    component: PageLayoutComponent,
    loadChildren: () => import('./modules/choose/choose.module').then((m) => m.ChooseModule),
    canActivate: [AuthGuard],
  },
  {
    path: AppRoutes.READ,
    component: PageLayoutComponent,
    loadChildren: () => import('./modules/read/read.module').then((m) => m.ReadModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: DEFAULT_ROUTE,
  },
  {
    path: '**',
    redirectTo: DEFAULT_ROUTE,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
