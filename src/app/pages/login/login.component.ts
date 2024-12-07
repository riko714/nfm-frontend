import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor() {}

  onLogin() {
    // Call AuthService when implemented
    console.log('Logging in with:', this.username, this.password);
  }
}
