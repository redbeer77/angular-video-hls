import { Injectable } from '@angular/core';

@Injectable()
export class VideoHlsService {
  public videoElement: HTMLVideoElement;
  constructor() { }

  setVideoPlayer(item:HTMLVideoElement){
    this.videoElement = item;
  }
  changeVolume(event){
    this.videoElement.volume = +(event) / 10
  }
  muteVolume(){
    this.videoElement.muted = !this.videoElement.muted
  }
  volumeDown(){
    this.videoElement.volume =((( this.videoElement.volume * 100) - 10) / 100 )
  }
  fullScreen(){
    if (this.videoElement.webkitEnterFullScreen) {
      this.videoElement.webkitEnterFullScreen()
    }
  }
}
