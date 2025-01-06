import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentCommunication } from '../component-communication/component-communication.component';
import { TwoWayBindINPUT } from '../../interfaces/input.interface';

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
  inputTextWithObject:TwoWayBindINPUT = {text: '', input: true};

  public click():void {
    console.log('EEE', this.text)
  }
}
