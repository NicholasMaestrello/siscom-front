import { TestBed, inject } from '@angular/core/testing';

import { Filter.RequisitionService } from './filter.requisition.service';

describe('Filter.RequisitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Filter.RequisitionService]
    });
  });

  it('should be created', inject([Filter.RequisitionService], (service: Filter.RequisitionService) => {
    expect(service).toBeTruthy();
  }));
});
