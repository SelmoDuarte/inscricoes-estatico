(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-toDo-toDo-module"],{

/***/ "./src/app/toDo/lista.component.css":
/*!******************************************!*\
  !*** ./src/app/toDo/lista.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg-highlight {\r\n    background-color: yellow;\r\n}\r\n@media screen and (max-width: 700px) {\r\n.table {\r\nfont-size: 11px;\r\n}\r\n}\r\n.atrasado{\r\n    color:red;\r\n}\r\n.emDia{\r\n    color:green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9Eby9saXN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBRUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3RvRG8vbGlzdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWctaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4udGFibGUge1xyXG5mb250LXNpemU6IDExcHg7XHJcbn1cclxufVxyXG5cclxuLmF0cmFzYWRve1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5lbURpYXtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/toDo/lista.component.html":
/*!*******************************************!*\
  !*** ./src/app/toDo/lista.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <nav class=\"navbar navbar-expand-lg alert-warning\">\r\n       <div class=\"container-fluid\">\r\n          <!--div class=\"col-lg-4 col-md-12\">\r\n              <div class=\"d-none d-lg-block\">\r\n               <h4><i class='fas fa-share-alt-square' style='font-size:48px;color:#856404'></i>&nbsp;-&nbsp;Kanban - To Do</h4>\r\n              </div>\r\n           </div>  \r\n           <div class=\"col-lg-3 col-md-12 float-right\">\r\n              <label style=\"text-align: left\">Status</label>\r\n              <select id=\"comboFiltro\" class=\"form-control\" (change)=\"filtroStatus()\">\r\n               <option *ngFor=\"let t of listaStatus\" [value]=\"t.codigo\">{{ t.descricao }}</option>\r\n               </select>\r\n           </div>  \r\n           <div class=\"col-lg-5 col-md-12 float-right\">\r\n              <label>Filtro:</label>\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"queryBusca\" />\r\n                 </div>\r\n                 <button type=\"button\" class=\"btn btn-dark\" (click)=\"pesquisar()\">OK</button>&nbsp;&nbsp;&nbsp;\r\n                 <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"filtroStatus()\" title=\"Atualizar\"><i class=\"fas fa-sync-alt fa-lg\"></i></button>&nbsp;&nbsp;&nbsp;\r\n                 <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"novaAtividade()\">NOVO</button>                 \r\n              </div>\r\n           </div-->\r\n           <div class=\"col-lg-4 col-md-12\">\r\n            <div class=\"row\">\r\n               <div class=\"col-md-6\">\r\n                  <label style=\"text-align: left\">Data Inicio</label>\r\n                  <input class=\"form-control\" id=\"filtroDtInicio\" type=\"text\" matInput mask=\"00/00/0000\" name=\"data_inicio\" [(ngModel)]=\"data_inicio\"  />  \r\n                </div>  \r\n                <div class=\"col-md-6\">\r\n                  <label style=\"text-align: left\">Data Fim</label>\r\n                  <input class=\"form-control\" id=\"filtroDtFim\" type=\"text\"  matInput mask=\"00/00/0000\" name=\"data_fim\" [(ngModel)]=\"data_fim\" />\r\n               </div>  \r\n            </div>  \r\n         </div>  \r\n\r\n         <div class=\"col-lg-3 col-md-12 float-right\">\r\n            <label style=\"text-align: left\">Responsável</label>\r\n            <select id=\"comboFiltroAssunto\" class=\"form-control\" (change)=\"filtro()\">\r\n             <option *ngFor=\"let t of listaAssuntos\" [value]=\"t.descricao\">{{ t.descricao }}</option>\r\n             </select>\r\n         </div>  \r\n\r\n           <div class=\"col-lg-3 col-md-12 float-right\">\r\n              <label style=\"text-align: left\">Status</label>\r\n              <select id=\"comboFiltroStatus\" class=\"form-control\" (change)=\"filtro()\">\r\n               <option *ngFor=\"let t of listaStatus\" [value]=\"t.codigo\">{{ t.descricao }}</option>\r\n               </select>\r\n           </div>  \r\n           <div class=\"col-lg-2 col-md-12 float-right\">\r\n              <label>&nbsp;&nbsp;&nbsp;</label>\r\n              <!--div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"queryBusca\" />\r\n                 </div>\r\n                 <button type=\"button\" class=\"btn btn-dark\" (click)=\"pesquisar()\">OK</button>&nbsp;&nbsp;&nbsp;\r\n                 <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"filtroStatus()\" title=\"Atualizar\"><i class=\"fas fa-sync-alt fa-lg\"></i></button>\r\n              </div--><br>\r\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"filtro()\" title=\"Atualizar\"><i class=\"fas fa-sync-alt fa-lg\"></i></button>&nbsp;&nbsp;\r\n              <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"exportToExcel()\" title=\"Exportar Excel\"><i class=\"fas fa-file-excel fa-lg\"></i></button>&nbsp;&nbsp;\r\n              <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"novaAtividade()\">NOVO</button>                 \r\n           </div>\r\n\r\n       </div>\r\n    </nav>\r\n    <div class=\"row\">\r\n       <div class=\"col-12\">\r\n          <p style=\"align-content: center\">\r\n             <img *ngIf=\"carregando\" class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n          </p>\r\n       </div>\r\n    </div>\r\n    <form>\r\n       <div class=\"col-12\">\r\n          <p *ngFor=\"let alert of alerts\">\r\n             <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n          <div [innerHTML]=\"alert.message\"></div>\r\n          </ngb-alert>\r\n          </p>\r\n       </div>\r\n       <div class=\"col-12\">\r\n          <table class=\"table table-sm table-striped table-fixed\">\r\n             <thead>\r\n                <tr>\r\n                   <th scope=\"col\">Datas</th>\r\n                   <th scope=\"col\" sortable=\"area\" (sort)=\"onSort($event)\" width=\"280px\"></th>\r\n                    <th scope=\"col\" sortable=\"population\" (sort)=\"onSort($event)\">Descricao</th>\r\n                   <th scope=\"col\" colspan=\"2\" sortable=\"population\" (sort)=\"onSort($event)\"></th>\r\n                </tr>\r\n             </thead>\r\n             <tbody>\r\n                <tr *ngFor=\"let reg of lista\">\r\n                  <td class=\"align-middle\" style=\" background: transparent; min-width:125px;\">\r\n                     Inicio: <ngb-highlight [result]=\"reg.data_formatada\" [term]=\"queryBusca\"></ngb-highlight><br>\r\n                     <span [ngClass]=\"reg.prazo_fatal\"><b>Fim: <ngb-highlight [result]=\"reg.data_final\" [term]=\"queryBusca\"  ></ngb-highlight></b></span>\r\n                  </td>\r\n\r\n                   <td class=\"align-middle\">\r\n                     <b>Solicitante:</b>&nbsp;&nbsp; <ngb-highlight  [result]=reg.solicitante [term]=\"queryBusca\"></ngb-highlight><br><hr>\r\n                     <b>Resp.:</b>&nbsp;&nbsp; <ngb-highlight  [result]=reg.assunto [term]=\"queryBusca\"></ngb-highlight><br><hr>\r\n                     <b>Tema:</b>&nbsp;&nbsp; <ngb-highlight  [result]=reg.tema [term]=\"queryBusca\"></ngb-highlight><br><hr>\r\n                   </td>\r\n                   <td class=\"align-middle\">\r\n                      <ngb-highlight [result]=\"reg.descricao\" [term]=\"queryBusca\"></ngb-highlight>\r\n                      <div [hidden]=\"  reg.anexos == '' \">\r\n                        <b><i>Anexos:</i></b><br>\r\n                        <span [innerHtml]=\"listarAnexos(reg.id , reg.anexos)\"></span>\r\n                      </div>                      \r\n                   </td>\r\n                   <td class=\"align-middle text-right\">\r\n                      <p class=\"text-right\">\r\n                         <!--button type=\"button\" class=\"btn btn-link\" (click)=\"openModal(reg)\" title=\"Detalhe do Contato\"><i\r\n                            class=\"fas fa-id-card-alt fa-lg\"></i></button><br-->\r\n                         <button type=\"button\" class=\"btn btn-link\" (click)=\"openModalAndamento(reg)\" title=\"Andamento\"><i\r\n                            class=\"fas fa-ad fa-lg\"></i></button><br>\r\n                      </p>\r\n                   </td>\r\n                </tr>\r\n             </tbody>\r\n          </table>\r\n          <div class=\"d-flex justify-content-between p-2\">\r\n             <ngb-pagination [collectionSize]=\"total\" [(page)]=\"page\" [pageSize]=\"pageSize\">\r\n             </ngb-pagination>\r\n             <select class=\"custom-select\" style=\"width: auto\" name=\"pageSize\" [(ngModel)]=\"pageSize\">\r\n             <option [ngValue]=\"2\">2 items per page</option>\r\n             <option [ngValue]=\"4\">4 items per page</option>\r\n             <option [ngValue]=\"6\">6 items per page</option>\r\n             </select>\r\n          </div>\r\n       </div>\r\n    </form>\r\n </div>\r\n <router-outlet></router-outlet>\r\n "

/***/ }),

