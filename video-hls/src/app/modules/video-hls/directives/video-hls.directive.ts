import { Directive, ElementRef, OnInit } from '@angular/core';
import * as HLS from 'hls.js';

@Directive({
  selector: '[appVideoHls]'
})
export class VideoHlsDirective implements OnInit{

  private hls : any;
  private element: HTMLVideoElement;
  
  constructor(videoPlayer: ElementRef) { 
    this.element = videoPlayer.nativeElement;
    this.element.muted = true;
    this.element.autoplay = true;

  }

  ngOnInit(): void {
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
      
      
      this.hls.loadSource('https://cflive-emea.live-delivery.ooyala.com/out/u/jb44pwd2tj7w5/111819/wyYXIxZTE6okZbyKLzxq8TXa4a-SQlAO/cs/d77d4356674b449695b1c0f19fbd6fae_6.m3u8');
      this.hls.attachMedia(this.element);

      this.hls.on(HLS.Events.MANIFEST_PARSED,function() {
        this.element.play();
    });
    }
  }

}
