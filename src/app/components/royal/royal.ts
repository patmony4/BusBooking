import { Component } from '@angular/core';
import { AboutTitle } from '../about-title/about-title';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-royal',
  imports: [AboutTitle,RouterLink],
  templateUrl: './royal.html',
  styleUrl: './royal.css',
})
export class Royal {

}
