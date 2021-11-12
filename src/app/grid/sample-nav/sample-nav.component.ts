import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../../reducers';
import {selectGridEditable} from '../store/config/config.selector';
import {ToggleGridEditableAction} from '../store/config/config.actions';

@Component({
  selector: 'grid-sample-nav',
  templateUrl: './sample-nav.component.html',
  styleUrls: ['./sample-nav.component.scss']
})
export class SampleNavComponent implements OnInit {
  editable$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.editable$ = this.store.pipe(select(selectGridEditable));
  }

  toggleGridLock() {
    this.store.dispatch(new ToggleGridEditableAction());
  }
}

