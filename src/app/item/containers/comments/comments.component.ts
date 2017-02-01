import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'hn-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements AfterViewInit {
  @ViewChildren(CommentComponent) childComments :QueryList<CommentComponent>

  @Input()
  ids: Array<number>;

  constructor() { }

  ngAfterViewInit() {
  //  console.log(this.childComments.length)
  }
}
