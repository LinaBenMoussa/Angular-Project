import { Component, OnInit } from '@angular/core';
import { Destination } from '../Models/Destination.model';
import { DestinationService } from '../services/destination.service';
import { SessionService } from '../services/session.service';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../Models/Reservation.model';
import { Hotel } from '../Models/Hotel.model';
import { HotelService } from '../services/hotel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  destinations: Destination[] = [];
  reservations:number=0;
  hotels: Hotel[] = [];

  constructor(private session : SessionService,private destinationService: DestinationService,private reservation: ReservationService,private hotelService: HotelService) {}
  ngOnInit(): void {
    this.loadDestinations();
    this.loadReservations();
    this.loadHotels();
  }
 
  loadHotels(): void {
    this.hotelService.getHotels().subscribe(
      (data: Hotel[]) => {
        this.hotels = data;
      },
      (error) => {
        console.log('Erreur lors du chargement des hotels :', error);
      }
    );
  }
  loadReservations(): void {
    this.reservation.getTotalReservations().subscribe(
     (data: number) => {
      this.reservations = data;
     }
    );
  }

  loadDestinations(): void {
    this.destinationService.getDestinations().subscribe(
      (data: Destination[]) => {
        this.destinations = data;
      },
      (error) => {
        console.log('Erreur lors du chargement des destinations :', error);
      }
    );
  }
}
