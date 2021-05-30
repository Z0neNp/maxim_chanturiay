import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'About Me'`, () => {
    expect(component.title).toEqual('About Me');
  });

  it('should render the title', () => {
    let h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('About Me');
  });
});
