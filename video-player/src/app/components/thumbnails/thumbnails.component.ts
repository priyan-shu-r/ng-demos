import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {
  @Input ('images') images?:string
  @Input ('videoLink') videoLink?:string

  constructor( private route: Router) { }

  ngOnInit(): void {
    // console.log(this.images);
  }

  onClick(){
    if(this.videoLink) this.route.navigate(['video'], { queryParams: { link: this.videoLink } })
    console.log('link',this.videoLink);   //store song value in video link
  }

}
