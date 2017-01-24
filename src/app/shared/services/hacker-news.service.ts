import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class HackerNewsService {

  constructor(private af: AngularFire) { }

  getNewestStories() {
    console.log(this.af.database)
    return this.af.database.list('/v0/newstories', {
      query: {
        limitToLast: 10
      }
    });
  }

  getItem(id: number) {
    return this.af.database.object('/v0/item/' + id);
  }

}
