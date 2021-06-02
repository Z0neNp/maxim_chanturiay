import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { RsmElDirective } from "../reusable-directives/rsm-el.directive";
import { RsmElState } from "../reusable-enums/rsm-el-state";
import { PortfolioRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";

@Directive({
  selector: '[appPortfolioRsmEl]'
})
export class PortfolioRsmElDirective extends RsmElDirective implements OnDestroy {

  private commToRsmElTitle: Subscription;

  constructor(
    el: ElementRef,
    private commToRsmElTitleService: PortfolioRsmElTitleToRsmElCommService
  ) {
    super(el);
    this.commToRsmElTitle = this.commToRsmElTitleService.rsmElTitleToRsmEl
      .subscribe((state: RsmElState) => { this.consumeRsmElState(state); }
    );
  }

  ngOnDestroy(): void {
    this.logger.debug("PortfolioRsmElDirective", "ngOnDestroy", "Start");
    this.commToRsmElTitle.unsubscribe();
    this.logger.debug("PortfolioRsmElDirective", "ngOnDestroy", "Finish");
  }

  private consumeRsmElState(state: RsmElState): void {
    this.logger.debug("PortfolioRsmElDirective", "consumeRsmElState", `Start - state: ${state}`);
    if (state == RsmElState.SHOWN)
      this.showDirective();
    else if (state == RsmElState.NOT_SHOWN)
      this.doNotShowDirective();
    this.logger.debug("PortfolioRsmElDirective", "consumeRsmElState", "Finish");
  }

  protected doNotShowDirective(): void {
    this.logger.debug("PortfolioRsmElDirective", "doNotShowDirective", "Start");
    super.doNotShowDirective();
    this.logger.debug("PortfolioRsmElDirective", "doNotShowDirective", "Finish");
  }

  protected showDirective(): void {
    this.logger.debug("PortfolioRsmElDirective", "showDirective", "Start");
    super.showDirective();
    this.logger.debug("PortfolioRsmElDirective", "doNotShowDirective", "Finish");
  }

}
