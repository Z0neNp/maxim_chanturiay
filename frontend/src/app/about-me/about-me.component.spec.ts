import { DebugNode } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { environment } from "../../environments/environment";
import { AppModule } from "../app.module";
import { AboutMeComponent } from "./about-me.component";
import { AbtMeRsmElDirective } from './rsm-el.directive';
import { AbtMeRsmElTitleDirective } from './rsm-el-title.directive';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
  let abtMeRsmElTitleDirectiveQueryResponse: DebugNode[];
  let abtMeRsmElDirectiveQueryResponse: DebugNode[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeComponent, AbtMeRsmElTitleDirective, AbtMeRsmElDirective ],
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    abtMeRsmElTitleDirectiveQueryResponse = fixture.debugElement.queryAll(
      By.directive(AbtMeRsmElTitleDirective)
    );
    abtMeRsmElDirectiveQueryResponse = fixture.debugElement.queryAll(
      By.directive(AbtMeRsmElDirective)
    )
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have as title \"About Me\"", () => {
    expect(component.title).toEqual('About Me');
  });
  
  it("should contain the directives", () => {
    expect(abtMeRsmElTitleDirectiveQueryResponse).toHaveSize(1);
    expect(abtMeRsmElDirectiveQueryResponse).toHaveSize(1);
  });

  it("should render the AbtMeRsmElTitleDirective with default style", () => {
    let directive: DebugNode = abtMeRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    expect(el.innerHTML).toContain("About Me");
    expect(el.classList).toContain("rsm-el-title");
  });

  it("should show AbtMeRsmElTitleDirective as pressed when touch starts", () => {
    let directive: DebugNode = abtMeRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    el.dispatchEvent(new Event("touchstart"));
    expect(el.classList).toContain("pressed");
  });

  it(
    "should show AbtMeRsmElTitleDirective as non pressed when touch ends",
    (done) => {
      let directive: DebugNode = abtMeRsmElTitleDirectiveQueryResponse[0];
      let el: HTMLElement = directive.nativeNode;
      el.dispatchEvent(new Event("touchstart"));
      el.dispatchEvent(new Event("touchend"));
      setTimeout(() => {
        expect(el.classList).not.toContain("pressed");
        done();
      }, environment.event.rendered_delay);
    }
  );

  it(
    "should show AbtMeRsmElDirective when AbtMeRsmElTitleDirective touch ends",
    (done) => {
      let directive: DebugNode = abtMeRsmElTitleDirectiveQueryResponse[0];
      let el: HTMLElement = directive.nativeNode;
      el.dispatchEvent(new Event("touchstart"));
      el.dispatchEvent(new Event("touchend"));
      directive = abtMeRsmElDirectiveQueryResponse[0];
      el = directive.nativeNode;
      setTimeout(() => {
        expect(el.classList).toContain("rsm-el-shown");
        expect(el.classList).not.toContain("rsm-el-not-shown");
        done();
      }, environment.event.rendered_delay);
    }
  );
});
