import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../../../reducers';
import {select, Store} from '@ngrx/store';
import {AddCounter, DecrementAction, DeleteCounter, IncrementAction} from '../../store/counter/counter.actions';
import * as uuid from 'uuid';
import {Observable} from 'rxjs';
import {Counter} from '../../store/counter/counter.model';
import {selectCounterById} from '../../store/counter/counter.selector';

@Component({
  selector: 'grid-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit, OnDestroy {
  id!: string;
  counter$!: Observable<Counter | undefined>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.id = uuid.v4();
    this.counter$ = this.store.pipe(
      select(selectCounterById(this.id))
    );
    this.store.dispatch(new AddCounter({counter: {id: this.id, value: 0}}));
  }

  ngOnDestroy(): void {
    this.store.dispatch(new DeleteCounter({id: this.id}));
  }

  increment() {
    this.store.dispatch(new IncrementAction(this.id));
  }

  decrement() {
    this.store.dispatch(new DecrementAction(this.id));
  }
}
