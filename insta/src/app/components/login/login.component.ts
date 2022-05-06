import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  userEmail:any;
  userPassword:any;
  fullName: any;
  
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
    // console.log(localStorage.getItem("setItem"));
    this.userEmail = JSON.parse(localStorage.getItem("setItem") || '').email;
    this.userPassword = JSON.parse(localStorage.getItem("setItem") || '').password;
  }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  checkValue(){
    if(this.loginForm.value.email == this.userEmail && this.loginForm.value.password == this.userPassword)
    // console.log(this.loginForm.value.email);
    // console.log(this.loginForm.value.password);
    this.route.navigate(['/main']);
    else
    this.route.navigate(['..'])
  }
}
