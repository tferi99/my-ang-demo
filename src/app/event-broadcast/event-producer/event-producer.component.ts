import { Component, OnInit } from '@angular/core';
import {EventBroadcasterService} from '../../core/event-broadcaster.service';
import {Test1Event} from '../../core/event/test1-event';
import {Test2Event} from '../../core/event/test2-event';

enum Colors {
  green, blue, brown, coral, gray, cyan, yellow
}

@Component({
  selector: 'app-event-provider',
  templateUrl: './event-producer.component.html',
  styleUrls: ['./event-producer.component.sass']
})
export class EventProducerComponent implements OnInit {
  private static value = 0;
  constructor(private ebs: EventBroadcasterService) { }

  ngOnInit() {
  }

  onClick1() {
    EventProducerComponent.value++;
    this.ebs.test1Event.next(new Test1Event(EventProducerComponent.value, 'message' + EventProducerComponent.value));
  }

  onClick2() {
    const colorValue = Math.random() * Object.keys(Colors).length / 2;
    const colorIdx = Math.floor(colorValue);
    const lightValue = Math.random() * 2;
    const light = lightValue < 1;
    const color = (light ? 'light' : '') + Colors[colorIdx];
    this.ebs.test2Event.next(new Test2Event(colorValue, color, lightValue, light));
  }
}
