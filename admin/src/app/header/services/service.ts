import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Service {

  private readonly API_GET_LISTA = `${environment.API}faleConosco/getLista.php`;  
  private readonly API_SALVAR = `${environment.API}faleConosco/salvar.php`;  
  private readonly API_SALVAR_ANDAMENTO = `${environment.API}faleConosco/salvarAndamento.php`;  
  private readonly API_GET_LISTA_ANDAMENTOS = `${environment.API}faleConosco/getListaAndamentos.php`;  
  private readonly API_EXCLUIR_ANDAMENTO = `${environment.API}faleConosco/excluirAndamento.php`;  
  private readonly API_GET = `${environment.API}faleConosco/get.php`;  
  private readonly API_LOAD_COMBOS = `${environment.API}tabelas/loadCombos.php`;    
  
  private httpOptions = {
    headers: new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Cache-Control':	'no-cache',
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
    
  constructor(private http: HttpClient) { }

  
  getListaByStatus( search) {
    return this.http.post(this.API_GET_LISTA,{campos:[{ campo: 'fale_conosco.status', valor: search, operador: '=', condicao: '' }]}, this.httpOptions)
    .pipe(
       tap(console.log)
    );
  }

  getBusca( search) {
    return this.http.post(this.API_GET_LISTA,{campos:[{ campo: 'nome', valor: search, operador: 'LIKE', condicao: ' OR ' }, { campo: 'assunto', valor: search, operador: 'LIKE', condicao: ' OR '}, { campo: 'mensagem', valor: search, operador: 'LIKE', condicao: ' OR '}]}, this.httpOptions)
    .pipe(
       tap(console.log)
    );
  }


  get( id) {
    return this.http.post(this.API_GET,{campos:[{ campo: 'fale_conosco.id', valor: id, operador: '=', condicao: '' }]}, this.httpOptions)
    .pipe(
       tap(console.log)
    );
      
  }

  loadCombos() {
    return this.http.post(this.API_LOAD_COMBOS,{}, this.httpOptions)
      .pipe(
        tap(console.log)
      );
  }

  salvar(form) {
    let formObj = form.getRawValue(); // {name: '', description: ''}

    let serializedForm = JSON.stringify(formObj);

    return this.http.post(this.API_SALVAR,serializedForm, this.httpOptions)
    .pipe(
       tap(console.log)
    );
  } 

  getAndamentos(id) {
    return this.http.post(this.API_GET_LISTA_ANDAMENTOS,{ 'id': id }, this.httpOptions)
    .pipe(
       tap(console.log)
    );
   }      


  salvarAndamento(form) {
    let formObj = form.getRawValue(); // {name: '', description: ''}

    let serializedForm = JSON.stringify(formObj);

    return this.http.post(this.API_SALVAR_ANDAMENTO,serializedForm, this.httpOptions)
    .pipe(
       tap(console.log)
    );
  }      

  excluirAndamento(form) {
//    let formObj = form.getRawValue(); // {name: '', description: ''}

    let serializedForm = JSON.stringify(form);

    return this.http.post(this.API_EXCLUIR_ANDAMENTO,serializedForm, this.httpOptions)
    .pipe(
       tap(console.log)
    );
  }      

}