/***/ "./src/app/toDo/modal-andamento/modal-andamento.components.ts":
/*!********************************************************************!*\
  !*** ./src/app/toDo/modal-andamento/modal-andamento.components.ts ***!
  \********************************************************************/
/*! exports provided: ModalAndamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAndamento", function() { return ModalAndamento; });
/* harmony import */ var _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/dropdown.service */ "./src/app/shared/services/dropdown.service.ts");
/* harmony import */ var _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/consulta-cep.service */ "./src/app/shared/services/consulta-cep.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/form-validation */ "./src/app/shared/form-validation.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/service */ "./src/app/toDo/services/service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalAndamento = /** @class */ (function () {
    function ModalAndamento(activeModal, fb, service, cepService, dropdownService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.service = service;
        this.cepService = cepService;
        this.dropdownService = dropdownService;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.submitted = false;
        this.subscription = null;
        this.alerts = [];
        this.carregando = false;
        this.ocultarFormulario = true;
        this.desabilitarBotaoSalvar = false;
        this.listaSMS = [{ codigo: 'Sim', descricao: 'Sim' }, { codigo: 'Não', descricao: 'Não' }];
        this.listaStatus = [{ codigo: '0', descricao: 'Pendente' }, { codigo: '1', descricao: 'Aguardando parecer' }, { codigo: '2', descricao: 'Concluído' }, { codigo: '3', descricao: 'Cancelado' }];
        this.listaAndamentos = [];
    }
    ModalAndamento.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            id_pai: [null],
            id: [null],
            data: [null, [this.validarData]],
            status: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sms: [null],
            descricao: [null],
            cpf: [null],
            nome: [null],
            email: [null],
            celular: [null],
            usuario: [""],
        });
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        console.log(jsonUsuario.nome);
        this.form.get('id_pai').setValue(this.formPai.id);
        this.form.get('cpf').setValue(this.formPai.cpf);
        this.form.get('nome').setValue(this.formPai.nome);
        this.form.get('email').setValue(this.formPai.email);
        this.form.get('celular').setValue(this.formPai.celualar);
        this.form.get('usuario').setValue(jsonUsuario.nome);
        this.subscription = this.service.getAndamentos(this.formPai.id)
            .subscribe(function (response) {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                _this.listaAndamentos = response.dados;
            }
            else {
                _this.listaAndamentos = [];
                _this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
            }
            _this.carregando = false;
        }, function (err) {
            _this.carregando = false;
            _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
    };
    ModalAndamento.prototype.novo = function () {
        this.ocultarFormulario = false;
        this.desabilitarBotaoSalvar = false;
        var data = new Date(), dia = data.getDate().toString(), diaF = (dia.length == 1) ? '0' + dia : dia, mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0' + mes : mes, anoF = data.getFullYear();
        this.form.get('data').setValue(diaF + "/" + mesF + "/" + anoF);
        this.form.get('status').setValue("");
        this.form.get('sms').setValue("");
        this.form.get('descricao').setValue("");
        this.form.get('id').setValue("");
    };
    ModalAndamento.prototype.cancelar = function () {
        this.ocultarFormulario = true;
    };
    ModalAndamento.prototype.sair = function () {
        this.ocultarFormulario = true;
    };
    ModalAndamento.prototype.excluir = function (andamento) {
        var _this = this;
        if (confirm('Confirma a exclusão deste andamento ?')) {
            this.service.excluirAndamento(andamento)
                .subscribe(function (response) {
                console.log("Status" + response.status);
                if (response.status.codigo == 0) {
                    _this.alerts = Array.from([{ type: 'success', message: response.status.mensagem }]);
                    _this.formPai = response.dados;
                    console.log('AAA' + response.dados);
                    _this.listaAndamentos = response.dados;
                    _this.ocultarFormulario = true;
                }
                else {
                    _this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
                    _this.desabilitarBotaoSalvar = false;
                }
                _this.carregando = false;
            }, function (err) {
                _this.carregando = false;
                _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
                console.log(err);
            });
        }
    };
    ModalAndamento.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    ModalAndamento.prototype.getLabelField = function (fieldName) {
        return Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_5__["getLabelAllFields"])(fieldName);
    };
    ModalAndamento.prototype.validarData = function (control) {
        var v = control.value;
        if (null != v && v.length == 8) {
            var data = v.substr(0, 2) + "/" + v.substr(2, 2) + "/" + v.substr(4, 4);
            var patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
            if (!patternData.test(data)) {
                return { dataInvalida: true };
            }
        }
    };
    ModalAndamento.prototype.salvar = function () {
        var _this = this;
        console.log('Salvando Andamento');
        this.alerts = [];
        this.submitted = true;
        this.desabilitarBotaoSalvar = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            this.alerts = Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_5__["getFormValidationErrors"])(this.form.controls);
            console.log('Formulário inválido');
            this.desabilitarBotaoSalvar = false;
            return;
        }
        this.carregando = true;
        this.service.salvarAndamento(this.form)
            .subscribe(function (response) {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                _this.alerts = Array.from([{ type: 'success', message: response.status.mensagem }]);
                _this.listaAndamentos = response.dados;
                _this.ocultarFormulario = true;
            }
            else {
                _this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
                _this.desabilitarBotaoSalvar = false;
            }
            _this.carregando = false;
        }, function (err) {
            _this.carregando = false;
            _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], ModalAndamento.prototype, "formPai", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
    ], ModalAndamento.prototype, "passEntry", void 0);
    ModalAndamento = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-modal-andamento',
            template: __webpack_require__(/*! ./modal-andamento.html */ "./src/app/toDo/modal-andamento/modal-andamento.html"),
            styles: [__webpack_require__(/*! ./modal-andamento.css */ "./src/app/toDo/modal-andamento/modal-andamento.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_service__WEBPACK_IMPORTED_MODULE_6__["Service"],
            _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__["ConsultaCepService"],
            _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__["DropdownService"]])
    ], ModalAndamento);
    return ModalAndamento;
}());



