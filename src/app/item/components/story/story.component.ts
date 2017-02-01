import { Component, OnInit, Input } from '@angular/core';
import { HackerNewsService } from '../../../shared/services/hacker-news.service';
@Component({
  selector: 'hn-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent  {
  story: any;

  @Input()
  set data (data : any){
    this.story = data;
  }

  constructor(private hackerNewsService: HackerNewsService) { }

}
