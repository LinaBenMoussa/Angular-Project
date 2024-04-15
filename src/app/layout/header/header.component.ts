import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importer le Router pour la navigation
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;

  constructor(private session: SessionService, private router: Router) {}

  ngOnInit(): void {
    this.getUser();
  }

  isLogin(): boolean {
    return !!this.userName;
  }

  getUser(): void {
    this.userName = this.session.getUserName();
  }

  logout(): void {
    this.session.clearSession(); 
    this.router.navigate(['/login']); 
  }
}
