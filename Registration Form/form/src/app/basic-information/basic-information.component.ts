import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  RegistrationForm= new FormGroup({
    email: new FormControl ('', [Validators.required, Validators.pattern("[a-zA-Z0-9.\.]+@.[a-z]+.\.[com]+")]),
    password: new FormControl('',[Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8})")]),
    repassword: new FormControl('',[Validators.required,]),
    firstName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    lastName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    phone: new FormControl('',[Validators.required, Validators.pattern("[1-9]{10}")]),
    address: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    city: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    country: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    school: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z.\.]+( [A-Za-z]+)*")]),
    program: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    education: new FormControl('',[Validators.required]),
    
  })

  ExperienceForm=new FormGroup({
    employeer: new FormControl(),
    emptitle: new FormControl(),
    empduty: new FormControl(),
    year: new FormControl(),

  })

  constructor() { }

  get email()
  {
    return this.RegistrationForm.controls['email'];
  }
  get password()
  {
    return this.RegistrationForm.controls['password'];
  }
  get repassword()
  {
    return this.RegistrationForm.controls['repassword'];
  }
  get firstName()
  {
    return this.RegistrationForm.controls['firstName'];
  }
  get lastName()
  {
    return this.RegistrationForm.controls['lastName'];
  }
  get phone()
  {
    return this.RegistrationForm.controls['phone'];
  }
  get address()
  {
    return this.RegistrationForm.controls['address'];
  }
  get city()
  {
    return this.RegistrationForm.controls['city'];
  }
  get country()
  {
    return this.RegistrationForm.controls['country'];
  }
  get school()
  {
    return this.RegistrationForm.controls['school'];
  }
  get program()
  {
    return this.RegistrationForm.controls['program'];
  }
  get education()
  {
    return this.RegistrationForm.controls['education'];
  }
  

  ngOnInit(): void {

    
  }

  resetForm()
{
  this.RegistrationForm.reset();
}

 apply(): void
 {
  console.log(this.RegistrationForm.value);
  console.log(this.ExperienceForm.value);
 }

}
