import { TestBed } from '@angular/core/testing';

import { HttpCoreServiceService } from './http-core.service';

describe('HttpCoreServiceService', () => {
  let service: HttpCoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
