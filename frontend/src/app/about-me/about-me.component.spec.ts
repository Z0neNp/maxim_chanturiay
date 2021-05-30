import { DebugNode } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';

import { AboutMeComponent } from './about-me.component';
import { AbtMeRsmElTitleDirective } from './rsm-el-title.directive';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
  let abtMeRsmElTitleDirectiveQueryResponse: DebugNode[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeComponent, AbtMeRsmElTitleDirective],
      imports: [AppModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    abtMeRsmElTitleDirectiveQueryResponse = fixture.debugElement.queryAll(
      By.directive(AbtMeRsmElTitleDirective)
    );
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have as title \"About Me\"", () => {
    expect(component.title).toEqual('About Me');
  });
  
  it("should contain the directives", () => {
    expect(abtMeRsmElTitleDirectiveQueryResponse).toHaveSize(1);
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

  it("should show AbtMeRsmElTitleDirective as non pressed when touch ends", () => {
    let directive: DebugNode = abtMeRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    el.dispatchEvent(new Event("touchstart"));
    el.dispatchEvent(new Event("touchend"));
    expect(el.classList).not.toContain("pressed");
  });
});
