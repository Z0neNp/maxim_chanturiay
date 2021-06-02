import { DebugNode } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { environment } from "../../environments/environment";
import { AppModule } from "../app.module";
import { PortfolioComponent } from "./portfolio.component";
import { PortfolioRsmElDirective } from './rsm-el.directive';
import { PortfolioRsmElTitleDirective } from './rsm-el-title.directive';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let portfolioRsmElTitleDirectiveQueryResponse: DebugNode[];
  let portfolioRsmElDirectiveQueryResponse: DebugNode[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioComponent, PortfolioRsmElDirective, PortfolioRsmElTitleDirective ],
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    portfolioRsmElTitleDirectiveQueryResponse = fixture.debugElement.queryAll(
      By.directive(PortfolioRsmElTitleDirective)
    );
    portfolioRsmElDirectiveQueryResponse = fixture.debugElement.queryAll(
      By.directive(PortfolioRsmElDirective)
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have as title \"Portfolio\"", () => {
    expect(component.title).toEqual('Portfolio');
  });

  it("should contain the directives", () => {
    expect(portfolioRsmElTitleDirectiveQueryResponse).toHaveSize(1);
    expect(portfolioRsmElDirectiveQueryResponse).toHaveSize(1);
  });

  it("should render the PortfolioRsmElTitleDirective with default style", () => {
    let directive: DebugNode = portfolioRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    expect(el.innerHTML).toContain("Portfolio");
    expect(el.classList).toContain("rsm-el-title");
  });

  it("should show PortfolioRsmElTitleDirective as pressed when touch starts", () => {
    let directive: DebugNode = portfolioRsmElTitleDirectiveQueryResponse[0];
    let el: HTMLElement = directive.nativeNode;
    el.dispatchEvent(new Event("touchstart"));
    expect(el.classList).toContain("pressed");
  });

  it(
    "should show PortfolioRsmElTitleDirective as non pressed when touch ends",
    (done) => {
      let directive: DebugNode = portfolioRsmElTitleDirectiveQueryResponse[0];
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
    "should show PortfolioRsmElDirective when PortfolioRsmElTitleDirective touch ends",
    (done) => {
      let directive: DebugNode = portfolioRsmElTitleDirectiveQueryResponse[0];
      let el: HTMLElement = directive.nativeNode;
      el.dispatchEvent(new Event("touchstart"));
      el.dispatchEvent(new Event("touchend"));
      directive = portfolioRsmElDirectiveQueryResponse[0];
      el = directive.nativeNode;
      setTimeout(() => {
        expect(el.classList).toContain("rsm-el-shown");
        expect(el.classList).not.toContain("rsm-el-not-shown");
        done();
      }, environment.event.rendered_delay);
    }
  );
});
