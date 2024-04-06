import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component : HomeComponent  }
  ,{
    path:'hotels',
    pathMatch:'full',
    component : HotelsComponent

  },
  {
    path:'hotelDetails',
    pathMatch:'full',
    component : HotelDetailsComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
