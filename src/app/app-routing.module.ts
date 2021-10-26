import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '@modules/home/pages/homepage/homepage.component';

const routes: Routes = [ // Aca declaramos las rutas, en este array de rutas
  { 
    path: 'auth', 
    loadChildren:()=> import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: '', 
    component: HomepageComponent,
    loadChildren:()=> import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }