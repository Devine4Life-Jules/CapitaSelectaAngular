import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-page">
      <h2>About Maître d'Hôtel</h2>
      <div class="about-content">
        <p>
          Welcome to <strong>Maître d'Hôtel</strong> - a comprehensive restaurant management system
          built with Angular to showcase modern web development practices.
        </p>

        <h3>Angular Features Demonstrated:</h3>
        <ul>
          <li><strong>Standalone Components:</strong> Modern Angular architecture without NgModules</li>
          <li><strong>Signals:</strong> Reactive state management with Angular signals</li>
          <li><strong>Dependency Injection:</strong> Services for centralized state management</li>
          <li><strong>Reactive Forms:</strong> Form validation with FormBuilder and Validators</li>
          <li><strong>Angular Router:</strong> Client-side navigation and routing</li>
          <li><strong>&#64;Input/&#64;Output:</strong> Component communication patterns</li>
          <li><strong>Control Flow Syntax:</strong> Modern &#64;if/&#64;for template syntax</li>
          <li><strong>Animations:</strong> Smooth transitions with Angular animations</li>
          <li><strong>Computed Signals:</strong> Derived state calculations</li>
          <li><strong>TypeScript:</strong> Strong typing with interfaces and models</li>
        </ul>

        <h3>Features:</h3>
        <ul>
          <li>Interactive floor plan with table management</li>
          <li>Order tracking and billing system</li>
          <li>Reservation management with time-based filtering</li>
          <li>Real-time updates using Angular signals</li>
          <li>Responsive design and animations</li>
        </ul>

        <div class="tech-stack">
          <h3>Built With:</h3>
          <p>Angular 20 • TypeScript • RxJS • Zoneless</p>
        </div>
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

    strong {
      color: #007bff;
    }

    .tech-stack {
      margin-top: 2rem;
      padding: 1rem;
      background: #f8f9fa;
      border-left: 4px solid #007bff;
      border-radius: 4px;
    }

    .tech-stack h3 {
      margin-top: 0;
    }

    .tech-stack p {
      font-weight: 600;
      color: #666;
    }
  `]
})
export class AboutComponent {}
