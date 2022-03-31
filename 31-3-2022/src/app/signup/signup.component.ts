import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CascadingDropdownService } from '../cascading-dropdown.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  SignupGroup: any;
  dialog: any;
  reviewFormGroup: any;
  
  
  constructor(private fb: FormBuilder, private _cd: CascadingDropdownService) { }

  Signupgroup!:FormGroup
  countries!:{id:number,name:string}[]
  states!:{id:number,country_id:number,name:string}[]
  cities!:{id:number,state_id:number,name:string}[]
  isInvalid=false

  ngOnInit(): void {

    this.SignupGroup = this.fb.group({
      firstName:['',[Validators.required,Validators.pattern("[a-zA-Z]+([A-Za-z]+)*")]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern("[a-zA-Z0-9.\.]+@.[a-z]+.\.[com]+")]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})")]],
      repassword:['',[Validators.required]],
      dateofbirth:['',[Validators.required]],
      address1:['',[Validators.required,Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],
      address2:['',[Validators.required]],
      pincode:['',[Validators.required,Validators.pattern("^[4-9]{1}[0-9]{2}[0-9]{3}$")]],
      country:['',[Validators.required]],
      state:['',[Validators.required]],
      city:['',[Validators.required]]
    })

    this.reviewFormGroup = this.fb.group({

    })


    this.countries= this._cd.getCountries();
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
  get address1(){
    return this.SignupGroup.controls['address1'];
  }
  get country(){
    return this.SignupGroup.controls['country'];
  }
  get state(){
    return this.SignupGroup.controls['state'];
  }
  get city(){
    return this.SignupGroup.controls['city'];
  }
  get pincode(){
    return this.SignupGroup.controls['pincode'];
  }

   
  onCountryChange(country: any) {
    console.log("")
    this.states = this._cd.getStates().filter((x) => x.country_id == country.target.value);
    // this.cities = this._cd.getCities().filter((x:any) => x.country_id == country.target.value);

    console.log(this.states);

  }

  onStateChange(state: any) {

    this.cities = this._cd.getCities().filter((x:any) => x.state_id == state.target.value); 
    console.log(this.cities);

  }
  
  onSubmit(){
    
  }

  resetForm(){
    this.SignupGroup.reset();
  }


}
