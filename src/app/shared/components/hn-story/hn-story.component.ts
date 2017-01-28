import { Component, Input } from '@angular/core';
import { HackerNewsService } from '../../../shared/services/services.module';

@Component({
  selector: 'hn-story',
  templateUrl: './hn-story.component.html',
  styleUrls: ['./hn-story.component.scss']
})
export class HnStoryComponent {

  story: any;

  constructor(private hackerNewsService: HackerNewsService) { }

  @Input()
  set id(id: number) {
    this.hackerNewsService.getItem(id).subscribe(story => this.story = story);
  }

}
