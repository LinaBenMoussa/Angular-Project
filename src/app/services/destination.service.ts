import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../Models/Destination.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private apiUrl = 'https://localhost:44326/api/destinations'; // URL de votre API

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer toutes les destinations depuis l'API
  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.apiUrl);
  }

  // Méthode pour récupérer une destination par son ID depuis l'API
  getDestinationById(id: number): Observable<Destination> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Destination>(url);
  }

  // Méthode pour ajouter une nouvelle destination à l'API
  addDestination(destination: Destination): Observable<Destination> {
    return this.http.post<Destination>(this.apiUrl, destination);
  }

  // Méthode pour mettre à jour une destination existante dans l'API
  updateDestination(destination: Destination): Observable<Destination> {
    const url = `${this.apiUrl}/${destination.id_destination}`;
    return this.http.put<Destination>(url, destination);
  }

  // Méthode pour supprimer une destination de l'API par son ID
  deleteDestination(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  getTotalDestinations(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  }
  searchByNom(nom: string): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.apiUrl}/SearchByNom?nom=${nom}`);
  }
}
