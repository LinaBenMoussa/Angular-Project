import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../Models/Compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseUrl = 'https://localhost:44326/api/Comptes'; // Mettez à jour l'URL avec votre API endpoint

  constructor(private http: HttpClient) {}

  getAllComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(this.baseUrl);
  }

  getCompteById(id: number): Observable<Compte> {
    return this.http.get<Compte>(`${this.baseUrl}/${id}`);
  }

  createCompte(compte: Compte): Observable<Compte> {
    return this.http.post<Compte>(this.baseUrl, compte);
  }

  updateCompte(id: number, compte: Compte): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, compte);
  }

  deleteCompte(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
