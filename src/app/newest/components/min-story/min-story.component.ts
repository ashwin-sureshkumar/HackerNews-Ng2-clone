import { Component, OnInit, Input } from '@angular/core';
import { HackerNewsService } from '../../../shared/services/services.module';
import { FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';

@Component({
  selector: 'hn-min-story',
  templateUrl: './min-story.component.html',
  styleUrls: ['./min-story.component.scss']
})
export class MinStoryComponent implements OnInit {
  story: any;

  @Input()
  set item(item: number) {
    this.story = this.hackerNewsService.getItem(item).subscribe((story) => this.story = story);
  };

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {

  }

}
