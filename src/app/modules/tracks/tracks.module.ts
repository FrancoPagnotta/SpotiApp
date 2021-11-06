import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TrackPageComponent } from './pages/track-page/track-page.component';


@NgModule({
  declarations: [
    TrackPageComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule,
  ]
})
export class TracksModule { }
