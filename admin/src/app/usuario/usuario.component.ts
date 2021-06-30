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
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, AfterViewInit {

  uploadForm: FormGroup;
  form: FormGroup;    
  submitted = false;
  alerts = [];
  tiposEntidade =  [];
  tiposRegistro = [];
  situacoesRegistro = [];
  usuario:Usuario = new Usuario();


  paises = [];
  estados = [];
  cidades = [];
  listaTipos: any = [{ codigo: '1', descricao: 'Administrador e Tecnólogo' }, { codigo: '2', descricao: 'Estudante' }, { codigo: '3', descricao: 'Outros Profissionais' }];
  carregando = true;
  ocultarDadosPessoais = false;
  ocultarEndereco = false;
  ocultarOuvidoria = false;   
  ocultarAnexos = false;   
  id = 0; 

  constructor(
      private router: Router,
      private fb: FormBuilder,        
      private dropdownService: DropdownService,        
      private cepService: ConsultaCepService,
      private service: UsuarioService,      
      private http: HttpClient        
  ) { }

  

  ngAfterViewInit() {

    const campoCep: HTMLInputElement =<HTMLInputElement>document.getElementById('cep');

    this.dropdownService.getCidades(this.form.get('uf').value).subscribe(dados => {
        this.cidades = dados;

        this.cepService.consultaCEP(this.form.get('cep').value).subscribe(dados => {
            this.populaDadosForm(dados);
        });
        
    });

     
  }

 

  ngOnInit() {

    var jsonUsuario ;

    if (localStorage.getItem("usuario") == null){
        jsonUsuario = {"cpf": "", "nome": "", "email": "", "sexo": "", "telefone": "","celular": "", "endereco": "", "bairro": "",  "cep": "", "cidade": "", "uf": "",  "pais": "", "numRegistro": "",  "categoria": "", "origem": ""  };
        jsonUsuario.cpf = localStorage.getItem("cpf");
    }else{
        jsonUsuario = JSON.parse(localStorage.getItem("usuario"));        
    }

    this.form = this.fb.group({

          nome: [jsonUsuario.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
          email: [jsonUsuario.email, [Validators.required, Validators.email]],
          categoria: [jsonUsuario.categoria],
          cpf: [jsonUsuario.cpf],
          dataNascimento: [jsonUsuario.dataNascimentoFormatada],
          celular: [jsonUsuario.celular],
          origem: [jsonUsuario.origem],
          cep: [jsonUsuario.cep, [Validators.required, cepValidator]],
          complemento: [jsonUsuario.complemento],
          logradouro: [jsonUsuario.logradouro, Validators.required],
          bairro: [jsonUsuario.bairro, Validators.required],
          cidade: [jsonUsuario.cidade, Validators.required],
          uf: [jsonUsuario.uf, Validators.required],
          senha: [null],
          senha_repita: [null],
      })
 
      this.dropdownService.getPaises().subscribe(dados =>
          {
              this.paises = dados;
              this.dropdownService.getEstadosBr().subscribe(dados => 
                  {
                      this.estados = dados;
                      this.carregando = false;

                  });
      });
      

      this.form.get('uf').valueChanges
          .pipe(
              tap(uf => console.log('Novo estado: ', uf)),
              map(uf => this.estados.filter(e => e.sigla === uf)),
              map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
              switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId)),
          tap(console.log)
      ).subscribe(cidades => this.cidades = cidades);
          
      this.form.get('cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP:', value)),
        switchMap(status => status === 'VALID' ?
          this.cepService.consultaCEP(this.form.get('cep').value)
          : empty()
        )
      )
      .subscribe(dados => dados ? this.populaDadosForm(dados) : {});

     
  }

  populaDadosForm(dados) {
      // this.formulario.setValue({});

      this.form.patchValue({
           uf: dados.uf,
            cidade: dados.localidade,
            logradouro: dados.logradouro,
            // cep: dados.cep,
            complemento: dados.complemento,
            bairro: dados.bairro,
      });

  }

  resetaDadosEnderecoForm() {
      this.form.patchValue({
           rua: null,
            complemento: null,
            bairro: null,
            cidade: null,
            uf: null
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

  show(secao){
      if (secao == 'ocultarDadosPessoais'){
          if (this.ocultarDadosPessoais){
              this.ocultarDadosPessoais = false;
          }else{
              this.ocultarDadosPessoais = true;
          }    
      } 
      if (secao == 'ocultarEndereco'){
          if (this.ocultarEndereco){
              this.ocultarEndereco = false;
          }else{
              this.ocultarEndereco = true;
          }    
      } 

      if (secao == 'ocultarOuvidoria'){
          if (this.ocultarOuvidoria){
              this.ocultarOuvidoria = false;
          }else{
              this.ocultarOuvidoria = true;
          }    
      } 

      if (secao == 'ocultarAnexos'){
          if (this.ocultarAnexos){
              this.ocultarAnexos = false;
          }else{
              this.ocultarAnexos = true;
          }    
      }         

  }

  salvar() {
      console.log('Salvando Usuario Form');
   
      this.alerts = [];
      this.submitted = true;

      // stop here if form is invalid
      if (this.form.invalid) {

          this.alerts = getFormValidationErrors(this.form.controls);

          console.log('Formulário inválido');
          return;
      }
      const campoSenha: HTMLInputElement =<HTMLInputElement>document.getElementById('senha');
      const campoSenhaRepita: HTMLInputElement =<HTMLInputElement>document.getElementById('senha_repita');

      if (localStorage.getItem("usuario") == null){
        if (campoSenha.value.length <= 0){
            this.alerts = Array.from([{ type: 'danger', message: 'Por favor, informe uma senha de acesso  !!!' }]) ;
            return;
          }
    
      }         

      if (campoSenha.value != campoSenhaRepita.value){
        this.alerts = Array.from([{ type: 'danger', message: 'Senha informadas divergentes nos campos !!!' }]) ;
        return;
      }
      this.form.disable();
      this.carregando = true;

      this.service.salvar(this.form)
          .subscribe(
              response => {
                  console.log("Status" + response.status);
                  if (response.status.codigo == 0) {

                    localStorage.setItem("usuario", JSON.stringify(response.dados));                    

                      var data = null;

                      var xhr = new XMLHttpRequest();
                      
                      xhr.addEventListener("readystatechange", function () {
                        if (this.readyState === this.DONE) {
                          console.log(this.responseText);
                        }
                      });

                      this.form.disabled;
                      this.alerts = Array.from([{ type: 'success', message: response.status.mensagem }])

                  } else {
                      this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }])
                  }
                  this.carregando = false;
              },
              err => {
                  this.carregando = false;
                  this.alerts = Array.from([{ type: 'danger', message: err.message }])
                  console.log(err);
              });
  }

  voltar(){
    this.router.navigate(['/areaParticipante']);

  }



}