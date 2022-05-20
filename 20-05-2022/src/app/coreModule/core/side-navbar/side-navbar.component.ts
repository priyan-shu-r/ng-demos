import { Component, Input, OnChanges, OnInit, ViewChild,  } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnChanges {
@Input() showMenu:any;
@ViewChild('drawer') drawer :any; 

showData: boolean=false;
panelOpenState = false;

 
  constructor() {}

   ngOnChanges(){
    this.drawer?.toggle();
    console.log(this.drawer?.toggle);
   }

 

}
