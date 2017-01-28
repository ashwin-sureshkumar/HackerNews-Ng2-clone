import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HnStoryComponent } from './hn-story/hn-story.component';
import { MomentModule } from 'angular2-moment';
import { MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    MdCardModule
  ],
  declarations: [HnStoryComponent],
  exports : [ HnStoryComponent ]
})
export class ComponentsModule { }
