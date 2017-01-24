import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewestComponent } from './containers/newest/newest.component';
import { MinStoryComponent } from './containers/min-story/min-story.component';
import { MdToolbarModule, MdCardModule, MdIconModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdCardModule,
    MdIconModule
  ],
  declarations: [NewestComponent, MinStoryComponent]
})
export class NewestModule { }
