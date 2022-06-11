import { Alert } from 'selenium-webdriver';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { map, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { empty, interval, Observable, Subscription } from 'rxjs';
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
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-areaParticipante',
  templateUrl: './areaParticipante.component.html',
  styleUrls: ['./areaParticipante.component.css']
})
export class AreaParticipanteComponent implements OnInit, AfterViewInit, OnDestroy  {

  usuario: Usuario = new Usuario();
  uploadForm: FormGroup;
  form: FormGroup;    
  submitted = false;
  alerts = [];
  listaCaravanas =  [];
  listaAcessoPalestra =  [];
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
  usuarioLogado;

  evento01 = false;
  evento02 = false;
  evento03 = false;
  evento99 = false;

  assistiuEvento1 = 0;
  assistiuEvento11 = false;
  assistiuEvento12 = false;
  assistiuEvento13 = false;
  assistiuEvento2 = 0;
  assistiuEvento21 = false;
  assistiuEvento22 = false;
  assistiuEvento23 = false;
  assistiuEvento3 = 0;
  assistiuEvento31 = false;
  assistiuEvento32 = false;
  assistiuEvento99 = 0;
  
  spinnerEvento01 = false;
  spinnerEvento02 = false;
  spinnerEvento03 = false;
  spinnerEvento99 = false;

  private subscription: Subscription;
  
    public dateNow = new Date();
    public dDay = new Date('Sep 17 2021 20:00:00');
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference;
    public secondsToDday;
    public minutesToDday;
    public hoursToDday;
    public daysToDday;


    private getTimeDifference () {
        this.timeDifference = this.dDay.getTime() - new  Date().getTime();
        this.allocateTimeUnits(this.timeDifference);

        // Inicializamos o objeto Date() com data e horário atual
        const date1 = new Date();

        // APRESENTACAO DE TRABALHOS CIENTIFICOS 
        const date2 = new Date('2021-09-16 08:00:00');
        const date3 = new Date('2021-09-16 18:00:00');
        if (date1.getTime() > date2.getTime() && date1.getTime() < date3.getTime()  ) {
          this.spinnerEvento03 = true;
        }        
        // PAINEL DE GESTÃO 01 
        const date4 = new Date('2021-09-17 09:00:00');
        const date5 = new Date('2021-09-17 12:00:00');
        if (date1.getTime() > date4.getTime() &&  date1.getTime() < date5.getTime()  ) {
          this.spinnerEvento01 = true;
        }        
        // PAINEL DE GESTÃO 02 
        const date6 = new Date('2021-09-17 14:00:00');
        const date7 = new Date('2021-09-17 18:00:00');
        if (date1.getTime() > date6.getTime() && date1.getTime() < date7.getTime()  ) {
          this.spinnerEvento02 = true;
        }        
        // EVENTO PRINCIPAL 
        const date8 = new Date('2021-09-17 19:00:00');
        const date9 = new Date('2021-09-17 22:00:00');
        if (date1.getTime() > date8.getTime() && date1.getTime() < date9.getTime()  ) {
          this.spinnerEvento99 = true;
        }        



    }

  private allocateTimeUnits (timeDifference) {
        this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
        this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
        this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

 

  constructor(
      private fb: FormBuilder,        
      private dropdownService: DropdownService,   
      private authService: AuthService, 
      private router: Router,           
      private cepService: ConsultaCepService,
      private service: AreaParticipanteService,      
      private usuarioService: UsuarioService,      
      private http: HttpClient,
      private modalService: NgbModal             
  ) { }

 // @ViewChild('cpf') firstNameElement: ElementRef;

  ngAfterViewInit() {
//    this.firstNameElement.nativeElement.focus();
  }

  ngOnInit() {

    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });
  
    this.service.getMeusEventos()
    .subscribe(
        response => {
            this.carregando = false;
            this.listaMeusEventos = response.dados;
            this.listaCaravanas = response.caravanas;
            this.listaAcessoPalestra = response.acessos_palestras;
            this.verificarAcessoPalestras();
        },
        err => {
            this.carregando = false;
            this.alerts = Array.from([{ type: 'danger', message: err.message }])
        });

     

        this.usuarioLogado = JSON.parse(localStorage.getItem("usuario")); 
        const iframeAoVivo: HTMLInputElement =<HTMLInputElement>document.getElementById('iframeAoVivo');
        

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


  selecionarCaravana(content) {
    var string = localStorage.getItem("usuario") ;
    var obj = JSON.parse(string);
    this.usuario.operacao = "SALVAR_MINHA_CARAVANA";
    this.usuario.cpf = obj.cpf;
    const modal = this.modalService.open(content);
    modal. result.then(() => { 
      console.log('SALVAR'); 
      this.usuarioService.salvarMinhaCaravana(this.usuario).subscribe(response => {
                 console.log("Status" + response.status);
                if (response.status.codigo == 0) {
                  localStorage.setItem("usuario", JSON.stringify(response.dados));     
                  this.usuarioLogado = JSON.parse(localStorage.getItem("usuario"));                      
                }
            },
            err => {
                this.carregando = false;
                this.alerts = Array.from([{ type: 'danger', message: err.message }])
                console.log(err);
        });
    
   
    }, () => { console.log('SAIR')})
  }

