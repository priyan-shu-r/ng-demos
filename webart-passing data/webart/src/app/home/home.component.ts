import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../dashboard';
import { Contact } from '../contact';
import { Detail } from '../detail';
import { Progress } from '../progress';
import { FinalProgress } from '../final-progress';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
 
   dashboard:Dashboard= {
    name:"John Doe",
    work:"Full Stack Developer",
    address:"Bay Area, San Franciso, CA"
  }
 
   contact:Contact={
    website: "https://bootdey.com",
    github: "bootdey",
    twitter: "@bootdey",
    instagram: "bootdey",
    facebook: "bootdey"
}

   detail:Detail={
    name: "Kenneth valdez",
    email: "fip@yukmuh.al",
    phone: "(239)816-9027",
    mobile: "(320)380-4539",
    address: "Bay Area, San Franciso, CA"
  }

  progress1:Progress={
    design: "Web Design",
    width1:'80%',
    markup: "website Markup",
    width2: '70%',
    page: "One Page",
    width3: '90%',
    template: "Mobile Template",
    width4: '50%',
    api:"Backend API",
    width5: '60%'
  }

  progress2:FinalProgress={
    design: "Web Design",
    width1:'80%',
    markup: "website Markup",
    width2: '70%',
    page: "One Page",
    width3: '90%',
    template: "Mobile Template",
    width4: '50%',
    api:"Backend API",
    width5: '60%'
  }


  

  constructor() { }

  ngOnInit(): void {
  }

}
