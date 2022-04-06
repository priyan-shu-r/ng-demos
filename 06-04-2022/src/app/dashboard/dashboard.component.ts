import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // UserName: any;
  // Email: any;
  // lastName: any;
  // dateOfBirth: any;
  // userAddress1: any;
  // userCountry: any;
  // userState: any;
  // userCity: any;
  // userPincode: any;
  // userAddress2: any;
  userObj: any;
  // user:any;
  constructor() { }

  ngOnInit(): void {
    // this.UserName = localStorage.getItem('userFirstName');
    // this.lastName = localStorage.getItem('userLastName');
    // this.Email = localStorage.getItem('userEmail');
    // this.dateOfBirth = localStorage.getItem('userDateOfBirth');
    // this.userAddress1 = localStorage.getItem('userAddress1');
    // this.userAddress2 = localStorage.getItem('userAddress2');
    // this.userCountry = localStorage.getItem('userCountry');
    // this.userState = localStorage.getItem('userState');
    // this.userCity = localStorage.getItem('userCity');
    // this.userPincode = localStorage.getItem('userPincode');


    this.userObj = JSON.parse(localStorage.getItem("userDetails") || '')
    console.log(this.userObj)
  }

}
