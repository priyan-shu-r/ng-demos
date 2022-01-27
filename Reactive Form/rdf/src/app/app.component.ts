import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form';
  
  // reactiveForm = new FormGroup({
  //   userName: new FormControl(""),
  //   password1: new FormControl(''),
  //   password2: new FormControl(''),
  //   address: new FormGroup({
  //    city: new FormControl(''),
  //    state: new FormControl(''),
  //    postal: new FormControl(''),
  // })
  // });
  constructor(private fb: FormBuilder) {}

  reactiveForm= this.fb.group({
     userName:["", Validators.required],
     password1:[''],
     password2:[''],
     address:this.fb.group({
       city: [''],
       state: [''],
       postal:['']
     })

  });

  loadApiData() {
    this.reactiveForm.patchValue({
      userName: 'Priyanshu',
    password1: 'reactive',
    password2: 'reactive',
    // address: {
    //  city: 'patna',
    //  state: 'bihar',
    //  postal: '123456'
    // }
  });
}

  onSubmit()
  {
    console.log('this.reactiveForm.value');
  }

}
