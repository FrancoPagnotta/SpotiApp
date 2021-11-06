import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  tracksTrending:Array<TrackModel> = []; 
  tracksRandom:Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];
  
  constructor(private _trackService: TrackService) { }

  ngOnInit(): void {
    // this._trackService.getAllTracks$() =======> podemos hacer la suscripcion directamente en el ngOnInit
    // .subscribe((res: TrackModel[])=> {
    //   this.tracksTrending = res
    // });

    // this._trackService.getAllRandom$()
    // .subscribe((res: TrackModel[])=> { 
    //   this.tracksRandom = res;
    // });

  this.loadDataAll(); // O bien hacer la suscripcion en un metodo aparte por fuera del ngOnInit y llamar a dicho metodo aca adentro del ngOnInit, cosa que queda mas prolijo y profesional. 
  this.loadDataRandom();
  }


  // loadDataAll(): void {
   async loadDataAll(): Promise<any> { // Este es para el ejemplo de promesas
    // this._trackService.getAllTracks$()
    // .subscribe((res: TrackModel[])=> { // Manejo del observable con suscripcion
    //   this.tracksTrending = res
    // }, err => console.log('Ha sucedido un error de conexión'));

    //  Tambien podemos manejar el observarble con promesas, no solo como arriba que es la forma tradicional.
    // this._trackService.getAllTracks$().toPromise()
    //   .then(res => console.log(res))
    //   .catch(err => console.log('Ha ocurrido un error de conexion',err))

    // Tambien podemos implementar una promesa con async y await 
    // const dataAllTracks = await this._trackService.getAllTracks$().toPromise() 
    // console.log(dataAllTracks);

    // const dataRandomTracks = await this._trackService.getAllRandom$().toPromise()
    // console.log(dataRandomTracks);

  // O bien lo mismo pero asi: 
  this.tracksTrending = await this._trackService.getAllTracks$().toPromise()
  console.log(this.tracksTrending);

  // this.tracksRandom = await this._trackService.getAllRandom$().toPromise()
  // console.log(this.tracksRandom);
  }
  
  loadDataRandom(): void {
    this._trackService.getAllRandom$()
    .subscribe((res: TrackModel[])=> { 
      this.tracksRandom = res;
    }, err => console.log('Ha ocurrido un error de conexion',err));
  }

  ngOnDestroy(): void {

  }

}
