import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  userEmail: any;
  userDateOfBirth: any;
  userPassword: any;
  isChangeField:boolean=false;
  show: boolean = false;
  userObj: any;

  constructor(private fb: FormBuilder, private router: Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]+@.[a-z]+.\.[com]+")]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})")]],
      date:['',[Validators.required]]
    })

    // this.userEmail = localStorage.getItem('userEmail') || '';
    // console.log(this.loginForm.value.userEmail);
    // this.userPassword = localStorage.getItem('userPassword') || '';
    // console.log(this.userPassword);
    // this.userDateOfBirth = localStorage.getItem('userDateOfBirth') || '';
    // console.log(this.userDateOfBirth);

    this.userEmail = JSON.parse(localStorage.getItem("userDetails") || '').email
    this.userPassword = JSON.parse(localStorage.getItem("userDetails") || '').password
    this.userDateOfBirth = JSON.parse(localStorage.getItem("userDetails") || '').DOB
    // console.log(this.userObj)
  }
  
  checkValue()
  { if((this.loginForm.value.email == this.userEmail &&  this.loginForm.value.password == this.userPassword )|| (this.loginForm.value.date == this.userDateOfBirth && this.loginForm.value.password == this.userPassword))  
     this.router.navigate(['/dashboard']) 
    else 
    { if(this.show) this.toastr.error('Invalid Email or Password') 
     else this.toastr.error('Invalid Date of Birth or Password')}
  }
  changeFieldToDate(){
    this.isChangeField=true;
    this.show=false;
  }

  changeFieldToEmail(){
    this.isChangeField=false;
    this.show=true;
  }

  get email()
  {
    return this.loginForm.controls['email'];
  }
  get password()
  {
    return this.loginForm.controls['password'];
  }
  get date()
  {
    return this.loginForm.controls['date'];
  }

  // changeIcon(){
  //   this.show = false;
  // }

}
