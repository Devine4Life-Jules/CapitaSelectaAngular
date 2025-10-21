import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncrementBtnComponent } from './increment-btn/increment-btn.component';
import { DecrementBtnComponent } from './decrement-btn/decrement-btn.component';
import { ResetBtnComponent } from './reset-btn/reset-btn.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IncrementBtnComponent, DecrementBtnComponent, ResetBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{



}









