import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../Models/Photo.model';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  idHotel: string = "";
  hotelData: any;
  photos: Photo[] = [];
  safeSrcMaps: SafeResourceUrl | null = null; // Initialisation de safeSrcMaps à null

  constructor(
    private hotelservice: HotelService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private photoservice: PhotoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const idHotelParam = params['idHotel'];

      if (idHotelParam !== null) {
        this.idHotel = idHotelParam;

        let num = parseInt(this.idHotel, 10);
        console.log("idhotel:", this.idHotel);
        this.hotelservice.getHotelById(num).subscribe(data => {
          this.hotelData = data;

          // Sécurisation de l'URL de la carte
          this.safeSrcMaps = this.sanitizer.bypassSecurityTrustResourceUrl(this.hotelData.srcMaps);
        });

        this.photoservice.getPhotosForHotel(num).subscribe(data => {
          this.photos = data;
          console.log("photos:", this.photos);
        }); // Ajout de la fermeture de la méthode subscribe
      } else {
        // Gérez le cas où idHotelParam est null, par exemple, redirigez l'utilisateur ou affichez un message d'erreur.
      }
    });
  }
}
