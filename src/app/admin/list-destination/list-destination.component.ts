import { Component } from '@angular/core';
import { Destination } from 'src/app/Models/Destination.model';
import { DestinationService } from 'src/app/services/destination.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-list-destination',
  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.css']
})
export class ListDestinationComponent {
  
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
  delete(id:number){
    this.destinationService.deleteDestination(id).subscribe(()=>
      {this.loadDestinations()}
    )
  }
}
