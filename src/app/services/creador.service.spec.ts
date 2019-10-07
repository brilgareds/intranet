import { TestBed } from '@angular/core/testing';

import { CreadorService } from './creador.service';

describe('CreadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreadorService = TestBed.get(CreadorService);
    expect(service).toBeTruthy();
  });
});
