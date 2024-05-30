import { TestBed } from '@angular/core/testing';
import { PokemonCapService } from './pokemoncap.service';


describe('PokemonCapService', () => {
  let service: PokemonCapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
