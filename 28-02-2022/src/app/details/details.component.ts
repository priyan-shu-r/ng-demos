import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetdataService } from '../services/getdata.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  users: any;
  // inject getdata service
  constructor(private getData: GetdataService) { }

  ngOnInit(): void {
    // calling the getUsers() method from getData service
    this.getData.getUsers().subscribe(data => {
      this.users = data;
    }, (err) => {
      console.log("unable to get data from url");
    })

    
  }

  



}
