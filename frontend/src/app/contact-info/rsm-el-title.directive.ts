import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AbtMeRsmElTitleToRsmElTitlesCommService } from "../about-me/rsm-el-title-to-rsm-el-titles-comm.service";
import { EducationRsmElTitleToRsmElTitlesCommService } from "../education/rsm-el-title-to-rsm-el-titles-comm.service";
import { RsmElTitleDirective } from "../reusable-directives/rsm-el-title.directive";
import { ContactInfoRsmElTitleToRsmElTitlesCommService } from "./rsm-el-title-to-rsm-el-titles-comm.service";
import { ContactInfoRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";

@Directive({
  selector: '[appContactInfoRsmElTitle]'
})
export class ContactInfoRsmElTitleDirective extends RsmElTitleDirective implements OnDestroy {

  private commToAbtMeRsmElTitle: Subscription;
  private commToEducationRsmElTitle: Subscription;

  constructor(
    el: ElementRef,
    private commToRsmElService: ContactInfoRsmElTitleToRsmElCommService,
    private commToRsmElTitlesService: ContactInfoRsmElTitleToRsmElTitlesCommService,
    private commToAbtMeRsmElTitleService: AbtMeRsmElTitleToRsmElTitlesCommService,
    private commToEducationRsmElTitleService: EducationRsmElTitleToRsmElTitlesCommService
  ) {
    super(el);
    this.commToAbtMeRsmElTitle = this.commToAbtMeRsmElTitleService.rsmElTitleToRsmElTitles
      .subscribe(() => { this.consumeEventFromRsmElTitle(); });
    this.commToEducationRsmElTitle = this.commToEducationRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
  }

  ngOnDestroy(): void {
    this.logger.debug("ContactInfoRsmElTitleDirective", "ngOnDestroy", "Start");
    this.commToAbtMeRsmElTitle.unsubscribe();
    this.commToEducationRsmElTitle.unsubscribe();
    this.logger.debug("ContactInfoRsmElTitleDirective", "ngOnDestroy", "Finish");
  }

  protected consumeEventFromRsmElTitle(): void {
    this.logger.debug("ContactInfoRsmElTitleDirective", "consumeEventFromRsmElTitle", "Start");
    this.commToRsmElService.doNotShowRsmEl();
    this.logger.debug("ContactInfoRsmElTitleDirective", "consumeEventFromRsmElTitle", "Finish");
  }

  protected showPressed() {
    this.logger.debug("ContactInfoRsmElTitleDirective", "showPressed", "Start");
    super.showPressed();
    this.logger.debug("ContactInfoRsmElTitleDirective", "showPressed", "Finish");
  }

  protected showNonPressed() {
    this.logger.debug("ContactInfoRsmElTitleDirective", "showNonPressed", "Start");
    super.showNonPressed();
    this.commToRsmElService.showRsmEl();
    this.commToRsmElTitlesService.doNotShowRsmEl();
    this.logger.debug("ContactInfoRsmElTitleDirective", "showNonPressed", "Finish");
  }

}