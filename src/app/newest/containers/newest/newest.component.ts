import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../../shared/services/services.module';
import { FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
@Component({
  selector: 'hn-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.scss']
})
export class NewestComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {
    this.items = this.hackerNewsService.getNewestStories().do(console.log);
  }

}
