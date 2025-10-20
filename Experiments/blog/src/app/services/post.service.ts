import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, map, forkJoin } from 'rxjs';
import { marked } from 'marked';
import { Post } from '../models/post.interface';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private postsPath = 'assets/posts';
  private cachedPosts: Post[] = [];
  private postSignal = signal<Post[]>([
  { id: 1, title: 'My first post', content: 'This is the content of my first post.' },
  { id: 2, title: 'Another post', content: 'Here is some more content in another post.' },
  { id: 3, title: 'Yet another post', content: 'Content keeps coming in this third post.' },
]);
readonly posts = this.postSignal.asReadonly();

}

