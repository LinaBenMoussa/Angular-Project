import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../Models/Hotel.model';
import { FilterSearch } from '../Models/FilterSearch.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'https://localhost:44326/api/hotels'; // Your API URL for hotels

  constructor(private http: HttpClient) {}

  // Method to get all hotels from the API
  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  getHotelById(id: number): Observable<Hotel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Hotel>(url);
  }

  // Method to add a new hotel to the API
  addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl, hotel);
  }

  // Method to update an existing hotel in the API
  updateHotel(hotel: Hotel): Observable<Hotel> {
    const url = `${this.apiUrl}/${hotel.id_hotel}`;
    return this.http.put<Hotel>(url, hotel);
  }

  // Method to delete a hotel from the API by its ID
  deleteHotel(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Method to search hotels based on filters
  searchHotels(filter: FilterSearch): Observable<Hotel[]> {
    return this.http.post<Hotel[]>(`${this.apiUrl}/search`, filter);
  }

  // Method to fetch total number of hotels from the API
  getTotalHotels(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  }
}
