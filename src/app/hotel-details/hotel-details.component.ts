import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../Models/Photo.model';
import { ChambreService } from '../services/chambre.service';
import { Chambre } from '../Models/Chambre.model';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  idHotel: string = "";
  hotelData: any;
  photos: Photo[] = [];
  chambres: Chambre[] = [];

  
  safeSrcMaps: SafeResourceUrl | null = null; // Initialisation de safeSrcMaps à null
  

  constructor(
    private hotelservice: HotelService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private photoservice: PhotoService,
    private chambreservice:ChambreService,
    private router: Router
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
          this.safeSrcMaps = this.sanitizer.bypassSecurityTrustResourceUrl(this.hotelData.srcMaps);
        });

        this.photoservice.getPhotosForHotel(num).subscribe(data => {
          this.photos = data;
          console.log("photos:", this.photos);
        });
        this.chambreservice.getChambresByIdHotel(num).subscribe(data=>{
          this.chambres=data;
        }) ;
      }
    });
  }

  goToBooking(idhotel: number,id_chambre:number) {
    
    this.router.navigate(['/booking', idhotel,id_chambre]); 
}
}