  possuiCaravana(){
    if (typeof this.usuarioLogado.caravana == "undefined"){
      return false;
    }
    if (this.usuarioLogado.caravana.length <= 0 ){
      return false;
    }else{
      return true;
    }
  }

  sairCaravana() {

    if (! confirm("Deseja não mais fazer parte desta Caravana ?") ) {
      return;
    } 

    var string = localStorage.getItem("usuario") ;
    var obj = JSON.parse(string);
    this.usuario.operacao = "SALVAR_MINHA_CARAVANA";
    this.usuario.caravana = "";
    this.usuario.cpf = obj.cpf;
     this.usuarioService.salvarMinhaCaravana(this.usuario).subscribe(response => {
                 console.log("Status" + response.status);
                if (response.status.codigo == 0) {
                  localStorage.setItem("usuario", JSON.stringify(response.dados));    
                  this.usuarioLogado = JSON.parse(localStorage.getItem("usuario"));                                         
                }
            },
            err => {
                this.carregando = false;
                this.alerts = Array.from([{ type: 'danger', message: err.message }])
                console.log(err);
        });
  }



  acessoNegado(){
    var modalRef = this.modalService.open(ModalAcessoNegadoComponent);
    return false;
  }

  logoff(){
    this.authService.logoff();
    this.router.navigate(['/login']);      
  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
 }

