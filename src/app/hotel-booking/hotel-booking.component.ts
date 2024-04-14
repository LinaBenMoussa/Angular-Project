import { Component, OnInit } from '@angular/core';

declare var $: any; // Déclaration pour utiliser jQuery dans un composant Angular

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {
  currentStep: number = 0;
  tabcount: number = 0;

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
}
