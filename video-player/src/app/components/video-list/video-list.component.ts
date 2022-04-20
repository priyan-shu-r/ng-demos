import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  array: any =[];

  constructor( private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.HttpClient.get("assets/data.json").subscribe(data => {
      console.log('All Data',data);
      this.array = data;
    })
  }
}
