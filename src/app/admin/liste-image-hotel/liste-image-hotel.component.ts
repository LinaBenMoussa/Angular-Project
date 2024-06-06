import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/Models/Photo.model';
import { Hotel } from 'src/app/Models/Hotel.model';
import { PhotoService } from 'src/app/services/photo.service';
import { HotelService } from 'src/app/services/hotel.service';
import { param } from 'jquery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-image-hotel',
  templateUrl: './liste-image-hotel.component.html',
  styleUrls: ['./liste-image-hotel.component.css']
})
export class ListeImageHotelComponent implements OnInit {
  photos!:  Photo[] 
  hotels: { [idHotel: number]: string } = {};
  idhotel = this.route.snapshot.params['idhotel'];
  selectedFile: File | null = null;
  constructor(private route: ActivatedRoute,private photoService: PhotoService, private hotelService: HotelService) { }
  onFileSelect(event: any): void {
    const file = event.target.files[0];
    const photo={url:file.name,id_hotel:this.idhotel} as Photo;
    if (file) {
      this.photoService.createPhoto(photo).subscribe(photo => {
        this.getImages();
        this.loadHotels();
      });
      console.log('Nom du fichier sélectionné :', file.name);
    }
  }
  ngOnInit(): void {

    this.getImages();
    this.loadHotels();
  }

  getImages(): void {
    this.photoService.getPhotosForHotel(this.idhotel).subscribe(
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
      }
    );
  }
  onDelete(id: number): void {
    this.photoService.deletePhoto(id).subscribe(() => {
      this.getImages();
    });
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log("selected file:", this.selectedFile);
  }

  async onUpload(): Promise<void> {
    if (this.selectedFile) {
      this.photoService.uploadPhoto(this.selectedFile, this.idhotel).subscribe(
        (response) => {
          console.log('Photo uploaded successfully', response);
          this.getImages();
          this.loadHotels();
          
        },
        (error) => {
          console.error('Error uploading photo', error);
        }
      );
    } else {
      console.error('No file selected');
    }
  }
}