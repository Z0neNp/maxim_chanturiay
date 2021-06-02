import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { RsmElDirective } from "../reusable-directives/rsm-el.directive";
import { RsmElState } from "../reusable-enums/rsm-el-state";
import { EducationRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";

@Directive({
  selector: '[appEducationRsmEl]'
})
export class EducationRsmElDirective extends RsmElDirective implements OnDestroy {

  private commToRsmElTitle: Subscription;

  constructor(
    el: ElementRef,
    private commToRsmTitleService: EducationRsmElTitleToRsmElCommService
  ) {
    super(el);
    this.commToRsmElTitle = this.commToRsmTitleService.rsmElTitleToRsmEl
      .subscribe((state: RsmElState) => { this.consumeRsmElState(state); });
  }

  ngOnDestroy(): void {
    this.logger.debug("EducationRsmElDirective", "ngOnDestroy", "Start");
    this.commToRsmElTitle.unsubscribe();
    this.logger.debug("EducationRsmElDirective", "ngOnDestroy", "Finish");
  }

  private consumeRsmElState(state: RsmElState): void {
    this.logger.debug("EducationRsmElDirective", "consumeRsmElState", `Start - state: ${state}`);
    if (state == RsmElState.SHOWN)
      this.showDirective();
    else if (state == RsmElState.NOT_SHOWN)
      this.doNotShowDirective();
    this.logger.debug("EducationRsmElDirective", "consumeRsmElState", "Finish");
  }

  protected doNotShowDirective(): void {
    this.logger.debug("EducationRsmElDirective", "doNotShowDirective", "Start");
    super.doNotShowDirective();
    this.logger.debug("EducationRsmElDirective", "doNotShowDirective", "Finish");
  }

  protected showDirective(): void {
    this.logger.debug("EducationRsmElDirective", "showDirective", "Start");
    super.showDirective();
    this.logger.debug("EducationRsmElDirective", "doNotShowDirective", "Finish");
  }

}
