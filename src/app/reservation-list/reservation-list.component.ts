import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../Models/Reservation.model';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[]=[];


  userId: number;

  constructor(private router: Router,private reservationService: ReservationService,private session : SessionService) {
    // Vous pouvez obtenir le userId à partir d'un service d'authentification ou de session
    this.userId = +(this.session.getUserId()?? '0');
  }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.reservationService.getReservationsByUserId(this.userId).subscribe(
      (reservations: Reservation[]) => {
        this.reservations = reservations;
      },
      (error) => {
        console.error('Error fetching reservations', error);
      }
    );
  }

  editReservation(reservation: any): void {
    // Implémentez la logique pour éditer la réservation ici
    console.log('Edit reservation:', reservation);
  }
  goToHotelPage() {
    this.router.navigate(['/hotels']); // Adjust the route according to your routing setup
  }
}
