import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../Models/Reservation.model';
@Component({
  selector: 'app-reservationadmin',
  templateUrl: './reservationadmin.component.html',
  styleUrls: ['./reservationadmin.component.css']
})
export class ReservationadminComponent  implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationService.getAllReservations().subscribe(
      (data: Reservation[]) => {
        this.reservations = data;
      },
      error => {
        console.error('Error fetching reservations', error);
      }
    );
  }

  deleteReservation(id_reservation: number): void {
    if (confirm('Are you sure you want to delete this reservation?')) {
      this.reservationService.deleteReservation(id_reservation).subscribe(
        () => {
          this.reservations = this.reservations.filter(r => r.id_reservation !== id_reservation);
        },
        error => {
          console.error('Error deleting reservation', error);
        }
      );
    }
  }
}
