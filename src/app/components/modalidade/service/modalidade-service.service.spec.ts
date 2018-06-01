import { TestBed, inject } from '@angular/core/testing';

import { ModalidadeServiceService } from './modalidade-service.service';

describe('ModalidadeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalidadeServiceService]
    });
  });

  it('should be created', inject([ModalidadeServiceService], (service: ModalidadeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
