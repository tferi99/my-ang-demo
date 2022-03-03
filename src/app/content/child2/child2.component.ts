import {Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'con-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.sass']
})
export class Child2Component implements OnInit {
  @ContentChild('pushedContentRef', {static: true}) pushedContentRef: ElementRef;     // reference to an element on tag CONTENT of component projected here from parent

  constructor() { }

  ngOnInit(): void {
    if (this.pushedContentRef) {
      this.pushedContentRef.nativeElement.style.backgroundColor = 'yellow';     // set background color of referenced pushed content
    }
  }
}
