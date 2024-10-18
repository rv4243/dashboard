import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  customer = {
    firstName: 'Andrew',
    lastName: 'Turing',
    timeZone: '+5 GMT',
    phone: '555-237-2384',
    email: 'andrew.turing@cryptographyinc.com',
    samlUrl: 'https://cryptographyinc.com/login/secure/kQ28nei9w99'
  };

  editProfile() {
    // Code to navigate to or open an edit form
    console.log('Edit Profile clicked');

  }
}
