import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './appPipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ClassComponent } from './class/class.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ClassComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
