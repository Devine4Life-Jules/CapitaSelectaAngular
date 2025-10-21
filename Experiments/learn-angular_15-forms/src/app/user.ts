import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <h2>Two-Way Binding Demo</h2>
    
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    
    <hr />
    <h3>🎯 Test BOTH Directions:</h3>
    
    <p><strong>Direction 1: Input → Component</strong></p>
    <p>Type in the input above. The text appears below immediately.</p>
    
    <p><strong>Direction 2: Component → Input</strong></p>
    <button (click)="favoriteFramework = 'Angular'">Set to "Angular"</button>
    <button (click)="favoriteFramework = 'React'">Set to "React"</button>
    <button (click)="favoriteFramework = ''">Clear</button>
    
    <p>👆 Click these buttons - they change the component variable, and the INPUT field updates!</p>
  `,
  imports: [FormsModule],
})
export class User {
  favoriteFramework = '';
  username = 'Jules';
}
