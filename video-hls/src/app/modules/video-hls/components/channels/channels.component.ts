import { VideoHlsService } from '../../services/video-hls.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { channels } from './models/channel.model';
import {} from '../../../../../assets/'
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  public channels: Promise<channels[]>;
  public urlView:string;
  public channelSelected: string;
  public channel: string ="";
  

  @Output() channelSel = new EventEmitter<string>();
  public ambitsToSel: string[];

  constructor(public channService:VideoHlsService) { }

  ngOnInit() {
    this.channService.getAllChannels().subscribe(
      data=>{   
        this.channels = this.channService.processChannelInfo(data);
        this.ambitsToSel = this.channService.ambitsToSel;
      }
       );


      
    // this.channService.getM3UList('src/assets/example.m3u').subscribe(
    //   list=> {
    //     debugger;
    //   }
    // )

  }
  toSew(channel:channels){
    // console.log(channel)
    // debugger;
    // this.urlView = channel.options[0].url
    this.channel =  channel.options[0].url;
    this.channelSelected = channel.options[0].url
    this.channelSel.emit(channel.options[0].url)
    //  this.channelSel.emit(channel.options[0].url)
   
  }
  isSelected(channel):boolean
  {

    return   this.channelSelected === (channel.options.length > 0 && channel.options[0].hasOwnProperty("url") ? channel.options[0].url : "")

  }
  onAmbitChange(event:string){
    this.channels = this.channService.filterChannels(event)
  }
}
