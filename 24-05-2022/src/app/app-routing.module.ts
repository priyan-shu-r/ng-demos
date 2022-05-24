import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authenticationModule/user/auth.guard';

const routes: Routes = [
  { path:'', loadChildren: () => import('./authenticationModule/user/user.module').then(m => m.UserModule)},
  { path:'', 
  canActivate:[AuthGuard],
     loadChildren: () => import('./coreModules/core/core.module').then(m => m.CoreModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
