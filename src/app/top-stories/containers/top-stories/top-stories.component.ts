import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../../shared/services/services.module';
import { FirebaseListObservable } from 'angularfire2';
import { Observable  } from 'rxjs';

@Component({
  selector: 'hn-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {

  topStories: Observable<any>;

  private limit: number = 100;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {

    this.topStories = this.hackerNewsService.getTopStories(this.limit);

  }

  trackByForStory(index: number, item: any) {
    return item.id;
  }

}
