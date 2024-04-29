import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public inputNovaSenha: string = '';
  public senhasArray: { [key: string]: string[] } = {
    SG: [],
    SP: [],
    SE: []
  };
  public senhasSG: string[] = [];
  public senhasSP: string[] = [];
  public senhasSE: string[] = [];
  public contadorSP: number = 0;
  public contadorSE: number = 0;
  public contadorSG: number = 0;
  senhaAtual: string = '';

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

  getSenhaSG(): string {
    return this.senhasArray['SG'][this.senhasArray['SG'].length - 1];
  }

  getSenhaSP(): string {
    return this.senhasArray['SP'][this.senhasArray['SP'].length - 1];
  }

  getSenhaSE(): string {
    return this.senhasArray['SE'][this.senhasArray['SE'].length - 1];
  }

  chamarProximaSenhaSP() {
    if (this.senhasSP.length > 0) {
      this.senhasSP.shift();
    } else if (this.senhasSE.length > 0) {
      this.senhasSE.shift();
    } else {
      this.senhasSG.shift();
    }
  }
  
  chamarProximaSenhaSE() {
    if (this.senhasSE.length > 0) {
      this.senhasSE.shift();
    } else {
      this.senhasSG.shift();
    }
  }
  
  chamarProximaSenhaSG() {
    if (this.senhasSG.length > 0) {
      this.senhasSG.shift();
    }
  }

  atualizarSenhaAtual() {
    if (this.contadorSP < this.senhasSP.length) {
      this.senhaAtual = this.senhasSP[this.contadorSP];
    } 
    else if (this.contadorSE < this.senhasSE.length) {
      this.senhaAtual = this.senhasSE[this.contadorSE];
    } 
    else if (this.contadorSG < this.senhasSG.length) {
      this.senhaAtual = this.senhasSG[this.contadorSG];
    } 
    else {
      this.senhaAtual = "Nenhuma senha na fila";
    }
  }

  deletarSenhaAntiga() {
    if (this.senhaAtual.startsWith('SP')) {
      this.senhasSP.shift();
    } else if (this.senhaAtual.startsWith('SE')) {
      this.senhasSE.shift();
    } else if (this.senhaAtual.startsWith('SG')) {
      this.senhasSG.shift();
    }
  }

  getSenhaAtual(): string {
    return this.senhaAtual;
  }

  novaSenha(tipoSenha: string = '') {
    if (tipoSenha === 'SG') {
      this.somaGeral();
      const dataAtual: Date = new Date();
      const ano: string = dataAtual.getFullYear().toString().substring(2, 4);
      const mes: string = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
      const dia: string = dataAtual.getDate().toString().padStart(2, '0');
      this.inputNovaSenha = ano + mes + dia + '-' + tipoSenha + (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SG'].push(this.inputNovaSenha);
    } else if (tipoSenha === 'SP') {
      this.somaPrior();
      const dataAtual: Date = new Date();
      const ano: string = dataAtual.getFullYear().toString().substring(2, 4);
      const mes: string = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
      const dia: string = dataAtual.getDate().toString().padStart(2, '0');
      this.inputNovaSenha = ano + mes + dia + '-' + tipoSenha + (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SP'].push(this.inputNovaSenha);
    } else {
      this.somaExame();
      const dataAtual: Date = new Date();
      const ano: string = dataAtual.getFullYear().toString().substring(2, 4);
      const mes: string = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
      const dia: string = dataAtual.getDate().toString().padStart(2, '0');
      this.inputNovaSenha = ano + mes + dia + '-' + tipoSenha + (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SE'].push(this.inputNovaSenha);
    }
    console.log(this.senhasArray);
  }
}
