import { DebugNode } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { environment } from "../../environments/environment";
import { AppModule } from "../app.module";
import { EducationComponent } from "./education.component";
import { EducationRsmElDirective } from "./rsm-el.directive";
import { EducationRsmElTitleDirective } from "./rsm-el-title.directive";

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let educationRsmElTitleDirectiveQueryResponse: DebugNode[];
  let educationRsmElDirectiveQueryResponse: DebugNode[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationComponent, EducationRsmElDirective, EducationRsmElTitleDirective ],
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    educationRsmElTitleDirectiveQueryResponse = fixture.debugElement.queryAll(
      By.directive(EducationRsmElTitleDirective)
    );
    educationRsmElDirectiveQueryResponse = fixture.debugElement.queryAll(
      By.directive(EducationRsmElDirective)
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have as title \"Education\"", () => {
    expect(component.title).toEqual('Education');
  });

  it("should contain the directives", () => {
    expect(educationRsmElTitleDirectiveQueryResponse).toHaveSize(1);
    expect(educationRsmElDirectiveQueryResponse).toHaveSize(1);
  });

  it("should render the EducationRsmElTitleDirective with default style", () => {
    let directive: DebugNode = educationRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    expect(el.innerHTML).toContain("Education");
    expect(el.classList).toContain("rsm-el-title");
  });

  it("should show EducationRsmElTitleDirective as pressed when touch starts", () => {
    let directive: DebugNode = educationRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    el.dispatchEvent(new Event("touchstart"));
    expect(el.classList).toContain("pressed");
  });

  it("should show EducationRsmElTitleDirective as non pressed when touch ends", (done) => {
    let directive: DebugNode = educationRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    el.dispatchEvent(new Event("touchstart"));
    el.dispatchEvent(new Event("touchend"));
    setTimeout(() => {
      expect(el.classList).not.toContain("pressed");
      done();
    }, environment.event.rendered_delay);
  });

  it(
    "should show EducationRsmElDirective when EducationRsmElTitleDirective touch ends",
    (done) => {
      let directive: DebugNode = educationRsmElTitleDirectiveQueryResponse[0];
      let el: HTMLElement = directive.nativeNode;
      el.dispatchEvent(new Event("touchstart"));
      el.dispatchEvent(new Event("touchend"));
      directive = educationRsmElDirectiveQueryResponse[0];
      el = directive.nativeNode;
      setTimeout(() => {
        expect(el.classList).toContain("rsm-el-shown");
        expect(el.classList).not.toContain("rsm-el-not-shown");
        done();
      }, environment.event.rendered_delay);
    }
  );
});
