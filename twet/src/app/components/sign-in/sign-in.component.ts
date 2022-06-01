import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
 
  constructor(private dailog: MatDialog, public dialogRef: MatDialogRef<SignInComponent>) { }

  ngOnInit(): void {
  }

  goSignin(){
   this.dialogRef.close()
   this.dailog.open(SignUpComponent,{ disableClose: true });
    // this.dialogRef.afterClosed().subscribe((response:any)=>{console.log(response)});
  }
}
