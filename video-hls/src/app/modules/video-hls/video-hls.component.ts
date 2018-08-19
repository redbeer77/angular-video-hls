import { Component, OnInit, ViewChild } from '@angular/core';
import * as HLS from 'hls.js';

@Component({
  selector: 'app-video-hls',
  templateUrl: './video-hls.component.html',
  styleUrls: ['./video-hls.component.css']
})
export class VideoHlsComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer: any;
  public hls : any;

  constructor() { }

  ngOnInit() {
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
      this.hls.attachMedia(this.videoplayer.nativeElement);

      this.hls.on(HLS.Events.MANIFEST_PARSED,function() {
        this.videoplayer.nativeElement.play();
    });
    }
  }

}
