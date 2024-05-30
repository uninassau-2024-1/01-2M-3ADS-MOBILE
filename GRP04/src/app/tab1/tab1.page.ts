import { Component } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { ViacepService } from '../services/viacep.service';
import { PokemonCapService } from '../services/pokemoncap.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pokemon: any;
  areaBuscarPokemon: string = '52011210';
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  };
  constructor(
    private pokeapiService: PokeapiService,
    private viacepService: ViacepService,
    private pokemonCapService: PokemonCapService
  ) {}
  buscarPokemon() {
    this.viacepService.getViacepService(this.areaBuscarPokemon)
    .subscribe((value) => {
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
      this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value)) ["bairro"];
      this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value)) ['localidade'];
      this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value)) ['uf'];
    });
    this.pokeapiService.getPokeapiService();

      this.pokeapiService.getPokeapiService()
      .subscribe((pokemon: any) => {
        this.pokemon = pokemon;
        this.pokemonCapService.addPokemonCapturado(this.pokemon);
      });

  }
  }


