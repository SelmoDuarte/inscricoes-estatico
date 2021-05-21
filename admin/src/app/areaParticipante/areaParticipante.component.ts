import { Alert } from 'selenium-webdriver';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { map, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { empty, Observable } from 'rxjs';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { DropdownService } from '../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { cepValidator, getFormValidationErrors, getLabelAllFields } from '../shared/form-validation';
import { AreaParticipanteService } from './areaParticipante.service';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../login/usuario';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAcessoNegadoComponent } from '../modal-acessoNegado/modal-acessoNegado.component';


@Component({
  selector: 'app-areaParticipante',
  templateUrl: './areaParticipante.component.html',
  styleUrls: ['./areaParticipante.component.css']
})
export class AreaParticipanteComponent implements OnInit, AfterViewInit {

  usuario: Usuario = new Usuario();
  uploadForm: FormGroup;
  form: FormGroup;    
  submitted = false;
  alerts = [];
  tiposEntidade =  [];
  tiposRegistro = [];
  situacoesRegistro = [];


  paises = [];
  estados = [];
  cidades = [];
  listaTipos: any = [{ codigo: '1', descricao: 'Administrador e Tecnólogo' }, { codigo: '2', descricao: 'Estudante' }, { codigo: '3', descricao: 'Outros Profissionais' }];
  listaMeusEventos = [];
  carregando = true;
  ocultarDadosPessoais = false;
  ocultarEndereco = false;
  ocultarOuvidoria = false;   
  ocultarAnexos = false;   
  id = 0; 




  constructor(
      private fb: FormBuilder,        
      private dropdownService: DropdownService,   
      private authService: AuthService, 
      private router: Router,           
      private cepService: ConsultaCepService,
      private service: AreaParticipanteService,      
      private http: HttpClient,
      private modalService: NgbModal             
  ) { }

 // @ViewChild('cpf') firstNameElement: ElementRef;

  ngAfterViewInit() {
//    this.firstNameElement.nativeElement.focus();
  }

  ngOnInit() {

    this.service.getMeusEventos()
    .subscribe(
        response => {
            this.carregando = false;
            this.listaMeusEventos = response.dados;
        },
        err => {
            this.carregando = false;
            this.alerts = Array.from([{ type: 'danger', message: err.message }])
        });

  }
  
  close(alert: Alert) {
      this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  getLabelField(fieldName: string) {
      return getLabelAllFields(fieldName);
  }

  validarData(control: AbstractControl): { [key: string]: any } | null {
      const v = control.value;
      if (null != v && v.length == 8) {
          const data = v.substr(0, 2) + "/" + v.substr(2, 2) + "/" + v.substr(4, 4);
          const patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
          if (!patternData.test(data)) {
              return { dataInvalida: true };
          }
      }
  }

  
  alterarSenha(content) {
    var string = localStorage.getItem("usuario") ;
    var obj = JSON.parse(string);
    this.usuario.login = obj.nome;
    this.usuario.cpf = obj.cpf;
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

  acessoNegado(){
    var modalRef = this.modalService.open(ModalAcessoNegadoComponent);
    return false;
  }

  logoff(){
    this.authService.logoff();
    this.router.navigate(['/login']);      
  
  }


}