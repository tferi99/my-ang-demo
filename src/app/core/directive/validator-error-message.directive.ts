import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {ControlContainer, FormControl, NgControl, Validators} from '@angular/forms';

@Directive({
  selector: '[appValidatorErrorMessage]',
})
export class ValidatorErrorMessageDirective implements OnInit {
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef,
//    private control: NgControl,
  ) { }

  ngOnInit(): void {
    const view = this.container.createEmbeddedView(this.template);
/*    const rootElem = view.rootNodes[0];
    if(rootElem && rootElem instanceof FormControl) {
      this.input = rootElem as FormControl;
      this.input.setValidators([Validators.required, Validators.maxLength(3)]);
    }*/
/*    const c = this.controlContainer.control
    if (c) {
      c.setValidators([Validators.required, Validators.maxLength(3)]);
    }*/

/*    if (this.control) {
      this.control.control.setValidators([Validators.required, Validators.maxLength(3)]);
    }*/

  }
}
