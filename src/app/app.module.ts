import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ExerDataBindingComponent } from './exer-data-binding/exer-data-binding.component';
import { ExerContadorComponent } from './exer-contador/exer-contador.component';
import { ExerDiretivasComponent } from './exer-diretivas/exer-diretivas.component';
import { ExerNgclassComponent } from './exer-ngclass/exer-ngclass.component';


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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


