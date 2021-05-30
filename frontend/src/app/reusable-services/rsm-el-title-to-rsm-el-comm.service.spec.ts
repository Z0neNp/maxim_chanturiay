import { TestBed } from '@angular/core/testing';

import { RsmElTitleToRsmElCommService } from './rsm-el-title-to-rsm-el-comm.service';

describe('RsmElTitleToRsmElCommService', () => {
  let service: RsmElTitleToRsmElCommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsmElTitleToRsmElCommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
