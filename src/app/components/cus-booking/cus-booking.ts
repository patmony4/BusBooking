import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cus-booking',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './cus-booking.html',
  styleUrl: './cus-booking.css',
})
export class CusBooking {
  bookingForm!: FormGroup;

ngOnInit(): void {
  this.bookingForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    nationality: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    countryCode: new FormControl('+855', Validators.required),
    phone: new FormControl('', Validators.required),
    message: new FormControl('')
  });
}
constructor(private router: Router) {}
goToStatusPage() {
  if (this.bookingForm.valid) {
      queryParams: this.bookingForm.value 
  }
}
  showQRPopup: boolean = false;
  onProcessPayment() {
    if (this.bookingForm.valid) {
      this.showQRPopup = true;
      console.log('Passenger Info:', this.bookingForm.value);
    } else {
      alert('Please complete all required fields.');
    }
  }
}
