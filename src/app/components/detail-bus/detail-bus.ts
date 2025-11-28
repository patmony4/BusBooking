import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from "@angular/router";
import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


interface Seat {
  id: number;
  booked: boolean;
  selected: boolean;
}

@Component({
  selector: 'app-detail-bus',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './detail-bus.html',
  styleUrl: './detail-bus.css',
})
export class DetailBus {
   name: string = '';
  img: string = '';

  seats: Seat[][] = [];

   buses = [
    { id: 1, name: 'Tourist Bus', image: 'assets/image/b2.jpg' },
    { id: 2, name: 'Korola Bus', image: 'assets/image/b5.png' },
    { id: 3, name: 'Roral Bus', image: 'assets/image/b9.jpg' },
    { id: 4, name: 'BMW Bus', image: 'assets/image/b6.png' },
    { id: 5, name: 'Spacial Bus', image: 'assets/image/b7.png' },
    { id: 6, name: 'Family Bus', image: 'assets/image/b8.jpg' }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const bus = this.buses.find(b => b.id === id);

    if (bus) {
      this.name = bus.name;
      this.img = bus.image;
    }
     this.initSeats(3, 9);
  }

  private initSeats(rows: number, cols: number) {
    this.seats = [];
    let id = 1;
    for (let r = 0; r < rows; r++) {
      const row: Seat[] = [];
      for (let c = 0; c < cols; c++) {
        row.push({ id: id++, booked: Math.random() < 0.2, selected: false });
      }
      this.seats.push(row);
    }
  }

  toggleSeat(seat: Seat) {
    if (seat.booked) return; // can't select booked seats
    seat.selected = !seat.selected;
  }

  get selectedCount(): number {
    return this.seats.flat().filter(s => s.selected).length;
  }
}
