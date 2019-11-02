import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-video-hls',
  templateUrl: './video-hls.component.html',
  styleUrls: ['./video-hls.component.css']
})
export class VideoHlsComponent  {

@Input('url') url:string;

  constructor() { }

  public setUrl(url:string){
    // debugger;
    this.url = url;
  }
}
