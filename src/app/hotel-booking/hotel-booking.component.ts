import { Component, OnInit } from '@angular/core';
import { Reservation } from '../Models/Reservation.model';
import { ReservationService } from '../services/reservation.service';
import { SessionService } from '../services/session.service';
import { ChambreService } from '../services/chambre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { Chambre } from '../Models/Chambre.model';
import { Hotel } from '../Models/Hotel.model';
import { ClientService } from '../services/client.service';
declare var $: any; // Déclaration pour utiliser jQuery dans un composant Angular

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {
  currentStep: number = 0;
  tabcount: number = 0;
  startDate: Date|null = null;
  endDate: Date|null = null; 
  reservation: Reservation = {} as Reservation;
  events: string[] = [];
  minDateStartDate: string = new Date().toLocaleDateString('fr-ca');
  minDateEndDate: string = new Date().toLocaleDateString('fr-ca');
  modalOpen: boolean = false;
  modalText: string = "Contenu de la modal";
  roomList: any[] = ['1', '2', '3'];
  Hotel: Hotel = {} as Hotel;
  Chambre: Chambre = {} as Chambre;
  nom!:String;
  prenom!:String;
  email:string|null = null;
  phone!:number;
  constructor(private router: Router,
      private route: ActivatedRoute,private session: SessionService
      ,private reservationService: ReservationService,
      private CS:HotelService,private CC:ChambreService,
      private clientService:ClientService) {
   this.email=this.session.getUserName();
  }
  ngOnInit(): void {
    $('#donation_next').on('click', (e: Event) => this.onNextClick(e));
    $('#donation_back').on('click', (e: Event) => this.onBackPressed(e));
    const idHotel = this.route.snapshot.params['idhotel'];
    const idChambre = this.route.snapshot.params['idchambre'];

    this.CS.getHotelById(idHotel).subscribe(hotel => {
      this.Hotel = hotel;
    });
    this.CC.getChambreById(idChambre).subscribe(chambre => {
      this.Chambre = chambre;
      console.log("chambre:",this.Chambre);
    })
    this.clientService.getClientByIdCompte(this.session.getUserId()).subscribe(client => {
      this.nom = client.name;
      this.prenom = client.prenom;
      this.phone = client.telephone;
      console.log(client);
      this.session.setUserId(client.id_client.toString());
      
    })

  }
  onNextClick(event: Event): void {
    event.preventDefault();

    this.currentStep++;
    $('.current-step').html(this.currentStep.toString());

    $(event.target).parents('.booking-form-block').next().addClass('active');
    $(event.target).parents('.booking-form-block').removeClass('active');

    this.tabcount += 1;
  }


  onBackPressed(event: Event): void {
    event.preventDefault();

    this.currentStep--;
    $('.current-step').html(this.currentStep.toString());

    $(event.target).parents('.booking-form-block').prev().addClass('active');
    $(event.target).parents('.booking-form-block').removeClass('active');

    this.tabcount -= 1;
  }
  navigate() {
    console.log(this.session.getUserId());
    
    this.reservation = {
      id_client: +(this.session.getUserId() ?? '0'),
      dateDebut: this.startDate,
      dateFin: this.endDate,
      id_chambre: this.Chambre.id_chambre,
    } as Reservation;

    console.log("reservation:", this.reservation);

    this.reservationService.createReservation(this.reservation).subscribe(
      (data: Reservation) => {
        this.reservation = data;
        this.showSuccessAlert();
      },
      (error) => {
        console.log('Erreur lors du chargement de reservation :', error);
        // Handle the error appropriately
      }
    );
  }

  showSuccessAlert() {
    this.modalOpen = true;
  }
 
createReservation(){
  let reservation= {
    id_client: +(this.session.getUserId()??'0'),
    dateDebut: this.startDate,
    dateFin: this.endDate,
    id_chambre: 2 
  } as Reservation;
  this.openModal();
  this.reservationService.createReservation(reservation).subscribe(
  (data: Reservation) => {
    this.reservation = data; 
    this.startDate = null;
    this.endDate = null;
    this.openModal();
    
     },
 
 (error) => {
   console.log('Erreur lors du chargement de reservation :', error);
 }

);this.openModal();}
openModal() {
  this.modalOpen = true;
}

closeModal() {
  this.modalOpen = false;

  this.afterCloseModal();
}

afterCloseModal() {
  this.router.navigate(['/reservations']);

}

}




