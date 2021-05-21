import { AuthService } from '../login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../login/usuario';
import { Alert } from 'selenium-webdriver';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  mostrarMenu: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  usuario: Usuario = new Usuario();
  alerts = [];  
  usuarioLogado = "";

  constructor(private authService: AuthService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(){

   
   
  }

  userAutenticado(){
    if (localStorage.getItem("usuario") == null){
      return false;
    }else{
      var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
      console.log(jsonUsuario.login);
      this.usuarioLogado = jsonUsuario.nome;      
      return true;
    }
  }

  logoff(){
    this.authService.logoff();
    this.router.navigate(['/login']);      
  
  }

   alterarSenha(content) {
    var string = localStorage.getItem("usuario") ;
    var obj = JSON.parse(string);
    this.usuario.login = obj.login;
    this.usuario.password_anterior = "";
    this.usuario.password = "";
    this.usuario.password_conferir = "";
    const modal = this.modalService.open(content);
    modal. result.then(() => { 
      console.log('SALVAR'); 
      if (this.usuario.password_anterior == ""){
        this.alerts = Array.from([{ type: 'danger', message: 'Senha atual inválida' }]);
        this.alterarSenha(content);
        return;
      }
      if (this.usuario.password == "" ||  this.usuario.password != this.usuario.password_conferir){
        this.alerts = Array.from([{ type: 'danger', message: 'Senha atual diferente nos campos Senha e Repetir Senha' }]);
        this.alterarSenha(content);
        return;
      }

      this.authService.alterarSenha(this.usuario).subscribe(dados => {
        if (dados.status.codigo == 99){
          this.alerts = Array.from([{ type: 'danger', message: dados.status.mensagem }]);
          this.alterarSenha(content);
        }else{
          this.usuario.password = "";
          this.usuario.password_anterior = "";
          this.usuario.password_conferir = "";
          console.log("Senha alterada com sucesso");
          alert('Senha alterada com sucesso !!!');
        }
  
      });
  


    }, () => { console.log('SAIR')})
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
}

}
