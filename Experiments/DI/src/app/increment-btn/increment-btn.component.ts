import { Component } from '@angular/core';
import { MathService } from '../math.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-increment-btn',
  imports: [],
  template: '<button (click)="mathService.increment()">+ {{ mathService.currentCount() }}</button>',
  styleUrl: './increment-btn.component.css'
})



export class IncrementBtnComponent {
  mathService = inject(MathService)
}
