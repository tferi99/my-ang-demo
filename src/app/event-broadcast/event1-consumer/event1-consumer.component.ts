import { Component, OnInit } from '@angular/core';
import {Test1Event} from '../../shared/event/test1-event';
import {EventBroadcasterLocatorService} from '../../core/event-broadcaster-locator.service';

@Component({
  selector: 'app-event1-consumer',
  templateUrl: './event1-consumer.component.html',
  styleUrls: ['./event1-consumer.component.sass']
})
export class Event1ConsumerComponent implements OnInit {
  event: Test1Event;
  constructor(private ebls: EventBroadcasterLocatorService) { }

  ngOnInit() {
    this.ebls.test1EventBroadcaster.subscribe((event: Test1Event) => {
      console.log('Received: ' + JSON.stringify(event));
      this.event = event;
    });
  }
}
