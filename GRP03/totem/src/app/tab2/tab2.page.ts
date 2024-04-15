import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  senhaAtual: string = '';

  constructor(public senhasService: SenhasService) {
    this. atualizarSenhaAtual();
  }

  atualizarSenhaAtual() {
    const senhaAtualSG = this.senhasService.getSenhaSG();
    const senhaAtualSP = this.senhasService.getSenhaSP();
    const senhaAtualSE = this.senhasService.getSenhaSE();
    this.senhaAtual = this.senhasService.getSenhaAtual();

    if (senhaAtualSP) {
      this.senhaAtual = senhaAtualSP;
    } else if (senhaAtualSE) {
      this.senhaAtual = senhaAtualSE;
    } else if (senhaAtualSG) {
      this.senhaAtual = senhaAtualSG;
    } else {
      this.senhaAtual = "Nenhuma senha na fila";
    }
  }

  chamarProximaSenha() {
    console.log('Chamando próxima senha...');

    if (this.senhaAtual.startsWith('SP')) {
      this.senhasService.chamarProximaSenhaSP();
    } else if (this.senhaAtual.startsWith('SE')) {
      this.senhasService.chamarProximaSenhaSE();
    } else if (this.senhaAtual.startsWith('SG')) {
      this.senhasService.chamarProximaSenhaSG();
    }
    
    this.senhasService.deletarSenhaAntiga();
    
    this.atualizarSenhaAtual();
  }
}

