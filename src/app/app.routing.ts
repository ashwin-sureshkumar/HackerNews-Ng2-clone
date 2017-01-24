import { Routes } from '@angular/router';
import { NewestComponent } from './newest/containers/newest/newest.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/newest',
    pathMatch : 'full'
  },
  {
     path: 'newest',
     component : NewestComponent
  }
];

