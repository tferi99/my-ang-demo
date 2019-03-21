import { Component, OnInit } from '@angular/core';
import {EventBroadcasterService} from '../../core/event-broadcaster.service';
import {Test2Event} from '../../core/event/test2-event';

@Component({
  selector: 'app-event2-consumer',
  templateUrl: './event2-consumer.component.html',
  styleUrls: ['./event2-consumer.component.sass']
})
export class Event2ConsumerComponent implements OnInit {
  event: Test2Event;
  constructor(private ebs: EventBroadcasterService) { }

  ngOnInit() {
    this.ebs.test2Event.subscribe((e: Test2Event) => {
      console.log('Received: ' + JSON.stringify(e));
      this.event = e;
    });
  }
}
