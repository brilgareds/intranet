import { TestBed } from '@angular/core/testing';

import { ManualesService } from './manuales.service';

describe('ManualesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManualesService = TestBed.get(ManualesService);
    expect(service).toBeTruthy();
  });
});
