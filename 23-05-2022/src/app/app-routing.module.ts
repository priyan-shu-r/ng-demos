import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './userDetailsModule/user/auth.guard';

const routes: Routes = [
  { path:'', loadChildren: () => import('./userDetailsModule/user/user.module').then(m => m.UserModule)},
  { path:'', 
  canActivate:[AuthGuard],
  loadChildren: () => import('./coreModule/core/core.module').then(m => m.CoreModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
