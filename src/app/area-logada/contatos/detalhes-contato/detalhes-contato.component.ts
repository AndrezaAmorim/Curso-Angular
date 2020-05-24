import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {

  contato: Contato;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private route: ActivatedRoute,
    private contatoService: ContatosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarContato();
  }

  carregarContato(){
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idContato = this.route.snapshot.paramMap.get('id');
    this.contatoService.getContato(idContato)
    .pipe(
      take(1),
      finalize(() => {
        this.estaCarregando = false;
      })
    )
    .subscribe(
      response => this.OnSuccess(response),
      error => this.OnError(error)
    );
  }

  OnSuccess(response: Contato){
    this.contato = response;
    console.log(this.contato);
  }

  OnError(error){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  Voltar(){
    this.router.navigate([`contatos`]);
  }
}
