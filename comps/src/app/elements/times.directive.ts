import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.TemplateRef, {});

    }
  }
  constructor(
    private viewContainer: ViewContainerRef,
    private TemplateRef: TemplateRef<any>) { }

}
