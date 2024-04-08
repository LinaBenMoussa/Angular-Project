import { Component, OnInit } from '@angular/core';
import { Hotel } from '../Models/Hotel.model';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}
  ngOnInit(): void {
    this.loadHotels();
  }
  loadHotels(): void {
    this.hotelService.getHotels().subscribe(
      (data: Hotel[]) => {
        this.hotels = data;
      },
      (error) => {
        console.log('Erreur lors du chargement des hôtels :', error);
      }
    );
  }
}
