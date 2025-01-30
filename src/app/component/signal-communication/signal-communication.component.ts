import { Component, Input, WritableSignal, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-communication',
  imports: [],
  templateUrl: './signal-communication.component.html',
  styleUrl: './signal-communication.component.css'
})
export class SignalCommunicationComponent {
  constructor(){}
  @Input() signalValue: WritableSignal<boolean> = signal(false);
  @Input() singnalUpdateFromChild: WritableSignal<boolean> = signal(false);

  test = effect(() => {
    this.signalValue();
    console.log("Working");
  }, {allowSignalWrites: true})

  updateSignalValue() {
    this.singnalUpdateFromChild.set(!this.singnalUpdateFromChild());
  }
}
