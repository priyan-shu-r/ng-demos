import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() toggleSideNavbar = new EventEmitter<any>();

showData: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showSideNavbar(event:any){
   this.showData=!this.showData;
   console.log("clicked",event);
   this.toggleSideNavbar.emit(this.showData);
   console.log('showdata',this.showData);
   
  }
}
