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
    { path: '',   redirectTo: 'links', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent },
];