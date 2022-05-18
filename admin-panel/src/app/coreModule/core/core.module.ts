import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
//Material imports
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    //Material imports
    MatSidenavModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ]
})
export class CoreModule { }
