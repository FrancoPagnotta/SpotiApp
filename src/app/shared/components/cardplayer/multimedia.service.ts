import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any> = new EventEmitter<any>();
  public audio!: HTMLAudioElement;
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  // myObservable1$: Observable<any> = new Observable();
  // myObservable1$: Subject<any> = new Subject(); // El Subject es un tipo de Observarble que es Observable y un Observer al mismo tiempo, por lo que a partir de este Subject puedo suscribirme y a su vez puedo llamar a los metodos next, error y complete y nos permite transmitir valores a muchos observadores.
  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('Agua..'); // Este tipo de observable es una variante del Subject y lo que cambia es que debe inicializarse aca, por lo tanto, al tener que inicializarlo aca mismo, ya se pasa la data al suscriber y se ejecuta el suscriber.
  constructor() { 
  // Ejemplo con Observer
  //   this.myObservable1$ = new Observable(
  //     (observer: Observer<any>) => {
  //       observer.next('v');
  //       setTimeout(() => observer.complete(),1000);
  //       setTimeout(() => observer.next('v'),2500);
  //       setTimeout(() => observer.error('error'),4500);
  //     }
  //   )

  // Eejemplo con Subject
  // setTimeout(() => this.myObservable1$.next('Agua..'),2000);
  // setTimeout(() => this.myObservable1$.error('Error..'),3000);
  
  // Ejemplo con BehaviorSubject 
  setTimeout(() => this.myObservable1$.next('Agua..'),2000); 
  setTimeout(() => this.myObservable1$.error('Error..'),3000);
  }
}
