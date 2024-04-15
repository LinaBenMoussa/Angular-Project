import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userIdKey = 'null';
  private userNameKey = 'null';
  private roleKey = 'null'; 

  constructor() { }

  setUserId(userId: string) {
    sessionStorage.setItem(this.userIdKey, userId);
  }

  getUserId(): string | null {
    return sessionStorage.getItem(this.userIdKey);
  }

  getUserRole(): number | null {
    return parseInt(sessionStorage.getItem(this.roleKey) || '0', 10); // Correction pour récupérer le rôle utilisateur
  }

  setUserRole(role: number | null) {
    if (role !== null) {
      sessionStorage.setItem(this.roleKey, role.toString());
    } else {
      sessionStorage.removeItem(this.roleKey); 
    }
  }

  setUserName(userName: string) {
    localStorage.setItem(this.userNameKey, userName);
  }

  getUserName(): string | null {
    return localStorage.getItem(this.userNameKey);
  }

  clearSession() {
    sessionStorage.clear();
    localStorage.clear();
  }
}
