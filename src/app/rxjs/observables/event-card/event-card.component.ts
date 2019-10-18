import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ObservabledDemoData} from '../observable-demo-data';
import {fromEvent, noop} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'rxj-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.sass']
})
export class EventCardComponent implements OnInit, AfterViewInit {
  @Input() data: ObservabledDemoData;
  @ViewChild('card', {static: true}) clickTarget: ElementRef;

  x: number;
  y: number;
  mouseDown = false;
  ctrlKey = false;
  altKey = false;
  buttons: number;
  leftButton: boolean;
  rightButton: boolean;

  constructor() { }

  ngOnInit() {
    this.data.color = 'warning';

    fromEvent(this.clickTarget.nativeElement, 'mousemove').subscribe(
      (event: MouseEvent) => this.renderMouseEventProperties(event));

    fromEvent(this.clickTarget.nativeElement, 'mousedown').subscribe(
      (event: MouseEvent) => this.renderMouseEventProperties(event));

    fromEvent(this.clickTarget.nativeElement, 'mouseup').subscribe(
      (event: MouseEvent) => this.renderMouseEventProperties(event));
  }

  ngAfterViewInit(): void {
  }

  renderMouseEventProperties(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
    this.ctrlKey = event.ctrlKey;
    this.altKey = event.altKey;
    this.buttons = event.buttons;
    this.leftButton = this.buttons > 0 && ((this.buttons % 2) !== 0);
    this.rightButton = this.buttons >= 2;
  }
}
