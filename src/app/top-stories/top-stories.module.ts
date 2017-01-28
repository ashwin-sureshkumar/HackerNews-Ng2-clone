import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared/components/components.module';
import { TopStoriesComponent } from './containers/top-stories/top-stories.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [TopStoriesComponent]
})
export class TopStoriesModule { }
