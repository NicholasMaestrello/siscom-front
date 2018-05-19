import { TestBed, inject } from '@angular/core/testing';

import { AuthfilterService } from './authfilter.service';

describe('AuthfilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthfilterService]
    });
  });

  it('should be created', inject([AuthfilterService], (service: AuthfilterService) => {
    expect(service).toBeTruthy();
  }));
});
