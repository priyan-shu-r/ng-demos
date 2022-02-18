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
    city: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
    country: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]),
  })


  constructor() { }

  get name()
  {
    return this.ReactiveForm.controls['name'];
  }

  ngOnInit(): void {
  }

}
