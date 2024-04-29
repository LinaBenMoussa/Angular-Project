import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-edit-destination',
  templateUrl: './edit-destination.component.html',
  styleUrls: ['./edit-destination.component.css']
})
export class EditDestinationComponent {
  destinationForm: FormGroup;
  idDestination: number | null = null; // Initialisé à null pour gérer le cas où l'ID n'est pas trouvé
  constructor(
    private destinationService: DestinationService,
   
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.destinationForm = this.formBuilder.group({
      nom: [''],

      img: [''],
    });
  }
  
  getDestinationById(id: number): void {
    this.destinationService.getDestinationById(id).subscribe(
      (destinationData: any) => {
        this.destinationForm.patchValue(destinationData);
      },
      (error) => {
        console.error('Error fetching hotel details:', error);
      }
    );
  }
  onSubmit(): void {
    if (this.destinationForm.valid && this.idDestination !== null) {
      const formData = this.destinationForm.value;
      formData.id_destination = this.idDestination; // Assuming idHotel is needed in the formData
      console.log("form data:", formData);

      this.destinationService.updateDestination(formData).subscribe(
        (response) => {
          console.log('updateDestination updated successfully:', response);
          this.router.navigate(['/list-destination']);
        },
        (error) => {
          console.error('Error updating destination:', error);
          // Gérez les erreurs ici, par exemple, affichage d'un message d'erreur à l'utilisateur.
        }
      );
    } else {
      console.error('Invalid form data or missing destination ID.');
      // Affichez un message à l'utilisateur pour indiquer que le formulaire est invalide ou que l'ID de l'hôtel est manquant.
    }
  }
  
  ngOnInit(): void {
  
    this.route.params.subscribe(params => {
      const idParam = params['id']; // Récupération de l'ID depuis l'URL
      this.idDestination = idParam ? +idParam : null; // Convertit en nombre, ou null si l'ID n'est pas présent
      if (this.idDestination !== null) {
        this.getDestinationById(this.idDestination); // Charge les détails de l'hôtel si l'ID est valide
      }
    });
  }

}
