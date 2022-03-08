import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['admin']); //If the login is successfull, It will go back to Admin page 
        },
        (err: Error) => {
          alert(err.message);  //else it will show alert message
        }
      )
    }
  }
  //inject auth-service 
  constructor(private auth: AuthService, private router: Router) { }

  //if the user is login then it they will navigate to admin page 
  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }

//geter method from reactive Form
  get email()
  {
    return this.loginForm.controls['email'];
  }

  get password()
  {
    return this.loginForm.controls['password'];
  }

}