/***/ }),

/***/ "./src/app/toDo/modal-andamento/modal-andamento.css":
/*!**********************************************************!*\
  !*** ./src/app/toDo/modal-andamento/modal-andamento.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    input {\r\n      margin-bottom: 10px;\r\n    }\r\n  }\r\n\r\n  \r\n  #nomeUsuario {\r\n   font-size: 90%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9Eby9tb2RhbC1hbmRhbWVudG8vbW9kYWwtYW5kYW1lbnRvLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0Y7OztFQUdBO0dBQ0MsY0FBYztFQUNmIiwiZmlsZSI6InNyYy9hcHAvdG9Eby9tb2RhbC1hbmRhbWVudG8vbW9kYWwtYW5kYW1lbnRvLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGlucHV0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gICNub21lVXN1YXJpbyB7XHJcbiAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/toDo/modal-andamento/modal-andamento.html":
/*!***********************************************************!*\
  !*** ./src/app/toDo/modal-andamento/modal-andamento.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div class=\"bd-callout bd-callout-info\">\r\n    <h4 id=\"data-attributes-for-individual-tooltips\">Andamentos</h4>\r\n  </div>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form class=\"mt-5\" (ngSubmit)=\"submit()\" [formGroup]=\"form\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n          <div class=\"col-12\">\r\n              <p *ngFor=\"let alert of alerts\">\r\n                <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n                  <div [innerHTML]=\"alert.message\"></div>\r\n                </ngb-alert>\r\n              </p>\r\n    \r\n              <p *ngIf=\"carregando\" style=\"align-content: center\">\r\n                <img class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n              </p>\r\n            </div>\r\n    \r\n\r\n          <div class=\"col-12\" [hidden]=\" ! ocultarFormulario\">\r\n          <table class=\"table table-sm table-striped table-fixed\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Data</th>\r\n                  <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Tipo</th>\r\n                  <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\" >Descrição</th>\r\n                </tr>\r\n              </thead>\r\n        \r\n\r\n              <tbody>\r\n                  <tr *ngFor=\"let andam of listaAndamentos\">\r\n                      <td>{{andam.data_formatada}}</td>\r\n                      <td>{{listaStatus[andam.status].descricao}}<br><i id=\"nomeUsuario\" class=\"text-secondary\">Resp: {{andam.usuario}}</i></td>\r\n                      <td>{{andam.descricao}}</td>  \r\n                      <td class=\"align-middle text-right\">\r\n                          <p class=\"text-right\">\r\n                             <button type=\"button\" class=\"btn btn-link\" (click)=\"excluir(andam)\" title=\"Excluir Andamento\"><i class=\"fas fa-trash-alt fa-lg\"></i></button><br>\r\n                          </p>\r\n                       </td>                      \r\n                   </tr>\r\n                   </tbody>\r\n          </table> \r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\"  [hidden]=\"ocultarFormulario\">\r\n          <div class=\"card bg-light mb-12\">\r\n            <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n              <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Andamento </div>\r\n            </div>\r\n            <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('data')}}</label>\r\n                  <input #cpf type=\"text\" matInput mask=\"00/00/0000\" formControlName=\"data\" class=\"form-control\"\r\n                    placeholder=\"\" />\r\n                </div>\r\n\r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('status')}}</label>\r\n                  <select formControlName=\"status\" class=\"form-control\">\r\n                    <option *ngFor=\"let t of listaStatus\" [value]=\"t.codigo\">{{ t.descricao }}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-3\">\r\n                  <label>Enviar Email ?</label>\r\n                  <select formControlName=\"sms\" class=\"form-control\">\r\n                    <option *ngFor=\"let t of listaSMS\" [value]=\"t.codigo\">{{ t.descricao }}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-12\">\r\n                  <label>{{getLabelField('descricao')}}</label>\r\n                  <textarea name=\"descricao\" formControlName=\"descricao\" class=\"form-control\" placeholder=\"\"></textarea>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-sm-12\">\r\n          <div class=\"mx-auto\"><br> \r\n              <button [hidden]=\" ocultarFormulario\" [disabled]=\"desabilitarBotaoSalvar\" type=\"button\" (click)=\"salvar()\" class=\"btn btn-outline-success\">Salvar</button> &nbsp;&nbsp;\r\n              <button [hidden]=\"! ocultarFormulario\" type=\"button\" (click)=\"novo()\"   class=\"btn btn-outline-success\">Novo Andamento</button> &nbsp;&nbsp;\r\n              <button [hidden]=\" ocultarFormulario\" type=\"button\" (click)=\"cancelar()\"   class=\"btn btn-outline-danger\">Cancelar</button> &nbsp;&nbsp;\r\n              <button  type=\"button\" (click)=\"activeModal.close('Close click')\"   class=\"btn btn-outline-dark\">Sair</button>              \r\n            <hr>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <!--button (click)=\"passBack()\" type=\"submit\" class=\"btn btn-primary w-100\">Pass back</button-->\r\n</div>"

/***/ }),

