import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
  
  mockTracksList = [
    {
      name:'Bebe (oficial)'
    },

    {
      name:'Bebe (oficial)'
    },
    
    {
      name:'Bebe (oficial)'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
