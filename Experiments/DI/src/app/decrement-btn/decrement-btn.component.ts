import { Component } from '@angular/core';
import { MathService } from '../math.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-decrement-btn',
  imports: [],
  template: '<button (click)="mathService.decrement()">- {{ mathService.currentCount() }}</button>',
  styleUrl: './decrement-btn.component.css'
})



export class DecrementBtnComponent {
  mathService = inject(MathService)
}
