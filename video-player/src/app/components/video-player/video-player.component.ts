
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
video!:string;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
      this._activatedRoute.queryParams.subscribe((params:any)=> {
        console.log('par:',params);
        this.video=params.link;
      })
  }

  onBack(){
    this._router.navigate([''])
  }
}
