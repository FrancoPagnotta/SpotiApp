import { Injectable } from '@angular/core';
// import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api;
  
  constructor(private _httpClient: HttpClient) { 
}

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(track => track._id === id)
      resolve(listTmp);
    })
  }


  getAllTracks$():Observable<any> { // con este metodo hacemos exactamente lo mismo que con el metodo getAllRandom y con el filter, solo que en este  caso lo hacemos mediante el uso de una promesa y con el mergeMap en el metodo getAllRandom en la linea 45. La idea de hacerlo con promesas es para agregarle dificultad, para aprender a trabajar con promesas al crear metodos que hacen peticiones http. 
    return this._httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }:any) => { // Uso de la desestructuracion de js
        return data
      })
    ) // Usamos pipe(map()) para agarrar la data que nos devuelve la API que es un objeto que dentro contiene la propiedad data que es un array de objetos, la desestructuramos con {data} o sea nos quedamos con la propiedad data que es un array de objetos y a partir de data creamos un nuevo array. Esto es lo que hace el metodo map, a partir de un array, crea un nuevo array.  
  }


  getAllRandom$():Observable<any> {
    return this._httpClient.get(`${this.URL}/tracks`)
    .pipe(
      // map(({ data }:any)=> {
      //   return data.reverse(); // Devolvemos la lista revertida
      // })
      // map(({ data }:any) => {
      //   return data.filter((dataFiltrada:TrackModel) => dataFiltrada._id !== 1); // Devolvemos la data menos el objeto que tiene la propiedad _id: 1
      // })
      mergeMap(({ data }:any)=> this.skipById(data,1)), // Obtenemos el mismo resultado que con el filter de aca arriba linea 43
      catchError((err) => {
        const { status, statusText } = err;
        console.log('Ha ocurrido un error en la peticion', {status,statusText});
        return of ([])
      })
    )
  }


}
