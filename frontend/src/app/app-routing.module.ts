import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'learn',
    loadChildren: () => import('./modules/learn/learn.module').then(m => m.LearnModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'learn',
  },
  {
    path: '**',
    redirectTo: 'learn',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
