import {Subject} from 'rxjs';

export class EventBroadcaster<T> {
  private subject: Subject<T>;

  constructor() {
    this.subject = new Subject<T>();
  }

  sendEvent(eventData: T) {
    this.subject.next(eventData);
  }

  subscribe(func: (t: T) => void) {
    this.subject.subscribe(func);
  }
}
