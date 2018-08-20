import { Injectable } from '@angular/core';

@Injectable()
export class VideoHlsService {
  private videoElement: HTMLVideoElement;
  constructor() { }

  setVideoPlayer(item:HTMLVideoElement){
    this.videoElement = item;
  }
  changeVolume(event){
    this.videoElement.volume = +(event.currentTarget.attributes[4].nodeValue) / 10
  }
  muteVolume(){
    this.videoElement.volume = this.videoElement.volume == 1 ? 0:1;
  }
  volumeDown(){
    this.videoElement.volume =((( this.videoElement.volume * 100) - 10) / 100 )
  }

}
