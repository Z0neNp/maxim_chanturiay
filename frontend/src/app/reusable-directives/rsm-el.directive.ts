import { Directive, ElementRef, Inject, OnInit } from '@angular/core';

import { AppModule } from '../app.module';
import { LoggerService } from '../reusable-services/logger.service';

@Directive()
export class RsmElDirective implements OnInit {
  
  protected logger: LoggerService;

  constructor(private el: ElementRef) {
    this.logger = AppModule.injector.get(LoggerService);
  }

  ngOnInit(): void {
    this.doNotShowDirective();
  }

  protected doNotShowDirective(): void {
    this.logger.debug("RsmElDirective", "doNotShowDirective", "Start");
    this.el.nativeElement.classList.remove("rsm-el-shown");
    this.el.nativeElement.classList.add("rsm-el-not-shown");
    this.logger.debug("RsmElDirective", "doNotShowDirective", "Finish");
  }

  protected showDirective(): void {
    this.logger.debug("RsmElDirective", "showDirective", "Start");
    this.el.nativeElement.classList.remove("rsm-el-not-shown");
    this.el.nativeElement.classList.add("rsm-el-shown");
    this.logger.debug("RsmElDirective", "showDirective", "Finish");
  }
}
