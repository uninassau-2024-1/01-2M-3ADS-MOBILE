import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { ViaCEPService } from '../services/via-cep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ngOnInit(): void {
    this.buscarPokemonAleatorio();
  }

  areaBuscarPokemon: string = '52011210'
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  }

  numeroAleatorio() {
    return this.pokeAPIService.numeroHabilidadesTab1()
  }
  pokemonInfo: any = {
    nome: '',
    habilidades: '',
    altura: '',
    peso: '',
    numeroPokedex: ''
  }

  pokemon1Habilidades: number = this.pokemonInfo.habilidades.length;

  constructor(
    public pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCEPService
  ) {}
  buscarPokemon() {
    this.viaCEPService.getViaCEPService(this.areaBuscarPokemon)
    .subscribe((value) => {
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
      this.areaBusca.bairro = ', ' +  JSON.parse(JSON.stringify(value)) ["bairro"];
      this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value)) ['localidade'];
      this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value)) ['uf']
    });
    this.pokeAPIService.getPokeAPIService(this.numeroAleatorio())
    .subscribe((value) => {
      this.pokemonInfo.nome = JSON.parse(JSON.stringify(value))['name'];
      this.pokemonInfo.altura = JSON.parse(JSON.stringify(value))['height'];
      this.pokemonInfo.habilidades = JSON.parse(JSON.stringify(value))['abilities'].map((ability: any) => ability.ability.name);
      this.pokemonInfo.peso = JSON.parse(JSON.stringify(value))['weight'];
      this.pokemonInfo.numeroPokedex = JSON.parse(JSON.stringify(value))['id'];
  });
  }

  buscarPokemonAleatorio() {
    this.pokeAPIService.getPokeAPIService(this.numeroAleatorio())
    .subscribe((value) => {
      this.pokemonInfo.nome = JSON.parse(JSON.stringify(value))['name'];
      this.pokemonInfo.altura = JSON.parse(JSON.stringify(value))['height'];
      this.pokemonInfo.habilidades = JSON.parse(JSON.stringify(value))['abilities'].map((ability: any) => ability.ability.name);
      this.pokemonInfo.peso = JSON.parse(JSON.stringify(value))['weight'];
      this.pokemonInfo.numeroPokedex = JSON.parse(JSON.stringify(value))['id'];
  });
}
}
