import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonCapService {
  private pokemonCapturadoBatalha: any = null;
  private pokemonCapturado: Array<{ pokemon: any, vitorias: number, derrotas: number, empates: number }> = [];

  addPokemonCapturado(pokemon: any) {
    this.pokemonCapturado.push({ pokemon, vitorias: 0, derrotas: 0, empates: 0 });
    this.pokemonCapturadoBatalha = pokemon;
  }

  constructor() { }

  setPokemonCapturado(pokemon: any) {
    this.pokemonCapturado = pokemon;
  }

  getPokemonCapturado() {
    return this.pokemonCapturado;
  }

  getpokemonCapturadoBatalha() {
    return this.pokemonCapturadoBatalha;
  }

  getPokemonRecente() {
    return this.pokemonCapturado.length > 0 ? this.pokemonCapturado[this.pokemonCapturado.length - 1] : null;
  }

  ResultadosBatalhas(pokemonId: number, resultado: 'Ganhou' | 'Perdeu' | 'Empate') {
    const pokemon = this.pokemonCapturado.find(p => p.pokemon.id === pokemonId);
    if (pokemon) {
      if (resultado === 'Ganhou') {
        pokemon.vitorias++;
      } else if (resultado === 'Perdeu') {
        pokemon.derrotas++;
      } else if (resultado === 'Empate') {
        pokemon.empates++;
      }
    }
  }

  
}
