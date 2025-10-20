import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


export const routes: Routes = [
{
  path: '',
  component: HomePageComponent,

},
{
  path: 'about',
  component: AboutPageComponent,
},
{
  path: 'todo',
  component: TodoPageComponent,
},
{
  path: 'posts',
  component: PostsPageComponent,
},
{
  path:'posts/:id',
  component: PostDetailComponent,
}
];
