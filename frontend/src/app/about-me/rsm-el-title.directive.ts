import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ContactInfoRsmElTitleToRsmElTitlesCommService } from "../contact-info/rsm-el-title-to-rsm-el-titles-comm.service";
import { EducationRsmElTitleToRsmElTitlesCommService } from "../education/rsm-el-title-to-rsm-el-titles-comm.service";
import { EntExpRsmElTitleToRsmElTitlesCommService } from "../enterprise-experience/rsm-el-title-to-rsm-el-titles-comm.service";
import { PortfolioRsmElTitleToRsmElTitlesCommService } from "../portfolio/rsm-el-title-to-rsm-el-titles-comm.service";
import { RsmElTitleDirective } from "../reusable-directives/rsm-el-title.directive";
import { AbtMeRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";
import { AbtMeRsmElTitleToRsmElTitlesCommService } from "./rsm-el-title-to-rsm-el-titles-comm.service";

@Directive({
  selector: '[appAbtMeRsmElTitle]'
})
export class AbtMeRsmElTitleDirective extends RsmElTitleDirective implements OnDestroy {

  private commToContactInfoRsmElTitle: Subscription;
  private commToEducationRsmElTitle: Subscription;
  private commToEntExpRsmElTitle: Subscription;
  private commToPortfolioRsmElTitle: Subscription;

  constructor(
    el: ElementRef,
    private commToRsmElService: AbtMeRsmElTitleToRsmElCommService,
    private commToRsmElTitlesService: AbtMeRsmElTitleToRsmElTitlesCommService,
    private commToContactInfoRsmElTitleService: ContactInfoRsmElTitleToRsmElTitlesCommService,
    private commToEducationRsmElTitleService: EducationRsmElTitleToRsmElTitlesCommService,
    private commToEntExpRsmElTitleService: EntExpRsmElTitleToRsmElTitlesCommService,
    private commToPortfolioRsmElTitleService: PortfolioRsmElTitleToRsmElTitlesCommService
  ) {
    super(el);
    this.commToContactInfoRsmElTitle = this.commToContactInfoRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
    this.commToEducationRsmElTitle = this.commToEducationRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
    this.commToEntExpRsmElTitle = this.commToEntExpRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
    this.commToPortfolioRsmElTitle = this.commToPortfolioRsmElTitleService
      .rsmElTitleToRsmElTitles.subscribe(() => { this.consumeEventFromRsmElTitle(); });
  }

  ngOnDestroy(): void {
    this.logger.debug("AbtMeRsmElTitleDirective", "ngOnDestroy", "Start");
    this.commToContactInfoRsmElTitle.unsubscribe();
    this.commToEducationRsmElTitle.unsubscribe();
    this.commToEntExpRsmElTitle.unsubscribe();
    this.commToPortfolioRsmElTitle.unsubscribe();
    this.logger.debug("AbtMeRsmElTitleDirective", "ngOnDestroy", "Finish");
  }

  protected consumeEventFromRsmElTitle(): void {
    this.logger.debug("AbtMeRsmElTitleDirective", "consumeEventFromRsmElTitle", "Start");
    this.commToRsmElService.doNotShowRsmEl();
    this.logger.debug("AbtMeRsmElTitleDirective", "consumeEventFromRsmElTitle", "Finish");
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
