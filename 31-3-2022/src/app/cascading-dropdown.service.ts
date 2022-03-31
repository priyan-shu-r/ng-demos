import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CascadingDropdownService {
  
  

  constructor() { }

  getCountries(){

    return [

    {id:1,name:'India', value:'India'},

    {id:2,name:'USA', value:'USA'}
    ]

    }

 getStates(){

   return [

    {id:1,country_id:1,name:'Uttar Pradesh', value:'Uttar Pradesh'},

    {id:2,country_id:1,name:'Uttarakhand',value:'Uttrakhand'},

    {id:3,country_id:2,name:'Alaska',value:'Alaska'},

    {id:4,country_id:2,name:'Albama',value:'Albama'},

    {id:5,country_id:2,name:'California',value:'California'},

    {id:6,country_id:1,name:'Haryana',value:'Haryana'},

]

}

 getCities(){
  return[

 {id:2,state_id:1,country_id:1,name:'Noida',value:'Noida'},

 {id:3,state_id:1,country_id:1,name:'Meerut',value:'Meerut'},

 {id:4,state_id:2,country_id:1,name:'Roorkee',value:'Roorkee'},

 {id:5,state_id:2,country_id:1,name:'Dehradun',value:'Dehradun'},

 {id:6,state_id:6,country_id:1,name:'Gurgaon',value:'Gurugaon'},

 {id:7,state_id:5,country_id:2,name:'San Diega',value:'San Diega'},

 {id:8,state_id:5,country_id:2,name:'Los Angeles',value:'Los Angles'},

 {id:9,state_id:3,country_id:2,name:'Anchorage',value:'Anchorage'},
   ]
  }
}
