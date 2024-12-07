import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn(): boolean {
    // check localStorage for JWT token, return true/false
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string): Promise<void> {
    // TODO: call backend auth endpoint with username/password
    // If successful, store token in localStorage
    return Promise.resolve();
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
