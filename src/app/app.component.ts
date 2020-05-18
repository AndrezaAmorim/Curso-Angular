import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  exemplo = 'Carro';
  title = 'Seja bem vindo!';
  // showHeader = true;


  constructor() {

  }

  ngOnInit(){
    // setTimeout(() => {
    //   this.title = 'Bem Vindo!!!';

    //   setTimeout(() => {
    //     this.showHeader = false;
    //   }, 3000);
    // }, 3000);
  }

  eventoRecebido($event){
    console.log('App component: Evento Recebido!', $event);

  }

  contaRecebida($event){
    console.log('Valor da mudança é: ', $event);
  }
}
