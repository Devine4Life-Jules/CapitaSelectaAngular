import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  // declarations: [HeaderComponent],
  templateUrl: './app.component.html',
  // template: '<app-header></app-header>'
})
export class AppComponent {
  title = 'Angular Blog';
}
