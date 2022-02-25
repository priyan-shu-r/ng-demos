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
    //checking loginForm is valid or not, if form is valid then we will submit form value inside login method of auth service
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (result: string)=> {
          console.log('result');
          this.router.navigate(['/admin']); //if LoginForm is valid it will go to the admin page
        },
        (err:Error)=> {
          alert(err.message);
        }
      );
    }
  }
//  we have to inject service and router
  constructor(private auth: AuthService, private router: Router) { }

  // once the user logedin they will navigate to adminpage, after login user will not allowed to go back to login page until user logout
  ngOnInit(): void {
    if(this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
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
