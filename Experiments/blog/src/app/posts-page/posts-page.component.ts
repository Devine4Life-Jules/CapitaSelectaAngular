import { Component } from '@angular/core';
import { PageDescriptionComponent } from "../page-description/page-description.component";

@Component({
  selector: 'app-posts-page',
  imports: [PageDescriptionComponent],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {
  title = 'Posts';
  description = 'Welcome to the posts page';
}


