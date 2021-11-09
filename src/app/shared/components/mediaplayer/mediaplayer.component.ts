import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; // Programacion reactiva 

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit, OnDestroy {

  mockCover!: TrackModel;

  listObservers$:Array<Subscription> = []; //dentro de este array guardamos todas nuestras suscripciones para luego desusbcribirnos en el ngOnDestroy 

  constructor(public _multimediaService:MultimediaService) { }

  ngOnInit(): void {
    // const suscription$:Subscription = this._multimediaService.callback.subscribe((res:TrackModel) => console.log('Recibiendo cancion....', res)); // Nos subscribimos a callback que es un EventEmiter, subscribe lo que hace es escuchar 
    
    // this.listObservers$ = [suscription$]; // Guardamos la subscripcion en el array de suscripciones

    // const suscription1$ = this._multimediaService.myObservable1$
    // .subscribe(res => {
    //   console.log('El agua llega perfecto',res)
    // }, err => console.log('Se tapó la tuberia',err))
  //   this._multimediaService.trackInfo$
  //   .subscribe(res => {
  //     console.log('Debo reproducir esta cancion: ', res);
  //   })
  }

  ngOnDestroy(): void{
    // this.listObservers$.forEach((subscription) => subscription.unsubscribe()); // Nos desuscribimos
    // console.log("booooooooooom");
    
  }

}
