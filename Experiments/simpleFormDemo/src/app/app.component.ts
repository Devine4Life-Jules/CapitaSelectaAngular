import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // User object with form fields
  user = {
    name: '',
    email: '',
    age: 0,
    country: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.user);
    alert(`User registered:\nName: ${this.user.name}\nEmail: ${this.user.email}\nAge: ${this.user.age}\nCountry: ${this.user.country}`);
  }
}
