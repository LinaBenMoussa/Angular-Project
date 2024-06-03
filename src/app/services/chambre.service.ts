import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../Models/Chambre.model'; // Assurez-vous d'importer votre modèle Chambre

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private baseUrl = 'https://localhost:44326/api/Chambres';

  constructor(private http: HttpClient) { }

  getAllChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.baseUrl);
  }

  getChambreById(id: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.baseUrl}/${id}`);
  }
  getChambresByIdHotel(id: number): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/ByHotel/${id}`);
  }
  createChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(this.baseUrl, chambre);
  }

  updateChambre(id: number, chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.baseUrl}/${id}`, chambre);
  }

  deleteChambre(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getTotalChambres(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total`);
  }
}
