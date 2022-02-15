import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter';

  class9Search:any = "";
  class10Search:any = "";

  subjectArr = [
    {
      sno:1,
      class9:'Maths',
      class10:'Physics',
      class11:'Biology',
      class12:'General Knowledge'
    },
    {
      sno:2,
      class9:'Data Structure',
      class10:'Operating System',
      class11:'TOC',
      class12:'Machine Learning'
    },
    {
      sno:3,
      class9:'Angular',
      class10:'JavaScript',
      class11:'TypeScript',
      class12:'ReactJS'
    },
    {
      sno:4,
      class9:'C++',
      class10:'Python',
      class11:'Java',
      class12:'C Language'
    },
  
  ]

}

