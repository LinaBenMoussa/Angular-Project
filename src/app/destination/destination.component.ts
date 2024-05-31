import { Component, OnInit } from '@angular/core';
import { Destination } from '../Models/Destination.model';
import { DestinationService } from '../services/destination.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  searchForm!: FormGroup;
  destinations: Destination[] = [];

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      nom: new FormControl('', Validators.required)
    });
    this.loadDestinations();
  }

  loadDestinations(): void {
    this.destinationService.getDestinations().subscribe(
      (data: Destination[]) => {
        this.destinations = data;
      },
      (error) => {
        console.log('Erreur lors du chargement des destinations :', error);
      }
    );
  }

  search(): void {
    const nom = this.searchForm.get('nom')?.value; 
    console.log("nom",nom)
    // Récupération de la valeur du champ "nom" du formulaire
    if(nom ==''){return this.loadDestinations();}
    this.destinationService.searchByNom(nom).subscribe(
      (destinations: Destination[]) => {
        this.destinations = destinations;
      },
      (error) => {
        console.log('Erreur lors de la recherche des destinations :', error);
      }
    );
  }
}
