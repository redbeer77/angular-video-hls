import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoHlsComponent } from './components/video-hls/video-hls.component';
import { VideoHlsDirective } from './directives/video-hls/video-hls.directive';
import { VideoControlsComponent } from './components/video-controls/video-controls.component';
import { VideoHlsService } from './services/video-hls.service';
import { FormsModule }   from '@angular/forms';
import { ShowcontrolsDirective } from './directives/showcontrols/showcontrols.directive';
import { ChannelsComponent } from './components/channels/channels.component';

import { HttpClientModule } from '@angular/common/http';
import { WindowComponent } from './components/window/window.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PortalModule
  ],
  declarations: [
    VideoHlsComponent,
    VideoHlsDirective,
    VideoControlsComponent,
    ShowcontrolsDirective,
    ChannelsComponent,
    WindowComponent
   
  ],
  exports:[
    VideoHlsComponent
  ],
  providers:[
    VideoHlsService
  ]
})
export class VideoHlsModule { }
