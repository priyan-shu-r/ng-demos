import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  @Input() class:any;
  @Input() subjectList:any;

  constructor() { }

  data:string="";
  

  ngOnInit(): void {
  }

}
