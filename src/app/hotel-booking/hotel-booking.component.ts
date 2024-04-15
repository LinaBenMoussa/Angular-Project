import { Component, OnInit } from '@angular/core';
import { Reservation } from '../Models/Reservation.model';
import { ReservationService } from '../services/reservation.service';
declare var $: any; // Déclaration pour utiliser jQuery dans un composant Angular

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {
  currentStep: number = 0;
  tabcount: number = 0;
  reservation: Reservation = {} as Reservation;
  events: string[] = [];
  constructor(private reservationService: ReservationService) { 

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
    id_client: 1,
    dateDebut: new Date(),
    dateFin: new Date(),
    id_chambre: 1 
  } as Reservation;
 this.reservationService.createReservation(reservation).subscribe(
  (data: Reservation) => {
    this.reservation = data;
     },
 
 (error) => {
   console.log('Erreur lors du chargement de reservation :', error);
 }
)}

}

