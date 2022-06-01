import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  destroy: boolean= true;
  constructor( private dailog: MatDialog) { }
 
  ngOnInit(): void {
  }

  openDialog(){
    this.dailog.open(SignInComponent,{ disableClose: true });
    this.destroy=false;
  }

}
