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
import { AddChambreComponent } from './admin/add-chambre/add-chambre.component';
import { EditChambreComponent } from './admin/edit-chambre/edit-chambre.component';

import { DestinationComponent } from './destination/destination.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'hotels', component: HotelsComponent },

  { path: 'destinations', component: DestinationComponent },
  { path: 'reservations', component: ReservationListComponent },

  { path: 'login', component: LoginComponent },


  { path: 'signup', component: SignupComponent },
  { path: 'booking/:idhotel/:idchambre', component: HotelBookingComponent },
  { path: 'images/:idhotel', component: ListeImageHotelComponent },

  { path: 'chambres/:idhotel', component: ListeChambreComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'list-destination', component: ListDestinationComponent },
  { path: 'list-hotel', component: ListHotelComponent },
  { path: 'add-destination', component: AddDestinationComponent },
  { path: 'edit-destination/:id', component: EditDestinationComponent },
  { path: 'edit-hotel/:id', component: EditHotelComponent },
  { path: 'add-chambre/:idhotel', component: AddChambreComponent },
  { path: 'edit-chambre/:idchambre', component: EditChambreComponent },

  { path: 'add-hotel', component: AddHotelComponent },
  { path: 'destinations', component: DestinationComponent },

  { path: 'hotelDetails/:idHotel', component: HotelDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'home' } // Route wildcard pour les URL non reconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
