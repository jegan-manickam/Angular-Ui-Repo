import { Component } from '@angular/core';
import { ComponentCommunication } from '../component-communication/component-communication.component';

@Component({
  selector: 'app-events',
  imports: [
    ComponentCommunication
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  constructor() {}

  parentEvent() {
    console.log('Parent Call')
  }

  childEvent(event:any) {
    event.stopPropagation();
    console.log('Child call')
  }

  callBackFunction() {
    console.log("EEEEE")
  }
}
