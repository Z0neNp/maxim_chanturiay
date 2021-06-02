import { DebugNode } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { environment } from "../../environments/environment";

import { AppModule } from "../app.module";

import { ContactInfoComponent } from './contact-info.component';

import { ContactInfoRsmElTitleDirective } from './rsm-el-title.directive';

import { ContactInfoRsmElDirective } from './rsm-el.directive';

describe('ContactInfoComponent', () => {
  let component: ContactInfoComponent;
  let fixture: ComponentFixture<ContactInfoComponent>;
  let contactInfoRsmElTitleDirectiveQueryResponse: DebugNode[];
  let contactInfoRsmElDirectiveQueryResponse: DebugNode[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContactInfoComponent, ContactInfoRsmElTitleDirective, ContactInfoRsmElDirective
      ],
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    contactInfoRsmElTitleDirectiveQueryResponse = fixture.debugElement.queryAll(
      By.directive(ContactInfoRsmElTitleDirective)
    );
    contactInfoRsmElDirectiveQueryResponse = fixture.debugElement.queryAll(
      By.directive(ContactInfoRsmElDirective)
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have as title \"Contact Details\"", () => {
    expect(component.title).toEqual('Contact Details');
  });

  it("should contain the directives", () => {
    expect(contactInfoRsmElTitleDirectiveQueryResponse).toHaveSize(1);
    expect(contactInfoRsmElDirectiveQueryResponse).toHaveSize(1);
  });

  it("should render the ContactInfoRsmElTitleDirective with default style", () => {
    let directive: DebugNode = contactInfoRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    expect(el.innerHTML).toContain("Contact Details");
    expect(el.classList).toContain("rsm-el-title");
  });

  it("should show ContactInfoRsmElTitleDirective as pressed when touch starts", () => {
    let directive: DebugNode = contactInfoRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    el.dispatchEvent(new Event("touchstart"));
    expect(el.classList).toContain("pressed");
  });

  it("should show ContactInfoRsmElTitleDirective as non pressed when touch ends", () => {
    let directive: DebugNode = contactInfoRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    el.dispatchEvent(new Event("touchstart"));
    el.dispatchEvent(new Event("touchend"));
    setTimeout(() => {
      expect(el.classList).not.toContain("pressed");
    }, environment.event.rendered_delay);
  });

  it(
    "should show ContactInfoRsmElDirective when ContactInfoRsmElTitleDirective touch ends",
    () => {
      let directive: DebugNode = contactInfoRsmElTitleDirectiveQueryResponse[0];
      let el: HTMLElement = directive.nativeNode;
      el.dispatchEvent(new Event("touchstart"));
      el.dispatchEvent(new Event("touchend"));
      directive = contactInfoRsmElDirectiveQueryResponse[0];
      el = directive.nativeNode;
      setTimeout(() => {
        expect(el.classList).toContain("rsm-el-shown");
        expect(el.classList).not.toContain("rsm-el-not-shown");
      }, environment.event.rendered_delay);
    }
  );

});
