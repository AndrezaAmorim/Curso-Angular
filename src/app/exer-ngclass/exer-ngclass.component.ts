import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-exer-ngclass',
  templateUrl: './exer-ngclass.component.html',
  styleUrls: ['./exer-ngclass.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ExerNgclassComponent {

 deveSerVerde = false;

 tornarVerde(){
   this.deveSerVerde = true;
 }

}
