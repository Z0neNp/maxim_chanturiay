import { Directive, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { RsmElDirective } from "../reusable-directives/rsm-el.directive";
import { RsmElState } from "../reusable-enums/rsm-el-state";
import { EntExpRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";

@Directive({
  selector: '[appEntExpRsmEl]'
})
export class EntExpRsmElDirective extends RsmElDirective {

  private commToRsmElTitle: Subscription;

  constructor(
    el: ElementRef,
    private commToRsmElTitleService: EntExpRsmElTitleToRsmElCommService
  ) {
    super(el);
    this.commToRsmElTitle = this.commToRsmElTitleService.rsmElTitleToRsmEl
      .subscribe((state: RsmElState) => { this.consumeRsmElState(state); }
    );
  }

  ngOnDestroy(): void {
    this.logger.debug("EntExpRsmElDirective", "ngOnDestroy", "Start");
    this.commToRsmElTitle.unsubscribe();
    this.logger.debug("EntExpRsmElDirective", "ngOnDestroy", "Finish");
  }

  private consumeRsmElState(state: RsmElState): void {
    this.logger.debug("EntExpRsmElDirective", "consumeRsmElState", `Start - state: ${state}`);
    if (state == RsmElState.SHOWN)
      this.showDirective();
    else if (state == RsmElState.NOT_SHOWN)
      this.doNotShowDirective();
    this.logger.debug("EntExpRsmElDirective", "consumeRsmElState", "Finish");
  }

  protected doNotShowDirective(): void {
    this.logger.debug("EntExpRsmElDirective", "doNotShowDirective", "Start");
    super.doNotShowDirective();
    this.logger.debug("EntExpRsmElDirective", "doNotShowDirective", "Finish");
  }

  protected showDirective(): void {
    this.logger.debug("EntExpRsmElDirective", "showDirective", "Start");
    super.showDirective();
    this.logger.debug("EntExpRsmElDirective", "doNotShowDirective", "Finish");
  }

}
