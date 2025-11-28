import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-about-title',
  imports: [CommonModule],
  templateUrl: './about-title.html',
  styleUrl: './about-title.css',
})
export class AboutTitle {
  name: string = '';
  address: string = '';
  img: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        if (url.includes('activity')) {
          this.name = 'Central Market | The Cambodian Market';
          this.address = 'Central Market, E273 & E274, 51 Street 51, Phnom Penh.';
          this.img = 'assets/image/central-market.jpg';
        }

        else if (url.includes('national')) {
          this.name = 'Nation Museum: Cambodia Civilization';
          this.address = 'Street 440, Phnom Penh.';
          this.img = 'assets/image/national-museum.jpg';
        }

        else if (url.includes('rival')) {
          this.name = 'Mekong River: Cambodia River';
          this.address = 'Mekong River, Phnom Penh.';
          this.img = 'assets/image/mekong-river.webp';
        }
         else if (url.includes('royal')) {
          this.name = 'Royal Palace: Palace of Cambodia';
          this.address = 'Royal Palace, Phnom Penh.';
          this.img = 'assets/image/royal-palace.jpg';
        }

        // Default
        else {
          this.name = '';
          this.address = '';
          this.img = '';
        }
      });
  }
}
