import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { ListDestinationComponent } from './admin/list-destination/list-destination.component';
import { ListHotelComponent } from './admin/list-hotel/list-hotel.component';
import { EditDestinationComponent } from './admin/edit-destination/edit-destination.component';
import { EditHotelComponent } from './admin/edit-hotel/edit-hotel.component';
import { AddDestinationComponent } from './admin/add-destination/add-destination.component';
import { AddHotelComponent } from './admin/add-hotel/add-hotel.component';
import { ListeImageHotelComponent } from './admin/liste-image-hotel/liste-image-hotel.component';
import { ListeChambreComponent } from './admin/liste-chambre/liste-chambre.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'signup', component: SignupComponent },
  { path: 'booking', component: HotelBookingComponent },
  { path: 'images', component: ListeImageHotelComponent },
  { path: 'chambres', component: ListeChambreComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'list-destination', component: ListDestinationComponent },
  { path: 'list-hotel', component: ListHotelComponent },
  { path: 'add-destination', component: AddDestinationComponent },
  { path: 'edit-destination', component: EditDestinationComponent },
  { path: 'edit-hotel/:id', component: EditHotelComponent },
  { path: 'add-hotel', component: AddHotelComponent },

  { path: 'hotelDetails/:idHotel', component: HotelDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'home' } // Route wildcard pour les URL non reconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
