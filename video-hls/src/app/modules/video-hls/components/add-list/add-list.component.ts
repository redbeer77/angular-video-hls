import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { channels } from '../channels/models/channel.model';
import { VideoHlsService } from '../../services/video-hls.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  
  public channelsToAdd:channels[]=[];

  addList = new FormGroup({
    nombreLista: new FormControl('MyList'),
    canal: new FormGroup({
      nombre: new FormControl(''),
      url: new FormControl(''),
      imagen: new FormControl(''),
    })
    // ,  imagenLista: new FormControl('')
  });

  constructor(private _channelService:VideoHlsService) { }

  ngOnInit() {
  }
  onSubmit() {
    this._channelService.saveList(this.addList.value.nombreLista,this.channelsToAdd)
    console.log(this.addList.value)
    
    // TODO: Use EventEmitter with form value
    // console.warn(this.addList.value);

    

  }
  addChannel(){
    debugger;
    this.channelsToAdd.push(this.addList.value.canal)

    this.addList.patchValue({
      nombreLista:  this.addList.value.nombreLista,
      canal:{
        nombre:'',
        imagen:'',
        url:'',
      }
    })
    console.warn()
  }
}
