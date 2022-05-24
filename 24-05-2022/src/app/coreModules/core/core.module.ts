import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ParentAdminComponent } from './parent-admin/parent-admin.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Material imports
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    ParentAdminComponent,
    SideNavbarComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
      //Material imports
      MatSidenavModule,
      MatButtonToggleModule,
      MatIconModule,
      MatListModule,
      MatButtonModule,
      MatExpansionModule,
      MatSelectModule,
      MatMenuModule,
      MatBadgeModule
  ]
})
export class CoreModule { }
