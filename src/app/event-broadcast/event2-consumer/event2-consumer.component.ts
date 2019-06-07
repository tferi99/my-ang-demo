import { Component, OnInit } from '@angular/core';
import {Test2Event} from '../../shared/event/test2-event';
import {EventBroadcasterLocatorService} from '../../core/event-broadcaster-locator.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-event2-consumer',
  templateUrl: './event2-consumer.component.html',
  styleUrls: ['./event2-consumer.component.sass']
})
export class Event2ConsumerComponent implements OnInit {
  event: Test2Event;
  constructor(private ebls: EventBroadcasterLocatorService, private log: NGXLogger) {
    this.event = new Test2Event(0, 'white', 0, false);
  }

  ngOnInit() {
    this.ebls.test2EventBroadcaster.subscribe((event: Test2Event) => {
      this.log.debug('Received: ' + JSON.stringify(event));
      this.event = event;
    });
  }
}
