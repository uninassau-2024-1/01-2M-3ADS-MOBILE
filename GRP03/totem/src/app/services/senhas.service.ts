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

  novaSenha(tipoSenha: string = ''){
    if (tipoSenha === 'SG') {
      this.somaGeral();
      const dataAtual: Date = new Date();
      const ano: string = dataAtual.getFullYear().toString().substring(2, 4);
      const mes: string = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
      const dia: string = dataAtual.getDate().toString().padStart(2, '0');
      this.inputNovaSenha = ano + mes + dia + '-' + tipoSenha + (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SG'].push(this.inputNovaSenha);
    }

    else if (tipoSenha === 'SP') {
      this.somaPrior();
      const dataAtual: Date = new Date();
      const ano: string = dataAtual.getFullYear().toString().substring(2, 4);
      const mes: string = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
      const dia: string = dataAtual.getDate().toString().padStart(2, '0');
      this.inputNovaSenha = ano + mes + dia + '-' + tipoSenha + (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SP'].push(this.inputNovaSenha);
    }

    else{
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
