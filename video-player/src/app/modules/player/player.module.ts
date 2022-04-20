import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from 'src/app/components/video-player/video-player.component';
import { ThumbnailsComponent } from 'src/app/components/thumbnails/thumbnails.component';
import { VideoDetailsComponent } from 'src/app/components/video-details/video-details.component';
import { VideoListComponent } from 'src/app/components/video-list/video-list.component';
import { HomeComponent } from 'src/app/components/home/home.component';
@NgModule({
  declarations: [
    VideoPlayerComponent,
    ThumbnailsComponent,
    VideoDetailsComponent,
    VideoListComponent,
    HomeComponent
  ],

  imports: [
    CommonModule,
  ],

  exports: [
     VideoPlayerComponent,
     ThumbnailsComponent,
     VideoDetailsComponent,
     VideoListComponent,
     HomeComponent
  ]
  
})
export class PlayerModule {}
