import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Test1Event} from './event/test1-event';
import {Test2Event} from './event/test2-event';

@Injectable({
  providedIn: 'root'
})
export class EventBroadcasterService {
  public test1Event = new Subject<Test1Event>();
  public test2Event = new Subject<Test2Event>();

  constructor() {}
}
