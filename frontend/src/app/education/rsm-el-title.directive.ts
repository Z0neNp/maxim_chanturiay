import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AbtMeRsmElTitleToRsmElTitlesCommService } from "../about-me/rsm-el-title-to-rsm-el-titles-comm.service";
import { ContactInfoRsmElTitleToRsmElTitlesCommService } from "../contact-info/rsm-el-title-to-rsm-el-titles-comm.service";
import { EntExpRsmElTitleToRsmElTitlesCommService } from "../enterprise-experience/rsm-el-title-to-rsm-el-titles-comm.service";
import { PortfolioRsmElTitleToRsmElTitlesCommService } from "../portfolio/rsm-el-title-to-rsm-el-titles-comm.service";
import { RsmElTitleDirective } from "../reusable-directives/rsm-el-title.directive";
import { EducationRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";
import { EducationRsmElTitleToRsmElTitlesCommService } from "./rsm-el-title-to-rsm-el-titles-comm.service";

@Directive({
  selector: '[appEducationRsmElTitle]'
})
export class EducationRsmElTitleDirective extends RsmElTitleDirective implements OnDestroy {

  private commToAbtMeRsmElTitle: Subscription;
  private commToContactInfoRsmElTitle: Subscription;
  private commToEntExpRsmElTitle: Subscription;
  private commToPortfolioRsmElTitle: Subscription;

  constructor(
    el: ElementRef,
    private commToRsmElService: EducationRsmElTitleToRsmElCommService,
    private commToRsmElTitlesService: EducationRsmElTitleToRsmElTitlesCommService,
    private commToAbtMeRsmElTitleService: AbtMeRsmElTitleToRsmElTitlesCommService,
    private commToContactInfoRsmElTitleService: ContactInfoRsmElTitleToRsmElTitlesCommService,
    private commToEntExpRsmElTitleService: EntExpRsmElTitleToRsmElTitlesCommService,
    private commToPortfolioRsmElTitleService: PortfolioRsmElTitleToRsmElTitlesCommService
  ) {
    super(el);
    this.commToAbtMeRsmElTitle = this.commToAbtMeRsmElTitleService.rsmElTitleToRsmElTitles
      .subscribe(() => { this.consumeEventFromRsmElTitle(); });
    this.commToContactInfoRsmElTitle = this.commToContactInfoRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
    this.commToEntExpRsmElTitle = this.commToEntExpRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
    this.commToPortfolioRsmElTitle = this.commToPortfolioRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
  }

  ngOnDestroy(): void {
    this.logger.debug("EducationRsmElTitleDirective", "ngOnDestroy", "Start");
    this.commToAbtMeRsmElTitle.unsubscribe();
    this.commToContactInfoRsmElTitle.unsubscribe();
    this.commToEntExpRsmElTitle.unsubscribe();
    this.commToPortfolioRsmElTitle.unsubscribe();
    this.logger.debug("EducationRsmElTitleDirective", "ngOnDestroy", "Finish");
  }

  protected consumeEventFromRsmElTitle(): void {
    this.logger.debug("EducationRsmElTitleDirective", "consumeEventFromRsmElTitle", "Start");
    this.commToRsmElService.doNotShowRsmEl();
    this.logger.debug("EducationRsmElTitleDirective", "consumeEventFromRsmElTitle", "Finish");
  }

  protected showPressed() {
    this.logger.debug("EducationRsmElTitleDirective", "showPressed", "Start");
    super.showPressed();
    this.logger.debug("EducationRsmElTitleDirective", "showPressed", "Finish");
  }

  protected showNonPressed() {
    this.logger.debug("EducationRsmElTitleDirective", "showNonPressed", "Start");
    super.showNonPressed();
    this.commToRsmElService.showRsmEl();
    this.commToRsmElTitlesService.doNotShowRsmEl();
    this.logger.debug("EducationRsmElTitleDirective", "showNonPressed", "Finish");
  }

}
