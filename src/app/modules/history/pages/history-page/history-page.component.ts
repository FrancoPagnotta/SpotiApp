import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  listResults$: Observable<any> = of([]); 

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
  }

  reciveData(event: string): void {
    console.log('Estoy en el padre',event);
    this.listResults$ = this._searchService.searchTracks$(event) // No es necesario suscribirse a listResults$ porque en la plantilla usamos el pipe | async 

  }

}
