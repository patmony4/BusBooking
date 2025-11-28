import { Component } from '@angular/core';
import { AboutTitle } from '../about-title/about-title';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rival',
  imports: [AboutTitle,RouterLink],
  templateUrl: './rival.html',
  styleUrl: './rival.css',
})
export class Rival {

}
