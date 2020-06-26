import { TestBed } from '@angular/core/testing';

import { W4FormService } from './w4-form.service';

describe('W4FormService', () => {
  let service: W4FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(W4FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
