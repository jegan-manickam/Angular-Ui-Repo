import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-syntex',
  imports: [
    CommonModule
  ],
  templateUrl: './syntex.component.html',
  styleUrl: './syntex.component.css'
})
export class SyntexComponent {
  constructor() {}

  items: number[] = [1,2,2,3,4];
}
