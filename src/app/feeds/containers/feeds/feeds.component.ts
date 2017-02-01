import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../../shared/services/services.module';
import { ActivatedRoute } from '@angular/router';
import { Observable  } from 'rxjs';
import { FEEDS_MAP } from './feeds-config';
@Component({
  selector: 'hn-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  feed: Observable<any>;

  constructor(private route: ActivatedRoute, private hackerNewsService: HackerNewsService) { }

  ngOnInit() {

    const serviceConfig =  FEEDS_MAP.get(this.route.routeConfig.path);

    this.feed = this.hackerNewsService[serviceConfig.method](serviceConfig.limit);

  }

  trackByForItem(index: number, item: any) {
    return item.id;
  }
}
