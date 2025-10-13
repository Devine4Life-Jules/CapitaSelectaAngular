import { Component } from '@angular/core';
import { PageDescriptionComponent } from '../page-description/page-description.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  imports: [PageDescriptionComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {
  title = 'Todo';
  description = 'Welcome to the todo page';
}


