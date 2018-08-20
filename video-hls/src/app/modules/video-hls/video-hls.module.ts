import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoHlsComponent } from './components/video-hls/video-hls.component';
import { VideoHlsDirective } from './directives/video-hls.directive';
import { VideoControlsComponent } from './components/video-controls/video-controls.component';
import { VideoHlsService } from './services/video-hls.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoHlsComponent,
    VideoHlsDirective,
    VideoControlsComponent
  ],
  exports:[
    VideoHlsComponent
  ],
  providers:[
    VideoHlsService
  ]
})
export class VideoHlsModule { }
