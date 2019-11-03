import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { channels } from '../components/channels/models/channel.model';
import { send } from 'q';
@Injectable()
export class VideoHlsService {
  public videoElement: HTMLVideoElement;
  public urlChannels: string = 'http://91.121.64.179/tdt_project/output/channels.json';
  public channelsToMenu: channels[];
  public ambitsToSel:string[]=[];
  private allAmbits: any[];
  public chanToSew:channels = {};
  public opacity:number = 0;

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
   getImage():string{
     return this.chanToSew.logo || '';
   }
  setImage(channSelected:channels){
    this.chanToSew = channSelected
    // this.videoElement.volume =((( this.videoElement.volume * 100) - 10) / 100 )
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
    let ambitos:any[] = spainChannels.ambits
    this.ambitsToSel = ambitos.map(a=> { 
      return a.name;
    })

    this.allAmbits =spainChannels.ambits;
    let generalistas = ambitos[0].channels;
    this.channelsToMenu = generalistas;
    let array:any[];
    return   this.channelsToMenu
  }

  public async tryConexion(url:string){
    return await this.http.get(url)
  }

  public getM3UList(url:string) {
    return this.http.get(url);
  }

  public async filterChannels(ambit:string):Promise<channels[]>{
    let send = this.allAmbits.filter( a=> a.name === ambit)
    return send[0].channels;
  }

}
