import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { PokemonCapService } from '../services/pokemon-cap.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  pokemonCapturado: Array<{ pokemon: any, vitorias: number, derrotas: number, empates: number }> = [];

  constructor( 
    private pokeAPIService: PokeAPIService,
    private pokemonCapService: PokemonCapService,
  ) {}

  ngOnInit() {
    this.pokemonCapturado = this.pokemonCapService.getPokemonCapturado();
  }

  
}
