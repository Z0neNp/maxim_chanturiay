import { Directive, ElementRef, Inject, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

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
    this.el.nativeElement.classList.remove("rsm-el-shown");
    this.el.nativeElement.classList.add("rsm-el-not-shown");
    setTimeout(() => {
      this.el.nativeElement.classList.remove("rendered");
      this.el.nativeElement.classList.add("not-rendered");
    }, environment.event.rendered_delay);
  }

  protected showDirective(): void {
    this.el.nativeElement.classList.remove("not-rendered");
    this.el.nativeElement.classList.add("rendered");
    setTimeout(() => {
      this.el.nativeElement.classList.remove("rsm-el-not-shown");
      this.el.nativeElement.classList.add("rsm-el-shown");
    }, environment.event.rendered_delay);
  }
}
