import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { PokeAPIService } from '../services/poke-api.service';
import { PokemonCapService } from '../services/pokemon-cap.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  pokemon: any;
  resultadoBatalha: string = '';
  corBatalha: string = '';
  

  constructor(
    private photoService: PhotoService,
    private pokeAPIService: PokeAPIService,
    private pokemonCapService: PokemonCapService
  ) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  ngOnInit() {
    this.pokemonAleatorio();
  }

  pokemonAleatorio() {
    this.pokeAPIService.getPokeAPIService()
    .subscribe((pokemon: any) => {
      this.pokemon = pokemon;
      this.resultadoLuta();
    });
  }

  resultadoLuta() {
    const pokemonCapturado = this.pokemonCapService.getPokemonRecente();
    if (pokemonCapturado && pokemonCapturado.pokemon && pokemonCapturado.pokemon.abilities && this.pokemon.abilities) {
      const habilidadesCap = pokemonCapturado.pokemon.abilities.length;
      const habilidadesBat = this.pokemon.abilities.length;

      if (habilidadesBat > habilidadesCap) {
        this.resultadoBatalha = 'Ganhou';
        this.corBatalha = 'success';
        this.pokemonCapService.ResultadosBatalhas(pokemonCapturado.pokemon.id, 'Ganhou');
      } else if (habilidadesBat < habilidadesCap) {
        this.resultadoBatalha = 'Perdeu';
        this.corBatalha = 'danger';
        this.pokemonCapService.ResultadosBatalhas(pokemonCapturado.pokemon.id, 'Perdeu');
      } else {
        this.resultadoBatalha = 'Empate';
        this.corBatalha = 'warning';
        this.pokemonCapService.ResultadosBatalhas(pokemonCapturado.pokemon.id, 'Empate');
      }
    } else {
      this.resultadoBatalha = 'Nenhum Pokémon capturado';
      this.corBatalha = '';
    }
  }
}
