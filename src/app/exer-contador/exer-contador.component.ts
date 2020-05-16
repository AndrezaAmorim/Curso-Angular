import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exer-contador',
  templateUrl: './exer-contador.component.html',
  styleUrls: ['./exer-contador.component.scss']
})
export class ExerContadorComponent implements OnInit {

  @Input() contador: number;
  @Output() contadorChange = new EventEmitter();

 

  constructor() { }

  ngOnInit(): void {
  }

  incrementar(){
    this.contador ++;
    this.contadorChange.emit(this.contador);
  }

  decrementar(){
    this.contador --;
    this.contadorChange.emit(this.contador);
  }

}
