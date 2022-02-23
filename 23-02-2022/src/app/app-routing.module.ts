import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
  path:"home", 
  component: HomeComponent,
  },
  {
    path:"news",
    component: NewsComponent
  },
  {
    path:"about",
    component: AboutComponent,
    
  },
  {
    path:"contact",
    component: ContactComponent
  },
  // this is wild-card routing
  {
    path:"**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
