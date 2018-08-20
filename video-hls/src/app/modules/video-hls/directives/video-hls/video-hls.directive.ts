import { VideoHlsService } from '../../services/video-hls.service';
import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import * as HLS from 'hls.js';

@Directive({
  selector: '[appVideoHls]'
})
export class VideoHlsDirective implements OnInit{
  
  @Input('scr') scr: any;

  private hls : any;
  private element: HTMLVideoElement;
  
  constructor(videoPlayer: ElementRef,public _videoService: VideoHlsService) { 
    this.element = videoPlayer.nativeElement;
    this.element.autoplay = true;
  }

  ngOnInit(): void {
    this._videoService.setVideoPlayer(this.element)
    this.establishHlsStream();
  }
  establishHlsStream(): void {
    if (this.hls) {
      this.hls.destroy();
    }
    this.hls = new HLS({
      startLevel: 2,
      capLevelToPlayerSize: true,
    });

    if (HLS.isSupported()) {
      this.hls.loadSource(this.scr);
      this.hls.attachMedia(this.element);
      this.hls.on(HLS.Events.MANIFEST_PARSED,function() {
        this.element.play();
    });
    }
  }

}
