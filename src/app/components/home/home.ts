import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { HeroSection } from "../hero-section/hero-section";
import { Testimonals } from "../testimonals/testimonals";
import { BookingForm } from "../booking-form/booking-form";

@Component({
  selector: 'app-home',
  imports: [HeroSection, Testimonals, BookingForm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}