 acessoStreaming(id){
   var acesso = false;
   if (id == "31"){
    /*Sala Rio Araguaia */
    window.open("https://us02web.zoom.us/j/89233136882?pwd=eDVjdk15V28xWXF1MEhyWkdtU09MQT09",'_blank');
    return;  }
  if (id == "32"){
    /*Serra Dourada */
    window.open("https://us04web.zoom.us/j/71601576869?pwd=VHhraXdnRVYzcEZUVTBmYjNBTVU2dz09",'_blank');
                     
    return;
  }

  var str = "17/09/2021";
  var date = new Date(str.split('/').reverse().join('/'));
  var novaData = new Date();
  if(date > novaData) {
    alert("ATENÇÃO, palestra disponível somente  a partir do dia 17/09/2021");
    return;
   }



  if (id == "11"){
    /*Marcio Dourado*/
    window.open("https://www.youtube.com/watch?v=6yLiTjmuU4M",'_blank');
    acesso = true;
  }
  if (id == "12"){
    /*Ivan Lourenço*/
    window.open("https://www.youtube.com/watch?v=lcypRkq4ezs",'_blank');
    acesso = true;
  }
  if (id == "13"){
    /*Rejane Duarte*/
    window.open("https://www.youtube.com/watch?v=RbFsgF7poHc",'_blank');
    acesso = true;
  }
  if (id == "21"){
    /*Filipe Dunas*/
    window.open("https://www.youtube.com/watch?v=IkHYzF5qfik",'_blank');
    acesso = true;
  }
 if (id == "22"){
   /*Rafael Maciel*/
   window.open("https://www.youtube.com/watch?v=2Z_tnCN5Z1U",'_blank');
    acesso = true;
  }
 if (id == "23"){
   /*Adriano Pereira */
   window.open("https://www.youtube.com/watch?v=uDBFN-IL96k",'_blank');
    acesso = true;
  }

  if (id == "99"){
    /*ONLINE */
    alert("PARABÉNS, sua presença para esta palestra  \n foi registrada com sucesso !!!");    
//    window.open("https://www.youtube.com/watch?v=Jm5UgWO4cFU",'_blank');
     acesso = true;
   }
   if (id == "98"){
    window.open("https://www.youtube.com/live_chat?is_popout=1&v=Jm5UgWO4cFU",'_blank','width=800,height=600');
     acesso = true;
   }
  
  if(! acesso){
    alert('ATENÇÃO, Esta Palestra ainda não está disponível !!!')
    return;
  }

  this.service.registrarVisualizacaoVideo(id).subscribe(resp => {
    this.listaAcessoPalestra = resp.dados;
    this.verificarAcessoPalestras();
   });
  
 }


verificarAcessoPalestras(){
  var a: any;
  this.assistiuEvento1 = 0;
  this.assistiuEvento2 = 0;
  for (a of this.listaMeusEventos){
    if (a.id == 1 && a.status == 'AUTHORIZED'){
      this.evento01 = true;
    }
    if (a.id == 2 && a.status == 'AUTHORIZED'){
      this.evento02 = true;
    }
    if (a.id == 5 && a.status == 'AUTHORIZED'){
      this.evento03 = true;
    }
    if (a.id == 6 && a.status == 'AUTHORIZED'){
      this.evento03 = true;
    }

    if (a.id == 99 && a.status == 'AUTHORIZED'){
      this.evento99 = true;
    }


  }  
 

  if (this.listaAcessoPalestra != null){
    for (a of this.listaAcessoPalestra){
        if (a.id_evento == 11){
          this.assistiuEvento11 = true;
          this.assistiuEvento1 = this.assistiuEvento1 + 33;
        }

        if (a.id_evento == 12){        
            this.assistiuEvento12 = true;
            this.assistiuEvento1 = this.assistiuEvento1 + 33;
        }

        if (a.id_evento == 13){
            this.assistiuEvento13 = true;
            this.assistiuEvento1 = this.assistiuEvento1 + 34;
        }

        if (a.id_evento == 21){
            this.assistiuEvento21 = true;
            this.assistiuEvento2 = this.assistiuEvento2 + 33;
        }

        if (a.id_evento == 22){
            this.assistiuEvento22 = true;
            this.assistiuEvento2 = this.assistiuEvento2 + 33;
        }

        if (a.id_evento == 23){
            this.assistiuEvento23 = true;
            this.assistiuEvento2 = this.assistiuEvento2 + 34;
        }

        if (a.id_evento == 31){
            this.assistiuEvento31 = true;
        }

        if (a.id_evento == 32){
            this.assistiuEvento32 = true;
        }

        if (a.id_evento == 99){
            this.assistiuEvento99 = 100;
        }
    }
    const campo01: HTMLInputElement =<HTMLInputElement>document.getElementById('progressBarPainel01');
    campo01.style.width = this.assistiuEvento1 +'%';
    const campo02: HTMLInputElement =<HTMLInputElement>document.getElementById('progressBarPainel02');
    campo02.style.width = this.assistiuEvento2 +'%';
}


}

certificado(){

    // Inicializamos o objeto Date() com data e horário atual
    const date1 = new Date();

    // Inicializamos uma data no passado
    const date2 = new Date('2021-09-18 16:00:00');
  
    if (date1.getTime() < date2.getTime() ) {
      alert("ATENÇÃO, CERTIFICADO disponível a partir do dia: \n \n 18/09/2021 às 16:00hs");
      return;
    }
 

  if (! this.assistiuEvento11){
    alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a primeira Palestra do Painel de Gestão 01 !!!')
    return;    
  }
  if (! this.assistiuEvento12){
    alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a segunda Palestra do Painel de Gestão 01 !!!')
    return;    
  }
  if (! this.assistiuEvento13){
    alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a terceira Palestra do Painel de Gestão 01 !!!')
    return;    
  }
  if (! this.assistiuEvento21){
    alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a primeira Palestra do Painel de Gestão 02 !!!')
    return;    
  }
  if (! this.assistiuEvento22){
    alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a segunda Palestra do Painel de Gestão 02 !!!')
    return;    
  }
  if (! this.assistiuEvento23){
    alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a terceira Palestra do Painel de Gestão 03 !!!')
    return;    
  }
//  if (! this.assistiuEvento99){
    //alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a palestra Principal do evento !!!')
//    return;    
//  } 

  var string = localStorage.getItem("usuario") ;
  var obj = JSON.parse(string);
  var id = Number(obj.cpf) + 82984298187;
  var url = "https://conad.adm.br/sistemas/inscricoes-api/api/certificado/index.php?id=" + id;

  window.open(url,'_blank');
}

fichaAvaliacao(){

  // Inicializamos o objeto Date() com data e horário atual
  const date1 = new Date();

  // Inicializamos uma data no passado
  const date2 = new Date('2021-09-18 14:00:00');

  // Inicializamos uma data no passado
  const date3 = new Date('2021-09-30 01:00:00');

  if (date1.getTime() < date2.getTime() || date1.getTime() > date3.getTime()  ) {
    alert("ATENÇÃO, ficha de avaliação disponível no período: \n \n de 18/09/2021 às 14:00hs até 30/09/2021 às 00:00hs ");
    return;
  }

   var string = localStorage.getItem("usuario") ;
   var obj = JSON.parse(string);
   var id = Number(obj.cpf) + 82984298187;
   var url = "https://pt.surveymonkey.com/r/CXL2NYL";
 
   window.open(url,'_blank');
 

}

quiz(){

   // Inicializamos o objeto Date() com data e horário atual
   const date1 = new Date();

   // Inicializamos uma data no passado
   const date2 = new Date('2021-09-18 09:00:00');
 
   // Inicializamos uma data no passado
   const date3 = new Date('2021-09-18 14:30:00');
 
   if (date1.getTime() < date2.getTime() || date1.getTime() > date3.getTime()  ) {
     alert("ATENÇÃO, QUIZ disponível no período: \n \n de 18/09/2021 às 09:00hs até 18/09/2021 às 14:30hs ");
     return;
   }
 

   var string = localStorage.getItem("usuario") ;
   var obj = JSON.parse(string);
   var id = Number(obj.cpf) + 82984298187;
   var url = "https://pt.surveymonkey.com/r/conad";
 
   window.open(url,'_blank');
 

}


}