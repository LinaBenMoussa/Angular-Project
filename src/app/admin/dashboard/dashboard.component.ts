import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { ClientService } from 'src/app/services/client.service';
import { ChambreService } from 'src/app/services/chambre.service';
import { DestinationService } from 'src/app/services/destination.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showHeaderAndFooter: boolean = false;
  totalReservations: number = 0;
  totalDestinations: number = 0;
  totalHotels: number = 0;
  totalClients: number = 0;
  totalChambres: number = 0;
  constructor(private hotelService: HotelService,private clientService: ClientService,private chambreService: ChambreService,private destinationService: DestinationService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.loadHotelStatistics();
    this.loadClientStatistics();
    this.loadChambreStatistics();
    this.loadDestinationStatistics();
    this.loadReservationStatistics();
  }

  loadHotelStatistics(): void {
    this.hotelService.getTotalHotels().subscribe(
      (data: number) => {
        this.totalHotels = data;
      },
      (error: any) => {
        console.error('Error loading total hotels:', error);
      }
    );
  }
  loadClientStatistics(): void {
    this.clientService.getTotalClients().subscribe(
      (data: number) => {
        this.totalClients = data;
      },
      (error: any) => {
        console.error('Error loading total clients:', error);
      }
    );
  }
  loadChambreStatistics(): void {
    this.chambreService.getTotalChambres().subscribe(
      (data: number) => {
        this.totalChambres = data;
      },
      (error: any) => {
        console.error('Error loading total chambres:', error);
      }
    );
  }
  loadDestinationStatistics(): void {
    this.destinationService.getTotalDestinations().subscribe(
      (data: number) => {
        this.totalDestinations = data;
      },
      (error: any) => {
        console.error('Error loading total destinations:', error);
      }
    );
  }
  loadReservationStatistics(): void {
    this.reservationService.getTotalReservations().subscribe(
      (data: number) => {
        this.totalReservations = data;
      },
      (error: any) => {
        console.error('Error loading total reservations:', error);
      }
    );
  }
}
