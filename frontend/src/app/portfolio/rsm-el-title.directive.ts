import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AbtMeRsmElTitleToRsmElTitlesCommService } from "../about-me/rsm-el-title-to-rsm-el-titles-comm.service";
import { ContactInfoRsmElTitleToRsmElTitlesCommService } from "../contact-info/rsm-el-title-to-rsm-el-titles-comm.service";
import { EducationRsmElTitleToRsmElTitlesCommService } from "../education/rsm-el-title-to-rsm-el-titles-comm.service";
import { EntExpRsmElTitleToRsmElTitlesCommService } from "../enterprise-experience/rsm-el-title-to-rsm-el-titles-comm.service";
import { RsmElTitleDirective } from "../reusable-directives/rsm-el-title.directive";
import { PortfolioRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";
import { PortfolioRsmElTitleToRsmElTitlesCommService } from "./rsm-el-title-to-rsm-el-titles-comm.service";

@Directive({
  selector: '[appPortfolioRsmElTitle]'
})
export class PortfolioRsmElTitleDirective extends RsmElTitleDirective implements OnDestroy {

  private commToAbtMeRsmElTitle: Subscription;
  private commToContactInfoRsmElTitle: Subscription;
  private commToEducationRsmElTitle: Subscription;
  private commToEntExpRsmElTitle: Subscription;

  constructor(
    el: ElementRef,
    private commToRsmElService: PortfolioRsmElTitleToRsmElCommService,
    private commToRsmElTitlesService: PortfolioRsmElTitleToRsmElTitlesCommService,
    private commToAbtMeRsmElTitleService: AbtMeRsmElTitleToRsmElTitlesCommService,
    private commToContactInfoRsmElTitleService: ContactInfoRsmElTitleToRsmElTitlesCommService,
    private commToEducationRsmElTitleService: EducationRsmElTitleToRsmElTitlesCommService,
    private commToEntExpRsmElTitleService: EntExpRsmElTitleToRsmElTitlesCommService
  ) {
    super(el);
    this.commToAbtMeRsmElTitle = this.commToAbtMeRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
    this.commToContactInfoRsmElTitle = this.commToContactInfoRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
    this.commToEducationRsmElTitle = this.commToEducationRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
    this.commToEntExpRsmElTitle = this.commToEntExpRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
  }

  ngOnDestroy(): void {
    this.logger.debug("PortfolioRsmElTitleDirective", "ngOnDestroy", "Start");
    this.commToAbtMeRsmElTitle.unsubscribe();
    this.commToContactInfoRsmElTitle.unsubscribe();
    this.commToEducationRsmElTitle.unsubscribe();
    this.commToEntExpRsmElTitle.unsubscribe();
    this.logger.debug("PortfolioRsmElTitleDirective", "ngOnDestroy", "Finish");
  }

  protected consumeEventFromRsmElTitle(): void {
    this.logger.debug("PortfolioRsmElTitleDirective", "consumeEventFromRsmElTitle", "Start");
    this.commToRsmElService.doNotShowRsmEl();
    this.logger.debug("PortfolioRsmElTitleDirective", "consumeEventFromRsmElTitle", "Finish");
  }

  protected showPressed() {
    this.logger.debug("PortfolioRsmElTitleDirective", "showPressed", "Start");
    super.showPressed();
    this.logger.debug("PortfolioRsmElTitleDirective", "showPressed", "Finish");
  }

  protected showNonPressed() {
    this.logger.debug("PortfolioRsmElTitleDirective", "showNonPressed", "Start");
    super.showNonPressed();
    this.commToRsmElService.showRsmEl();
    this.commToRsmElTitlesService.doNotShowRsmEl();
    this.logger.debug("PortfolioRsmElTitleDirective", "showNonPressed", "Finish");
  }

}
