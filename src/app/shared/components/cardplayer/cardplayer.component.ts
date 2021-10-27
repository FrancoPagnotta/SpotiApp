import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-cardplayer',
  templateUrl: './cardplayer.component.html',
  styleUrls: ['./cardplayer.component.css']
})
export class CardplayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track!: TrackModel; // puedo ponerle el signo que ! deja pasar por alto la inicializacion de la propiedad.
  
  constructor() { }

  ngOnInit(): void {
  }

}
