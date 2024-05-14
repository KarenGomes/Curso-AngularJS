import { TestBed } from '@angular/core/testing';

import { NovaListaService } from './nova-lista.service';

describe('NovaListaService', () => {
  let service: NovaListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovaListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
