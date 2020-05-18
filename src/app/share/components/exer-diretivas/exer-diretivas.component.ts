import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exer-diretivas.constants';

@Component({
  selector: 'app-exer-diretivas',
  templateUrl: './exer-diretivas.component.html',
  styleUrls: ['./exer-diretivas.component.scss']
})
export class ExerDiretivasComponent {

  PREFIXO_IMAGEM = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';
  deveExibir = true;
  memes = MEMES_AGRUPADOS_POR_CATEGORIA;



  listaFrutas = [
    'Maçã',
    'Laranja',
    'Limão',
    'Mamão',

  ];

  carrosLista = [{
    placa: 'HUJ-8988',
    cor: 'Roxo',
  }, {
    placa: 'NNJ-8988',
    cor: 'Verde',
  }, {
    placa: 'HKJ-1088',
    cor: 'Azul',
  }, {
    placa: 'HUL-3988',
    cor: 'Preto',
  }];

  trocarValor(){
    this.deveExibir = !this.deveExibir;
  }



  soma(numero1, numero2){
    return numero1 + numero2;
  }



}
