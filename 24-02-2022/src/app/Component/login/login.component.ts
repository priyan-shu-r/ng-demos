import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9.\.]+@[a-z]+\.[com]+')]),
    password: new FormControl('',[Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8})")])
  });

  onSubmit()
  {
    console.log(this.loginForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

  get email()
  {
    return this.loginForm.controls['email'];
  }

  get password()
  {
    return this.loginForm.controls['password'];
  }


}
