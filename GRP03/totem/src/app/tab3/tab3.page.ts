import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public senhasService: SenhasService) {}

  emitirRelatorio(){
    const senhasTotal = this.senhasService.senhasTotal;
    const senhasGeral = this.senhasService.senhasGeral;
    const senhasPrior = this.senhasService.senhasPrior;
    const senhasExame = this.senhasService.senhasExame;

    console.log('Senhas emitidas:', senhasTotal);
    console.log('Senhas gerais:', senhasGeral);
    console.log('Senhas prioritárias:', senhasPrior);
    console.log('Senhas exames:', senhasExame);
  }

}
