import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService implements OnInit {
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.buscarPokemon();
  }

  getPokeAPIService(id: number = Math.floor(Math.random() * 100)) {
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  numeroHabilidadesTab1() {
    return Math.floor(Math.random() * 100);
  }

  contadorDeVitorias() {
    let contador = 0;
    contador++
    return contador;
  }

  contadorDeDerrotas() {
    let contador = 0;
    contador++
    return contador;
  }

  contadorDeEmpates() {
    let contador = 0;
    contador++
    return contador;
  }

  pokemonInfo: any = {
    nome: '',
    habilidades: '', 
    altura: '',
    peso: '',
    numeroPokedex: ''
  };

  habilidadesPokemonAPI:number = 0; 

  buscarPokemon() {
    this.getPokeAPIService(this.numeroHabilidadesTab1())
    .subscribe((value) => {
      this.pokemonInfo.nome = JSON.parse(JSON.stringify(value))['name'];
      this.pokemonInfo.altura = JSON.parse(JSON.stringify(value))['height'];
      this.pokemonInfo.habilidades = JSON.parse(JSON.stringify(value))['abilities'].map((ability: any) => ability.ability.name);
      this.pokemonInfo.peso = JSON.parse(JSON.stringify(value))['weight'];
      this.pokemonInfo.numeroPokedex = JSON.parse(JSON.stringify(value))['id'];

      const habilidadesPokemon = value.abilities
      this.habilidadesPokemonAPI = habilidadesPokemon.length
  });
  }
}