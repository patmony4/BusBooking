import { Component } from '@angular/core';
import { AboutTitle } from '../about-title/about-title';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-netional',
  imports: [AboutTitle,RouterLink],
  templateUrl: './netional.html',
  styleUrl: './netional.css',
})
export class Netional {

}
