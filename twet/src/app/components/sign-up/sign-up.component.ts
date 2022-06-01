import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignUpComponent>,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  
  openLogin(){
    this.dialog.open(SignInComponent);
  }

  toAccount(){
    this.dialogRef.close();
    this.dialog.open(CreateAccountComponent,{disableClose:true});
  }

}
