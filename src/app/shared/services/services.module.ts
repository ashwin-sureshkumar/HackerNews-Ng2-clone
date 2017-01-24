
import { NgModule } from '@angular/core';
import { HackerNewsService } from './hacker-news.service';

@NgModule({
  imports: [],
  exports : [],
  declarations: [],
  providers: []
})
export class ServicesModule{
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        HackerNewsService
      ]
    }
  }
}


export {
  HackerNewsService
}
