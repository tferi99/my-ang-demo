import {Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'con-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {
  @ViewChild('targetPanel', {static: true}) panel: ElementRef;                        // reference to an element on THIS component template

  dataFromTarget: string;

  constructor() { }

  ngOnInit(): void {
    this.dataFromTarget = this.panel.nativeElement.textContent;       // to access content in parent template
  }
}
