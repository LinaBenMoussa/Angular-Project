import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chambre } from 'src/app/Models/Chambre.model';
import { ChambreService } from 'src/app/services/chambre.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-liste-chambre',
  templateUrl: './liste-chambre.component.html',
  styleUrls: ['./liste-chambre.component.css']
})
export class ListeChambreComponent {
  chambres: Chambre[] = [];
  idhotel = this.route.snapshot.params['idhotel'];

  constructor(private route: ActivatedRoute,private session : SessionService,private chambresService: ChambreService) {}
  ngOnInit(): void {
    this.loadDestinations();
  }
  loadDestinations(): void {
    this.chambresService.getChambresByIdHotel(this.idhotel).subscribe(
      (data: Chambre[]) => {
        this.chambres = data;
      },
      (error) => {
        console.log('Erreur lors du chargement des destinations :', error);
      }
    );
  }
  delete(id:number){
    this.chambresService.deleteChambre(id).subscribe(()=>
      {this.loadDestinations()}
    )
  }
}
