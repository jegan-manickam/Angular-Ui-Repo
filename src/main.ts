import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <p *ngFor="let item of data">{{item}}</p>
  `,
  imports: [CommonModule],
})
export class App {
  name = 'Angular';
  data = ['Item 1', 'Item 2', 'Item 3'];
}

bootstrapApplication(App);
