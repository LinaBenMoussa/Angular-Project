import { Component, OnInit } from '@angular/core';
import { Destination } from '../Models/Destination.model';
import { DestinationService } from '../services/destination.service';
import { SessionService } from '../services/session.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  destinations: Destination[] = [];

  constructor(private session : SessionService,private destinationService: DestinationService) {}
  ngOnInit(): void {
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
}
