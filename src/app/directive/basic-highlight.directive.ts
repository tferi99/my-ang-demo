import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  @Input() color = 'transparent';
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.elRef.nativeElement.style.backgroundColor = this.color;
  }
}
