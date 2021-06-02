import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { RsmElDirective } from "../reusable-directives/rsm-el.directive";

import { RsmElState } from "../reusable-enums/rsm-el-state";

import { AbtMeRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";

@Directive({
  selector: '[appAbtMeRsmEl]'
})
export class AbtMeRsmElDirective extends RsmElDirective implements OnDestroy {

  private commToRsmElTitle: Subscription;
  
  constructor(el: ElementRef, private commToRsmElTitleService: AbtMeRsmElTitleToRsmElCommService) {
    super(el);
    this.commToRsmElTitle = this.commToRsmElTitleService.rsmElTitleToRsmEl
      .subscribe((state: RsmElState) => { this.consumeRsmElState(state); }
    );
  }

  ngOnDestroy(): void {
    this.logger.debug("AbtMeRsmElDirective", "ngOnDestroy", "Start");
    this.commToRsmElTitle.unsubscribe();
    this.logger.debug("AbtMeRsmElDirective", "ngOnDestroy", "Finish");
  }

  private consumeRsmElState(state: RsmElState): void {
    this.logger.debug("AbtMeRsmElDirective", "consumeRsmElState", `Start - state: ${state}`);
    if (state == RsmElState.SHOWN)
      this.showDirective();
    else if (state == RsmElState.NOT_SHOWN)
      this.doNotShowDirective();
    this.logger.debug("AbtMeRsmElDirective", "consumeRsmElState", "Finish");
  }

  protected doNotShowDirective(): void {
    this.logger.debug("AbtMeRsmElDirective", "doNotShowDirective", "Start");
    super.doNotShowDirective();
    this.logger.debug("AbtMeRsmElDirective", "doNotShowDirective", "Finish");
  }

  protected showDirective(): void {
    this.logger.debug("AbtMeRsmElDirective", "showDirective", "Start");
    super.showDirective();
    this.logger.debug("AbtMeRsmElDirective", "doNotShowDirective", "Finish");
  }

}
