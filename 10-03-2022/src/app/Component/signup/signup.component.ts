
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
// import { stat } from 'fs';
import { GetDataService } from 'src/app/services/get-data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private router: Router, public getDataService: GetDataService) { }

  ngOnInit(): void { }
  
date: any;
fileAttr = 'Choose File';
dataimage: any;
selectedCountry: any;
selectedState: any;
selectedCity: any;

// states: any =[];
// cities: any =[];


  // countries = [
  //   {value: 'india', name:'India', states:[{name:'Bihar',cities:['Patna','Siwan']}]},
  //   {value: 'russia', name:'Russia', states:[{name:'Rajasthan',cities:['Jaipur','Udaipur']}]},
  // ];
  
  // changeCountry(country: MatSelectChange){
  //   this.states = this.countries.find((cntry:any)=> cntry.name == country.value)?.states;
  // }

  // changeState(state:any){
  //   this.cities = this.countries.find((cntry: any) => cntry.name == this.selectedCountry)?.states.find((stat: any) => stat.name == state.target.value)?.cities;
  // }
  countries = [
    {id:'1' ,value: 'india', name:'India'},
    {id:'2', value: 'russia', name:'Russia'}
  ];
  states = [
    {id:'1',value:'bihar', name:'Bihar', country:1},
    {id:'2',value:'uttrakhand', name:'Uttrakand', country:1},
    {id:'3',value:'crimea', name:'Crimea', country:2},
    {id:'4',value:'altai',name:'Altia', country:2}
  ];
  city = [
    {value:'patna', name:'Patna', state:'Bihar'},
    {value:'siwan', name:'Siwan', state:'Bihar'},
    {value:'dehradun', name:'Dehradun', state:'Uttrakand'},
    {value:'haridwar', name:'Haridwar', state:'Uttrakand'},
    {value:'saky', name:'Saky', state:'Crimea'},
    {value:'sevastopol', name:'Sevastopol', state:'Crimea'},
    {value:'karakol', name:'Karakol', state:'Altia'},
    {value:'keley', name:'Keley', state:'Altia'},
  ]

  
  dropdownState: any = [];

  changeState(value:any) {
   this.states.filter(i => 
      {
        if(i.country == value.value)
        this.dropdownState.push(i.name)
      }); 
  }

  dropdownCity: any = [];

  changeCity(value:any) {
    this.city.filter(i =>
      {
        if(i.state == value.value)
        this.dropdownCity.push(i.name)
        // console.log(value)
      });
  }

  personalInfoFormGroup = this._formBuilder.group({
    personalnfoFormControlFirstName: ['', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],
    personalInfoFormControlLastName: ['', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],
    personalInfoFormControlEmail: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9.\.]+@.[a-z]+.\.[com]+")]],
    personalInfoFormControlPassword: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})")]],
    personalInfoFormControlRepassword: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})")]],
    personalInfoFormControlPhoneNumber: ['', [Validators.required, Validators.pattern("(0/91)?[6-9][0-9]{9}")]],
    personalInfoFormControlBirthDate: ['', Validators.required]
  });


  addressFormGroup = this._formBuilder.group({
    address1FormControl: ['', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],
    address2FormControl: ['', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],
    addressFormControlCountryName: ['', Validators.required],
    addressFormControlStateName: ['', Validators.required],
    addressFormControlCityName: ['', Validators.required],
    addressFormControlZipcode: ['', [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{2}[0-9]{3}$")]],
  });

  profileFormGroup = this._formBuilder.group({
    profileFormControl: ['', Validators.required],
  });

  reviewFormGroup = this._formBuilder.group({

  });

// Use to show birth date 
  dateName(event: any) {
    const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = "";
    date = Month[(event.value.getMonth())] + " " + (event.value.getDate()) + ", " + (event.value.getFullYear());
    this.personalInfoFormGroup.value.personalInfoFormControlBirthDate = date;
    console.log(date);
  }


 
  showImage(imgFile: any) {
    console.log(imgFile)

    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });

      //convrting in base64
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          console.log(imgBase64Path);
          this.dataimage = imgBase64Path;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
    }

  }

  checkImage() {
    var reader = new FileReader();
    reader.readAsDataURL(this.profileFormGroup.value.profileFormControl);
    reader.onload =  () => {
      this.dataimage = reader.result
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    console.log();
  }

  



  get personalnfoFormControlFirstName() {
    return this.personalInfoFormGroup.controls['personalnfoFormControlFirstName'];
  }
  get personalInfoFormControlLastName() {
    return this.personalInfoFormGroup.controls['personalInfoFormControlLastName'];
  }
  get personalInfoFormControlEmail() {
    return this.personalInfoFormGroup.controls['personalInfoFormControlEmail'];
  }
  get personalInfoFormControlPassword() {
    return this.personalInfoFormGroup.controls['personalInfoFormControlPassword'];
  }
  get personalInfoFormControlRepassword() {
    return this.personalInfoFormGroup.controls['personalInfoFormControlRepassword'];
  }
  get personalInfoFormControlPhoneNumber() {
    return this.personalInfoFormGroup.controls['personalInfoFormControlPhoneNumber'];
  }
  get address1FormControl() {
    return this.addressFormGroup.controls['address1FormControl'];
  }
  get address2FormControl() {
    return this.addressFormGroup.controls['address2FormControl'];
  }
  get addressFormControlZipcode() {
    return this.addressFormGroup.controls['addressFormControlZipcode'];
  }
  
}





