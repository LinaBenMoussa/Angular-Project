import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrustUrlPipe } from './pipes/trust-url.pipe';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AddChambreComponent} from './admin/add-chambre/add-chambre.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavbarComponent } from './admin/layout/navbar/navbar.component';
import { ListDestinationComponent } from './admin/list-destination/list-destination.component';
import { ListHotelComponent } from './admin/list-hotel/list-hotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlyNumberDirective } from './Directives/only-number.directive';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddDestinationComponent } from './admin/add-destination/add-destination.component';
import { ListeImageHotelComponent } from './admin/liste-image-hotel/liste-image-hotel.component';
import { EditDestinationComponent } from './admin/edit-destination/edit-destination.component';
import { EditHotelComponent } from './admin/edit-hotel/edit-hotel.component';
import { AddHotelComponent } from './admin/add-hotel/add-hotel.component';
import { ListeChambreComponent } from './admin/liste-chambre/liste-chambre.component';
import { EditChambreComponent } from './admin/edit-chambre/edit-chambre.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ListDestinationComponent,AddChambreComponent,ListeChambreComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HotelsComponent,
    HotelDetailsComponent,
    DashboardComponent,
    NavbarComponent,
    // AddHotelComponent,
    ListeImageHotelComponent,
    ListHotelComponent,
    TrustUrlPipe,
     OnlyNumberDirective,
     LoginComponent,
     SignupComponent,
     HotelBookingComponent,
     AddDestinationComponent,
     EditDestinationComponent,
     EditHotelComponent,
     AddHotelComponent,
     EditChambreComponent,
  ],
  imports: [MatSelectModule,MatInputModule,MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatIconModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
