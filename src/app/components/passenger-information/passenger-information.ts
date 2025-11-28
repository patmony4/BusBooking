import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-passenger-information',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './passenger-information.html',
  styleUrl: './passenger-information.css',
})
export class PassengerInformation {
  from: any;
  to: any;
  date: any;
  time: any;
  seat: any;
  price: any;

  bookingForm!: FormGroup;
  showQRPopup: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      altPhone: new FormControl(''),
    });

    this.route.queryParams.subscribe(params => {
      this.from = params['from'];
      this.to = params['to'];
      this.date = params['date'];
      this.time = params['time'];
      this.seat = params['seat'];
      this.price = params['price'];
    });
  }

  onProcessPayment() {
    if (this.bookingForm.valid) {
      this.showQRPopup = true;
      console.log('Passenger Info:', this.bookingForm.value);
    } else {
      alert('Please complete all required fields.');
    }
  }
}