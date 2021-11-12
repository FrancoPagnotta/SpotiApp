import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; // Programacion reactiva 

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef(''); //TODO: @viewChild es una forma de hacer referencia a un elemento html por su alias y acceder a las propiedades del dom de ese elemento. Dentro del @viewChild('alias') sin el numeral y luego declaramos una variable, la cual luego tipamos e inicializamos.

  mockCover!: TrackModel;

  listObservers$:Array<Subscription> = []; //dentro de este array guardamos todas nuestras suscripciones para luego desusbcribirnos en el ngOnDestroy 

  state : string = 'paused';

  constructor(public _multimediaService: MultimediaService) { }

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

    const observer1$ = this._multimediaService.playerStatus$
      .subscribe(res => this.state = res);
    
    this.listObservers$ = [observer1$];
    
  }

  ngOnDestroy(): void{
    this.listObservers$.forEach((subscription) => subscription.unsubscribe()); // Nos desuscribimos
    
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const { clientX } = event;
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x;

    const percentegeOfX = (clickX * 100) / width;
    this._multimediaService.secAudio(percentegeOfX);
  }

}
