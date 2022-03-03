import {Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

/**
 * From: https://blog.cloudboost.io/creating-structural-directives-in-angular-ff17211c7b28
 */
@Directive({
  selector: '[appNgLoop]'
})
export class NgLoopDirective implements OnChanges {
  @Input() appNgLoopOf: Array<any>;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.container.clear();

    for (const item of this.appNgLoopOf) {
      this.container.createEmbeddedView(this.template, {
        $implicit: item,
        index: this.appNgLoopOf.indexOf(item),
      });
    }
  }
}
