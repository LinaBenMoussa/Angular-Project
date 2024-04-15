import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Destination } from 'src/app/Models/Destination.model';
import { Hotel } from 'src/app/Models/Hotel.model';
import { Photo } from 'src/app/Models/Photo.model';
import { DestinationService } from 'src/app/services/destination.service';
import { HotelService } from 'src/app/services/hotel.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent {
  destinations: { [destinationId: number]: string } = {};
  alldestinations: Destination[] = [];
  hotels: Hotel[] = [];
  hotelImages: { [hotelId: number]: string } = {};
  constructor(private hotelService: HotelService, 
    private photoService: PhotoService, 
    private destinationService: DestinationService,) {}
  ngOnInit(): void {
    this.loadHotels();
    this.loadDestinations();
  }
  loadHotels(): void {
    this.hotelService.getHotels().subscribe(
      (data: Hotel[]) => {
        this.hotels = data;
        // Charger les images des hôtels et les noms des destinations
        this.hotels.forEach(hotel => {
          this.getHotelImage(hotel.id_hotel);
          this.getDestinationById(hotel.id_destination); 
          console.log(this.hotelImages);
        });
      },
      (error) => {
        console.log('Erreur lors du chargement des hôtels :', error);
      }
    );
  }
  async getHotelImage(id: number): Promise<void> {
    if (!this.hotelImages[id]) { // Vérifier si l'image n'a pas déjà été chargée
      try {
        const photos: Photo[] | undefined = await this.photoService.getPhotosForHotel(id).toPromise();
        if (photos && photos.length > 0) {
          this.hotelImages[id] = photos[0].url; // Stocker l'URL de l'image dans le tableau associatif
        } else {
          throw new Error('Aucune photo trouvée pour cet hôtel');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'image :', error);
        this.hotelImages[id] = ''; // Stocker une chaîne vide en cas d'erreur ou si aucune photo n'est trouvée
      }
    }
  }
  async getDestinationById(id: number): Promise<void> {
    if (!this.destinations[id]) { // Vérifier si la destination n'a pas déjà été chargée
      try {
        const destination: Destination | undefined = await this.destinationService.getDestinationById(id).toPromise();
        if(destination){
        this.destinations[id] = destination.nom;} else {
          throw new Error('Aucune destination trouvée pour cet hôtel');
        }// Stocker le nom de la destination dans le tableau associatif
      } catch (error) {
        console.error('Erreur lors de la récupération de la destination :', error);
        this.destinations[id] = ''; // Stocker une chaîne vide en cas d'erreur
      }
    }
  }
  loadDestinations(): void {
    this.destinationService.getDestinations().subscribe(
      (data: Destination[]) => {
        this.alldestinations = data;
      },
      (error) => {
        console.log('Erreur lors du chargement des destinations :', error);
      }
    );
  }
  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this hotel?')) {
      this.hotelService.deleteHotel(id).subscribe(
        () => {
          console.log('Hotel deleted successfully.');
          this.loadHotels();
        },
        (error) => {
          console.error('Error deleting hotel:', error);
          // Gérez les erreurs ici, par exemple, affichage d'un message d'erreur à l'utilisateur.
        }
      );
    }
  }
}
