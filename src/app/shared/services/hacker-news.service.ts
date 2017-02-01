import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class HackerNewsService {

  constructor(private af: AngularFire) { }

  getNewestStories(limit: number) {
    return this.queryList('newstories', limit);
  }

  getTopStories(limit: number) {
    return this.queryList('topstories', limit);
  }

  getShowStories(limit: number) {
    return this.queryList('showstories', limit);
  }

  getJobStories(limit: number) {
    return this.queryList('jobstories', limit);
  }

  getAskStories(limit: number) {
    return this.queryList('askstories', limit);
  }

  getBestStories(limit: number) {
    return this.queryList('beststories', limit);
  }

  getItem(id: number) {
    return this.af.database.object('/v0/item/' + id);
  }

  private queryList(path: string, limit : number) {
    return this.af.database.list(`/v0/${path}`, {
      query: {
        limitToFirst: limit
      }
    });
  }
}
