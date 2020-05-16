import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  exemplo = 'Carro';
  title = 'Seja bem vindo!';
  Conta = 0;

  constructor() {

  }

  eventoRecebido($event){
    console.log('App component: Evento Recebido!', $event);

  }

  contaRecebida($event){
    console.log('Valor da mudança é: ', $event);
    
  }
}
