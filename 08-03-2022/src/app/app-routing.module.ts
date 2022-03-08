import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { SignupComponent } from './Component/signup/signup.component';
import { AuthGuardGuard } from './Guard/auth-guard.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  //lazy loading
  {
    path: 'admin',
    canActivate: [AuthGuardGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  //wild card routing
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
