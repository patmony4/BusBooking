import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AboutTitle } from "../about-title/about-title";

@Component({
  selector: 'app-activity',
  imports: [AboutTitle,RouterLink],
  templateUrl: './activity.html',
  styleUrl: './activity.css',
})
export class Activity {

}
