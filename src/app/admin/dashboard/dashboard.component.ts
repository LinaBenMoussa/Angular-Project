import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showHeaderAndFooter: boolean = false; // Variable de contrôle pour afficher ou masquer l'en-tête et le pied de page
}
