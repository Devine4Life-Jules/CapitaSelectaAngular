import { Component } from '@angular/core';
import { PageDescriptionComponent } from "../page-description/page-description.component";
import { PostsService } from '../services/post.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-page',
  imports: [PageDescriptionComponent, CommonModule],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {
  postService = inject(PostsService)
  title = 'Posts';
  description = 'Welcome to the posts page';

}
