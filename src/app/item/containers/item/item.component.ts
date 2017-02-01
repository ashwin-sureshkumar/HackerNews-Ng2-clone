import { Component, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryComponent } from '../../components/story/story.component';
import { PollComponent } from '../../components/poll/poll.component';
import { HackerNewsService } from '../../../shared/services/hacker-news.service';
@Component({
  selector: 'hn-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  id: number;

  @ViewChild('dynamicItemView', { read: ViewContainerRef })  itemViewContainer : ViewContainerRef;

  constructor(private route: ActivatedRoute, private hackerNewsService : HackerNewsService, private componentFactoryResolver : ComponentFactoryResolver) { }

  ngOnInit() {
    this.route.params
        .subscribe(params => {
          this.hackerNewsService.getItem(+params['id'])
                  .subscribe(item => this.loadComponent(item));
        });
  }

  loadComponent(item) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getItemMapping(item.type));
    this.itemViewContainer.clear();

    let componentRef = this.itemViewContainer.createComponent(componentFactory);
    componentRef.instance.data = item; 
  }

  getItemMapping(type : string) : Type<any> {
    switch(type) {
      case 'poll':
        return PollComponent;
      default:
        return StoryComponent
    }   
  }

}
