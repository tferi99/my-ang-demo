import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ChdService} from '../chd.service';
import {Observable, Subscription} from 'rxjs';
import {counter} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'chd-select-onpush',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectOnPushComponent implements OnInit, OnDestroy {
  type = 'onPush';
  @Input() options = [];
  @Input() counter: Observable<number>;
  counterSubscription: Subscription;

  constructor(private chdService: ChdService) {}

  change() {}

  getChdCurrentValue(): number {
    return this.chdService.getCurrentValue();
  }

  trigger() {}

  ngOnInit(): void {
    if (this.counter) {
      this.counterSubscription = this.counter.subscribe()
    }
  }

  ngOnDestroy(): void {
  }
}
