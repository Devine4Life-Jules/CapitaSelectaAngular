import { Component } from '@angular/core';
import { MathService } from '../math.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-reset-btn',
  imports: [],
  template: '<button (click)="mathService.reset()">Reset</button>',
  styleUrl: './reset-btn.component.css'
})



export class ResetBtnComponent {
  mathService = inject(MathService)
}
