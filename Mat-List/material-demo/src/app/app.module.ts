import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import {MatInputModule} from '@angular/material/input';

// import {MatTableModule} from '@angular/material/table';

import {FormsModule} from '@angular/forms';

import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    // MatTableModule,
    FormsModule,
    // MatPaginator
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
