import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter';

  classArr = ["class 9", "class 10", "class 11", "class 12"];

  subject1Arr = ["Maths", "Physics", "Chemistry", "History", "Civics"];
  subject2Arr = ["HTML", "CSS", "Bootstrap", "Angular", "React"];
  subject3Arr = ["C++", "JavaScript", "Python", "Java", "C"];
  subject4Arr = ["Operating System", "Data Structure", "TOC", "Big Data", "Machine Learning"];

}