/***/ "./src/app/toDo/modal-atividade/modal-atividade.components.ts":
/*!********************************************************************!*\
  !*** ./src/app/toDo/modal-atividade/modal-atividade.components.ts ***!
  \********************************************************************/
/*! exports provided: ModalAtividade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAtividade", function() { return ModalAtividade; });
/* harmony import */ var _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/dropdown.service */ "./src/app/shared/services/dropdown.service.ts");
/* harmony import */ var _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/consulta-cep.service */ "./src/app/shared/services/consulta-cep.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/form-validation */ "./src/app/shared/form-validation.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/service */ "./src/app/toDo/services/service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "../node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var URL_UPLOAD = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].API + "toDo/uploadFile.php";
var ModalAtividade = /** @class */ (function () {
    function ModalAtividade(activeModal, fb, service, cepService, dropdownService, http) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.service = service;
        this.cepService = cepService;
        this.dropdownService = dropdownService;
        this.http = http;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.submitted = false;
        this.alerts = [];
        this.carregando = false;
        this.listaAssuntos = [{ codigo: '5', descricao: 'Administrativo' }, { codigo: '1', descricao: 'Cobrança' }, { codigo: '2', descricao: 'Compras' }, { codigo: '3', descricao: 'Comunicacao' }, { codigo: '4', descricao: 'Contabilidade' }, { codigo: '6', descricao: 'Escritório Jurídico' }, { codigo: '7', descricao: 'Fiscalização' }, { codigo: '8', descricao: 'Financeiro' }, { codigo: '9', descricao: 'Gestão de Pessoas' }, { codigo: '10', descricao: 'Informática' }, { codigo: '11', descricao: 'Jurídico' }, { codigo: '12', descricao: 'Presidência' }, { codigo: '13', descricao: 'Registro' }, { codigo: '13', descricao: 'Superintendencia' }];
        this.listaTemas = [{ codigo: '1', descricao: 'Assinatura/SEI' }, { codigo: '2', descricao: 'Atendimento' }, { codigo: '3', descricao: 'Compra de produto' }, { codigo: '5', descricao: 'Contratação de serviço' }, { codigo: '4', descricao: 'Estudo' }, { codigo: '6', descricao: 'Levantamento de dados' }, { codigo: '7', descricao: 'Manifestação juridica' }, { codigo: '8', descricao: 'Minuta de portaria/resolução/oficio' }, { codigo: '9', descricao: 'Pagamentos' }, { codigo: '10', descricao: 'Parecer juridico' }, { codigo: '11', descricao: 'Processos judiciais' }, { codigo: '12', descricao: 'Relatorio' }, { codigo: '13', descricao: 'Solicitação diversas' }];
        this.modoLeitura = false;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({ url: URL_UPLOAD });
    }
    ModalAtividade.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            assunto: [null],
            tema: [null],
            descricao: [null],
            prazo: [null],
            usuario: [null],
            nomeAnexos: [null]
        });
        this.uploadForm = this.fb.group({
            document: [null, null],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        this.form.get('usuario').setValue(jsonUsuario.nome);
    };
    ModalAtividade.prototype.sair = function () {
        this.activeModal.close('FECHAR');
    };
    ModalAtividade.prototype.populaDadosForm = function (dados) {
        // this.formulario.setValue({});
    };
    ModalAtividade.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    ModalAtividade.prototype.getLabelField = function (fieldName) {
        return Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_5__["getLabelAllFields"])(fieldName);
    };
    ModalAtividade.prototype.salvar = function () {
        var _this = this;
        console.log('Salvando');
        this.alerts = [];
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            this.alerts = Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_5__["getFormValidationErrors"])(this.form.controls);
            console.log('Formulário inválido');
            return;
        }
        var nomeAnexos = "";
        for (var i = 0; i < this.uploader.queue.length; i++) {
            var fileItem = this.uploader.queue[i]._file;
            var el = document.getElementById("uploadArquivos");
            var anexoArquivos = el.value;
            if (anexoArquivos.indexOf(fileItem.name) > -1) {
                nomeAnexos = nomeAnexos + fileItem.name + "|";
            }
        }
        this.form.get('nomeAnexos').setValue(nomeAnexos);
        this.carregando = true;
        this.service.salvar(this.form)
            .subscribe(function (response) {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                _this.alerts = Array.from([{ type: 'success', message: response.status.mensagem }]);
                _this.uploadFiles(response.id);
            }
            else {
                _this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
            }
            _this.carregando = false;
        }, function (err) {
            _this.carregando = false;
            _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
    };
    ModalAtividade.prototype.uploadFiles = function (id) {
        for (var i = 0; i < this.uploader.queue.length; i++) {
            var fileItem = this.uploader.queue[i]._file;
            if (fileItem.size > 10000000) {
                alert("Each File should be less than 10 MB of size.");
                return;
            }
        }
        for (var j = 0; j < this.uploader.queue.length; j++) {
            var tipo = "";
            var data = new FormData();
            var fileItem = this.uploader.queue[j]._file;
            console.info(this.uploader.queue[j]);
            console.log(fileItem.name);
            data.append('file', fileItem);
            data.append('id', id);
            data.append('fileName', fileItem.name);
            data.append('fileSeq', 'seq' + j);
            data.append('dataType', this.uploadForm.controls.type.value);
            this.uploadFile(data).subscribe(function (data) { return console.log(data.status.mensagem); });
        }
        //        this.uploader.clearQueue();
    };
    ModalAtividade.prototype.uploadFile = function (data) {
        return this.http.post(URL_UPLOAD, data);
    };
    ModalAtividade.prototype.listarAnexos = function (id, a) {
        var htmlRetorno = "<ul>";
        var listaAnexos = a.split("|");
        for (var i = 0; i < listaAnexos.length; i++) {
            if (listaAnexos[i] != "") {
                htmlRetorno = htmlRetorno + "<ul><li><a href='https://anexo.crago.org.br/" + id + "-" + listaAnexos[i] + "' target='blank'>" + listaAnexos[i] + "</a></li></ul>";
            }
        }
        htmlRetorno = htmlRetorno + "</ul>";
        return htmlRetorno;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], ModalAtividade.prototype, "formPai", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
    ], ModalAtividade.prototype, "passEntry", void 0);
    ModalAtividade = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-modal-atividade',
            template: __webpack_require__(/*! ./modal-atividade.html */ "./src/app/toDo/modal-atividade/modal-atividade.html"),
            styles: [__webpack_require__(/*! ./modal-atividade.css */ "./src/app/toDo/modal-atividade/modal-atividade.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_service__WEBPACK_IMPORTED_MODULE_6__["Service"],
            _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__["ConsultaCepService"],
            _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__["DropdownService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], ModalAtividade);
    return ModalAtividade;
}());



/***/ }),

