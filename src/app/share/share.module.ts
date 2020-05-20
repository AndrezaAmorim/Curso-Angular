import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExerContadorComponent } from './components/exer-contador/exer-contador.component';
import { ExerDataBindingComponent } from './components/exer-data-binding/exer-data-binding.component';
import { ExerDiretivasComponent } from './components/exer-diretivas/exer-diretivas.component';
import { ExerNgclassComponent } from './components/exer-ngclass/exer-ngclass.component';
import { ExerPipesComponent } from './components/exer-pipes/exer-pipes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    FooterComponent,
    ExerDataBindingComponent,
    ExerContadorComponent,
    ExerDiretivasComponent,
    ExerNgclassComponent,
    ExerPipesComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    ExerDataBindingComponent,
    ExerContadorComponent,
    ExerDiretivasComponent,
    ExerNgclassComponent,
    ExerPipesComponent,
    HeaderComponent,
  ]
})
export class ShareModule { }
