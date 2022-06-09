import { TestBed } from '@angular/core/testing';

import { GetListaService } from './get-lista.service';

describe('GetListaService', () => {
  let service: GetListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
