import { Component, OnInit } from '@angular/core';
import { Reservation } from '../Models/Reservation.model';
import { ReservationService } from '../services/reservation.service';
import { SessionService } from '../services/session.service';
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

 
  
  constructor(private session: SessionService,private reservationService: ReservationService) { 
  }
  ngOnInit(): void {
    $('#donation_next').on('click', (e: Event) => this.onNextClick(e));
    $('#donation_back').on('click', (e: Event) => this.onBackPressed(e));
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
}
}

