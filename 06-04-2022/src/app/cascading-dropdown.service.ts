import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CascadingDropdownService {
  
  

  constructor() { }

  getCountries(){

    return [

    {id:1,name:'India'},

    {id:2,name:'Russia'}
    ]

    }

 getStates(){

   return [

    {id:1,country_name:'India',name:'Uttar Pradesh'},

    {id:2,country_name:'India',name:'Uttarakhand'},

    {id:3,country_name:'Russia',name:'Crimea'},

    {id:4,country_name:'Russia',name:'Altia'},

    {id:5,country_name:'India',name:'Bihar'},

]

}

 getCities(){
  return[

 {id:1,state_name:'Uttar Pradesh',name:'Noida'},

 {id:2,state_name:'Uttar Pradesh',name:'Kanpur'},

 {id:3,state_name:'Uttarakhand',name:'Roorkee'},

 {id:4,state_name:'Uttarakhand',name:'Dehradun'},

 {id:5,state_name:'Bihar',name:'Patna'},

 {id:6,state_name:'Bihar',name:'Siwan'},

 {id:6,state_name:'Crimea',name:'Sewastopol'},

 {id:7,state_name:'Crimea',name:'Saky'},

 {id:8,state_name:'Altia',name:'Karacol'},

 {id:9,state_name:'Altia',name:'Keley'},

   ]
  }
}
