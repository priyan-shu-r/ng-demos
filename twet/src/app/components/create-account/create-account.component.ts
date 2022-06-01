import { Component, OnInit } from '@angular/core';

// interface Food {
//   value: string;
//   viewValue: string;
// }

// interface Car {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor() { }
  showPhone:boolean=true;

  ngOnInit(): void {
  }

  // selectedValue!: string;
  // selectedCar!: string;

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];

  // cars: Car[] = [
  //   {value: 'volvo', viewValue: 'Volvo'},
  //   {value: 'saab', viewValue: 'Saab'},
  //   {value: 'mercedes', viewValue: 'Mercedes'},
  // ];

  changeToEmail(){
   this.showPhone= false;
  }

  changeToPhone(){
    this.showPhone=true;
  }

}
