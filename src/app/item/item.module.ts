import { NgModule, Directive,ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './containers/item/item.component';
import { StoryComponent } from './components/story/story.component';
import { PollComponent } from './components/poll/poll.component';
import { JobComponent } from './components/job/job.component';
import { CommentComponent } from './containers/comment/comment.component';
import { CommentsComponent } from './containers/comments/comments.component';
import { MomentModule } from 'angular2-moment';
@NgModule({
  imports: [
    CommonModule,
    MomentModule
  ],
  entryComponents : [  StoryComponent, PollComponent, JobComponent ],
  declarations: [ItemComponent, StoryComponent, PollComponent, JobComponent, CommentsComponent, CommentComponent]
})
export class ItemModule { }
