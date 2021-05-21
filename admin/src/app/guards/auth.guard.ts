import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

import { AuthService } from './../login/auth.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalAcessoNegadoComponent } from '../modal-acessoNegado/modal-acessoNegado.component';



@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  
  listaAcesso = ['faleConosco','ouvidoria', 'toDo'];
  constructor(
    private authService: AuthService,
    private router: Router,private modalService: NgbModal
   
  ) { }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    console.log('AuthGuard'+  state.url);

    return this.verificarAcesso(state.url);
  }

  private verificarAcesso(url_destino: string){

    if (localStorage.getItem("usuario") == null){
      console.log("REDIRECIONA TELA LOGIN");
      this.router.navigate(['/login']);
  
      return false;
    } 

    var possuiAcesso = false;

    var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));

    var meusAcessos = jsonUsuario.acessos;

    var url = url_destino.replace("/", "");

      if (meusAcessos.indexOf(url) >= 0 ){
      possuiAcesso = true;
    }
  
    if (! possuiAcesso ){
      var modalRef = this.modalService.open(ModalAcessoNegadoComponent);
      return false;

    }
      
    return true;


  }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: verificando se usuário pode carregar o cod módulo');

      //return this.verificarAcesso();
      return true;
    }

  

}
