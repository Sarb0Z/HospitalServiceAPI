import { TestBed } from '@angular/core/testing';

import { VisitApiService } from './visit-api.service';

describe('VisitApiService', () => {
  let service: VisitApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
