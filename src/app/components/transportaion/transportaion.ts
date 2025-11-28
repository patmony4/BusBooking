import { Component } from '@angular/core';
import { BookingForm } from "../booking-form/booking-form";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-transportaion',
  imports: [BookingForm, RouterLink],
  templateUrl: './transportaion.html',
  styleUrl: './transportaion.css',
})
export class Transportaion {

}
