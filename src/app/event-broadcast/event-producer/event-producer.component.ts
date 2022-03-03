import { Component, OnInit } from '@angular/core';
import {Test1Event} from '../../shared/event/test1-event';
import {Test2Event} from '../../shared/event/test2-event';
import {EventBroadcasterLocatorService} from '../../core/service/event-broadcaster-locator.service';

enum Colors {
  green, blue, brown, coral, gray, cyan, yellow
}

@Component({
  selector: 'ebr-event-producer',
  templateUrl: './event-producer.component.html',
  styleUrls: ['./event-producer.component.sass']
})
export class EventProducerComponent implements OnInit {
  private static value = 0;
  constructor(private ebls: EventBroadcasterLocatorService) { }

  ngOnInit() {
  }

  onClick1() {
    EventProducerComponent.value++;
    const data = new Test1Event(EventProducerComponent.value, 'errorMessage' + EventProducerComponent.value);
    this.ebls.test1EventBroadcaster.sendEvent(data);
  }

  onClick2() {
    const colorValue = Math.random() * Object.keys(Colors).length / 2;
    const colorIdx = Math.floor(colorValue);
    const lightValue = Math.random() * 2;
    const light = lightValue < 1;
    const color = (light ? 'light' : '') + Colors[colorIdx];
    const data = new Test2Event(colorValue, color, lightValue, light);
    this.ebls.test2EventBroadcaster.sendEvent(data);
  }
}
