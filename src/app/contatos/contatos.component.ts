import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Contato } from './contatos.interface';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Array<Contato>;

  estacarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private contatoService: ContatosService
  ) { }

  ngOnInit() {
    this.carregarContatos();
  }

  carregarContatos(){
    this.estacarregando = true;
    this.erroNoCarregamento = false;
    
    this.contatoService.getContatos()
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

  OnSuccess(response: Contato[]){
    this.contatos = response;
  }

  OnError(error){
    this.erroNoCarregamento = true;
    console.error(error);
  }

}
