import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { ClientService } from 'src/app/services/client.service';
import { ChambreService } from 'src/app/services/chambre.service';
import { DestinationService } from 'src/app/services/destination.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { Hotel } from 'src/app/Models/Hotel.model';
import { Chambre } from 'src/app/Models/Chambre.model';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit {

  hotels: Hotel[] = [];
  totalReservations: number = 0;
  totalDestinations: number = 0;
  totalHotels: number = 0;
  totalClients: number = 0;
  totalChambres: number = 0;

  lineChartData: ChartDataset[] = [
    {
      data: [],
      label: 'Nombre de Chambres'
    }
  ];
  lineChartLabels: string[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartLegend = true;
  lineChartType: ChartType = 'line';

  constructor(private hotelService: HotelService,
              private clientService: ClientService,
              private chambreService: ChambreService,
              private destinationService: DestinationService,
              private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.loadHotelStatistics();
    this.loadHotelChambreStatistics();
    this.loadReservationStatistics();


  }

  loadHotelStatistics(): void {
    this.hotelService.getHotels().subscribe((hotels: Hotel[]) => {
      this.hotels = hotels;
      this.totalHotels = hotels.length;
    });
  }

  loadHotelChambreStatistics(): void {
    this.hotelService.getHotels().subscribe((hotels: Hotel[]) => {
      this.lineChartData[0].data = [];
      this.lineChartLabels = [];
      hotels.forEach((hotel) => {
        this.lineChartLabels.push(hotel.nom);
        this.lineChartData[0].data.push(hotel.nom.length);
      });
    });
  }

  loadReservationStatistics(): void {
    this.reservationService.getTotalReservations().subscribe((data: number) => {
      this.totalReservations = data;
    });
  }





}
