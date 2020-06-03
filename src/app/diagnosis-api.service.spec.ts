import { TestBed } from '@angular/core/testing';

import { DiagnosisApiService } from './diagnosis-api.service';

describe('DiagnosisApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagnosisApiService = TestBed.get(DiagnosisApiService);
    expect(service).toBeTruthy();
  });
});
