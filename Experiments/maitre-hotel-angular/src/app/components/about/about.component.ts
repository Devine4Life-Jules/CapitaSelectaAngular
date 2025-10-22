import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-page">
      <h2>About Maître d'Hôtel</h2>
      <div class="about-content">
        <p>
          Welcome to Maître d'Hôtel - a comprehensive restaurant management system
          built with Angular to showcase modern web development practices.
        </p>

        <h3>Angular Features Demonstrated:</h3>
        <ul>
          <li>Components: Angular architecture</li>
          <li>Signals: Reactive state management with Angular signals</li>
          <li>Dependency Injection: Services for centralized state management</li>
          <li>Angular Router: Client-side navigation and routing</li>
          <li>Input and Output: Component communication patterns</li>
          <li>Control Flow Syntax: Modern if/for template syntax</li>
          <li>Computed Signals: Derived state calculations</li>
          <li>TypeScript: Strong typing with interfaces and models</li>
        </ul>

        <h3>Features:</h3>
        <ul>
          <li>Interactive floor plan with table management</li>
          <li>Order tracking and billing system</li>
          <li>Reservation management with time-based filtering</li>
          <li>Real-time updates using Angular signals</li>
        </ul>

      </div>
    </div>
  `,
  styles: [`
    .about-page {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .about-content {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    h2 {
      margin-top: 0;
      color: #333;
    }

    h3 {
      color: #537f4b;
      margin-top: 1.5rem;
    }

    ul {
      line-height: 1.8;
    }

    li {
      margin-bottom: 0.5rem;
    }


  `]
})
export class AboutComponent {}
