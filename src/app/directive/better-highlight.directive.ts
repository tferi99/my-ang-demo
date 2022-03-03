import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit, OnChanges {
  @Input() defaultColor = 'transparent';
  @Input() hightlightColor = 'transparent';

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.defaultColor);
  }
}
