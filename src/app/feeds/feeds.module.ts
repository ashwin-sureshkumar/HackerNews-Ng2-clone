import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeedsComponent } from './containers/feeds/feeds.component';
import { HnFeedItemComponent } from './containers/feed-item/feed-item.component';
import { MomentModule } from 'angular2-moment';
import { MdCardModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MomentModule,
    MdCardModule
  ],
  declarations: [FeedsComponent, HnFeedItemComponent]
})
export class FeedsModule { }
