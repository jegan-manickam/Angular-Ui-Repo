import { Component, effect, signal } from '@angular/core';
import { SignalCommunicationComponent } from '../signal-communication/signal-communication.component';

@Component({
  selector: 'app-signal',
  imports: [
    SignalCommunicationComponent
  ],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  constructor(){}
  signalScope = signal(true);
  signalUpdateFromChild = signal(false);

  updateSignal() {
    this.signalScope.set(!this.signalScope());
  }

  test = effect(() => {
    this.signalUpdateFromChild();
    console.log("Working");
  }, {allowSignalWrites: true})
}
