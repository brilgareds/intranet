import { TestBed } from '@angular/core/testing';

import { FabricantesService } from './fabricantes.service';

describe('FabricantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabricantesService = TestBed.get(FabricantesService);
    expect(service).toBeTruthy();
  });
});
