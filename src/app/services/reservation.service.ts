import { Injectable } from '@angular/core';
import { Reservation } from '../Models/Reservation.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'https://localhost:44326/api/Reservations'; // URL de votre API pour les reservations

  constructor(private http: HttpClient) {}

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation);
  }

  getReservationsByUserId(userId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/client/${userId}`);
  }

  getTotalReservations(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/liste`);
  }

  deleteReservation(id_reservation: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id_reservation}`);
  }

  getReservationsByHotell(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/hotels`);
  }

  // Ajout de la méthode checkAvailability
  checkAvailability(chambreId: number, startDate: Date, endDate: Date): Observable<boolean> {
    const params = new HttpParams()
      .set('chambreId', chambreId.toString())
      .set('startDate', startDate.toISOString())
      .set('endDate', endDate.toISOString());
    return this.http.get<boolean>(`${this.apiUrl}/check-availability`, { params });
  }
}
