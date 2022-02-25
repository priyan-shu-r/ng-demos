import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { LoginComponent } from './Component/login/login.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'forget-password', component:ForgetPasswordComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  // Lazy Loading- When the user will visit admin page then this child module will load.It is used to make your application fast
  {path: 'admin', 
  canActivate: [AuthGuard],
  loadChildren: () => 
  import('./modules/admin/admin.module').then((m) => m.AdminModule)},
  // wild card routing
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
