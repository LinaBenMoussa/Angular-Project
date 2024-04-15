import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrustUrlPipe } from './pipes/trust-url.pipe';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

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
import { MeunComponent } from './admin/layout/meun/meun.component';
import { ListehotelComponent } from './admin/listehotel/listehotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlyNumberDirective } from './Directives/only-number.directive';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    MeunComponent,
    ListehotelComponent,
    TrustUrlPipe,
     OnlyNumberDirective,
     LoginComponent,
     SignupComponent,
     HotelBookingComponent

  ],
  imports: [MatSelectModule,MatInputModule,MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule, MatButtonModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
