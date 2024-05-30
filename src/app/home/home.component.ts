import { Component, OnInit } from '@angular/core';
import { Destination } from '../Models/Destination.model';
import { DestinationService } from '../services/destination.service';
import { SessionService } from '../services/session.service';
import { Hotel } from '../Models/Hotel.model';
import { HotelService } from '../services/hotel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotels:Hotel[]=[]
  destinations: Destination[] = [];

  constructor(private session : SessionService,private destinationService: DestinationService,private hotelService:HotelService) {}
  ngOnInit(): void {
    this.loadDestinations();
    this.loadHotels();
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
  loadHotels(): void {
    this.hotelService.getHotels().subscribe(
      (data: Hotel[]) => {
        this.hotels = data;
      },
      (error) => {
        console.log('Erreur lors du chargement des destinations :', error);
      }
    );
  }
}
