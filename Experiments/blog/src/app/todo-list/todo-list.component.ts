import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos = signal([
    { text: 'Components & Templates (binding, directives, pipes)', isCompleted: false },
    { text: 'Modules & Services (dependency injection)', isCompleted: false },
    { text: 'Routing & Navigation (guards, lazy loading)', isCompleted: false },
    { text: 'Forms (reactive vs. template-driven)', isCompleted: false },
    { text: 'Signals', isCompleted: false },
    { text: 'State Management (NgRx or simple service-based state)', isCompleted: false },
    { text: 'Testing (Jasmine/Karma or Jest)', isCompleted: false },
    { text: 'Animations', isCompleted: false },
    { text: 'Testing', isCompleted: false },
    { text: 'Deployment', isCompleted: false },
  ]);

  toggleCompleted(todo: { text: string; isCompleted: boolean }) {
    todo.isCompleted = !todo.isCompleted;
    this.todos.set([...this.todos()]);
  }
}
