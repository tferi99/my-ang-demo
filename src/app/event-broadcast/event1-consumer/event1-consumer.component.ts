import { Component, OnInit } from '@angular/core';
import {Test1Event} from '../../shared/event/test1-event';
import {EventBroadcasterLocatorService} from '../../core/event-broadcaster-locator.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-event1-consumer',
  templateUrl: './event1-consumer.component.html',
  styleUrls: ['./event1-consumer.component.sass']
})
export class Event1ConsumerComponent implements OnInit {
  event: Test1Event;
  constructor(private ebls: EventBroadcasterLocatorService, private log: NGXLogger) { }

  ngOnInit() {
    this.ebls.test1EventBroadcaster.subscribe((event: Test1Event) => {
      this.log.debug('Received: ' + JSON.stringify(event));
      this.event = event;
    });
  }
}
