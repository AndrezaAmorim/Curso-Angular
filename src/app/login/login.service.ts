import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logar(email: string, senha: string){
    // return this.http.post(this.API_URL + '/auth', contato, this.httpOptions);

    if (email === 'reginaMills@teste.com' && senha === '123'){
      return of({
        usuario: {
          nome: 'Regina',
          sobrenome: 'Mills',
          email: 'reginaMills@teste.com'
        },
        token: 'aD12h3123523548fgdfg'
      }).pipe(
        delay(2000)
      );
    }

    return timer(2000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos'))
    );
  }
}
