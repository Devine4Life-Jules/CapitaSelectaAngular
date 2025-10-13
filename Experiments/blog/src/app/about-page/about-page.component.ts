import { Component } from '@angular/core';
import { PageDescriptionComponent } from '../page-description/page-description.component';

@Component({
  selector: 'app-about-page',
  imports: [PageDescriptionComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  title = 'About';
  description = 'Welcome to the about page';
}


