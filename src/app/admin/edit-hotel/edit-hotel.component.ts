import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { Destination } from 'src/app/Models/Destination.model';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent {
  hotelForm: FormGroup;
  alldestinations: Destination[] = [];
  idHotel: number | null = null; // Initialisé à null pour gérer le cas où l'ID n'est pas trouvé

  constructor(
    private destinationService: DestinationService,
    private hotelService: HotelService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.hotelForm = this.formBuilder.group({
      nom: [''],
      categorie: [null],
      localisation: [''],
      id_destination: [null],
      srcMaps: [''],
      prix: [null]
    });
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

  getHotelById(id: number): void {
    this.hotelService.getHotelById(id).subscribe(
      (hotelData: any) => {
        this.hotelForm.patchValue(hotelData);
      },
      (error) => {
        console.error('Error fetching hotel details:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.hotelForm.valid && this.idHotel !== null) {
      const formData = this.hotelForm.value;
      formData.id_hotel = this.idHotel; // Assuming idHotel is needed in the formData
      console.log("form data:", formData);

      this.hotelService.updateHotel(formData).subscribe(
        (response) => {
          console.log('Hotel updated successfully:', response);
          this.router.navigate(['/list-hotel']);
        },
        (error) => {
          console.error('Error updating hotel:', error);
          // Gérez les erreurs ici, par exemple, affichage d'un message d'erreur à l'utilisateur.
        }
      );
    } else {
      console.error('Invalid form data or missing hotel ID.');
      // Affichez un message à l'utilisateur pour indiquer que le formulaire est invalide ou que l'ID de l'hôtel est manquant.
    }
  }

  ngOnInit(): void {
    this.loadDestinations();
    this.route.params.subscribe(params => {
      const idParam = params['id']; // Récupération de l'ID depuis l'URL
      this.idHotel = idParam ? +idParam : null; // Convertit en nombre, ou null si l'ID n'est pas présent
      if (this.idHotel !== null) {
        this.getHotelById(this.idHotel); // Charge les détails de l'hôtel si l'ID est valide
      }
    });
  }
}
