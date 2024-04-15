import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {
  hotelForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private hotelService: HotelService) {
    this.hotelForm = this.formBuilder.group({
      nom: [''],
      categorie: [null],
      localisation: [''],
      id_destination: [null],
      srcMaps: [''],
      prix: [null]
    });
  }

  onSubmit(): void {
    if (this.hotelForm.valid) {
      const formData = this.hotelForm.value;
      console.log("form data:", formData);
      this.hotelService.addHotel(formData).subscribe(
        (response) => {
          console.log('Hotel added successfully:', response);
          // Ajoutez ici le code pour rediriger ou afficher un message de succès à l'utilisateur.
        },
        (error) => {
          console.error('Error adding hotel:', error);
          // Gérez les erreurs ici, par exemple, affichage d'un message d'erreur à l'utilisateur.
        }
      );
    } else {
      console.error('Invalid form data.');
      // Affichez un message à l'utilisateur pour indiquer que le formulaire est invalide.
    }
  }
}
