import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseExperienceComponent } from './enterprise-experience.component';

describe('EnterpriseExperienceComponent', () => {
  let component: EnterpriseExperienceComponent;
  let fixture: ComponentFixture<EnterpriseExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
