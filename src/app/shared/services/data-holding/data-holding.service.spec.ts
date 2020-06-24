import { TestBed } from '@angular/core/testing';

import { DataHoldingService } from './data-holding.service';

describe('DataHoldingService', () => {
  let service: DataHoldingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHoldingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
