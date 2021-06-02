import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { RsmElDirective } from "../reusable-directives/rsm-el.directive";

import { RsmElState } from "../reusable-enums/rsm-el-state";

import { ContactInfoRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";

@Directive({
  selector: '[appContactInfoRsmEl]'
})
export class ContactInfoRsmElDirective extends RsmElDirective implements OnDestroy {

  private commToRsmElTitle: Subscription;

  constructor(
    el: ElementRef,
    private commToRsmElTitleService: ContactInfoRsmElTitleToRsmElCommService
    ) {
    super(el);
    this.commToRsmElTitle = this.commToRsmElTitleService.rsmElTitleToRsmEl
      .subscribe((state: RsmElState) => this.consumeRsmElState(state));
  }

  ngOnDestroy(): void {
    this.logger.debug("ContactInfoRsmElDirective", "ngOnDestroy", "Start");
    this.commToRsmElTitle.unsubscribe();
    this.logger.debug("ContactInfoRsmElDirective", "ngOnDestroy", "Finish");
  }

  private consumeRsmElState(state: RsmElState): void {
    this.logger.debug("ContactInfoRsmElDirective", "consumeRsmElState", `Start - state: ${state}`);
    if (state == RsmElState.SHOWN)
      this.showDirective();
    else if (state == RsmElState.NOT_SHOWN)
      this.doNotShowDirective();
      this.logger.debug("ContactInfoRsmElDirective", "consumeRsmElState", "Finish");
  }

  protected doNotShowDirective(): void {
    this.logger.debug("ContactInfoRsmElDirective", "doNotShowDirective", "Start");
    super.doNotShowDirective();
    this.logger.debug("ContactInfoRsmElDirective", "doNotShowDirective", "Finish");
  }

  protected showDirective(): void {
    this.logger.debug("ContactInfoRsmElDirective", "doNotShowDirective", "Start");
    super.showDirective();
    this.logger.debug("ContactInfoRsmElDirective", "doNotShowDirective", "Finish");
  }

}
