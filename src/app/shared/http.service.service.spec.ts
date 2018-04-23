import { TestBed, inject } from '@angular/core/testing';

import { Http.ServiceService } from './http.service.service';

describe('Http.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Http.ServiceService]
    });
  });

  it('should be created', inject([Http.ServiceService], (service: Http.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
