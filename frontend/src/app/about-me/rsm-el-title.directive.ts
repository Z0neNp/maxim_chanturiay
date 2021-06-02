import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ContactInfoRsmElTitleToRsmElTitlesCommService }
  from "../contact-info/rsm-el-title-to-rsm-el-titles-comm.service";

import { RsmElTitleDirective } from "../reusable-directives/rsm-el-title.directive";

import { AbtMeRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";

import { AbtMeRsmElTitleToRsmElTitlesCommService }
  from "./rsm-el-title-to-rsm-el-titles-comm.service";

@Directive({
  selector: '[appAbtMeRsmElTitle]'
})
export class AbtMeRsmElTitleDirective extends RsmElTitleDirective {

  private commToContactInfoRsmElTitle: Subscription;

  constructor(
    el: ElementRef,
    private commToRsmElService: AbtMeRsmElTitleToRsmElCommService,
    private commToRsmElTitlesService: AbtMeRsmElTitleToRsmElTitlesCommService,
    private commToContactInfoRsmElTitleService: ContactInfoRsmElTitleToRsmElTitlesCommService
    ) {
    super(el);
    this.commToContactInfoRsmElTitle = this.commToContactInfoRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
  }

  ngOnDestroy(): void {
    this.logger.debug("AbtMeRsmElTitleDirective", "ngOnDestroy", "Start");
    this.commToContactInfoRsmElTitle.unsubscribe();
    this.logger.debug("AbtMeRsmElTitleDirective", "ngOnDestroy", "Finish");
  }

  protected consumeEventFromRsmElTitle(): void {
    this.commToRsmElService.doNotShowRsmEl();
  }

  protected showPressed() {
    this.logger.debug("AbtMeRsmElTitleDirective", "showPressed", "Start");
    super.showPressed();
    this.logger.debug("AbtMeRsmElTitleDirective", "showPressed", "Finish");
  }

  protected showNonPressed() {
    this.logger.debug("AbtMeRsmElTitleDirective", "showNonPressed", "Start");
    super.showNonPressed();
    this.commToRsmElService.showRsmEl();
    this.commToRsmElTitlesService.doNotShowRsmEl();
    this.logger.debug("AbtMeRsmElTitleDirective", "showNonPressed", "Finish");
  }

}
