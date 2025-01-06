import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'links',
    loadComponent: () => import('./component/link/link.component').then(render => render.LinkComponent)
  },
  {
    path: 'input',
    loadComponent: () => import('./component/input/input.component').then(render => render.InputComponent)
  },
  {
    path: 'componentCommunication',
    loadComponent: () => import('./component/component-communication/component-communication.component').then(render => render.ComponentCommunication)
  },
  {
    path: 'angularFormGroup',
    loadComponent: () => import('./component/angular-form/angular-form.component').then(render => render.AngularFormComponent)
  },
  {
    path: 'events',
    loadComponent: () => import('./component/events/events.component').then(render => render.EventsComponent)
  },
  {
    path: 'syntex',
    loadComponent: () => import('./component/syntex/syntex.component').then(render => render.SyntexComponent)
  },
  { path: '',
    redirectTo: 'links',
    pathMatch: 'full'
  },
  { 
    path: '**',
    loadComponent: () => import('./component/page-not-found-component/page-not-found-component.component').then(render => render.PageNotFoundComponentComponent)
  }
];