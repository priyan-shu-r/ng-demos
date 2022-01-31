import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Details Form';

  get name(){
    return this.reactiveForm.controls['name']
  }
  get email(){
    return this.reactiveForm.controls['email']
  }
  get password(){
    return this.reactiveForm.controls['password']
  }
  get phone(){
    return this.reactiveForm.controls['phone']
  }

  constructor(private fb: FormBuilder) {}

  reactiveForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],  //to apply more than one validiation in single form field
    email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]+@[a-z]+\.[a-z]+")]],
    password: ['',[Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8})")]],
    phone: ['',[Validators.required, Validators.pattern("[0-9]{10}")]]
  });

  // reactiveForm = new FormGroup({
  //   name : new FormControl(''),
  //   email: new FormControl(''),
  //   password : new FormControl(''),
  //   phone: new FormControl('')
  // });
}
