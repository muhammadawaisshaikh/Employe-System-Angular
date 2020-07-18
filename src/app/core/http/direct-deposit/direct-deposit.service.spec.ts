import { TestBed } from '@angular/core/testing';

import { DirectDepositService } from './direct-deposit.service';

describe('DirectDepositService', () => {
  let service: DirectDepositService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectDepositService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
