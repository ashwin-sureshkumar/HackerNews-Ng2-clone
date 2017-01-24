import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewestComponent } from './containers/newest/newest.component';
import { MinStoryComponent } from './components/min-story/min-story.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewestComponent, MinStoryComponent]
})
export class NewestModule { }
