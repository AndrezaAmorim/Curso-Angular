import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exer-data-binding',
  templateUrl: './exer-data-binding.component.html',
  styleUrls: ['./exer-data-binding.component.scss']
})
export class ExerDataBindingComponent implements OnInit {

  @Input() palavra: string;
  @Output() clicado = new EventEmitter();




  imageUrl = 'https://i.ytimg.com/vi/9kkIzivnC78/maxresdefault.jpg';
  initialValue = 'Valor inicial';
  isDisabled = true;
  accessibilityText = 'Um texto acessível';
  valorDoInput = '';

  constructor() {
      setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {
  }

  funcaoBtn(){
    console.log('Clicou');
  }

  digitou($event){
    this.valorDoInput = $event.target.value;
    console.log($event);
  }

  btnEmissor($event){
    console.log('Devo emitir informações para o componente pai');
    this.clicado.emit($event);
  }

}


// Aqui deve ser colocada a logica, e no html usada as variaveis ou funções criadas aqui
