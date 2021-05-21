import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class InscricoesService {

  private readonly API_GET_EVENTOS = `${environment.API}inscricoes/getEventos.php`;  
  private readonly API_ATUALIZAR_ID_WIRECARD = `${environment.API}inscricoes/atualizarIdWirecard.php`;  
  private readonly API_GET_CUPOM = `${environment.API}inscricoes/getCupom.php`;  
  private readonly API_SALVAR_INSCRICAO = `${environment.API}inscricoes/getEventos.php`;  
  private readonly API_INSCRICOES = `${environment.API}inscricoes/index.php`;  
  
  private httpOptions = {
    headers: new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Cache-Control':	'no-cache',
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
    
  constructor(private http: HttpClient) { }

  getEventos() {

    var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
      return this.http.post(this.API_GET_EVENTOS,{cpf: jsonUsuario.cpf}, this.httpOptions)
      .pipe(
         tap(console.log)
      );
  
  }

  atualizarID_Wirecard(id) {

    var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
      return this.http.post(this.API_ATUALIZAR_ID_WIRECARD,{cpf: jsonUsuario.cpf, id_wirecard: id}, this.httpOptions)
      .pipe(
         tap(console.log)
      );
  
  }

  inscricao(id, status_wirecard, lista, id_cupom) {
      var id_eventos = "";
    var e: any;
    for (e of lista){
      id_eventos = id_eventos + e.id + ", ";
    }

    var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
      return this.http.post(this.API_INSCRICOES,{cpf: jsonUsuario.cpf, id_pagamento_wirecard: id, eventos: id_eventos, status: status_wirecard, cupom: id_cupom}, this.httpOptions)
      .pipe(
         tap(console.log)
      );
  
  }

  getCupom(nomeCupom) {

    return this.http.post(this.API_GET_CUPOM, {cupom: nomeCupom}, this.httpOptions)
    .pipe(
       tap(console.log)
    );
  }


  salvar(form) {
    let formObj = form.getRawValue(); // {name: '', description: ''}

    let serializedForm = JSON.stringify(formObj);

    return this.http.post(this.API_SALVAR_INSCRICAO, serializedForm, this.httpOptions)
    .pipe(
       tap(console.log)
    );
  }

  geBoletoGerado(url) {
    return this.http.get(url, this.httpOptions)
    .pipe(
       tap(console.log)
    );
  }


}