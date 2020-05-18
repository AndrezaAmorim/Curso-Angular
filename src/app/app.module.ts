import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerContadorComponent } from './exer-contador/exer-contador.component';
import { ExerDataBindingComponent } from './exer-data-binding/exer-data-binding.component';
import { ExerDiretivasComponent } from './exer-diretivas/exer-diretivas.component';
import { ExerNgclassComponent } from './exer-ngclass/exer-ngclass.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';



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


