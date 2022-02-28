import { Component, ElementRef, ViewChild } from '@angular/core';
// import { GetdataService } from './services/getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  userName:string= "Priyanshu";
  // @ViewChild('name')
  // name!: ElementRef;

  ngOnInit(){
    // console.log(this.name);
  }
}
