import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoHlsComponent } from './video-hls.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoHlsComponent
  ],
  exports:[
    VideoHlsComponent
  ]
})
export class VideoHlsModule { }
