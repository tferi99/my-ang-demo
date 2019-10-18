import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {share, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'rxj-hot-vs-cold',
  templateUrl: './hot-vs-cold.component.html',
  styleUrls: ['./hot-vs-cold.component.sass']
})
export class HotVsColdComponent implements OnInit {
  coldObservable: Observable<string>;
  coldSubscription1: Subscription;
  coldValue1: string;
  coldSubscription2: Subscription;
  coldValue2: string;

  hotObservable: Observable<string>;
  hotSubscription1: Subscription;
  hotValue1: string;
  hotSubscription2: Subscription;
  hotValue2: string;
  hotSubscription3: Subscription;
  hotValue3: string;

  constructor() { }

  ngOnInit() {
    this.coldObservable = this.createCold('cold', 1000);
    this.hotObservable = this.createHot('hot', 1000);
  }

  subscribeCold1() {
    if (this.coldSubscription1) {
      this.coldSubscription1.unsubscribe();
    }
    this.coldSubscription1 = this.coldObservable.subscribe(
      x => this.coldValue1 = x
    );
  }

  subscribeCold2() {
    if (this.coldSubscription2) {
      this.coldSubscription2.unsubscribe();
    }
    this.coldSubscription2 = this.coldObservable.subscribe(
      x => this.coldValue2 = x
    );
  }

  subscribeHot1() {
    if (this.hotSubscription1) {
      this.hotSubscription1.unsubscribe();
    }
    this.hotSubscription1 = this.hotObservable.subscribe(
      x => this.hotValue1 = x
    );
  }

  subscribeHot2() {
    if (this.hotSubscription2) {
      this.hotSubscription2.unsubscribe();
    }
    this.hotSubscription2 = this.hotObservable.subscribe(
      x => this.hotValue2 = x
    );
  }

  subscribeHot3() {
    if (this.hotSubscription3) {
      this.hotSubscription3.unsubscribe();
    }
    this.hotSubscription3 = this.hotObservable.subscribe(
      x => this.hotValue3 = x
    );
  }

  private createCold(name: string, interval: number): Observable<string> {
    return new Observable((observer: any) => {
      // producer created here
      observer.next(name + ' is ALIVE: ' + Date.now());
      setInterval(() => observer.next(name + ' - ' + Date.now())
        , interval);
    });
  }

  private createHot = (name: string, interval: number) => this.createCold(name, interval).pipe(shareReplay());
}
