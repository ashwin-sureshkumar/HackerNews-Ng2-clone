import { Routes } from '@angular/router';
import { FeedsComponent }  from './feeds/containers/feeds/feeds.component';
import { ItemComponent }  from './item/containers/item/item.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/top',
    pathMatch : 'full'
  },
  {
    path: 'top',
    component: FeedsComponent
  },
  {
     path: 'newest',
     component : FeedsComponent
  },
  {
     path: 'best',
     component: FeedsComponent
  },
  {
     path: 'ask',
     component: FeedsComponent
  },
  {
     path: 'show',
     component: FeedsComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent
  }
];


