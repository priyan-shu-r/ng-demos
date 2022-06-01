import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

//Material imports
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ParentAdminComponent } from './parent-admin/parent-admin.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { SharedService } from '../shared.service';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    ParentAdminComponent,
    SideNavbarComponent
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
  ],
  providers:[
    SharedService
  ]
})
export class CoreModule { }
