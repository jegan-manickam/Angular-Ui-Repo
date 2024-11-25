import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentCommunication } from '../component-communication/component-communication.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    ComponentCommunication
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  constructor() {}
  text: string = '';
  inputTextWithObject: {[text: string]: string} = {};

  public click():void {
    console.log('EEE', this.text)
  }
}
