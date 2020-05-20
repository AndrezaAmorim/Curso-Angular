import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';



@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Array<Transacao>;
  page = 1;

  estacarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private extratoService: ExtratoService
  ) {}

  ngOnInit() {
    this.carregarExtrato();
  }

  carregarExtrato(){
    this.estacarregando = true;
    this.erroNoCarregamento = false;

    const page = 1;

    this.extratoService.getTransacoes(this.page)
    .pipe(
      take(1),
      finalize(() => {
        this.estacarregando = false;
      })
    )
    .subscribe(
      response => this.OnSuccess(response),
      error => this.OnError(error)
    );
  }

  OnSuccess(response: Array<Transacao>){
    this.transacoes = response;
  }

  OnError(error){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  paginaAnterior(){
    this.page = this.page - 1;
    this.carregarExtrato();
  }

  proximaPagina(){
    this.page = this.page + 1;
    this.carregarExtrato();
  }

}
