import { Component, signal } from '@angular/core';
import { SearchInputComponent } from './search-input/search-input.component';

@Component({
  selector: 'app-root',
  imports: [SearchInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Parent's signal that will sync with child
  parentSearchText = signal('');
}
