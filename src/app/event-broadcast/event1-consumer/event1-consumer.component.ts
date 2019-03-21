import { Component, OnInit } from '@angular/core';
import {EventBroadcasterService} from '../../core/event-broadcaster.service';
import {Test1Event} from '../../core/event/test1-event';

@Component({
  selector: 'app-event1-consumer',
  templateUrl: './event1-consumer.component.html',
  styleUrls: ['./event1-consumer.component.sass']
})
export class Event1ConsumerComponent implements OnInit {
  event: Test1Event;
  constructor(private ebs: EventBroadcasterService) { }

  ngOnInit() {
    this.ebs.test1Event.subscribe((e: Test1Event) => {
      console.log('Received: ' + JSON.stringify(e));
      this.event = e;
    });
  }
}
