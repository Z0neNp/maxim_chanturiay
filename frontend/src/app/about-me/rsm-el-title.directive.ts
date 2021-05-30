import { Directive, ElementRef } from '@angular/core';

import { RsmElTitleDirective } from "../reusable-directives/rsm-el-title.directive";
import { AbtMeRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";

@Directive({
  selector: '[appAbtMeRsmElTitle]'
})
export class AbtMeRsmElTitleDirective extends RsmElTitleDirective {

  constructor(el: ElementRef, private abtMeRsmElCommService: AbtMeRsmElTitleToRsmElCommService) {
    super(el);
  }

  protected showNonPressed() {
    super.showNonPressed();
    this.logger.debug("AbtMeRsmElTitleDirective", "showNonPressed", "Start");
    this.abtMeRsmElCommService.showRsmEl();
    this.logger.debug("AbtMeRsmElTitleDirective", "showNonPressed", "Finish");
  }

}
