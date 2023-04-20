import { TestBed } from '@angular/core/testing';

import { ComunicacionEntreHermanosService } from './comunicacion-entre-hermanos.service';

describe('ComunicacionEntreHermanosService', () => {
  let service: ComunicacionEntreHermanosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacionEntreHermanosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
