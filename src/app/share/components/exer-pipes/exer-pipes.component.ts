import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exer-pipes',
  templateUrl: './exer-pipes.component.html',
  styleUrls: ['./exer-pipes.component.scss'],
  providers: [
    DecimalPipe,
  ],
})
export class ExerPipesComponent {

  constructor(
    private decimalPipe: DecimalPipe
  ) { }

  filme = {
    titulo: 'Harry Potter - A predra filosofal',
    estrelas: 4.4556775,
    precoAluguel: 15.45,
    dataLancamento: new Date(2019, 5, 30)
  };

  compras = [{
    produto: 'lâmpadas',
    valor: 299.99,
    quantidade: 2,
    peso: 0,
    data: new Date(2020, 1, 1, 15, 20),
  }, {
    produto: 'farinha',
    valor: 450.29,
    quantidade: 2,
    peso: 29.33333,
    data: new Date(2020, 1, 10, 19, 30),
  }];

  getPesoFormatado(peso: number){
    if (peso <= 0){
      return 'Sem Peso';
    }

    return this.decimalPipe.transform(peso, '1.1-2') + ' Kg';

  }


}
