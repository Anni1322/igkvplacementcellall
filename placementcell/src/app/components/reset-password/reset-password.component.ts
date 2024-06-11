import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() { }

  resetPassword() {
    // Perform password reset logic here, e.g., communicate with backend
    console.log('Resetting password...');
  }
}
