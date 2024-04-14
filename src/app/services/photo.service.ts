import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../Models/Photo.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'https://localhost:44326/api/photos'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl);
  }

  getPhotosForHotel(hotelId: number): Observable<Photo[]> {
    const url = `${this.apiUrl}/hotel/${hotelId}`;
    console.log("service photo",url)
    return this.http.get<Photo[]>(url);
  }

  createPhoto(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(this.apiUrl, photo);
  }

  updatePhoto(id: number, photo: Photo): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, photo);
  }

  deletePhoto(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
