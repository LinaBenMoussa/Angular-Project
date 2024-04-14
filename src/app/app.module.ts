import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrustUrlPipe } from './pipes/trust-url.pipe';

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
    ListehotelComponent,TrustUrlPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
