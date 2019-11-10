import { VideoHlsService } from '../../services/video-hls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-controls',
  templateUrl: './video-controls.component.html',
  styleUrls: ['./video-controls.component.css']
})
export class VideoControlsComponent implements OnInit {
  volume:number;
  constructor(public _videoService:VideoHlsService) { }

  ngOnInit() {
  }
  openVideoinWindow(){
    // debugger;
    this._videoService.showPortal = true;
     this._videoService.url = this._videoService.chanToSew.options[0].url
  }
}
