import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ultimas5Senhas: any[] = [];

  constructor(public senhasService: SenhasService) {
    this.atualizarUltimasSenhas();
  }

  chamarSenhaSE() {
    this.senhasService.senhaSE();
    this.atualizarUltimasSenhas();
  }

  chamarSenhaSP() {
    this.senhasService.senhaSP();
    this.atualizarUltimasSenhas();
  }

  chamarSenhasSG() {
    this.senhasService.senhaSG();
    this.atualizarUltimasSenhas();
  }

  atualizarUltimasSenhas() {
    this.ultimas5Senhas = this.senhasService.senhas.slice();
  }
}
