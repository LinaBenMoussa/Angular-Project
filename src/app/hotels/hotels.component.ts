import { Component, OnInit } from '@angular/core';
import { Hotel } from '../Models/Hotel.model';
import { Photo } from '../Models/Photo.model';
import { HotelService } from '../services/hotel.service';
import { PhotoService } from '../services/photo.service';
import { DestinationService } from '../services/destination.service'; // Importer le service de destinations
import { Destination } from '../Models/Destination.model'; // Importer le modèle de destination
import { FilterSearch } from '../Models/FilterSearch.model';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  alldestinations: Destination[] = [];

  hotels: Hotel[] = [];
  hotelImages: { [hotelId: number]: string } = {}; // Tableau associatif pour stocker les images des hôtels
  destinations: { [destinationId: number]: string } = {}; // Tableau associatif pour stocker les noms des destinations
  Destination: any;
  searchForm = this.formBuilder.group({
  destination: new FormControl(0),
  minPrice: new FormControl(0),
  maxPrice: new FormControl(0)
});
  constructor(private hotelService: HotelService, 
    private photoService: PhotoService, 
    private destinationService: DestinationService,
    private formBuilder: FormBuilder,) {}

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

  searchHotel(): void {
    // Code pour effectuer une recherche de hôtels
    let filter = {
      id_destination:this.searchForm.value.destination,
      minPrice:this.searchForm.value.minPrice,
      maxPrice:this.searchForm.value.maxPrice
    } as FilterSearch;
   this.hotelService.searchHotels(filter).subscribe(
    
     (data: Hotel[]) => {
       this.hotels = data;
       this.hotels.forEach(hotel => {
        this.getHotelImage(hotel.id_hotel);
        this.getDestinationById(hotel.id_destination); 
        console.log(this.hotelImages);
        
      });
    },
    (error) => {
      console.log('Erreur lors du chargement des hôtels :', error);
    }
   ) 
   
   this.searchForm.get('destination')?.setValue(0);
   this.searchForm.get('minPrice')?.setValue(0);
   this.searchForm.get('maxPrice')?.setValue(0);

   
  }

  searchHotelsByDestination(id_destination: number): void {
    // Code pour effectuer une recherche de hôtels
    let filter = {
      id_destination:id_destination,
      minPrice:0,
      maxPrice:0
    } as FilterSearch;
   this.hotelService.searchHotels(filter).subscribe(
    
     (data: Hotel[]) => {
       this.hotels = data;
       this.hotels.forEach(hotel => {
        this.getHotelImage(hotel.id_hotel);
        this.getDestinationById(hotel.id_destination); 
        console.log(this.hotelImages);
        
      });
    },
    (error) => {
      console.log('Erreur lors du chargement des hôtels :', error);
    }
   ) 
   
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
}
