import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  openDialog: boolean=true;
  constructor(private route: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  destroy(){
   this.route.navigate(['']);
   location.reload();
  }

  goSignin(){
   this.dialog.open(SignUpComponent);
  //  this.openDialog=false;
  }

}
