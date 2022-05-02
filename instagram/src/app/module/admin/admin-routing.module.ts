import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RightNavbarComponent } from './components/right-navbar/right-navbar.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent}
  // children:[
  //   {path:'main', component:MainPageComponent},
  // ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
