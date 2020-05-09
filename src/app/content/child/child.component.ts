import {Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'con-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {
  @ViewChild('panel', {static: true}) panel: ElementRef;
  @ContentChild('pushedContent', {static: true}) pushedContent: ElementRef;

  desc: string;

  constructor() { }

  ngOnInit(): void {
    this.desc = this.panel.nativeElement.textContent;
  }
}
