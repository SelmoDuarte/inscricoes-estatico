import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaParticipanteService {

  private readonly API_GET_MEUS_EVENTOS = `${environment.API}inscricoes/getMeusEventos.php`;  
  
  private httpOptions = {
    headers: new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Cache-Control':	'no-cache',
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
    
  constructor(private http: HttpClient) { }

  getMeusEventos() {
    var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
    return this.http.post(this.API_GET_MEUS_EVENTOS, {cpf: jsonUsuario.cpf}, this.httpOptions)
    .pipe(
       tap(console.log)
    );
  }
    
}