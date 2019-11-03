import { Component, Input } from '@angular/core';
import { VideoHlsService } from '../../services/video-hls.service';


@Component({
  selector: 'app-video-hls',
  templateUrl: './video-hls.component.html',
  styleUrls: ['./video-hls.component.css']
})
export class VideoHlsComponent  {

@Input('url') url:string;

  constructor(public _videoService:VideoHlsService) { }

  public setUrl(url:string){
    // debugger;
    this.url = url;
  }
}
