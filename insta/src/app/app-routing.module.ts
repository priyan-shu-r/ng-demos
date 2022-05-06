import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  // {path:'admin',loadChildren:() => import('./module/admin/admin.module').then((m)=> m.AdminModule)}
  {path:'main', loadChildren:() => import('./modules/insta-main/insta-main.module').then((m) => m.InstaMainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }