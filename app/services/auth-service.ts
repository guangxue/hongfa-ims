import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = true;
  private userRole: string = 'ADM';

  login(username: string, password: string): boolean {
    if (username && password) {
      this.isAuthenticated = true;
      this.userRole = 'USR';
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = '';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): string {
    return this.userRole;
  }
}
