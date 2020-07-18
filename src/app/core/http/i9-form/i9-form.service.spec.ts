import { TestBed } from '@angular/core/testing';

import { I9FormService } from './i9-form.service';

describe('I9FormService', () => {
  let service: I9FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I9FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
