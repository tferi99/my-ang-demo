import {Component, OnDestroy, OnInit} from '@angular/core';
import {Skill} from '../skill.model';
import {Observable, Subscription, timer} from 'rxjs';
import {ChdService} from '../chd.service';


@Component({
  selector: 'chd-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnDestroy {
  skills = [
    new Skill('1', 'JS'),
    new Skill('2', 'CSS'),
    new Skill('3', 'Angular'),
//    new Skill('4', 'Bootstrap')
  ];

  onPush = false;

  backgroundCounter: Observable<number> = timer(0, 5000);
  backgroundCounterSubscription!: Subscription;
  backgroundCounterValue!: number;

  constructor(private chdService: ChdService) { }

  ngOnInit() {
    this.backgroundCounterSubscription = this.backgroundCounter.subscribe(
      () => {
        this.chdService.incrementCurrentValue();
        this.backgroundCounterValue = this.chdService.getCurrentValue();
      }
    );
  }

  ngOnDestroy(): void {
    this.backgroundCounterSubscription.unsubscribe();
  }

  trigger() {}

  checkValue(event: any) {
    console.log(event);
  }
}
