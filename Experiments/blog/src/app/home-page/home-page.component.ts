import { Component } from '@angular/core';
import { PageDescriptionComponent } from "../page-description/page-description.component";

@Component({
  selector: 'app-home-page',
  imports: [PageDescriptionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  title = 'Home'
  description = 'Welcome to the home page'}
