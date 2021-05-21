import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  usuario: Usuario = new Usuario();
  carregando = false;
  cpfNaoCadastrado = true;
  alerts = [];  

  constructor(private router: Router, private authService: AuthService) { }

  @ViewChild('loginField') firstNameElement: ElementRef;

  ngAfterViewInit() {
      this.firstNameElement.nativeElement.focus();
  }


  ngOnInit() {
    this.usuario.login = "";
    this.usuario.password = "";
  }

  login(){
    this.carregando = true;

    this.authService.login(this.usuario).subscribe(resp => {
      if (resp.status.codigo == 99){
        this.alerts = Array.from([{ type: 'danger', message: 'Usuário ou senha inválidos' }]);
        localStorage.removeItem("usuario");
        this.carregando = false;
      }else{
        this.usuario.password = "";
        localStorage.setItem("usuario", JSON.stringify(resp.dados));
        console.log("USUARIO AUTENTICADO");
        this.router.navigate(['/areaParticipante']);
//        this.carregando = false;
      }

    });

  }

  proximo (){
    if (this.cpfNaoCadastrado){
      this.validarCPF();
    }else{
      this.login();
    }

  }

  validarCPF(){
    if (this.usuario.login == ""){
      this.alerts = Array.from([{ type: 'danger', message: 'Informe o seu CPF !!!' }]);
      return;
    }
    if (! this.isValidCPF(this.usuario.login)){
      this.alerts = Array.from([{ type: 'danger', message: 'CPF inválido !!!' }])
      return;
    }
    this.authService.validarCPF(this.usuario).subscribe(dados => {
      if (dados.status.codigo == 99){
        localStorage.removeItem("usuario");
        localStorage.setItem("cpf", this.usuario.login);
        this.carregando = false;
        this.router.navigate(['/usuario']);
      }else{
        this.carregando = false;
        this.cpfNaoCadastrado = false;
        document.getElementById("inputPassword").focus();
      }

    });

  }
  


  recuperarSenha(){
    if (this.usuario.login == ""){
      this.alerts = Array.from([{ type: 'danger', message: 'Informe o seu usuário !!!' }]);
      return;
    }
    this.authService.recuperarSenha(this.usuario).subscribe(dados => {
      if (dados.status.codigo == 99){
        this.alerts = Array.from([{ type: 'danger', message: dados.status.mensagem }])
        localStorage.removeItem("usuario");
        this.carregando = false;
      }else{
        this.alerts = Array.from([{ type: 'success', message: dados.status.mensagem }])
      }

    });

  }


  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
}


 isValidCPF(number) {
  var sum;
  var rest;
  sum = 0;
  if (number == "00000000000") return false;

  for (var i=1; i<=9; i++) sum = sum + parseInt(number.substring(i-1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if ((rest == 10) || (rest == 11))  rest = 0;
  if (rest != parseInt(number.substring(9, 10)) ) return false;

  sum = 0;
  for (i = 1; i <= 10; i++) sum = sum + parseInt(number.substring(i-1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if ((rest == 10) || (rest == 11))  rest = 0;
  if (rest != parseInt(number.substring(10, 11) ) ) return false;
  return true;
}
 
}
