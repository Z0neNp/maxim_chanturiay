import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { RsmElDirective } from "src/app/reusable-directives/rsm-el.directive";
import { AbtMeRsmElTitleToRsmElCommService } from "./rsm-el-title-to-rsm-el-comm.service";

@Directive({
  selector: '[appAbtMeRsmEl]'
})
export class AbtMeRsmElDirective extends RsmElDirective implements OnDestroy {

  private commToRsmEl: Subscription;
  
  constructor(el: ElementRef, private abtMeRsmElCommService: AbtMeRsmElTitleToRsmElCommService) {
    super(el);
    this.commToRsmEl = this.abtMeRsmElCommService.rsmElTitleToRsmEl.subscribe(() => {
      this.showDirective();
      // setTimeout( () => { this.doNotShowDirective();}, 2000 );
    });
  }

  ngOnDestroy(): void {
    this.logger.debug("AbtMeRsmElDirective", "ngOnDestroy", "Start");
    this.commToRsmEl.unsubscribe();
    this.logger.debug("AbtMeRsmElDirective", "ngOnDestroy", "Finish");
  }

}
