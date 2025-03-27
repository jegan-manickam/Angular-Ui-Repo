import { Component, Input, inject } from '@angular/core';
import { ModifyService } from '../Service/modify.service';
import { cloneDeep } from 'lodash';
import { RoomRateComponent } from '../room-rate/room-rate.component';

@Component({
  selector: 'modify-stay',
  standalone: true,
  imports: [
    RoomRateComponent
  ],
  templateUrl: './modify-stay.component.html',
  styleUrl: './modify-stay.component.css'
})
export class ModifyStayComponent {
  constructor() {}

  @Input() update:any = {value: 0};
  //modifySerive:any = inject(ModifyService);
  stayRates:any = cloneDeep(ModifyService)

  updateData() {
    this.stayRates.valueUpdate(this.update);
  }

  printValue() {
    console.log(this.stayRates)
  }
}

