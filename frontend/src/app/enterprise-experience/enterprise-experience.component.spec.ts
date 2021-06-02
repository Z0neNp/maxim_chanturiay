import { DebugNode } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { environment } from "../../environments/environment";
import { AppModule } from "../app.module";
import { EnterpriseExperienceComponent } from "./enterprise-experience.component";
import { EntExpRsmElDirective } from './rsm-el.directive';
import { EntExpRsmElTitleDirective } from './rsm-el-title.directive';

describe('EnterpriseExperienceComponent', () => {
  let component: EnterpriseExperienceComponent;
  let fixture: ComponentFixture<EnterpriseExperienceComponent>;
  let entExpRsmElTitleDirectiveQueryResponse: DebugNode[];
  let entExpRsmElDirectiveQueryResponse: DebugNode[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EnterpriseExperienceComponent, EntExpRsmElDirective, EntExpRsmElTitleDirective
      ],
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    entExpRsmElTitleDirectiveQueryResponse = fixture.debugElement.queryAll(
      By.directive(EntExpRsmElTitleDirective)
    );
    entExpRsmElDirectiveQueryResponse = fixture.debugElement.queryAll(
      By.directive(EntExpRsmElDirective)
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have as title \"Enterprise Experience\"", () => {
    expect(component.title).toEqual('Enterprise Experience');
  });
  
  it("should contain the directives", () => {
    expect(entExpRsmElTitleDirectiveQueryResponse).toHaveSize(1);
    expect(entExpRsmElDirectiveQueryResponse).toHaveSize(1);
  });

  it("should render the EntExpRsmElTitleDirective with default style", () => {
    let directive: DebugNode = entExpRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    expect(el.innerHTML).toContain("Enterprise Experience");
    expect(el.classList).toContain("rsm-el-title");
  });

  it("should show EntExpRsmElTitleDirective as pressed when touch starts", () => {
    let directive: DebugNode = entExpRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    el.dispatchEvent(new Event("touchstart"));
    expect(el.classList).toContain("pressed");
  });

  it(
    "should show EntExpRsmElTitleDirective as non pressed when touch ends",
    (done) => {
      let directive: DebugNode = entExpRsmElTitleDirectiveQueryResponse[0];
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
    "should show EntExpRsmElDirective when EntExpRsmElTitleDirective touch ends",
    (done) => {
      let directive: DebugNode = entExpRsmElTitleDirectiveQueryResponse[0];
      let el: HTMLElement = directive.nativeNode;
      el.dispatchEvent(new Event("touchstart"));
      el.dispatchEvent(new Event("touchend"));
      directive = entExpRsmElDirectiveQueryResponse[0];
      el = directive.nativeNode;
      setTimeout(() => {
        expect(el.classList).toContain("rsm-el-shown");
        expect(el.classList).not.toContain("rsm-el-not-shown");
        done();
      }, environment.event.rendered_delay);
    }
  );
});
