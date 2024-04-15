import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/Models/Photo.model';
import { Hotel } from 'src/app/Models/Hotel.model';
import { PhotoService } from 'src/app/services/photo.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-liste-image-hotel',
  templateUrl: './liste-image-hotel.component.html',
  styleUrls: ['./liste-image-hotel.component.css']
})
export class ListeImageHotelComponent implements OnInit {
  photos!:  Photo[] 
  hotels: { [idHotel: number]: string } = {};

  constructor(private photoService: PhotoService, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.getImages();
    this.loadHotels();
  }

  getImages(): void {
    this.photoService.getPhotos().subscribe(
      (response: Photo[]) => {
        this.photos = response;
      },
      (error) => {
        console.error('Error fetching photos:', error);
        // Gérez les erreurs ici, par exemple, affichage d'un message d'erreur à l'utilisateur.
      }
    );
  }

  loadHotels(): void {
    this.hotelService.getHotels().subscribe(
      (data: Hotel[]) => {
        data.forEach(hotel => {
          this.hotels[hotel.id_hotel] = hotel.nom;
        });
      },
      (error) => {
        console.error('Error fetching hotels:', error);
        // Gérez les erreurs ici, par exemple, affichage d'un message d'erreur à l'utilisateur.
      }
    );
  }
}
