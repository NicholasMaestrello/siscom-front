import { TestBed, inject } from '@angular/core/testing';

import { CursoServiceService } from './curso-service.service';

describe('CursoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursoServiceService]
    });
  });

  it('should be created', inject([CursoServiceService], (service: CursoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
