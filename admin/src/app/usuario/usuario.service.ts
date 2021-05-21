import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API_SALVAR_USUARIO = `${environment.API}usuario/salvar.php`;  
  
  private httpOptions = {
    headers: new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Cache-Control':	'no-cache',
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  
    
  constructor(private http: HttpClient) { }

  salvar(form) {
    let formObj = form.getRawValue(); // {name: '', description: ''}

    let serializedForm = JSON.stringify(formObj);

    return this.http.post(this.API_SALVAR_USUARIO, serializedForm, this.httpOptions)
    .pipe(
       tap(console.log)
    );
  }
    
}