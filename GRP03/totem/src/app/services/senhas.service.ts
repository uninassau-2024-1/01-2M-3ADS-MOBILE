import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  constructor() { }

  somaGeral(){
    this.senhasGeral++;
    this.senhasTotal++;
  }

  somaPrior(){
    this.senhasPrior++;
    this.senhasTotal++;
  }

  somaExame(){
    this.senhasExame++;
    this.senhasTotal++;
  }

}
