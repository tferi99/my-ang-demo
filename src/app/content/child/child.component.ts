import {Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'con-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {
  @ViewChild('panel', {static: true}) panel: ElementRef;                            // reference to an element on THIS component template
  @ContentChild('pushedContentRef', {static: true}) pushedContentRef: ElementRef;   // reference to an element on CONTENT projected here

  desc: string;

  constructor() { }

  ngOnInit(): void {
    this.desc = this.panel.nativeElement.textContent;

    if (this.pushedContentRef) {
      this.pushedContentRef.nativeElement.style.backgroundColor = 'yellow';     // set background color of referenced pushed content
    }
  }
}
