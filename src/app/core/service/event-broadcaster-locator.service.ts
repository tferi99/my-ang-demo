import { Injectable } from '@angular/core';
import {EventBroadcaster} from '../../shared/event/event-broadcaster';
import {Test1Event} from '../../shared/event/test1-event';
import {Test2Event} from '../../shared/event/test2-event';

@Injectable({
  providedIn: 'root'
})
export class EventBroadcasterLocatorService {
  private _test1EventBroadcaster = new EventBroadcaster<Test1Event>();
  private _test2EventBroadcaster = new EventBroadcaster<Test2Event>();

  constructor() {}

  get test1EventBroadcaster(): EventBroadcaster<Test1Event> {
    return this._test1EventBroadcaster;
  }

  get test2EventBroadcaster(): EventBroadcaster<Test2Event> {
    return this._test2EventBroadcaster;
  }
}
