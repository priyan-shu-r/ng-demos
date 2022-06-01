import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor( private dailog: MatDialog) { }
 
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  openDialog(){
    this.dailog.open(SignInComponent,{ disableClose: true });
  }

}
