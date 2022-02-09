import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-status',
  templateUrl: './progress-status.component.html',
  styleUrls: ['./progress-status.component.css']
})
export class ProgressStatusComponent implements OnInit {

  @Input() pass:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
