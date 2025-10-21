import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
    @if (isLoggedIn) {
    <div>Yes, logged in</div>
    
    } @else {
    <div>No, not logged in</div>
    }
   	
    <button (click)="toggleLogIn()">{{isLoggedIn ? "log out" : "log in"}}</button>

  `,
})
export class App {
  isLoggedIn = false;

  toggleLogIn = () => {
        this.isLoggedIn = !this.isLoggedIn;
  }
}

