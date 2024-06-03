import { Injectable } from '@angular/core';
import { Reservation } from '../Models/Reservation.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'https://localhost:44326/api/Reservations'; // URL de votre API pour les reservations

  constructor(private http: HttpClient) {}
   createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl , reservation);
  }
  getTotalReservations(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  }
}
