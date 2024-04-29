import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/Models/Hotel.model';
import { ChambreService } from 'src/app/services/chambre.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent {
  chambreForm: FormGroup;
  idhotel = this.route.snapshot.params['idhotel'];
hotel!:Hotel;
  constructor(private route: ActivatedRoute,private hotelService:HotelService,private router:Router, private formBuilder: FormBuilder, private chambreService: ChambreService) {
    this.chambreForm = this.formBuilder.group({
      nom: [''],
      nbre_personnes: [null],
      surface: [''],
      id_hotel:this.idhotel,
      img: [null],
      prix: [null]
    });
  }
  loadhotels(): void {
    this.hotelService.getHotelById(this.idhotel).subscribe(
      (data: Hotel) => {
        this.hotel = data;
        console.log("hotel:", this.hotel);
      },
      (error) => {
        console.log('Erreur lors du chargement des destinations :', error);
      }
    );
  }
  onSubmit(): void {
    if (this.chambreForm.valid) {
      const formData = this.chambreForm.value;
      console.log("form data:", formData);
      this.chambreService.createChambre(formData).subscribe(
        (response) => {
          console.log('Hotel added successfully:', response);
          this.router.navigate([`/chambres/${response.id_hotel}`]);
       
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
  ngOnInit(): void {
    this.loadhotels();
  }
  onFileSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file: File | null = target.files ? target.files[0] : null;
    if (file) {
      console.log('File selected',file.name);
      this.chambreForm.patchValue({ img: file.name });

    }
  }
}
