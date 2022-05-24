import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword: boolean= false;
  show:boolean=false;
  loginForm: any;
  userEmail: any;
  userDateOfBirth: any;
  userPassword: any;
  isChangeField:boolean=false;
 
  userObj: any;
  userEmailSet: any;
  userPasswordSet: any;
  userDateOfBirthSet: any;
  router: any;

  spinner:boolean=false;

  constructor(private fb: FormBuilder, private route: Router, private auth: AuthService) { }

  ngOnInit(): void {
 // once the user logedin they will navigate to adminpage, after login user will not allowed to go back to login page until user logout
    if(this.auth.isLoggedIn()) {
      this.route.navigate(['dashboard']);
    }
    
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{0,8})")]],
    })

    // this.userEmail = localStorage.getItem('userEmail');
    // console.log(this.userEmail);
    
    // this.userPassword = localStorage.getItem('userPassword');
    // console.log(this.userPassword);
}

get email()
{
  return this.loginForm.controls['email'];
}
get password()
{
  return this.loginForm.controls['password'];
}

onLogin(){
  if(this.loginForm.valid){
    this.auth.login(this.loginForm.value).subscribe(
      (result: string)=> {
        console.log('result');
         //if LoginForm is valid it will go to the dashboard page
      },
      (err:Error)=> {
        alert(err.message);
      }
    );

    this.spinner= true;
    setTimeout(() => {
      this.route.navigate(['/dashboard']);
    },5000)
  }

  // console.log('localEmail',this.userEmail);
  // console.log('localPassword',this.userPassword);
  // console.log('userEmail',this.email.value);
  // console.log('userPassword',this.password.value);

  // if(this.userEmail == this.email.value && this.userPassword == this.password.value){
  //   console.log("Welcome to dashboard Page");
  //   this.route.navigate(['/dashboard'])
  // }else{
  //   alert("UserName and Password is Invalid")
  // }
}

}
