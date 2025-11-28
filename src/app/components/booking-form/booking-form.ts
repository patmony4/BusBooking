import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  imports: [ RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    CommonModule,
    FormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css',
})
export class BookingForm {
  
  bookingForm!: FormGroup;

ngOnInit(): void {
  this.bookingForm = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    price:new FormControl('10',Validators.required),
    seat: new FormControl('', [Validators.required, Validators.min(1)])
  });
}
constructor(private router: Router) {}
goToStatusPage() {
  if (this.bookingForm.valid) {
    this.router.navigate(
      ['/pssenger-imformation'], 
      { queryParams: this.bookingForm.value }
    );
  }
}
}