/***/ "./src/app/toDo/modal-atividade/modal-atividade.css":
/*!**********************************************************!*\
  !*** ./src/app/toDo/modal-atividade/modal-atividade.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    input {\r\n      margin-bottom: 10px;\r\n    }\r\n  }\r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9Eby9tb2RhbC1hdGl2aWRhZGUvbW9kYWwtYXRpdmlkYWRlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC90b0RvL21vZGFsLWF0aXZpZGFkZS9tb2RhbC1hdGl2aWRhZGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/toDo/modal-atividade/modal-atividade.html":
/*!***********************************************************!*\
  !*** ./src/app/toDo/modal-atividade/modal-atividade.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"modal-header\">\r\n   <div class=\"bd-callout bd-callout-info\">\r\n      <h4 id=\"data-attributes-for-individual-tooltips\">Atividade</h4>\r\n   </div>\r\n   <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n   <span aria-hidden=\"true\">&times;</span>\r\n   </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n   <form class=\"mt-5\" (ngSubmit)=\"submit()\" [formGroup]=\"form\">\r\n   <div class=\"container\">\r\n      <div class=\"row\">\r\n         <div class=\"col-12\">\r\n            <p *ngFor=\"let alert of alerts\">\r\n               <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n            <div [innerHTML]=\"alert.message\"></div>\r\n            </ngb-alert>\r\n            </p>\r\n            <p *ngIf=\"carregando\"  style=\"align-content: center\">\r\n               <img  class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n            </p>\r\n         </div>\r\n         <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\">\r\n            <div class=\"card bg-light mb-12\">\r\n               <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n                  <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Dados da Atividade: </div>\r\n               </div>\r\n               <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n                  <div class=\"row\">\r\n                     <div class=\" col-md-5\" >\r\n                        <label>{{getLabelField('responsavel')}}</label>\r\n                        <select formControlName=\"assunto\" class=\"form-control\" placeholder=\"\">\r\n                        <option *ngFor=\"let t of listaAssuntos\" [value]=\"t.descricao\">{{ t.descricao }}</option>\r\n                        </select>                    \r\n                     </div>\r\n                     <div class=\" col-md-4\" >\r\n                        <label>{{getLabelField('tema')}}</label>\r\n                        <select formControlName=\"tema\" class=\"form-control\" placeholder=\"\">\r\n                        <option *ngFor=\"let t of listaTemas\" [value]=\"t.descricao\">{{ t.descricao }}</option>\r\n                        </select>                    \r\n                     </div>\r\n                     <div class=\" col-md-3\" >\r\n                        <label>{{getLabelField('prazo')}} em dias</label>\r\n                        <input [readonly]=\"modoLeitura\" type=\"text\" matInput mask=\"00\" formControlName=\"prazo\" class=\"form-control\" placeholder=\"\" />\r\n                     </div>\r\n                     <div class=\" col-md-12\">\r\n                        <label>{{getLabelField('descricao')}}</label>\r\n                        <textarea [readonly]=\"modoLeitura\" formControlName=\"descricao\" class=\"form-control\" placeholder=\"\" ></textarea>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"card bg-light mb-12\" [formGroup]=\"uploadForm\">\r\n               <div style=\"cursor: pointer;\" >\r\n                 <div class=\"card-header alert-primary\"><i class=\"fa fa-cloud-upload-alt\"></i> Anexo (PDF ou Arquivo Compactado no formato aa ZIP):</div>\r\n               </div>\r\n               <div class=\"card-body\">\r\n                 <div class=\"row\">\r\n                   <div class=\" col-md-12\">\r\n                     <label>Selecione:</label><br>\r\n                     <input id=\"uploadArquivos\" formControlName=\"document\" type=\"file\"  accept=\"application/pdf,application/zip\" ng2FileSelect [uploader]=\"uploader\" />\r\n                   </div>\r\n                 </div>\r\n             </div>\r\n           </div>                  \r\n   \r\n         </div>\r\n\r\n         <div class=\"col-12 col-sm-12\">\r\n            <br>\r\n            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"salvar()\" >SALVAR</button>&nbsp;&nbsp;&nbsp;\r\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"sair()\">SAIR</button>            \r\n            <hr>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   </form>\r\n          \r\n   <!--button (click)=\"passBack()\" type=\"submit\" class=\"btn btn-primary w-100\">Pass back</button-->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/toDo/services/service.ts":
/*!******************************************!*\
  !*** ./src/app/toDo/services/service.ts ***!
  \******************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "../node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
        this.API_GET_LISTA = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "toDo/getLista.php";
        this.API_SALVAR = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "toDo/salvar.php";
        this.API_SALVAR_ANDAMENTO = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "toDo/salvarAndamento.php";
        this.API_GET_LISTA_ANDAMENTOS = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "toDo/getListaAndamentos.php";
        this.API_EXCLUIR_ANDAMENTO = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "toDo/excluirAndamento.php";
        this.API_GET = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "toDo/get.php";
        this.API_LOAD_COMBOS = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "tabelas/loadCombos.php";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    Service_1 = Service;
    Service.prototype.getListaByFiltro = function (data_inicio, data_fim, assunto, status) {
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        var filtro = [];
        if (assunto == "") {
            return this.http.post(this.API_GET_LISTA, { campos: [{ campo: 'to_do.data', valor: data_inicio, operador: '>', condicao: '' }, { campo: 'to_do.data', valor: data_fim, operador: '<', condicao: '' }, { campo: 'to_do.status', valor: status, operador: '=', condicao: '' }], usuario: jsonUsuario.login }, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
        }
        else {
            return this.http.post(this.API_GET_LISTA, { campos: [{ campo: 'to_do.data', valor: data_inicio, operador: '>', condicao: '' }, { campo: 'to_do.data', valor: data_fim, operador: '<', condicao: '' }, { campo: 'to_do.assunto', valor: assunto, operador: '=', condicao: '' }, { campo: 'to_do.status', valor: status, operador: '=', condicao: '' }], usuario: jsonUsuario.login }, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
        }
    };
    Service.prototype.getBusca = function (search) {
        return this.http.post(this.API_GET_LISTA, { campos: [{ campo: 'solicitante', valor: search, operador: 'LIKE', condicao: ' OR ' }, { campo: 'assunto', valor: search, operador: 'LIKE', condicao: ' OR ' }, { campo: 'descricao', valor: search, operador: 'LIKE', condicao: ' OR ' }] }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    Service.prototype.get = function (id) {
        return this.http.post(this.API_GET, { campos: [{ campo: 'to_do.id', valor: id, operador: '=', condicao: '' }] }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    Service.prototype.loadCombos = function () {
        return this.http.post(this.API_LOAD_COMBOS, {}, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    Service.prototype.salvar = function (form) {
        var formObj = form.getRawValue(); // {name: '', description: ''}
        var serializedForm = JSON.stringify(formObj);
        return this.http.post(this.API_SALVAR, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    Service.prototype.getAndamentos = function (id) {
        return this.http.post(this.API_GET_LISTA_ANDAMENTOS, { 'id': id }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    Service.prototype.salvarAndamento = function (form) {
        var formObj = form.getRawValue(); // {name: '', description: ''}
        var serializedForm = JSON.stringify(formObj);
        return this.http.post(this.API_SALVAR_ANDAMENTO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    Service.prototype.excluirAndamento = function (form) {
        //    let formObj = form.getRawValue(); // {name: '', description: ''}
        var serializedForm = JSON.stringify(form);
        return this.http.post(this.API_EXCLUIR_ANDAMENTO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    Service.toExportFileName = function (excelFileName) {
        return excelFileName + "_export_" + new Date().getTime() + ".xlsx";
    };
    Service.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](workbook, Service_1.toExportFileName(excelFileName));
    };
    var Service_1;
    Service = Service_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/toDo/toDo.component.ts":
/*!****************************************!*\
  !*** ./src/app/toDo/toDo.component.ts ***!
  \****************************************/
