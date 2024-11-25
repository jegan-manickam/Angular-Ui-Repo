import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.scss'
})
export class ComponentCommunication {
  constructor() {}
  @Input() inputText?: string;
  @Input() inputTextObject?:{[name: string]: string} = {};
}
