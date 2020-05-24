import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contato } from './contatos.interface';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  API_URL = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: '.....TOKEN DE AUTENTICAÇÂO.....'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getContatos(){

    const headers = new HttpHeaders({
      Authorization: '.....TOKEN DE AUTENTICAÇÂO.....'
    });

    return this.http.get<Contato[]>(this.API_URL + '/contatos', {
      headers
    });
  }

  getContato(id: string){
    return this.http.get<Contato>(this.API_URL + '/contatos/' + id, this.httpOptions);
  }

  createContato(contato: Contato){
    return this.http.post<Contato[]>(this.API_URL + '/contatos', contato, {
    headers: {
      Authorization: '.....TOKEN DE AUTENTICAÇÂO.....'
    }
  });
  }

  updateContato(id: string, contato: Contato){
    return this.http.put<Contato[]>(this.API_URL + '/contatos/' + id, contato);
  }

  deleteContatos(id: string){
    return this.http.delete<Contato[]>(this.API_URL + '/contatos/' + id);
  }
}

// tres forma de fazer a autenticação com o token. A melhor é a que deixa o uso de forma global;
