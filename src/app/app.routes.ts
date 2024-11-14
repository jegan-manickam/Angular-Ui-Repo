import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: 'input',
        loadComponent: () => import('./component/input/input.component').then(render => render.InputComponent)
    },
    { path: '',   redirectTo: '/input', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent },
];