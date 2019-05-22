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

@Component({
  selector: 'lc-dump-all-state',
  templateUrl: './dump-all-state.component.html',
  styleUrls: ['./dump-all-state.component.sass']
})
export class DumpAllStateComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() testText: string
  @Input() testNumber: number

  constructor() {
    console.log('=== CONSTRUCTOR');
  }

  // ------------------------------------ hooks ----------------------------------------
  ngOnChanges(changes: SimpleChanges): void {
    console.log('=== ngOnChanges: ', changes);
  }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('=== ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('=== ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('=== ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('=== ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('=== ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('=== ngOnDestroy');
  }

  // ------------------------------------------------------------------------------
  onSetTestText(v: string) {
    this.testText = v;
  }
}
