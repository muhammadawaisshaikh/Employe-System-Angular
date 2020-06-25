import { TestBed } from '@angular/core/testing';

import { EmployeeHandbookService } from './employee-handbook.service';

describe('EmployeeHandbookService', () => {
  let service: EmployeeHandbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeHandbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
