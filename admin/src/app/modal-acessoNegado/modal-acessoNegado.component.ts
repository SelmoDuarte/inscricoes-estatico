import { AuthService } from '../login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Alert } from 'selenium-webdriver';




@Component({
  selector: 'app-acessoNegado',
  templateUrl: './modal-acessoNegado.component.html',
  styleUrls: ['./modal-acessoNegado.component.css']
})
export class ModalAcessoNegadoComponent implements OnInit {
  
  
  alerts = [
    {
    type: 'danger',
    message: '<b>ATENÇÃO</b>, voçê não está autorizado a executar esta operação. Solicite acesso junto ao gestor.',
  }
];;  


  constructor(  public activeModal: NgbActiveModal) { }

  ngOnInit(){

   
  }


}
