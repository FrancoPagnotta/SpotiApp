import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { CardplayerComponent } from './components/cardplayer/cardplayer.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { PlaylistBodyComponent } from './components/playlist-body/playlist-body.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipes/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';


@NgModule({
  declarations: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardplayerComponent,
    SectionGenericComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  
  exports: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardplayerComponent,
    SectionGenericComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent,
    OrderListPipe
    
  ]
})
export class SharedModule { }
