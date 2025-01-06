import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TwoWayBindINPUT } from '../../interfaces/input.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.scss'
})

export class ComponentCommunication {
  constructor() {}
  @Input() config:any = {event: false};
  @Input() inputText?: string;
  @Input() inputTextObject:TwoWayBindINPUT = {text: '', input: false};
  @Output() withEmiter = new EventEmitter();
  @Input() withOutEmitter:any;

  callBackFunction() {
    console.log("communication component")
    this.withEmiter.emit();
    if (typeof this.withOutEmitter == 'function'){
      this.withOutEmitter();
    }
  }
}
