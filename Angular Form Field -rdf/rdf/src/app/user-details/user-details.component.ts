import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  ReactiveForm= new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    email: new FormControl ('', [Validators.required, Validators.pattern("[a-zA-Z0-9.\.]+@[a-z]+\.[com]+")]),
    address: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    address2: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    zip: new FormControl('',[Validators.required, Validators.pattern("[1-9][0-9]{5}")] ),
    city: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    state: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    country: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
  })

  apply()
  {
    console.log(this.ReactiveForm.value);
  }

  reset()
  {
    this.ReactiveForm.reset();
  }

  constructor() { }

  get name()
  {
    return this.ReactiveForm.controls['name'];
  }
  get email()
  {
    return this.ReactiveForm.controls['email'];
  }
  get address()
  {
    return this.ReactiveForm.controls['address'];
  }
  get address2()
  {
    return this.ReactiveForm.controls['address2'];
  }
  get zip()
  {
    return this.ReactiveForm.controls['zip'];
  }
  get city()
  {
    return this.ReactiveForm.controls['city'];
  }
  get state()
  {
    return this.ReactiveForm.controls['state'];
  }
  get country()
  {
    return this.ReactiveForm.controls['country'];
  }
  

  ngOnInit(): void {
  }

}






