import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExerContadorComponent } from './share/components/exer-contador/exer-contador.component';
import { ExerDataBindingComponent } from './share/components/exer-data-binding/exer-data-binding.component';
import { ExerDiretivasComponent } from './share/components/exer-diretivas/exer-diretivas.component';
import { ExerNgclassComponent } from './share/components/exer-ngclass/exer-ngclass.component';
import { ExerPipesComponent } from './share/components/exer-pipes/exer-pipes.component';
import { FooterComponent } from './share/components/footer/footer.component';
import { HeaderComponent } from './share/components/header/header.component';

registerLocaleData(localePt, 'pt');



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ExerDataBindingComponent,
    ExerContadorComponent,
    ExerDiretivasComponent,

    ExerNgclassComponent,

    ExerPipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


