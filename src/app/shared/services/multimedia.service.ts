import { Injectable, EventEmitter } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any> = new EventEmitter<any>();
  public audio!: HTMLAudioElement;
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined); // Los Behavior Subjects se inicializan en los parentesis, en este caso lo inicializamos con undefined
  public timeLapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaning$: BehaviorSubject<string> = new BehaviorSubject('-00:00');

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
  // setTimeout(() => this.myObservable1$.next('Agua..'),2000); 
  // setTimeout(() => this.myObservable1$.error('Error..'),3000);

  this.audio = new Audio();
  this.trackInfo$.subscribe((res) => {
    console.log(res);
    if(res) this.setAudio(res);
  })

  this.listenAllEvents();

  }

  public setAudio(track: TrackModel): void {
    console.log(track);
    this.audio.src = track.url;
    this.audio.play();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate',this.calculateTime,false);
  }

  private calculateTime = ()=> {
    const { duration, currentTime } = this.audio;
    this.setTimeLapsed(currentTime);
    this.timeRemaning(currentTime,duration);
  }

  private setTimeLapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60); // Con el % calculamos el residuo de una division, ejemplo el residuo de 4 / 2 es 0, el residuo de 4 / 3 es 1, etc. 
    let minutes = Math.floor((currentTime / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds; // Esto es para que los segundos se muestren asi 01, 02, 03, 04, 04, 05...10,11, etc. 
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    this.timeLapsed$.next(displayFormat); // Recordar que el next lo que hace es reinicializar el BehaviorSubject con un nuevo valor y eso se le notifica a todos sus suscriptores o sea declaramos e inicializamos el BehaviorSubject con valor a, entonces todos sus suscriptores observan ese valor o sea escuchan ese valor, pero cuando le paso next(b) ahora el BehaviorSubject lleva el valor b y todos sus sucriptores observan, escuchan esta nueva inicializacion. Esto aplica tanto al Subject como al BehaviorSubject, porque recordemos que el BehaviorSubject es una variante del Subject. 
  }

  private timeRemaning(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;

    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds; // Esto es para que los segundos se muestren asi 01, 02, 03, 04, 04, 05...10,11, etc. 
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    this.timeRemaning$.next(displayFormat);
  }
}
