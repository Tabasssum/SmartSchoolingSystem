import { TestBed } from '@angular/core/testing';

import { ForStuRegistService } from './for-stu-regist.service';

describe('ForStuRegistService', () => {
  let service: ForStuRegistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForStuRegistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
