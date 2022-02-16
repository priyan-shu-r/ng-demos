import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path:'class', component:ClassComponent},
  {path:'slider',component:SliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingCoponenent = {ClassComponent, SliderComponent}