/*! exports provided: ToDoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoComponent", function() { return ToDoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/service */ "./src/app/toDo/services/service.ts");
/* harmony import */ var _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-andamento/modal-andamento.components */ "./src/app/toDo/modal-andamento/modal-andamento.components.ts");
/* harmony import */ var _modal_atividade_modal_atividade_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-atividade/modal-atividade.components */ "./src/app/toDo/modal-atividade/modal-atividade.components.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ToDoComponent = /** @class */ (function () {
    function ToDoComponent(router, service, modalService) {
        this.router = router;
        this.service = service;
        this.modalService = modalService;
        this.lista = [];
        this.page = 0;
        this.pageSize = 50;
        this.collectionSize = 0;
        this.total = 0;
        this.carregando = false;
        this.url_base = "" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        this.subscription = null;
        this.listaAssuntos = [{ codigo: '0', descricao: '' }, { codigo: '5', descricao: 'Administrativo' }, { codigo: '1', descricao: 'Cobrança' }, { codigo: '2', descricao: 'Compras' }, { codigo: '3', descricao: 'Comunicacao' }, { codigo: '5', descricao: 'Contabilidade' }, { codigo: '4', descricao: 'Contratos' }, { codigo: '6', descricao: 'Fiscalização' }, { codigo: '7', descricao: 'Financeiro' }, { codigo: '8', descricao: 'Gestão de Pessoas' }, { codigo: '9', descricao: 'Informática' }, { codigo: '10', descricao: 'Jurídico' }, { codigo: '11', descricao: 'Presidência' }, { codigo: '12', descricao: 'Registro' }];
        this.listaStatus = [{ codigo: '0', descricao: 'Pendente' }, { codigo: '2', descricao: 'Concluído' }, { codigo: '3', descricao: 'Cancelado' }];
    }
    ToDoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carregando = true;
        this.subscription = this.service.getListaByFiltro("2000-01-01", "3999-12-31", "", "0")
            .subscribe(function (response) {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                _this.lista = response.dados;
            }
            else {
                _this.lista = [];
                _this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
            }
            _this.carregando = false;
        }, function (err) {
            _this.carregando = false;
            _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
    };
    ToDoComponent.prototype.novo = function () {
        this.router.navigate(['/estudante', 'novo']);
    };
    ToDoComponent.prototype.novaAtividade = function () {
        var modalRef = this.modalService.open(_modal_atividade_modal_atividade_components__WEBPACK_IMPORTED_MODULE_6__["ModalAtividade"], { size: 'lg' });
        console.log('Antes');
        console.log('Depois');
    };
    //  openModal(formPai) {
    //    this.subscription = this.service.get(formPai.id)
    //      .subscribe(
    //        response => {
    //          var currentObject = response.dados[0];
    //          const modalRef = this.modalService.open(ModalAtividade, { size: 'lg' });
    //          modalRef.componentInstance.formPai = response.dados;
    //        });
    //  }
    ToDoComponent.prototype.openModalAndamento = function (formPai) {
        var modalRef = this.modalService.open(_modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_5__["ModalAndamento"], { size: 'lg' });
        modalRef.componentInstance.formPai = formPai;
    };
    ToDoComponent.prototype.pesquisar = function () {
        var _this = this;
        this.alerts = [];
        this.carregando = true;
        this.subscription = this.service.getBusca(this.queryBusca)
            .subscribe(function (response) {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                _this.lista = response.dados;
            }
            else {
                _this.lista = [];
                _this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
            }
            _this.carregando = false;
        }, function (err) {
            _this.carregando = false;
            _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
        this.collectionSize = this.lista.length;
    };
    ToDoComponent.prototype.filtro = function () {
        var _this = this;
        var elemAssunto = document.getElementById('comboFiltroAssunto');
        var elemStatus = document.getElementById('comboFiltroStatus');
        var elemDtInicio = document.getElementById('filtroDtInicio');
        var elemDtFim = document.getElementById('filtroDtFim');
        var dataInicio = "2000-01-01";
        if (elemDtInicio.value !== "") {
            var dtTemp = elemDtInicio.value;
            dataInicio = dtTemp.substring(6, 10) + "-" + dtTemp.substring(3, 5) + "-" + dtTemp.substring(0, 2);
        }
        var dataFim = "2099-12-31";
        if (elemDtFim.value !== "") {
            var dtTemp = elemDtFim.value;
            dataFim = dtTemp.substring(6, 10) + "-" + dtTemp.substring(3, 5) + "-" + dtTemp.substring(0, 2);
        }
        this.subscription = this.service.getListaByFiltro(dataInicio, dataFim, elemAssunto.value, elemStatus.value)
            .subscribe(function (response) {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                _this.lista = response.dados;
            }
            else {
                _this.lista = [];
                _this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
            }
            _this.carregando = false;
        }, function (err) {
            _this.carregando = false;
            _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
        this;
    };
    ToDoComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    ToDoComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    ToDoComponent.prototype.listarAnexos = function (id, a) {
        var htmlRetorno = "<ul>";
        var listaAnexos = a.split("|");
        for (var i = 0; i < listaAnexos.length; i++) {
            if (listaAnexos[i] != "") {
                htmlRetorno = htmlRetorno + "<ul><li><a href='https://todo.crago.org.br/" + id + "-" + listaAnexos[i] + "' target='blank'>" + listaAnexos[i] + "</a></li></ul>";
            }
        }
        htmlRetorno = htmlRetorno + "</ul>";
        return htmlRetorno;
    };
    ToDoComponent.prototype.exportToExcel = function (event) {
        this.service.exportAsExcelFile(this.lista, 'toDo');
    };
    ToDoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toDo',
            template: __webpack_require__(/*! ./lista.component.html */ "./src/app/toDo/lista.component.html"),
            styles: [__webpack_require__(/*! ./lista.component.css */ "./src/app/toDo/lista.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_service__WEBPACK_IMPORTED_MODULE_4__["Service"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ToDoComponent);
    return ToDoComponent;
}());



/***/ }),

