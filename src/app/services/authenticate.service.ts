import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../Models/Compte.model';
import { Client } from '../Models/Client.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:44326/api/Comptes'; 

  constructor(private http: HttpClient) {}

  registerCompte(compte: Compte): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/registerCompte`, compte);
  }
  registerClient(client: Client): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/registerClient`, client);
  }

  authenticate(loginModel: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/authenticate`, loginModel);
  }
  
}