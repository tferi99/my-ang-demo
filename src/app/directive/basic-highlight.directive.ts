import {Directive, ElementRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.elRef.nativeElement.style.backgroundColor = 'green';
  }
}
