import { Component, OnInit, Input } from '@angular/core';
import { HackerNewsService } from '../../../shared/services/hacker-news.service';
@Component({
  selector: 'hn-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class HnFeedItemComponent {

  item: any;

  constructor(private hackerNewsService: HackerNewsService) { }

  @Input()
  set id(id: number) {
    this.hackerNewsService.getItem(id).subscribe(item => this.item = item);
  }

}
