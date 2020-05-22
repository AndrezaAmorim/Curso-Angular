import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  email: string;
  password: string;
  estaCarregando: boolean;
  erroNoLogin: boolean;

  OnSubmit(form){
    this.erroNoLogin = false;

    if (!form.valid){
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if (form.controls.email.invalid){
        this.emailInput.nativeElement.focus();
        return;
      }

      if (form.controls.password.invalid){
        this.passwordInput.nativeElement.focus();
        return;
      }

      return;
    }

    this.login();

    // console.log(form);
    // console.log(form.value);
    // console.log(this.email);
    // console.log(this.password);

  }

  login(){
    this.estaCarregando = true;
    this.loginService.logar(this.email, this.password)
      .pipe(
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.OnLoginSuccess(),
        error => this.onErrorLogin()
      );
  }

  OnLoginSuccess(){
    this.router.navigate(['home']);
  }

  onErrorLogin(){
    this.erroNoLogin = true;
  }

  exibeErro(nomeControle: string, form: NgForm){
    if (!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
