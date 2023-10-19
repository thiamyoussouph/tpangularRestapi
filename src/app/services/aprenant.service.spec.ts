import { TestBed } from '@angular/core/testing';

import { AprenantService } from './aprenant.service';

describe('AprenantService', () => {
  let service: AprenantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
