import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { PokemonCapService } from '../services/pokemoncap.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  pokemonCapturado: Array<{ pokemon: any, vitorias: number, derrotas: number, empates: number }> = [];

  constructor(
    private pokeapiService: PokeapiService,
    private pokemonCapService: PokemonCapService,
  ) {}

  ngOnInit() {
    this.pokemonCapturado = this.pokemonCapService.getPokemonCapturado();
  }


}
