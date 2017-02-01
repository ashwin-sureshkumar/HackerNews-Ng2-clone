import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'hn-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent  {
  story: any;

  @Input()
  set data (data: any){
    this.story = data;
  }

  constructor() { }

}
