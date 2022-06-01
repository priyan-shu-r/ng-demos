import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-admin',
  templateUrl: './parent-admin.component.html',
  styleUrls: ['./parent-admin.component.scss']
})
export class ParentAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  isClicked: boolean =false;

  closeMenu(event:any){
    this.isClicked=event;
    this.isClicked=!this.isClicked;
    console.log('isClicked',this.isClicked);
  }

}
