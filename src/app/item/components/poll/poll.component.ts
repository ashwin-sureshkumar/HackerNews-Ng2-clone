import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hn-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
  }

}
