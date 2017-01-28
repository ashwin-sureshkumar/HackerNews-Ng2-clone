import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class HackerNewsService {

  constructor(private af: AngularFire) { }

  getNewestStories(limit: number) {
    return this.af.database.list('/v0/newstories', {
      query: {
        limitToFirst: limit
      }
    });
  }

  getTopStories(limit: number) {
    return this.af.database.list('/v0/topstories', {
      query: {
        limitToFirst: limit
      }
    });
  }

  getItem(id: number) {
    return this.af.database.object('/v0/item/' + id);
  }

}
