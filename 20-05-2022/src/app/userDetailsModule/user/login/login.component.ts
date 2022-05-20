import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  userEmailSet: any;
  userPasswordSet: any;
  userDateOfBirthSet: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]+@.[a-z]+.\.[com]+")]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})")]],
      date:['',[Validators.required]]
    })
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


}
