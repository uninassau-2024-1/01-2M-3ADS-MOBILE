import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    this.buscarPokemon();
    this.buscarPokemon2();
  }

  numeroAleatorio() {
    return Math.floor(Math.random() * 100)
  }
  pokemonInfo: any = {
    nome: '',
    habilidades: '',
    altura: '',
    peso: '',
    numeroPokedex: '',
    frontdefault: '',
    vitorias: 0,
    derrotas: 0,
    empates: 0
  }

  vitoras:number = this.pokeAPIService.contadorDeVitorias()
  derrotas:number = this.pokeAPIService.contadorDeDerrotas()
  empates:number = this.pokeAPIService.contadorDeEmpates()

  buscarPokemon() {
    this.pokeAPIService.getPokeAPIService(this.numeroAleatorio())
    .subscribe((value) => {
      this.pokemonInfo.nome = JSON.parse(JSON.stringify(value))['name'];
      this.pokemonInfo.altura = JSON.parse(JSON.stringify(value))['height'];
      this.pokemonInfo.habilidades = JSON.parse(JSON.stringify(value))['abilities'].map((ability: any) => ability.ability.name);
      this.pokemonInfo.peso = JSON.parse(JSON.stringify(value))['weight'];
      this.pokemonInfo.numeroPokedex = JSON.parse(JSON.stringify(value))['id'];
      this.pokemonInfo.frontdefault = JSON.parse(JSON.stringify(value))['sprites']['front_default'];
      this.pokemonInfo.vitorias = this.pokeAPIService.contadorDeVitorias() + 2
      this.pokemonInfo.derrotas = this.pokeAPIService.contadorDeDerrotas() + 1
      this.pokemonInfo.empates = this.pokeAPIService.contadorDeEmpates() + 1
  });
  }

  pokemonInfo2: any = {
    nome: '',
    habilidades: '',
    altura: '',
    peso: '',
    numeroPokedex: '',
    frontdefault: '',
    vitorias: 0,
    derrotas: 0,
    empates: 0
  }

  buscarPokemon2() {
    this.pokeAPIService.getPokeAPIService(this.numeroAleatorio())
    .subscribe((value) => {
      this.pokemonInfo2.nome = JSON.parse(JSON.stringify(value))['name'];
      this.pokemonInfo2.altura = JSON.parse(JSON.stringify(value))['height'];
      this.pokemonInfo2.habilidades = JSON.parse(JSON.stringify(value))['abilities'].map((ability: any) => ability.ability.name);
      this.pokemonInfo2.peso = JSON.parse(JSON.stringify(value))['weight'];
      this.pokemonInfo2.numeroPokedex = JSON.parse(JSON.stringify(value))['id'];
      this.pokemonInfo2.frontdefault = JSON.parse(JSON.stringify(value))['sprites']['front_default'];
      this.pokemonInfo2.vitorias = this.pokeAPIService.contadorDeVitorias() + 3
      this.pokemonInfo2.derrotas = this.pokeAPIService.contadorDeDerrotas() 
      this.pokemonInfo2.empates = this.pokeAPIService.contadorDeEmpates() + 1
  });
  }

}
