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
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import { InscricoesService } from './inscricoes.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import jsencrypt from 'jsencrypt';
import { MoipCreditCard } from 'moip-sdk-js';

import { WireCardService } from './wirecard.service';
import { Pagamento } from './wireCardObjects';
import { exit } from 'process';


@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.component.html',
  styleUrls: ['./inscricoes.component.css']
})
export class InscricoesComponent implements OnInit, AfterViewInit {

  form: FormGroup;       
  carregando = false;
  alerts = [];
  paises = [];
  estados = [];
  cidades = [];  
  subscription = null;
  lista  = new Array();
  listaOriginal = new Array();;
  listaCarrinho: string[] = [];
  valor = null;
  ocultarCupom = true;
  valorCupom: any = 0;
  cupomValido = false;
  checkoutEmAndamento = false;
  //MOSTRA DIV PAGAMENTO CONFIRMADO
  pagamento: Pagamento = new Pagamento();

  listaQtdParcelas: any = [{ codigo: '1', descricao: 'A Vista' }, { codigo: '2', descricao: '2 x ' }, { codigo: '3', descricao: '3x ' }, { codigo: '4', descricao: '4x ' }];
  

  constructor(
      private fb: FormBuilder,        
      private dropdownService: DropdownService,   
      private authService: AuthService, 
      private router: Router,           
      private cepService: ConsultaCepService,
      private service: InscricoesService,      
      private serviceWireCard: WireCardService,      
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

    this.pagamento.tipo = "C";
/*    this.subscription = this.serviceWireCard.configurarNotificacoes()
    .subscribe(
    response => {
      alert('Deu Certo');
    },
    err => {
      alert('Deu Errado');    });*/


    //MOSTRA DIV PAGAMENTO CONFIRMADO
    this.pagamento.confirmado = false;
    this.pagamento.erro = false;
    this.pagamento.processado = false;

    this.carregando = true;
    this.subscription = this.service.getEventos()
      .subscribe(
        response => {
          console.log("Status" + response.status);
          if (response.status.codigo == 0) {
            this.lista = response.dados;
            this.listaOriginal = response.dados;
          } else {
            this.lista = [];
            this.listaOriginal = [];
            this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }])
          }
          this.carregando = false;
        },
        err => {
          this.carregando = false;
          this.alerts = Array.from([{ type: 'danger', message: err.message }])
          console.log(err);
        });

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
              dataNascimento: [jsonUsuario.dataNascimentoFormatada],
              categoria: [jsonUsuario.categoria],
              cpf: [jsonUsuario.cpf],
              celular: [jsonUsuario.celular],
              origem: [jsonUsuario.origem],
              cep: [jsonUsuario.cep, [Validators.required, cepValidator]],
              complemento: [jsonUsuario.complemento],
              logradouro: [jsonUsuario.logradouro, Validators.required],
              bairro: [jsonUsuario.bairro, Validators.required],
              cidade: [jsonUsuario.cidade, Validators.required],
              uf: [jsonUsuario.uf, Validators.required],
              cupom: ["", Validators.required],
              cc_nome: ["", Validators.required],
              cc_numero: ["", Validators.required],
              cc_expiracao: ["", Validators.required],
              cc_cod_seguranca: ["", Validators.required],       
              cc_qtd_parcelas: ["1", Validators.required],       
                                   
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


  getCupom() {
    const campoCupom: HTMLInputElement =<HTMLInputElement>document.getElementById('cupom');

    this.subscription = this.service.getCupom(campoCupom.value)
      .subscribe(
        response => {
          console.log("Status" + response.status);
          if (response.status.codigo == 0) {
            this.valorCupom = Number(response.dados.valor).toFixed(2);  ;
            this.cupomValido = true;
            this.calcularValor();
          } else {
            this.valorCupom = 0;
            this.cupomValido = false;
            this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
            this.calcularValor();
          }
          this.carregando = false;
        },
        err => {
          this.carregando = false;
          this.alerts = Array.from([{ type: 'danger', message: err.message }])
          console.log(err);
        });



  }

  selecionarTipoPagamento(){

    const campoCartao: HTMLInputElement =<HTMLInputElement>document.getElementById('cartao');    

    if(campoCartao.checked){
        this.pagamento.tipo = "C";
    }else{
        this.pagamento.tipo = "B";
    };

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


  close(alert: Alert) {
      this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  getLabelField(fieldName: string) {
      return getLabelAllFields(fieldName);
  }

  calcularValor(){
    this.descontoInscritosCONAD();
    this.listaCarrinho = [] ;      
    this.valor = 0;
    var e: any;
    for (e of this.lista){
        const campo: HTMLInputElement =<HTMLInputElement>document.getElementById('id' + e.id);
        if (campo.checked){
            this.valor = this.valor + Number(e.valor);
            this.listaCarrinho.push(e);
        }
    }
    if (this.valorCupom > 0){
      this.valor = Number(this.valor - ((this.valor/this.valorCupom)*100)).toFixed(2);
    }else{
      this.valor = Number(this.valor).toFixed(2);
    }
    this.listaQtdParcelas  = [{ codigo: '1', descricao: 'A Vista' }];
    this.listaQtdParcelas.push({ codigo: '2', descricao: '2 x de R$ ' + Number(this.valor/2).toFixed(2) });
    this.listaQtdParcelas.push({ codigo: '3', descricao: '3 x de R$ ' + Number(this.valor/3).toFixed(2) });
    this.listaQtdParcelas.push({ codigo: '4', descricao: '4 x de R$ ' + Number(this.valor/4).toFixed(2) });
  }

  descontoInscritosCONAD(){
    this.lista = new Array() ;      
    const campo: HTMLInputElement =<HTMLInputElement>document.getElementById('id99');
    if (campo.checked){
      var a: any;
      for (a of this.listaOriginal){
          const b = a;
          if (a.id == 1 || a.id == 2){
              a.valor = 0.00;
          }
          this.lista.push(a);
      }
    }else{
      var a: any;
      for (a of this.listaOriginal){
          const b = a;
          if (a.id == 1 || a.id == 2){
              a.valor = 50.00;
          }
          this.lista.push(a);
      }

    }
  }


  ativarCupom(){
    this.ocultarCupom = false;
  }

  proximo(){
    if (Number(this.valor) <= 0){
      this.alerts = Array.from([{ type: 'danger', message: 'Para proseguir é necessário selecionar um dos eventos abaixo' }]);
      return;      
    }
    this.alerts = [];
    this.checkoutEmAndamento = true;
  }

 
  checkOut() {

    this.pagamento.alerts = [];
    this.desabilitarCampos();
    this.carregando = true;
    this.pagamento.processado = true;
    var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));  

    if (this.valorCupom == 100){
      this.service.inscricao(0, "AUTHORIZED", this.listaCarrinho, this.form.get('cupom').value).subscribe();
      this.pagamento.erro = false;
      this.pagamento.confirmado = true;
      this.carregando = false;
      this.pagamento.tipo='C';
      return;
    }

    //VALIDA OS DADOS DO CARTÃO ANTES DE INICIAR
    if (! this.validarPagamento()){
      this.carregando = false;
      this.pagamento.processado = false;      
      this.habilitarCampos();
      return false;
    }

    // 1 PASSO - VERIFICA SE O USUÁRIO JÁ ESTA CADASTRADO NA WIRECARD
    if (jsonUsuario.id_wirecard.length <= 0){
        // SE O USUARIO NÃO ESTIVER NA BASE DA WIRECARD INSERE
        this.subscription = this.serviceWireCard.addClienteForm(this.form)
        .subscribe(
        response => {
            console.log("Status" + response.id);
            //ATUALIZA O ID_WIRECARD NA TABELA DE PESSOAS
            this.service.atualizarID_Wirecard(response.id).subscribe();
            this.efetuarPagamento(response.id);
        },
        err => {
            let ownId = this.form.get('cpf').value + Math.floor(Math.random() * (0 - 99 + 1)) ;
            this.subscription = this.serviceWireCard.addCliente(ownId, this.form)
            .subscribe(
            response => {
                console.log("Status" + response.id);
                //ATUALIZA O ID_WIRECARD NA TABELA DE PESSOAS
                this.service.atualizarID_Wirecard(response.id).subscribe();
                this.efetuarPagamento(response.id);
            },
            err => {
                    this.habilitarCampos();
                    this.carregando = false;
                    this.pagamento.processado = false;            
                    this.alerts = Array.from([{ type: 'danger', message: err.error.errors[0].description }])
            });
  
        });
    }else{
      this.efetuarPagamento(jsonUsuario.id_wirecard);
    }  

  }

  efetuarPagamento(id_cliente) {

    console.log('Adicionar Pedido');
    // 2 PASSO - CLIENTE JÁ EXISTE NA BASE DA WIRECARD
    //           INSERE O PEDIDO NA WIRECARD            
    this.subscription = this.serviceWireCard.addPedido(id_cliente, this.form, this.valorCupom, this.listaCarrinho)
    .subscribe(
    response => {
        console.log("Pedido incluido: " + response.id);
        console.log("Adicionando Pagamento");
        const campoCartao: HTMLInputElement =<HTMLInputElement>document.getElementById('cartao');    

        if(campoCartao.checked){
            this.pagamento.tipo = "C";
            this.efetuarPagamentoCartao(response.id);
        }else{
            this.pagamento.tipo = "B";
            // PAGAMENTO PELO BOLETO
            this.efetuarPagamentoBoleto(response.id);
        };        

    },
    err => {
        this.habilitarCampos();
        this.carregando = false;
        this.pagamento.processado = false;
        this.alerts = Array.from([{ type: 'danger', message: err.error.errors[0].description }])
        console.log(err);
    });


  }

  efetuarPagamentoCartao(id_pedido){

   // const pubKey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi3ySIPM5R2khxvvFD0vEskXclzWtRCSl7KRZKxYj0YRkkEcksRQkEaApQzzEC2Ax8Jx9dNM4un0JnpreSMWG4YjAeQioh4L5E3HU5AkcKdvxlx/QaCfIMj0Wi0554ZCmcviJWH8cVyUxTXMqVpAdhN0fX7GvVaPF8IMO5WpG9z1YBTBfaM/XEfk/JPuvJiG0nnD9ME7pQgn0nuA3v5sbUtdenyBukEEf9qPL6AtWaryhPBQJUlPUMwuj+bilegIXufVbZK3jPVanSwVqfFU3+mBBaKbpMUmEfznS3aplLARNI4Uow+DYed8VSfab9/YPfi2IVIKkG/kv8kl8CiVxKQIDAQAB-----END PUBLIC KEY-----";
      const pubKey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmFLYXWpgi6SrYFZNUDu8S2BiaaSKy9jAs/pHu9bVvJdsVzYdG2Ma01uaTPLq/oG2+o25ggQCbfHxWP+wk/ja+YjSgRnmLGUewSVnp2Er+tpmVILCuq3no/P6XA7ama1YOn26viJBxvL+7TBP3atQCSck12EnMlzTXUTUKjzMRfNTHF5j5E1hjrPDr3P+fkj0nP7+D2qnaYww2s3u8PnbGkNLXkcHsmp9aUijwrUR8g98FT8gjSoBUOCWj09NgfVtGOHS/47GFagAbZMVgc9HCCS5pCMKW49+1UO9Y326B+IMWPZFfZHBuh8BqS81dYsTQwW3qf4ERdYReK9xu1ShKQIDAQAB-----END PUBLIC KEY-----";

    var expiracaoDia = (this.form.get("cc_expiracao").value).substring(0,2);
    var expiracaoAno = (this.form.get("cc_expiracao").value).substring(2,4);


    // 3 PASSO - GERA O HASH COM OS DADOS DO CARTÃO
    MoipCreditCard
    .setEncrypter(jsencrypt, 'ionic')
    .setPubKey(pubKey)
    .setCreditCard({
        number: this.form.get("cc_numero").value,
        cvc: this.form.get("cc_cod_seguranca").value,
        expirationMonth: expiracaoDia,
        expirationYear: expiracaoAno
    })
    .hash()
    .then(hash => {
        // 4 PASSO - GERA PAGAMENTO PELO CARTÃO DE CRÉDITO
        this.subscription = this.serviceWireCard.addPagamentoCartao(id_pedido, this.form, hash)
        .subscribe(
        response => {
            if (response.status == 'CANCELLED'){
              this.pagamento.confirmado = false;
              this.carregando = false;
              this.pagamento.erro = true;
              this.pagamento.erroTipo = response.status;
              this.pagamento.alerts = Array.from([{ type: 'danger', message: 'Não foi possível confirmar este pagamento' }]);
            }
            if (response.status == 'WAITING'){
              this.pagamento.confirmado = false;
              this.carregando = false;
              this.pagamento.erro = true;
              this.pagamento.erroTipo = response.status;              
              this.pagamento.alerts = Array.from([{ type: 'warning', message: 'Ainda não foi possível confirmar este pagamento, estamos aguardando o retorno da operadora de cartão' }]);
            }
            if (response.status == 'IN_ANALYSIS'){
              this.pagamento.confirmado = false;
              this.carregando = false;
              this.pagamento.erro = true;
              this.pagamento.erroTipo = response.status;              
              this.pagamento.alerts = Array.from([{ type: 'warning', message: 'Ainda não foi possível confirmar este pagamento, estamos aguardando o retorno da operadora de cartão' }]);
            }

            if (response.status == 'AUTHORIZED'){
              this.pagamento.erro = false;
              this.pagamento.confirmado = true;
              this.carregando = false;
              //ATUALIZA A TABELA DE EVENTOS INSCRITOS
            }
            this.service.inscricao(response.id, response.status, this.listaCarrinho, this.form.get('cupom').value).subscribe();
        },
        (erroResponse) => {
          this.carregando = false;
          this.pagamento.erro = true;
          this.pagamento.alerts = Array.from([{ type: 'danger', message: erroResponse.error.errors[0].description }]);
        });              
    });


  }

  efetuarPagamentoBoleto(id_pedido){

        // 4 PASSO - GERA PAGAMENTO PELO CARTÃO DE CRÉDITO
        this.subscription = this.serviceWireCard.addPagamentoBoleto(id_pedido, this.form)
        .subscribe(
        response => {
            this.pagamento.confirmado = true;
            this.carregando = false;
            //ATUALIZA A TABELA DE EVENTOS INSCRITOS
            this.service.inscricao(response.id, response.status, this.listaCarrinho, this.form.get('cupom').value).subscribe();
            this.pagamento.url = response._links.payBoleto.printHref;
            var dt = response.fundingInstrument.boleto.expirationDate;
            var data = dt.substring(8,10) + "/" + dt.substring(5,7) + "/" + dt.substring(0,4) 
            this.pagamento.dataVencimento = data;
            this.pagamento.codigoBarras = response.fundingInstrument.boleto.lineCode;
            this.pagamento.valor= Number(response.amount.total/100).toFixed(2);
        },
        (erroResponse) => {
          this.carregando = false;
          this.pagamento.erro = true;
          this.pagamento.alerts = Array.from([{ type: 'danger', message: erroResponse.error.errors[0].description }])
        });              

  }



  validarPagamento(){

    const campoCartao: HTMLInputElement =<HTMLInputElement>document.getElementById('cartao');    

    if(campoCartao.checked){
        // PAGAMENTO PELO CARTÃO DE CRÉDITO
        if (this.form.get("cc_nome").value == ""){
          this.carregando = false;
          this.alerts = Array.from([{ type: 'danger', message: "Nome do titular do cartão não informado" }])
          return false;
        }
        if (this.form.get("cc_numero").value == ""){
          this.carregando = false;
          this.alerts = Array.from([{ type: 'danger', message: "Número do cartão não informado" }])
          return false;
        }
        if (this.form.get("cc_expiracao").value == ""){
          this.carregando = false;
          this.alerts = Array.from([{ type: 'danger', message: "Data de Expiração do cartão não informado" }])
          return false;
        }
        if (this.form.get("cc_cod_seguranca").value == ""){
          this.carregando = false;
          this.alerts = Array.from([{ type: 'danger', message: "Código de segurança do cartão não informado" }])
          return false;
        }
      }
      return true;

  }

  logoff(){
    this.authService.logoff();
    this.router.navigate(['/login']);      
  
  }

  voltar(){
    this.alerts = [];
    if(this.checkoutEmAndamento){
      this.checkoutEmAndamento = false;
    }else{
      this.router.navigate(['/areaParticipante']);
    }
  }

  sair(){
      this.router.navigate(['/areaParticipante']);
  }

  desabilitarCampos(){
    this.form.disable();
    (<HTMLInputElement> document.getElementById("btnCheckout")).disabled = true;

  }

  habilitarCampos(){
    this.form.enable();
    (<HTMLInputElement> document.getElementById("btnCheckout")).disabled = false;

  }
  copyToClipBoard(val){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  openUrl(url){
    window.open(url, "_blank");
  }

}