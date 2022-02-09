import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-final-progress',
  templateUrl: './final-progress.component.html',
  styleUrls: ['./final-progress.component.css']
})
export class FinalProgressComponent implements OnInit {

  @Input() pass:any;

  constructor() { }

  ngOnInit(): void {
  }

}