/***/ "./src/app/toDo/toDo.module.ts":
/*!*************************************!*\
  !*** ./src/app/toDo/toDo.module.ts ***!
  \*************************************/
/*! exports provided: ToDoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoModule", function() { return ToDoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/ngx-mask */ "./src/app/shared/ngx-mask/index.ts");
/* harmony import */ var _toDo_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toDo.routing.module */ "./src/app/toDo/toDo.routing.module.ts");
/* harmony import */ var _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-andamento/modal-andamento.components */ "./src/app/toDo/modal-andamento/modal-andamento.components.ts");
/* harmony import */ var _toDo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toDo.component */ "./src/app/toDo/toDo.component.ts");
/* harmony import */ var _modal_atividade_modal_atividade_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-atividade/modal-atividade.components */ "./src/app/toDo/modal-atividade/modal-atividade.components.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ "../node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ToDoModule = /** @class */ (function () {
    function ToDoModule() {
    }
    ToDoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _toDo_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _shared_ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forRoot(),
            ],
            declarations: [_toDo_component__WEBPACK_IMPORTED_MODULE_8__["ToDoComponent"], _modal_atividade_modal_atividade_components__WEBPACK_IMPORTED_MODULE_9__["ModalAtividade"], _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_7__["ModalAndamento"]],
            entryComponents: [_modal_atividade_modal_atividade_components__WEBPACK_IMPORTED_MODULE_9__["ModalAtividade"], _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_7__["ModalAndamento"]]
        })
    ], ToDoModule);
    return ToDoModule;
}());



/***/ }),

/***/ "./src/app/toDo/toDo.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/toDo/toDo.routing.module.ts ***!
  \*********************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guards_faleConosco_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/faleConosco.guard */ "./src/app/guards/faleConosco.guard.ts");
/* harmony import */ var _toDo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDo.component */ "./src/app/toDo/toDo.component.ts");
/* harmony import */ var _modal_atividade_modal_atividade_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-atividade/modal-atividade.components */ "./src/app/toDo/modal-atividade/modal-atividade.components.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var moduloRoutes = [
    { path: '', component: _toDo_component__WEBPACK_IMPORTED_MODULE_3__["ToDoComponent"],
        canActivateChild: [_guards_faleConosco_guard__WEBPACK_IMPORTED_MODULE_2__["FaleConoscoGuard"]],
        children: [
            { path: 'novo', component: _modal_atividade_modal_atividade_components__WEBPACK_IMPORTED_MODULE_4__["ModalAtividade"] }
        ] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(moduloRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-toDo-toDo-module.js.map