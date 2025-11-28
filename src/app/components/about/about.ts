import { Component } from '@angular/core';
import { Header } from "../header/header";
import { HeroSection } from "../hero-section/hero-section";
import { BookingForm } from "../booking-form/booking-form";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [ BookingForm, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
