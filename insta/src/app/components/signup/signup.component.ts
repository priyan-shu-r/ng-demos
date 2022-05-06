import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email:['',[Validators.required]],
      fullname:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }

  get email(){
    return this.signupForm.controls['email'];
  }
  get fullname(){
    return this.signupForm.controls['fullname'];
  }
  get username(){
    return this.signupForm.controls['username'];
  }
  get password(){
    return this.signupForm.controls['password'];
  }


  onSignup(){
    let userObj = {
      email: this.signupForm.value.email,
      fullName: this.signupForm.value.fullname,
      userName: this.signupForm.value.username,
      password: this.signupForm.value.password,
    }

    console.log(this.signupForm.value);
    localStorage.setItem("setItem",(JSON.stringify(userObj)));
  }
  
  onFacebook(){
    location.href='https://www.facebook.com/';
  }

}
