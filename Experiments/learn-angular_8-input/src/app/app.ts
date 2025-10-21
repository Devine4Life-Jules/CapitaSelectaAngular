import {Component} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  template: `
    <app-user name="Jules" />
    <app-user name="Tom" />
  `,
  imports: [User],
})
export class App {}
