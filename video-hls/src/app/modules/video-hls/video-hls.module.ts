import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoHlsComponent } from './components/video-hls/video-hls.component';
import { VideoHlsDirective } from './directives/video-hls/video-hls.directive';
import { VideoControlsComponent } from './components/video-controls/video-controls.component';
import { VideoHlsService } from './services/video-hls.service';
import { FormsModule }   from '@angular/forms';
import { ShowcontrolsDirective } from './directives/showcontrols/showcontrols.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    VideoHlsComponent,
    VideoHlsDirective,
    VideoControlsComponent,
    ShowcontrolsDirective
  ],
  exports:[
    VideoHlsComponent
  ],
  providers:[
    VideoHlsService
  ]
})
export class VideoHlsModule { }
