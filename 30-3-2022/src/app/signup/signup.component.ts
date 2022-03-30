import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  SignupGroup: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.SignupGroup = this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      repassword:['',[Validators.required]],
    })
  }

// selectedCountry: string="";
// selectedState: string ="";
// selectedCity: string="";

//   countries = [
//     {id:'1' ,value: 'india', name:'India'},
//     {id:'2', value: 'russia', name:'Russia'}
//   ];
//   states = [
//     {id:'1',value:'bihar', name:'Bihar', country:'India'},
//     {id:'2',value:'uttrakhand', name:'Uttrakand', country:'India'},
//     {id:'3',value:'crimea', name:'Crimea', country:'Russia'},
//     {id:'4',value:'altai',name:'Altia', country:'Russia'}
//   ];
//   city = [
//     {value:'patna', name:'Patna', state:'Bihar'},
//     {value:'siwan', name:'Siwan', state:'Bihar'},
//     {value:'dehradun', name:'Dehradun', state:'Uttrakand'},
//     {value:'haridwar', name:'Haridwar', state:'Uttrakand'},
//     {value:'saky', name:'Saky', state:'Crimea'},
//     {value:'sevastopol', name:'Sevastopol', state:'Crimea'},
//     {value:'karakol', name:'Karakol', state:'Altia'},
//     {value:'keley', name:'Keley', state:'Altia'},
//   ]

  
//   dropdownState: any = [];

//   changeState(value:MatSelectChange) {
//    this.states.filter(i => 
//       {
//         if(i.country == value.value)
//         { 
//           this.dropdownState.push(i.name)
//         }
//         this.dropdownCity=[];
//       }); 
//   }

//   dropdownCity: any = [];

//   changeCity(value:MatSelectChange) {
//     this.city.filter(i =>
//       {
//         if(i.state == value.value)
//         this.dropdownCity.push(i.name)
//       });
//   }
  
  get email(){
    return this.SignupGroup.controls['email'];
  }
  
  onAddSkills(){
    this.SignupGroup.get('skills').push(new FormControl(null))
  }

  onDeleteSkills(){
    this.SignupGroup.delete('skills').pop(new FormControl(null))
  }
  
  onSubmit(){
    console.log(this.SignupGroup.value);
  }


}
