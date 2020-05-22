import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../share/services/auth/auth.service';
import { LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService) { }

  logar(email: string, senha: string): Observable<LoginResponse>{
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
        delay(2000),
        tap(response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        })
      );
    }

    return timer(2000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos'))
    );
  }
}
