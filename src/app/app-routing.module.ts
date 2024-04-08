import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'  // Redirige '/' vers '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hotels',
    component: HotelsComponent
  },
  {
    path: 'hotelDetails',
    component: HotelDetailsComponent
  },
  {
    path: '**',  // Route wildcard pour les URL non reconnues
    redirectTo: 'home'  // Redirige toutes les autres URL vers '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
