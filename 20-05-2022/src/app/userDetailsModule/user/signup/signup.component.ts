import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  SignupGroup: any;
  showPass: boolean= true;
  showRePass: boolean=true;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.SignupGroup = this.fb.group({
      firstName:['',[Validators.required,Validators.pattern("[a-zA-Z]+([A-Za-z]+)*")]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})")]],
      repassword:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})")]],
      dateofbirth:['',[Validators.required]],
    })
  }

    get firstName(){
    return this.SignupGroup.controls['firstName'];
  }
  get lastName(){
    return this.SignupGroup.controls['lastname'];
  }
  get email(){
    return this.SignupGroup.controls['email'];
  }
  get password(){
    return this.SignupGroup.controls['password'];
  }
  get repassword(){
    return this.SignupGroup.controls['repassword'];
  }
  get dateofbirth(){
    return this.SignupGroup.controls['dateofbirth'];
  }

  showPassword(){
    this.showPass = false;
  }
  hidePassword(){
    this.showPass = true;
  }

  showRePassword(){
    this.showRePass=false;
  }

  hideRePassword(){
    this.showRePass=true;
  }

  onSubmit() {
    console.log(this.SignupGroup.value);
  }

}
