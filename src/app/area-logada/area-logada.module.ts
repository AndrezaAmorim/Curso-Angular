import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';
import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { AreaLogadaComponent } from './area-logada.component';


@NgModule({
  declarations: [AreaLogadaComponent],
  imports: [
    CommonModule,
    AreaLogadaRoutingModule,
    ShareModule
  ]
})
export class AreaLogadaModule { }
