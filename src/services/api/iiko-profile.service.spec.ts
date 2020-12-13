import { TestBed } from '@angular/core/testing';

import { IikoProfileService } from './iiko-profile.service';

describe('IikoProfileService', () => {
  let service: IikoProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IikoProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
