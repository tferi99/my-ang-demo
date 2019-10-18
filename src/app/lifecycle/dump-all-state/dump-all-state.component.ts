import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Person} from '../../shared/model/person.model';
import {EventBroadcasterLocatorService} from '../../core/service/event-broadcaster-locator.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'lc-dump-all-state',
  templateUrl: './dump-all-state.component.html',
  styleUrls: ['./dump-all-state.component.sass']
})
export class DumpAllStateComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() testText: string;
  @Input() testNumber: number;
  @Input() testObject: Person;

  constructor(private log: NGXLogger) {
    this.log.debug('=== CONSTRUCTOR');
  }

  // ------------------------------------ hooks ----------------------------------------
  ngOnChanges(changes: SimpleChanges): void {
    this.log.debug('=== ngOnChanges: ', changes);
  }

  ngOnInit() {
    this.log.debug('=== ngOnInit');
  }

  ngDoCheck(): void {
    this.log.debug('=== ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.log.debug('=== ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.log.debug('=== ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    this.log.debug('=== ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.log.debug('=== ngAfterViewInit');
  }

  ngOnDestroy(): void {
    this.log.debug('=== ngOnDestroy');
  }

  // ------------------------------------------------------------------------------
  onSetTestText(v: string) {
    this.testText = v;
  }
}
