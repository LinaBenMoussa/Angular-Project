import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HotelsComponent,
    HotelDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
