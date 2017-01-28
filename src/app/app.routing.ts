import { Routes } from '@angular/router';
import { NewestComponent } from './newest/containers/newest/newest.component';
import { TopStoriesComponent } from './top-stories/containers/top-stories/top-stories.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/top-stories',
    pathMatch : 'full'
  },
  {
    path: 'top-stories',
    component: TopStoriesComponent
  },
  {
     path: 'newest',
     component : NewestComponent
  }
];

