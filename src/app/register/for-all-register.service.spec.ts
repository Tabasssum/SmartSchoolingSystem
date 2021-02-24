import { TestBed } from '@angular/core/testing';

import { ForAllRegisterService } from './for-all-register.service';

describe('ForAllRegisterService', () => {
  let service: ForAllRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForAllRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
