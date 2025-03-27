import { Component, Input } from '@angular/core';

@Component({
  selector: 'room-rate',
  standalone: true,
  imports: [],
  templateUrl: './room-rate.component.html',
  styleUrl: './room-rate.component.css'
})
export class RoomRateComponent {
  constructor() {}

  @Input() update = {value: 0};
  @Input() stayRates:any = {};

  updateData() {
    this.stayRates.valueUpdate(this.update);
  }

  printValue() {
    console.log(this.stayRates)
  }
}
