import { Component, ContentChild, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  SignupGroup: any;
  showPassword: boolean= false;
  reshowPassword: boolean= false;
  show:boolean=false;
  reshow:boolean=false;
  useremail: any;
  userpassword: any;
 
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.SignupGroup = this.fb.group({
      firstName:['',[Validators.required,Validators.pattern("[a-zA-Z]+([A-Za-z]+)*")]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{0,8})")]],
      // repassword:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{0,8})")]],
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

  
  onSubmit() {
    console.log(this.SignupGroup.value);
    this.useremail = this.SignupGroup.value.email;
    this.userpassword = this.SignupGroup.value.password;
    localStorage.setItem('userEmail',this.useremail);
    localStorage.setItem('userPassword',this.userpassword);
  }

}
