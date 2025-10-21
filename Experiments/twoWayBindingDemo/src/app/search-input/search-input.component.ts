import { Component, model } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  // model() creates a two-way bindable input/output
  searchText = model<string>('');
}
