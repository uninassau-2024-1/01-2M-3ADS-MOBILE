import { Component, OnInit } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  relatorio: any[] = [];

  constructor(public senhasService: SenhasService) {}

  gerarMinutosNovos() {
    this.senhasService.gerarMinutosNovos();
  }

  ngOnInit() {
    this.gerarRelatorio();
  }

  gerarRelatorio() {
    this.relatorio = this.senhasService.gerarRelatorioDetalhado(this.senhasService.senhasAtendidas);
  }
}