import { Component } from '@angular/core';
import { ModifyStayComponent } from './modify-stay/modify-stay.component';

@Component({
  selector: 'modify-stay-modal',
  imports: [
    ModifyStayComponent
  ],
  standalone: true,
  templateUrl: './modify-stay-modal.component.html',
  styleUrl: './modify-stay-modal.component.css'
})
export class ModifyStayModalComponent {
  constructor() {}
}
