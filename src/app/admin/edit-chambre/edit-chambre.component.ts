import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/Models/Hotel.model';
import { ChambreService } from 'src/app/services/chambre.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-edit-chambre',
  templateUrl: './edit-chambre.component.html',
  styleUrls: ['./edit-chambre.component.css']
})
export class EditChambreComponent {
  chambreForm: FormGroup;
  allhotels: Hotel[] = [];
  idchambre = this.route.snapshot.params['idchambre'];

  constructor(
    private hotelsService: HotelService,
    private chambresService: ChambreService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.chambreForm = this.formBuilder.group({
      nom: [''],
      nbre_personnes: [null],
      surface: [''],
      id_hotel: [null],
      prix: [null],
      img: ['']
    });
  }

  loadDestinations(): void {
    this.hotelsService.getHotels().subscribe(
      (data: Hotel[]) => {
        this.allhotels = data;
      },
      (error) => {
        console.log('Erreur lors du chargement des destinations :', error);
      }
    );
  }

  getChambreById(id: number): void {
    this.chambresService.getChambreById(id).subscribe(
      (chambreData: any) => {
        this.chambreForm.patchValue(chambreData);
      },
      (error) => {
        console.error('Error fetching hotel details:', error);
      }
    );
  }
  onFileSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file: File | null = target.files ? target.files[0] : null;
    if (file) {
      console.log('File selected',file.name);
      this.chambreForm.patchValue({ img: file.name });

    }
  }
  onSubmit(): void {
    console.log("form data:", this.idchambre);
    if (this.chambreForm.valid && this.idchambre !== null) {
      const formData = this.chambreForm.value;
      formData.id_chambre = this.idchambre; // Assuming idHotel is needed in the formData
      console.log("form data:", formData);

      this.chambresService.updateChambre(this.idchambre,formData).subscribe(
        (response) => {
          console.log('Hotel updated successfully:', response);
          this.router.navigate(['/chambres/'+formData.id_hotel]);
        },
        (error) => {
          console.error('Error updating hotel:', error);
        }
      );
    } else {
      console.error('Invalid form data or missing hotel ID.');
    }
  }

  ngOnInit(): void {
    this.loadDestinations();
    this.route.params.subscribe(params => {
      const idParam = params['idchambre']; // Récupération de l'ID depuis l'URL
      this.idchambre = idParam ? +idParam : null; // Convertit en nombre, ou null si l'ID n'est pas présent
      if (this.idchambre !== null) {
        this.getChambreById(this.idchambre); // Charge les détails de l'hôtel si l'ID est valide
      }
    });
  }
}
