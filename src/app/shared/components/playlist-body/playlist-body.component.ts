import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-playlist-body',
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.css']
})
export class PlaylistBodyComponent implements OnInit {

  @Input() tracks:Array<TrackModel> = [];

    optionSort: { property: string | null, order: string } = { property: null, order: 'asc' };

  constructor() { }

  ngOnInit(): void {
  }
  
  changeSort (property: string): void { // void sinifica vacio o sea que retorna vacio.
    
    const { order } = this.optionSort; // Destructuracion de objeto. 

    this.optionSort = {
      property, // forma abreviada de property:property porque llave valoe tienen el mismo nombre. 
      order: order == 'asc' ? 'desc' : 'asc'
    }

    console.log(this.optionSort);
  }
}
