import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { channels } from '../components/channels/models/channel.model';
@Injectable()
export class VideoHlsService {
  public videoElement: HTMLVideoElement;
  public urlChannels: string = 'http://91.121.64.179/tdt_project/output/channels.json';
  public channelsToMenu: channels[];

  constructor(private http:HttpClient) { }

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
  public getAllChannels() {
    return this.http.get(this.urlChannels);
  }

  public async processChannelInfo(data:any):Promise<channels[]>{
    let spainChannels =  data.countries[0]
    let ambitos = spainChannels.ambits
    let generalistas = ambitos[0].channels;
    this.channelsToMenu = generalistas;
    let array:any[];

      

    return   this.channelsToMenu
  }
  public async tryConexion(url:string){
    return await this.http.get(url)
  }
}
