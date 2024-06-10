import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { PokeAPIService } from '../services/poke-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(
    public photoService: PhotoService,
    public pokeAPIService: PokeAPIService
  ) {}
  
  ngOnInit(): void {
    this.buscarPokemon();
  }
  
  addPhotoToGallery() {
    this.photoService.addNewToGallery()
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
    quantidadeDeDuelos: ''
  }

  gerarNumeroAleatorio(): number {
    return Math.floor(Math.random() * 11);
  }

  habilidadesDoPokemon:string = '';
  numeroHabilidadesTab1:any = this.pokeAPIService.habilidadesPokemonAPI;

  buscarPokemon() {
    this.pokeAPIService.getPokeAPIService(this.numeroAleatorio())
    .subscribe((value) => {
      this.pokemonInfo.nome = JSON.parse(JSON.stringify(value))['name'];
      this.pokemonInfo.altura = JSON.parse(JSON.stringify(value))['height'];
      this.pokemonInfo.habilidades = JSON.parse(JSON.stringify(value))['abilities'].map((ability: any) => ability.ability.name);
      this.pokemonInfo.peso = JSON.parse(JSON.stringify(value))['weight'];
      this.pokemonInfo.numeroPokedex = JSON.parse(JSON.stringify(value))['id'];
      this.pokemonInfo.quantidadeDeDuelos = this.gerarNumeroAleatorio() + 1;

      this.habilidadesDoPokemon = this.pokemonInfo.habilidades = JSON.parse(JSON.stringify(value))['abilities'].map((ability: any) => ability.ability.name);

      this.numeroHabilidadesTab1 = this.pokeAPIService.habilidadesPokemonAPI
  });
  }

  statusLuta() {
    let resultado: { color: string, texto: string };

    console.log(this.numeroHabilidadesTab1)
  
    if (this.habilidadesDoPokemon.length == this.numeroHabilidadesTab1.length) {
      resultado = {
        color: 'warning',
        texto: "Empate"
      };
    } else if (this.habilidadesDoPokemon.length > this.numeroHabilidadesTab1.length) {
      resultado = {
        color: 'success',
        texto: "Vitória"
      };
    } else {
      resultado = {
        color: 'danger',
        texto: "Derrota"
      };
    }
  
    return resultado;
  }
  
  
}
