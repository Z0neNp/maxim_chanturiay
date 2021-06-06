import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

import { AppModule } from '../app.module';

import { LoggerService } from '../reusable-services/logger.service';

@Directive()
export class RsmElTitleDirective implements OnInit {

  protected logger: LoggerService;

  constructor(private el: ElementRef) {
    this.logger = AppModule.injector.get(LoggerService);
  }

  ngOnInit(): void {
    this.defaultStyle();
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

  protected defaultStyle() {
    this.el.nativeElement.classList.add("rsm-el-title");
  }

  protected showNonPressed() {
    this.el.nativeElement.scrollIntoView();
    setTimeout(() => {
      this.el.nativeElement.classList.remove("pressed");
    }, environment.event.pressed_delay);
  }

  protected showPressed() {
    this.el.nativeElement.classList.add("pressed");
  }
}
