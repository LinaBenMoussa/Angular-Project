import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Models/Client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'https://localhost:44326/api/Clients'; // Mettez à jour l'URL avec votre API endpoint

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }

  getClientById(id: string|null): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/${id}`);
  }
  getClientByIdCompte(id: string|null): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/GetClientByIdCompte/${id}`);
  }
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client);
  }

  updateClient(id: number, client: Client): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
  getTotalClients(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total`);
  }
}
