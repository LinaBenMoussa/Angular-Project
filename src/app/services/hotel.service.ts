import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../Models/Hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'https://localhost:44326/api/hotels'; // URL de votre API pour les hôtels

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les hôtels depuis l'API
  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  // Méthode pour récupérer un hôtel par son ID depuis l'API
  getHotelById(id: number): Observable<Hotel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Hotel>(url);
  }

  // Méthode pour ajouter un nouvel hôtel à l'API
  addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl, hotel);
  }

  // Méthode pour mettre à jour un hôtel existant dans l'API
  updateHotel(hotel: Hotel): Observable<Hotel> {
    const url = `${this.apiUrl}/${hotel.id_hotel}`;
    return this.http.put<Hotel>(url, hotel);
  }

  // Méthode pour supprimer un hôtel de l'API par son ID
  deleteHotel(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
