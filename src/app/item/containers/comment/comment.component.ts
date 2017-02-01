import { Component, Input } from '@angular/core';
import { HackerNewsService } from '../../../shared/services/hacker-news.service';
@Component({
  selector: 'hn-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  comment: any;

  visible: boolean = true;

  @Input()
  set id(id: number) {
    this.hackerNewsService.getItem(id).subscribe(comment => this.comment = comment);
  }

  constructor(private hackerNewsService: HackerNewsService) { }

}
