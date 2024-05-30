import { TestBed } from '@angular/core/testing';

import { PokemoncapService } from './pokemoncap.service';

describe('PokemoncapService', () => {
  let service: PokemoncapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemoncapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
