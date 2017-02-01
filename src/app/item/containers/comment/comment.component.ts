import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewChecked, AfterViewInit,  ElementRef } from '@angular/core';
import { HackerNewsService } from '../../../shared/services/hacker-news.service';
import { CommentsComponent } from '../comments/comments.component';
@Component({
  selector: 'hn-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent  implements  AfterViewInit {
  comment: any;

  visible: boolean = true;
  
  @ViewChildren(CommentComponent) childComments :QueryList<CommentComponent>

  @Input()
  set id (id : number){
    this.hackerNewsService.getItem(id).subscribe(comment => this.comment = comment);
  }

//   ngAfterViewInit() {
//  //   console.log(this.childComments);
//   }

  ngAfterViewInit() {
    console.log('Length' + this.childComments.length);
    console.log(this.elementRef.nativeElement.querySelectorAll('hn-comment'));
  }

  constructor(private hackerNewsService: HackerNewsService, private elementRef: ElementRef) { }

}
