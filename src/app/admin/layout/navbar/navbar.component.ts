import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
