import { TestBed } from '@angular/core/testing';

import { AbtMeRsmElTitleToRsmElCommService } from './rsm-el-title-to-rsm-el-comm.service';

describe('AbtMeRsmElTitleToRsmElCommService', () => {
  let service: AbtMeRsmElTitleToRsmElCommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbtMeRsmElTitleToRsmElCommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
