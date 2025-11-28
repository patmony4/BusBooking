import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

interface bus {
  id: number;  
  name: string;
  type: string;
  passengers: number;
  image: string;
}
@Component({
  selector: 'app-bus',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './bus.html',
  styleUrl: './bus.css',
})
export class Bus {
   searchText: string = '';
  selectedType: string = '';

  buses: bus[] = [
    { id: 1,name: 'Tourist Bus', type: 'Tourist Bus', passengers: 60, image: 'assets/image/b2.jpg' },
    { id: 2, name: 'Korola Bus', type: 'Private Bus', passengers: 60, image: 'assets/image/b5.png' },
    {  id: 3,name: 'Rorol Bus', type: 'Luxury Bus', passengers: 60, image: 'assets/image/b9.jpg' },
    {  id: 4,name: 'BMW Bus', type: 'Deluxe Bus', passengers: 60, image: 'assets/image/b6.png' },
    {  id: 5,name: 'Special Bus', type: 'Luxury Bus', passengers: 60, image: 'assets/image/b7.png' },
    {  id: 6,name: 'Family Bus', type: 'Tourist Bus', passengers: 60, image: 'assets/image/b8.jpg' },
  ];

  // Filtered list based on search and type
  get filteredBuses() {
    return this.buses.filter(bus => {
      const matchesSearch = bus.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesType = this.selectedType ? bus.type === this.selectedType : true;
      return matchesSearch && matchesType;
    });
  }
}
