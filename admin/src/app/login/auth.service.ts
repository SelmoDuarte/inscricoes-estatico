import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';


@Injectable()
export class AuthService {

  private readonly API_LOGIN = `${environment.API}login/index.php`;
  private readonly API_VALIDAR_CPF = `${environment.API}login/validarCPF.php`;
  private readonly API_ALTERAR_SENHA = `${environment.API}login/alterarSenha.php`;
  private readonly API_RECUPERAR_SENHA = `${environment.API}login/recuperarSenha.php`;

  private httpOptions = {
    headers: new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json; charset=utf-8'
    })
  };



  constructor(private router: Router, private http: HttpClient) {
    //    this.mostrarMenuEmitter.emit(false);

    this.router.navigate(['/']);
  }

  login(usuario: Usuario) {
    console.log(usuario);

    return this.http.post(this.API_LOGIN, usuario, this.httpOptions)
      .pipe(
        tap(console.log)
      );

  }

  validarCPF(usuario: Usuario) {
    console.log(usuario);

    return this.http.post(this.API_VALIDAR_CPF, usuario, this.httpOptions)
      .pipe(
        tap(console.log)
      );

  }

  

  alterarSenha(usuario: Usuario) {
    console.log(usuario);

    return this.http.post(this.API_ALTERAR_SENHA, usuario, this.httpOptions)
      .pipe(
        tap(console.log)
      );

  }


  recuperarSenha(usuario: Usuario) {
    console.log(usuario);

    return this.http.post(this.API_RECUPERAR_SENHA, usuario, this.httpOptions)
      .pipe(
        tap(console.log)
      );

  }


  logoff() {
    console.log("LOGOFF Realizado");
    localStorage.removeItem("usuario");

  }
}
