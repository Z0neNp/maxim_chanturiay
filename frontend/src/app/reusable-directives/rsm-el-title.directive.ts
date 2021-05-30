import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

import { AppModule } from '../app.module';
import { LoggerService } from '../reusable-services/logger.service';

@Directive({
  selector: '[appRsmElTitleDirective]'
})
export class RsmElTitleDirective implements OnInit {

  protected logger: LoggerService;

  constructor(private el: ElementRef) {
    this.logger = AppModule.injector.get(LoggerService);
  }

  ngOnInit(): void {
    this.el.nativeElement.classList.add("rsm-el-title");
  }

  // @HostListener('mousedown') onMouseDown() {
  //   this.addPressedClass();
  // }

  // @HostListener('mouseup') onMouseLeave() {
  //   this.removePressedClass();
  // }

  @HostListener('touchend')
  onTouchEnd() {
    this.showNonPressed();
  }

  @HostListener('touchstart')
  onTouchStart() {
    this.showPressed();
  }

  // @HostListener('mouseover') onMouseOver() {
  //   this.el.nativeElement.style.cursor = "pointer";
  // }

  protected showPressed() {
    this.logger.debug("RsmElTitleDirective", "showPressed", "Start");
    this.el.nativeElement.classList.add("pressed");
    this.logger.debug("RsmElTitleDirective", "showPressed", "Finish");
  }

  protected showNonPressed() {
    this.logger.debug("RsmElTitleDirective", "showNonPressed", "Start");
    this.el.nativeElement.classList.remove("pressed");
    this.logger.debug("RsmElTitleDirective", "showNonPressed", "Finish");
  }
}
