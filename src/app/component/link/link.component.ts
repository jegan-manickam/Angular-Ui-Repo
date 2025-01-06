import { Component } from '@angular/core';
import { Link } from '../../interfaces/link.interface';
import * as he from 'he';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  constructor() {}
  links: Array<Link> = [
    {
      link: '/input',
      text: 'Input'
    },
    {
      link: '/componentCommunication',
      text: he.decode('&#64;Input, &#64;Output (Component Communication)')
    },
    {
      link: '/angularFormGroup',
      text: 'Angular FormGroup'
    },
    {
      link: 'events',
      text: 'Events'
    },
    {
      link: 'syntex',
      text: '@Syntex'
    },
    {
      link: 'fwhbdkjna',
      text: 'PageNotFound'
    }
  ];
}
