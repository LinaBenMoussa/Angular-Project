import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgChartsModule } from 'ng2-charts';

// Components
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { NavbarComponent } from './admin/layout/navbar/navbar.component';
import { ListDestinationComponent } from './admin/list-destination/list-destination.component';
import { ListHotelComponent } from './admin/list-hotel/list-hotel.component';
import { LoginComponent } from './login/login.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { AddChambreComponent } from './admin/add-chambre/add-chambre.component';
import { AddDestinationComponent } from './admin/add-destination/add-destination.component';
import { ListeImageHotelComponent } from './admin/liste-image-hotel/liste-image-hotel.component';
import { EditDestinationComponent } from './admin/edit-destination/edit-destination.component';
import { EditHotelComponent } from './admin/edit-hotel/edit-hotel.component';
import { AddHotelComponent } from './admin/add-hotel/add-hotel.component';
import { ListeChambreComponent } from './admin/liste-chambre/liste-chambre.component';
import { EditChambreComponent } from './admin/edit-chambre/edit-chambre.component';
import { DestinationComponent } from './destination/destination.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { EditMesReservationsComponent } from './edit-mes-reservations/edit-mes-reservations.component';
import { OnlyNumberDirective } from './Directives/only-number.directive';
import { TrustUrlPipe } from './pipes/trust-url.pipe';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HotelsComponent,
    HotelDetailsComponent,
    DashboardComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HotelBookingComponent,
    AddChambreComponent,
    AddDestinationComponent,
    ListeImageHotelComponent,
    ListDestinationComponent,
    ListHotelComponent,
    EditDestinationComponent,
    EditHotelComponent,
    AddHotelComponent,
    ListeChambreComponent,
    EditChambreComponent,
    DestinationComponent,
    ReservationListComponent,
    EditMesReservationsComponent,
    OnlyNumberDirective,
    TrustUrlPipe,
    DashboardadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
