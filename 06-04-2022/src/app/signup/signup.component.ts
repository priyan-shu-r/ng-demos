import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CascadingDropdownService } from '../cascading-dropdown.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  SignupGroup: any;
  editUserForm:any
  dialog: any;
  reviewFormGroup: any;
  userEmail: any;
  userPassword: any;
  userDateOfBirth: any;
  edit:boolean = false;
  editName: boolean=false;
  route: any;
  star = "*";
  showPass: boolean= true;
  ReshowPass: boolean = true;
  showRePass: boolean=true;
  isEdit: boolean=true;
  Ediatble: boolean= false;
  showFirstAndLast: boolean= false;
  user: any;
// This is used for Password
  originalPassword: string = "";
  replacedPassword: string = '';
  originalConfirmPassword: string = '';
  replacedConfirmPassword: string = '';
  str: any = '';
  data: any = '';
  EditableFormGroup: any;
  userFirstName: any;
  userLastName: any;
  userAddress1: any;
  userAddress2: any;
  userCountry: any;
  userState: any;
  userCity: any;
  userPincode: any;
  

  constructor(private fb: FormBuilder, private _cd: CascadingDropdownService, private td: ToastrService, private router: Router) { }

  Signupgroup!:FormGroup
  countries!:{id:number,name:string}[]
  states!:{id:number,country_name:string,name:string}[]
  cities!:{id:number,state_name:string,name:string}[]
  isInvalid=false

  ngOnInit(): void {
    this.SignupGroup = this.fb.group({
      firstName:['',[Validators.required,Validators.pattern("[a-zA-Z]+([A-Za-z]+)*")]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})")]],
      repassword:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})")]],
      dateofbirth:['',[Validators.required]],
      address1:['',[Validators.required,Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],
      address2:['',[Validators.required]],
      pincode:['',[Validators.required,Validators.pattern("^[4-9]{1}[0-9]{2}[0-9]{3}$")]],
      country:['',[Validators.required]],
      state:['',[Validators.required]],
      city:['',[Validators.required]]
    })
    this.countries= this._cd.getCountries();

    this.EditableFormGroup = this.fb.group({
      fname:['',[Validators.required,Validators.pattern("[a-zA-Z]+([A-Za-z]+)*")]],
      lname:['',[Validators.required]],
      editEmail:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@gmail.com")]],
      Editdateofbirth:['', Validators.required],
      Editaddress1:['',[Validators.required,Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],
      Editaddress2:['',[Validators.required]],
      Editpincode:['',[Validators.required,Validators.pattern("^[4-9]{1}[0-9]{2}[0-9]{3}$")]],
      Editcountry:['',[Validators.required]],
      Editstate:['',[Validators.required]],
      Editcity:['',[Validators.required]]
    })
  }
   
  
  get fname(){
    return this.EditableFormGroup.controls['fname'];
  }
  get lname(){
    return this.EditableFormGroup.controls['lname'];
  }
  get editEmail(){
    return this.EditableFormGroup.controls['editEmail'];
  }
  get Editdateofbirth(){
    return this.EditableFormGroup.controls['Editdateofbirth'];
  }
  get Editaddress1(){
    return this.EditableFormGroup.controls['Editaddress1'];
  }
  get Editaddress2(){
    return this.EditableFormGroup.controls['Editaddress2'];
  }
  get Editpincode(){
    return this.EditableFormGroup.controls['Editpincode'];
  }
  get Editcountry(){
    return this.EditableFormGroup.controls['Editcountry'];
  }
  get Editstate(){
    return this.EditableFormGroup.controls['Editstate'];
  }
  get Editcity(){
    return this.EditableFormGroup.controls['Editcity'];
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
    // console.log("")
    this.states = this._cd.getStates().filter((x) => x.country_name == country.target.value);
    this.cities = this._cd.getCities().filter((x) => x.state_name == country.target.value);
    // console.log(this.states);
  }

  onStateChange(state: any) {
    this.cities = this._cd.getCities().filter((x:any) => x.state_name == state.target.value); 
    // console.log(this.cities);

  }
  
  signup()
  {
    this.td.success("Data stored successfully");
    // console.log(this.SignupGroup.value);
    if(this.Ediatble){
    this.userFirstName = this.EditableFormGroup.value.fname;
    this.userLastName = this.EditableFormGroup.value.lname;
    this.userEmail = this.EditableFormGroup.value.editEmail;
    this.userPassword = this.SignupGroup.value.password;
    this.userDateOfBirth = this.EditableFormGroup.value.Editdateofbirth;
    this.userAddress1 = this.EditableFormGroup.value.Editaddress1;
    this.userAddress2 = this.EditableFormGroup.value.Editaddress2;
    this.userCountry= this.EditableFormGroup.value.Editcountry;
    this.userState = this.EditableFormGroup.value.Editstate;
    this.userCity = this.EditableFormGroup.value.Editcity;
    this.userPincode = this.EditableFormGroup.value.Editpincode;}

    else{
      
    this.userFirstName = this.SignupGroup.value.firstName;
    this.userLastName = this.SignupGroup.value.lastName;
    this.userEmail = this.SignupGroup.value.email;
    this.userPassword = this.SignupGroup.value.password;
    this.userDateOfBirth = this.SignupGroup.value.dateofbirth;
    this.userAddress1 = this.SignupGroup.value.address1;
    this.userAddress2 = this.SignupGroup.value.address2;
    this.userCountry= this.SignupGroup.value.country;
    this.userState = this.SignupGroup.value.state;
    this.userCity = this.SignupGroup.value.city;
    this.userPincode = this.SignupGroup.value.pincode;
    }

    // localStorage.setItem('userFirstName', JSON.stringify(this.userFirstName));
    // localStorage.setItem('userLastName', this.userLastName);
    // localStorage.setItem('userEmail', this.userEmail);
    // localStorage.setItem('userPassword', this.userPassword);
    // localStorage.setItem('userDateOfBirth', this.userDateOfBirth);
    // localStorage.setItem('userAddress1', this.userAddress1);
    // localStorage.setItem('userAddress2', this.userAddress2);
    // localStorage.setItem('userCountry', this.userCountry);
    // localStorage.setItem('userState', this.userState);
    // localStorage.setItem('userCity', this.userCity);
    // localStorage.setItem('userPincode', this.userPincode);

  if(this.Ediatble){
    this.SignupGroup.patchValue({'firstName':this.EditableFormGroup.value.fname});
    console.log('pri'+this.SignupGroup.value.firstName);
    this.SignupGroup.patchValue({'lastName':this.EditableFormGroup.value.lname});
    console.log('pri'+this.SignupGroup.value.lastName);
    this.SignupGroup.patchValue({'email':this.EditableFormGroup.value.editEmail});
    console.log('pri'+this.SignupGroup.value.email);
    this.SignupGroup.patchValue({'dateofbirth':this.EditableFormGroup.value.Editdateofbirth});
    this.SignupGroup.patchValue({'address1':this.EditableFormGroup.value.Editaddress1});
    this.SignupGroup.patchValue({'address2':this.EditableFormGroup.value.Editaddress2});
    this.SignupGroup.patchValue({'country':this.EditableFormGroup.value.Editcountry});
    this.SignupGroup.patchValue({'state':this.EditableFormGroup.value.Editstate});
    this.SignupGroup.patchValue({'city':this.EditableFormGroup.value.Editcity});
    this.SignupGroup.patchValue({'pincode':this.EditableFormGroup.value.Editpincode});
  }
    // this.SignupGroup.patchValue({'firstName':this.SignupGroup.value.firstName});
    // this.SignupGroup.patchValue({'lastName':this.SignupGroup.value.lastName});
    // this.SignupGroup.patchValue({'email':this.SignupGroup.value.email});
    // this.SignupGroup.patchValue({'password':this.SignupGroup.value.password});
    // this.SignupGroup.patchValue({'repassword':this.SignupGroup.value.repassword});
    // this.SignupGroup.patchValue({'dateofbirth':this.SignupGroup.value.dateofbirth});
    // this.SignupGroup.patchValue({'address1':this.SignupGroup.value.address1});
    // this.SignupGroup.patchValue({'address2':this.SignupGroup.value.address2});
    // this.SignupGroup.patchValue({'pincode':this.SignupGroup.value.pincode});
    // this.SignupGroup.patchValue({'country':this.SignupGroup.value.country});
    // this.SignupGroup.patchValue({'state':this.SignupGroup.value.state});
    // this.SignupGroup.patchValue({'city':this.SignupGroup.value.city});

    let userObj =
  {
    firstName: this.SignupGroup.value.firstName,
    lastName: this.SignupGroup.value.lastName,
    DOB: this.SignupGroup.value.dateofbirth,
    email: this.SignupGroup.value.email,
    password: this.SignupGroup.value.password,
    country: this.SignupGroup.value.country,
    state: this.SignupGroup.value.state,
    city: this.SignupGroup.value.city,
    address1: this.SignupGroup.value.address1,
    address2: this.SignupGroup.value.address2,
    pincode: this.SignupGroup.value.pincode,
  };
  localStorage.setItem('userDetails', JSON.stringify(userObj));
  }

    
  changePassword(item: any) {
    if (item.inputType == 'insertText') {
      if (this.originalPassword.length == 0) this.str = '';
      this.str = this.str + item.data;
      this.originalPassword = this.str
      this.replacedPassword = this.originalPassword.replace(/./gi, '*');
    }
    if (item.inputType == 'deleteContentBackward') {
      this.str = this.str.slice(0, -1);
      this.replacedPassword = this.replacedPassword.slice(0, -1);
      this.originalPassword = this.originalPassword.slice(0, -1);
    }
    this.SignupGroup.patchValue({ password: this.originalPassword });
  }
  // transform view of confirm password to asterisk
  changeConfirmPassword(item: any) {
    if (item.inputType == 'insertText') {
      if (this.originalConfirmPassword.length == 0)
        this.data = '';
      this.data = this.data + item.data;
      this.originalConfirmPassword = this.data;
      this.replacedConfirmPassword = this.originalConfirmPassword.replace(/./gi, '*');
    }
    if (item.inputType == 'deleteContentBackward') {
      this.data = this.data.slice(0, -1);
      this.replacedConfirmPassword = this.replacedConfirmPassword.slice(0, -1);
      this.originalConfirmPassword = this.originalConfirmPassword.slice(0, -1);
    }
    this.SignupGroup.patchValue({ confirmPassword: this.originalConfirmPassword });
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
  

//on click on submit it will validate fiels
  onSubmit() {
    console.log(this.SignupGroup);
    if (this.SignupGroup.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.SignupGroup);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      // console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  // Date Logic
  date = new Date();
  changeDateFormat()
  {
    let month = (this.date.getMonth()+1).toString();
    let date= (this.date.getDate()).toString();
    if(month.length<2) month="0"+month
    if(date.length<2) date="0"+date
    return (this.date.getFullYear()+"-"+month+"-"+date);
  }

// All the true false logic are here
  open(){
    this.editName=true;
    this.isEdit = false;
    this.edit=false;
  }

  editForm()
  {
    this.edit = true;
    // this.isEdit = false;
    this.Ediatble = true;
    console.log(this.EditableFormGroup)
    this.EditableFormGroup.patchValue({'fname':this.SignupGroup.value.firstName, 'lname':this.SignupGroup.value.lastName});
    // console.log(this.SignupGroup.value)
    this.EditableFormGroup.patchValue({'editEmail':this.SignupGroup.value.email});
    this.EditableFormGroup.patchValue({'Editdateofbirth':this.SignupGroup.value.dateofbirth});
    this.EditableFormGroup.patchValue({'Editaddress1':this.SignupGroup.value.address1});
    this.EditableFormGroup.patchValue({'Editaddress2':this.SignupGroup.value.address2});
    this.EditableFormGroup.patchValue({'Editpincode':this.SignupGroup.value.pincode});
    this.EditableFormGroup.patchValue({'Editcountry':this.SignupGroup.value.country});
    this.EditableFormGroup.patchValue({'Editstate':this.SignupGroup.value.state});
    this.EditableFormGroup.patchValue({'Editcity':this.SignupGroup.value.city});
    this.EditableFormGroup.patchValue({'Editpincode':this.SignupGroup.value.pincode});
  }
  
  showName(){
    this.showFirstAndLast=true;
  }
  
  resetForm(){
    this.Ediatble=false;
    this.edit = false;
    this.SignupGroup.reset();
  }
}


