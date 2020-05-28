import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class ListarContatosComponent implements OnInit {

  contatos: Array<Contato>;

  estacarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private contatoService: ContatosService,
    private router: Router,
    private toastr: ToastrService
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

  irPraDetalhes(idContato: number){
    this.router.navigate([`contatos/${idContato}`]);
  }

  deletarContato(idContato: number){
    this.contatoService.deleteContatos(idContato.toString())
    .subscribe(
      response => this.OnSuccessDeletarContato(idContato),
      error => this.OnErrorDeletarContato()
    );
  }

  OnSuccessDeletarContato(idContato){
    this.toastr.success('Sucesso', 'Contato deletado');
    this.contatos = this.contatos.filter(contato => contato.id !== idContato);
  }

  OnErrorDeletarContato(){
    console.log('Erro ao deletar');
  }

}
