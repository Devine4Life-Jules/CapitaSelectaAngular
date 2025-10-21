import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  imports: [],
  template: '<h1>{{ message }}</h1>',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent implements OnInit {
  message = 'Hello, World!';

  ngOnInit() {
    this.logMessage();
  }

  logMessage() {
    console.log(this.message);
  }
}
