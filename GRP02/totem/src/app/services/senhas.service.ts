import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SenhasService {
  public senhas: any[] = [];

  constructor() {}

  public DataAtual: Date = new Date();

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public count1: number = 0;
  public count2: number = 0;
  public count3: number = 0;

  public somaTimeStampSegundos: number = 0;
  public somaTimeStampHoras: number = 0;
  public somaTimeStampMinutos: number = 0;

  somaGeral() {this.senhasGeral++; this.senhasTotal++; this.count3++}
  somaPrior() {this.senhasPrior++; this.senhasTotal++; this.count2++}
  somaExame() {this.senhasExame++; this.senhasTotal++; this.count1++}


  getFormattedDate(): string {
    let currentDate: Date = new Date();
    let day: number | string = currentDate.getDate();
    let month: number | string = currentDate.getMonth() + 1;
    let year: number | string = currentDate.getFullYear() % 100;

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;

    return `${day}/${month}/${year}`;
  }

  getOnlyHours(): string {
    let dataAtual = new Date();
    let hours: number | string = dataAtual.getHours();
    let minutes: number | string = dataAtual.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes}`;
  }

  gerarMinutosNovos(): string {
    let dataAtual = new Date();

    let day: number | string = dataAtual.getDate();
    let month: number | string = dataAtual.getMonth() + 1;
    let year: number | string = dataAtual.getFullYear();
    let hours: number | string = dataAtual.getHours();
    let minutes: number | string = dataAtual.getMinutes();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  gerarNumeroAleatorioPP(): number {
    const min = 1;
    const max = 5;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    this.somaTimeStampMinutos += numeroAleatorio;
    console.log(numeroAleatorio)
    return numeroAleatorio;
  }

  gerarMinutosNovosPP(): string {
    let dataAtual = new Date();

    let minutosAtuais = dataAtual.getMinutes();
    let numeroAleatorio = this.gerarNumeroAleatorioPP();
    let minutosAtualizados = minutosAtuais + numeroAleatorio;

    dataAtual.setMinutes(minutosAtualizados);

    let day: number | string = dataAtual.getDate();
    let month: number | string = dataAtual.getMonth() + 1;
    let year: number | string = dataAtual.getFullYear();
    let hours: number | string = dataAtual.getHours();
    let minutes: number | string = dataAtual.getMinutes();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  gerarNumeroAleatorioSE(): number {
    const min = 0;
    const max = 1;
    let numeroAleatorio = Math.random() * (max - min) + min;
    this.somaTimeStampMinutos += numeroAleatorio
    console.log(numeroAleatorio)
    return numeroAleatorio;
  }

  gerarMinutosNovosSE(): string {
    let dataAtual = new Date();

    let minutosAtuais = dataAtual.getMinutes();
    let numeroAleatorio = this.gerarNumeroAleatorioSE();
    let minutosAtualizados = minutosAtuais + numeroAleatorio;

    dataAtual.setMinutes(minutosAtualizados);

    let day: number | string = dataAtual.getDate();
    let month: number | string = dataAtual.getMonth() + 1;
    let year: number | string = dataAtual.getFullYear();
    let hours: number | string = dataAtual.getHours();
    let minutes: number | string = dataAtual.getMinutes();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  gerarNumeroAleatorioSG() {
    const min = 1;
    const max = 3;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    this.somaTimeStampMinutos += numeroAleatorio;
    console.log(numeroAleatorio)
    return numeroAleatorio;
  }

  gerarMinutosNovosSG(): string {
    let dataAtual = new Date();

    let minutosAtuais = dataAtual.getMinutes();
    let numeroAleatorio = this.gerarNumeroAleatorioSG();
    let minutosAtualizados = minutosAtuais + numeroAleatorio;

    dataAtual.setMinutes(minutosAtualizados);

    let day: number | string = dataAtual.getDate();
    let month: number | string = dataAtual.getMonth() + 1;
    let year: number | string = dataAtual.getFullYear();
    let hours: number | string = dataAtual.getHours();
    let minutes: number | string = dataAtual.getMinutes();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  guicheResponsavel() {
    const min = 1;
    const max = 5;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getSGIndex(): number {
    const index = this.senhas.findIndex(senha => senha && senha.senha && senha.senha.includes('SG'));
    return index !== -1 ? index : -1;
  }

  getSEIndex(): number {
    const index = this.senhas.findIndex(senha => senha.senha.includes('SE'));
    return index !== -1 ? index : -1;
  }

  getPPIndex(): number {
    return this.senhas.findIndex(senha => senha.senha.includes('PP'));
  }

  public senhasAtendidasENaoAtendidas: any[] = [];

  senhaSE() {
    let newSenha = {
        color: 'success',
        icon: 'newspaper',
        senha: `${this.getFormattedDate()}-SE${this.count1}`, 
        timestamp: `${this.gerarMinutosNovosSE()}`, 
        categoria: 'Senha Exame',
        dataEmissao: `${this.getFormattedDate()}`,
        horaEmissao: `${this.getOnlyHours()}`,
        dataAtendimento: `${this.gerarMinutosNovosSE()}`,
        horaAtendimento: `${this.getOnlyHours()}`,
        guicheResponsavel: `${this.guicheResponsavel()}`
    };

    let sgIndex = this.getSGIndex();

    if (sgIndex !== -1) {
        this.senhas.splice(sgIndex, 0, newSenha);
    } else {
        this.senhas.push(newSenha);
    }

    this.senhasAtendidasENaoAtendidas.push(newSenha);
  }

  senhaSP() {
    let newSenha = {
      color: 'danger',
      icon: 'accessibility',
      senha: `${this.getFormattedDate()}-PP${this.count2}`, 
      timestamp: `${this.gerarMinutosNovosPP()}`, 
      categoria: 'Senha Prioritária',
      dataEmissao: `${this.getFormattedDate()}`,
      horaEmissao: `${this.getOnlyHours()}`,
      dataAtendimento: `${this.gerarMinutosNovosPP()}`,
      horaAtendimento: `${this.getOnlyHours()}`,    
      guicheResponsavel: `${this.guicheResponsavel()}`
    };

    let seIndex = this.getSEIndex();
    let sgIndex = this.getSGIndex();

    if (seIndex !== -1) {
      this.senhas.splice(seIndex, 0, newSenha);
    } else if (sgIndex !== -1) {
      this.senhas.splice(sgIndex, 0, newSenha);
    } else {
      this.senhas.push(newSenha);
    }

    this.senhasAtendidasENaoAtendidas.push(newSenha);
  }

  senhaSG() {
    let newSenha = {
      color: 'tertiary',
      icon: 'eyedrop',
      senha: `${this.getFormattedDate()}-SG${this.count3}`,
      timestamp: `${this.gerarMinutosNovosSG()}`, 
      categoria: 'Senha Geral',
      dataEmissao: `${this.getFormattedDate()}`,
      horaEmissao: `${this.getOnlyHours()}`,
      dataAtendimento: `${this.gerarMinutosNovosSG()}`,
      horaAtendimento: `${this.getOnlyHours()}`,
      guicheResponsavel: `${this.guicheResponsavel()}`
    };

    this.senhas.push(newSenha);
    this.senhasAtendidasENaoAtendidas.push(newSenha);
  }

  public senhasAtendidas: any[] = [];
  public contadorDeSenhasAtendidas: number = 0;

  atenderSenha() {
    this.senhasAtendidas.push(this.senhas)

    this.senhas.shift()
    this.contadorDeSenhasAtendidas++

  }

  public contadorDeSenhasNaoAtendidas: number = 0;

  senhasNaoChamadas() {
    this.contadorDeSenhasNaoAtendidas++
    this.senhas.shift()
  }

  public senhaPPatendida: number = 0;
  public senhaSEatendida: number = 0;
  public senhaSGatendida: number = 0;

  atenderSenhaPP() {
    this.senhaPPatendida++
  }

  atenderSenhaSE() {
    this.senhaSEatendida++
  }

  atenderSenhaSG() {
    this.senhaSGatendida++
  }

  gerarRelatorioDetalhado(senhasAtendidasENaoAtendidas: any[]): any[] {
    let relatorio: any[] = [];

    for (let senha of senhasAtendidasENaoAtendidas) {

      let atendimento = senha.dataAtendimento ? senha.dataAtendimento : '';
      let guiche = senha.guicheResponsavel ? senha.guicheResponsavel : '';

        let detalhes = {
            numeracao: senha.senha,
            categoria: senha.categoria,
            dataEmissão: senha.dataEmissao,
            horaEmissão: senha.horaEmissao,
            dataAtendimento: atendimento ? atendimento.data : '',
            horaAtendimento: atendimento ? atendimento.hora : '',
            guicheResponsável: guiche
        };

        relatorio.push(detalhes);
    }

    return relatorio;
  }

}
