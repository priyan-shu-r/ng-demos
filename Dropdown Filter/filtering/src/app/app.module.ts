import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule }  from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassComponent } from './class/class.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
 BrowserAnimationsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
