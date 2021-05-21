(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-estudante-estudante-module"],{

/***/ "./src/app/estudante/estudante.component.css":
/*!***************************************************!*\
  !*** ./src/app/estudante/estudante.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VzdHVkYW50ZS9lc3R1ZGFudGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/estudante/estudante.component.html":
/*!****************************************************!*\
  !*** ./src/app/estudante/estudante.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n<nav class=\"navbar navbar-expand-lg alert-primary\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"d-none d-lg-block\">\r\n        <h4><i class='fas fa-user-graduate' style='font-size:48px;color:#856404'></i>&nbsp;-&nbsp;Emissão de Carteira de\r\n          Estudante</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-12 float-right\">\r\n        <label style=\"text-align: left\">Status</label>\r\n        <select id=\"comboFiltro\" class=\"form-control\" (change)=\"filtroStatus()\">\r\n           <option selected value=\"0\">Incluido</option>\r\n           <option value=\"1\">Documentação Pendente</option>\r\n           <option value=\"2\">Aguardando impressão</option>\r\n           <option value=\"3\" >Concluida</option>\r\n           <option value=\"4\" >Cancelado</option>\r\n        </select>\r\n     </div>  \r\n     <div class=\"col-lg-3 col-md-12 float-right\">\r\n        <label>Filtro:</label>\r\n        <div class=\"input-group\">\r\n           <div class=\"input-group-prepend\">\r\n              <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"queryBusca\" />\r\n           </div>\r\n           <button type=\"button\" class=\"btn btn-dark\" (click)=\"pesquisar()\">OK</button>&nbsp;&nbsp;&nbsp;\r\n           <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"filtroStatus()\" title=\"Atualizar\"><i class=\"fas fa-sync-alt fa-lg\"></i></button>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</nav>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <p style=\"align-content: center\">\r\n        <img *ngIf=\"carregando\" class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n<form>\r\n  <div class=\"col-12\">\r\n    <p *ngFor=\"let alert of alerts\">\r\n      <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n        <div [innerHTML]=\"alert.message\"></div>\r\n      </ngb-alert>\r\n    </p>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <table class=\"table table-sm table-striped table-fixed\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\"></th>\r\n          <th scope=\"col\">Nº</th>\r\n          <th scope=\"col\">CPF</th>\r\n          <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Nome</th>\r\n          <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\" >Contato</th>\r\n          <th scope=\"col\" sortable=\"area\" (sort)=\"onSort($event)\">IES</th>\r\n          <th scope=\"col\" sortable=\"population\" (sort)=\"onSort($event)\">Cidade</th>\r\n          <th scope=\"col\" colspan=\"2\" sortable=\"population\" (sort)=\"onSort($event)\"></th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let reg of lista\">\r\n          <td class=\"align-middle\">\r\n            <a href=\"https://sistemas.tecnosys-ci.com.br/uploads/FOTOS/{{reg.path_foto}}\" target=\"_blank\"><img\r\n                src=\"https://sistemas.tecnosys-ci.com.br/uploads/FOTOS/{{reg.path_foto}}\" style=\"max-width:50px\"></a>\r\n          </td>\r\n\r\n          <td class=\"align-middle\">\r\n            <ngb-highlight [result]=\"reg.id\" [term]=\"queryBusca\"></ngb-highlight>\r\n          </td>\r\n          <td class=\"align-middle\">\r\n            <a href=\"https://sistemas.tecnosys-ci.com.br/uploads/DOCUMENTOS_IDENTIFICACAO/{{reg.path_documento_identificacao}}\"\r\n              target=\"_blank\">\r\n              <ngb-highlight [result]=\"reg.cpf\" [term]=\"queryBusca\"></ngb-highlight>\r\n            </a>\r\n          </td>\r\n          <td class=\"align-middle\">\r\n            <ngb-highlight [result]=\"reg.nome\" [term]=\"queryBusca\"></ngb-highlight>\r\n          </td>\r\n          <td class=\"align-middle\" >\r\n            <ngb-highlight [result]=\"reg.telefone\" [term]=\"queryBusca\"></ngb-highlight><br>\r\n            <ngb-highlight [result]=\"reg.email\" [term]=\"queryBusca\" class=\"d-none d-lg-block\"></ngb-highlight><br>\r\n          </td>\r\n          <td class=\"align-middle\">\r\n            <a href=\"https://sistemas.tecnosys-ci.com.br/uploads/COMPROVANTES_MATRICULA/{{reg.path_comprovante_matricula}}\"\r\n              target=\"_blank\">\r\n              <ngb-highlight [result]=\"reg.ies\" [term]=\"queryBusca\"></ngb-highlight>\r\n            </a>\r\n          </td>\r\n          <td class=\"align-middle\">\r\n            <ngb-highlight [result]=\"reg.cidade\" [term]=\"queryBusca\"></ngb-highlight>\r\n          </td>\r\n          <td class=\"align-middle text-right\">\r\n            <p class=\"text-right\">\r\n              <button type=\"button\" class=\"btn btn-link\" (click)=\"openModal(reg)\" title=\"Detalhe do Estudante\"><i\r\n                  class=\"fas fa-id-card-alt fa-lg\"></i></button><br>\r\n                  <button type=\"button\" class=\"btn btn-link\" (click)=\"openModalAndamento(reg)\" title=\"Andamento\"><i\r\n                    class=\"fas fa-ad fa-lg\"></i></button>\r\n              <a href=\"{{url_base}}estudante/carteira/{{reg.cpf}}\" target=\"_blank\" class=\"btn btn-link\"\r\n                title=\"Gerar Carteira de Estudante\"><i class=\"far fa-address-card fa-lg\"></i></a>\r\n            </p>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"d-flex justify-content-between p-2\">\r\n      <ngb-pagination [collectionSize]=\"total\" [(page)]=\"page\" [pageSize]=\"pageSize\">\r\n      </ngb-pagination>\r\n      <select class=\"custom-select\" style=\"width: auto\" name=\"pageSize\" [(ngModel)]=\"pageSize\">\r\n        <option [ngValue]=\"2\">2 items per page</option>\r\n        <option [ngValue]=\"4\">4 items per page</option>\r\n        <option [ngValue]=\"6\">6 items per page</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</form>\r\n</div>\r\n<style>\r\n  @media screen and (max-width: 700px) {\r\n\r\n    .table {\r\n      font-size: 11px;\r\n    }\r\n  }\r\n</style>\r\n\r\n<router-outlet></router-outlet>                         <button type=\"button\" class=\"btn btn-link\" (click)=\"openModalAndamento(reg)\" title=\"Andamento\"><i\r\n                            class=\"fas fa-ad fa-lg\"></i></button>                         <button type=\"button\" class=\"btn btn-link\" (click)=\"openModalAndamento(reg)\" title=\"Andamento\"><i\r\n                            class=\"fas fa-ad fa-lg\"></i></button>"

/***/ }),

/***/ "./src/app/estudante/estudante.component.ts":
/*!**************************************************!*\
  !*** ./src/app/estudante/estudante.component.ts ***!
  \**************************************************/
/*! exports provided: EstudanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudanteComponent", function() { return EstudanteComponent; });
/* harmony import */ var _modal_estudante_modal_estudante_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-estudante/modal-estudante.components */ "./src/app/estudante/modal-estudante/modal-estudante.components.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_estudante_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/estudante.service */ "./src/app/estudante/services/estudante.service.ts");
/* harmony import */ var _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-andamento/modal-andamento.components */ "./src/app/estudante/modal-andamento/modal-andamento.components.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EstudanteComponent = /** @class */ (function () {
    function EstudanteComponent(router, service, modalService) {
        this.router = router;
        this.service = service;
        this.modalService = modalService;
        this.lista = [];
        this.page = 0;
        this.pageSize = 50;
        this.collectionSize = 0;
        this.total = 0;
        this.carregando = false;
        this.url_base = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        this.subscription = null;
        this.listaStatus = [{ codigo: "0", descricao: "Incluida pelo Site" }, { codigo: "1", descricao: "Documentação Pendente" }, { codigo: "2", descricao: "Aguardando impressão" }, { codigo: "9", descricao: "Concluida" }, { codigo: "6", descricao: "Cancelada" }];
    }
    EstudanteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.status = this.listaStatus[0];
        this.carregando = true;
        this.subscription = this.service.getListaByStatus("0")
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
    EstudanteComponent.prototype.novo = function () {
        this.router.navigate(['/estudante', 'novo']);
    };
    EstudanteComponent.prototype.openModal = function (estudante) {
        var _this = this;
        this.subscription = this.service.get(estudante.cpf)
            .subscribe(function (response) {
            console.log("Deu certo: " + response.dados);
            var currentObject = response.dados[0];
            var modalRef = _this.modalService.open(_modal_estudante_modal_estudante_components__WEBPACK_IMPORTED_MODULE_0__["ModalEstudante"], { size: 'lg' });
            console.log('Antes');
            modalRef.componentInstance.estudante = response.dados[0];
            //            modalRef.componentInstance.loadDados(registro);
        });
        console.log('Depois');
    };
    EstudanteComponent.prototype.openModalAndamento = function (formPai) {
        var _this = this;
        this.subscription = this.service.getAndamentos(formPai.id)
            .subscribe(function (response) {
            var currentObject = response.dados[0];
            var modalRef = _this.modalService.open(_modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_6__["ModalAndamento"], { size: 'lg' });
            formPai.andamentos = Array.from(response.dados);
            modalRef.componentInstance.formPai = formPai;
        });
    };
    EstudanteComponent.prototype.pesquisar = function () {
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
    EstudanteComponent.prototype.filtroStatus = function () {
        var _this = this;
        var elem = document.getElementById('comboFiltro');
        this.subscription = this.service.getListaByStatus(elem.value)
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
    EstudanteComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    EstudanteComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    EstudanteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estudante',
            template: __webpack_require__(/*! ./estudante.component.html */ "./src/app/estudante/estudante.component.html"),
            styles: [__webpack_require__(/*! ./estudante.component.css */ "./src/app/estudante/estudante.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_estudante_service__WEBPACK_IMPORTED_MODULE_5__["EstudanteService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], EstudanteComponent);
    return EstudanteComponent;
}());



/***/ }),

/***/ "./src/app/estudante/estudante.module.ts":
/*!***********************************************!*\
  !*** ./src/app/estudante/estudante.module.ts ***!
  \***********************************************/
/*! exports provided: EstudanteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudanteModule", function() { return EstudanteModule; });
/* harmony import */ var _estudante_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estudante.routing.module */ "./src/app/estudante/estudante.routing.module.ts");
/* harmony import */ var _modal_estudante_modal_estudante_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-estudante/modal-estudante.components */ "./src/app/estudante/modal-estudante/modal-estudante.components.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _estudante_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./estudante.component */ "./src/app/estudante/estudante.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/ngx-mask */ "./src/app/shared/ngx-mask/index.ts");
/* harmony import */ var _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-andamento/modal-andamento.components */ "./src/app/estudante/modal-andamento/modal-andamento.components.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EstudanteModule = /** @class */ (function () {
    function EstudanteModule() {
    }
    EstudanteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _estudante_routing_module__WEBPACK_IMPORTED_MODULE_0__["EstudanteRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _shared_ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"].forRoot(),
            ],
            declarations: [_estudante_component__WEBPACK_IMPORTED_MODULE_4__["EstudanteComponent"], _modal_estudante_modal_estudante_components__WEBPACK_IMPORTED_MODULE_1__["ModalEstudante"], _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_9__["ModalAndamento"]],
            entryComponents: [_modal_estudante_modal_estudante_components__WEBPACK_IMPORTED_MODULE_1__["ModalEstudante"], _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_9__["ModalAndamento"]]
        })
    ], EstudanteModule);
    return EstudanteModule;
}());



/***/ }),

/***/ "./src/app/estudante/estudante.routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/estudante/estudante.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EstudanteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudanteRoutingModule", function() { return EstudanteRoutingModule; });
/* harmony import */ var _modal_estudante_modal_estudante_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-estudante/modal-estudante.components */ "./src/app/estudante/modal-estudante/modal-estudante.components.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _estudante_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estudante.component */ "./src/app/estudante/estudante.component.ts");
/* harmony import */ var _guards_estudante_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/estudante.guard */ "./src/app/guards/estudante.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var estudanteRoutes = [
    { path: '', component: _estudante_component__WEBPACK_IMPORTED_MODULE_3__["EstudanteComponent"],
        canActivateChild: [_guards_estudante_guard__WEBPACK_IMPORTED_MODULE_4__["EstudanteGuard"]],
        children: [
            { path: 'novo', component: _modal_estudante_modal_estudante_components__WEBPACK_IMPORTED_MODULE_0__["ModalEstudante"] }
        ] }
];
var EstudanteRoutingModule = /** @class */ (function () {
    function EstudanteRoutingModule() {
    }
    EstudanteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(estudanteRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EstudanteRoutingModule);
    return EstudanteRoutingModule;
}());



/***/ }),

/***/ "./src/app/estudante/modal-andamento/modal-andamento.components.ts":
/*!*************************************************************************!*\
  !*** ./src/app/estudante/modal-andamento/modal-andamento.components.ts ***!
  \*************************************************************************/
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
/* harmony import */ var _services_estudante_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/estudante.service */ "./src/app/estudante/services/estudante.service.ts");
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
        this.alerts = [];
        this.carregando = false;
        this.ocultarFormulario = true;
        this.desabilitarBotaoSalvar = false;
        this.listaSMS = [{ codigo: 'Sim', descricao: 'Sim' }, { codigo: 'Não', descricao: 'Não' }];
        this.listaStatus = [{ codigo: '0', descricao: 'Em análise' }, { codigo: '1', descricao: 'Aguardando parecer' }, { codigo: '2', descricao: 'Concluído' }, { codigo: '3', descricao: 'Cancelado' }];
    }
    ModalAndamento.prototype.ngOnInit = function () {
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
        });
        this.form.get('id_pai').setValue(this.formPai.id);
        this.form.get('cpf').setValue(this.formPai.cpf);
        this.form.get('nome').setValue(this.formPai.nome);
        this.form.get('email').setValue(this.formPai.email);
        this.form.get('celular').setValue(this.formPai.celualar);
    };
    ModalAndamento.prototype.novo = function () {
        this.ocultarFormulario = false;
        var data = new Date(), dia = data.getDate().toString(), diaF = (dia.length == 1) ? '0' + dia : dia, mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0' + mes : mes, anoF = data.getFullYear();
        this.form.get('data').setValue(diaF + "/" + mesF + "/" + anoF);
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
                    _this.formPai.andamentos = Array.from(response.dados);
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
                _this.formPai.andamentos = Array.from(response.dados);
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
            template: __webpack_require__(/*! ./modal-andamento.html */ "./src/app/estudante/modal-andamento/modal-andamento.html"),
            styles: [__webpack_require__(/*! ./modal-andamento.css */ "./src/app/estudante/modal-andamento/modal-andamento.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_estudante_service__WEBPACK_IMPORTED_MODULE_6__["EstudanteService"],
            _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__["ConsultaCepService"],
            _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__["DropdownService"]])
    ], ModalAndamento);
    return ModalAndamento;
}());



/***/ }),

/***/ "./src/app/estudante/modal-andamento/modal-andamento.css":
/*!***************************************************************!*\
  !*** ./src/app/estudante/modal-andamento/modal-andamento.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    input {\r\n      margin-bottom: 10px;\r\n    }\r\n  }\r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0dWRhbnRlL21vZGFsLWFuZGFtZW50by9tb2RhbC1hbmRhbWVudG8uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7TUFDRSxtQkFBbUI7SUFDckI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2VzdHVkYW50ZS9tb2RhbC1hbmRhbWVudG8vbW9kYWwtYW5kYW1lbnRvLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGlucHV0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/estudante/modal-andamento/modal-andamento.html":
/*!****************************************************************!*\
  !*** ./src/app/estudante/modal-andamento/modal-andamento.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div class=\"bd-callout bd-callout-info\">\r\n    <h4 id=\"data-attributes-for-individual-tooltips\">Andamentos</h4>\r\n  </div>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form class=\"mt-5\" (ngSubmit)=\"submit()\" [formGroup]=\"form\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n          <div class=\"col-12\">\r\n              <p *ngFor=\"let alert of alerts\">\r\n                <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n                  <div [innerHTML]=\"alert.message\"></div>\r\n                </ngb-alert>\r\n              </p>\r\n    \r\n              <p *ngIf=\"carregando\" style=\"align-content: center\">\r\n                <img class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n              </p>\r\n            </div>\r\n    \r\n\r\n          <div class=\"col-12\" [hidden]=\" ! ocultarFormulario\">\r\n          <table class=\"table table-sm table-striped table-fixed\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Data</th>\r\n                  <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Tipo</th>\r\n                  <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\" >Descrição</th>\r\n                </tr>\r\n              </thead>\r\n        \r\n\r\n              <tbody>\r\n                  <tr *ngFor=\"let andam of formPai.andamentos\">\r\n                      <td>{{andam.dataFormatada}}</td>\r\n                      <td>{{andam.status}}</td>\r\n                      <td>{{andam.descricao}}</td>  \r\n                      <td class=\"align-middle text-right\">\r\n                          <p class=\"text-right\">\r\n                             <button type=\"button\" class=\"btn btn-link\" (click)=\"excluir(andam)\" title=\"Excluir Andamento\"><i class=\"fas fa-trash-alt fa-lg\"></i></button><br>\r\n                          </p>\r\n                       </td>                      \r\n                   </tr>\r\n                   </tbody>\r\n          </table> \r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\"  [hidden]=\"ocultarFormulario\">\r\n          <div class=\"card bg-light mb-12\">\r\n            <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n              <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Andamento </div>\r\n            </div>\r\n            <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('data')}}</label>\r\n                  <input #cpf type=\"text\" matInput mask=\"00/00/0000\" formControlName=\"data\" class=\"form-control\"\r\n                    placeholder=\"\" />\r\n                </div>\r\n\r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('status')}}</label>\r\n                  <select formControlName=\"status\" class=\"form-control\">\r\n                      <option selected value=\"0\">Incluido</option>\r\n                      <option value=\"1\">Documentação Pendente</option>\r\n                      <option value=\"2\">Aguardando impressão</option>\r\n                      <option value=\"3\" >Concluida</option>\r\n                      <option value=\"4\" >Cancelado</option>\r\n               \r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-3\">\r\n                  <label>Enviar SMS</label>\r\n                  <select formControlName=\"sms\" class=\"form-control\">\r\n                    <option *ngFor=\"let t of listaSMS\" [value]=\"t.codigo\">{{ t.descricao }}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-12\">\r\n                  <label>{{getLabelField('descricao')}}</label>\r\n                  <input type=\"text\" formControlName=\"descricao\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-sm-12\">\r\n          <div class=\"mx-auto\"><br> \r\n              <button [hidden]=\" ocultarFormulario\" [disabled]=\"desabilitarBotaoSalvar\" type=\"button\" (click)=\"salvar()\" class=\"btn btn-outline-success\">Salvar</button> &nbsp;&nbsp;\r\n              <button [hidden]=\"! ocultarFormulario\" type=\"button\" (click)=\"novo()\"   class=\"btn btn-outline-success\">Novo Andamento</button> &nbsp;&nbsp;\r\n              <button [hidden]=\" ocultarFormulario\" type=\"button\" (click)=\"cancelar()\"   class=\"btn btn-outline-danger\">Cancelar</button> &nbsp;&nbsp;\r\n              <button  type=\"button\" (click)=\"activeModal.close('Close click')\"   class=\"btn btn-outline-dark\">Sair</button>              \r\n            <hr>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <!--button (click)=\"passBack()\" type=\"submit\" class=\"btn btn-primary w-100\">Pass back</button-->\r\n</div>"

/***/ }),

/***/ "./src/app/estudante/modal-estudante/modal-estudante.components.ts":
/*!*************************************************************************!*\
  !*** ./src/app/estudante/modal-estudante/modal-estudante.components.ts ***!
  \*************************************************************************/
/*! exports provided: ModalEstudante */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEstudante", function() { return ModalEstudante; });
/* harmony import */ var _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/dropdown.service */ "./src/app/shared/services/dropdown.service.ts");
/* harmony import */ var _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/consulta-cep.service */ "./src/app/shared/services/consulta-cep.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/form-validation */ "./src/app/shared/form-validation.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_estudante_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/estudante.service */ "./src/app/estudante/services/estudante.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ModalEstudante = /** @class */ (function () {
    function ModalEstudante(activeModal, fb, service, cepService, dropdownService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.service = service;
        this.cepService = cepService;
        this.dropdownService = dropdownService;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.submitted = false;
        this.alerts = [];
        this.tiposEntidade = [];
        this.tiposRegistro = [];
        this.situacoesRegistro = [];
        this.sexos = [{ codigo: 1, descricao: "Masc" }, { codigo: 2, descricao: "Fem" }];
        this.estadosCivil = [{ codigo: '2', descricao: 'Casado' }, { codigo: '4', descricao: 'Divorciado' }, { codigo: '5', descricao: 'Outro' }, { codigo: '1', descricao: 'Solteiro' }, { codigo: '3', descricao: 'Viúvo' }];
        this.listaStatus = [{ codigo: '0', descricao: 'Incluído pelo Site' }, { codigo: '1', descricao: 'Analisando Documentação' }, { codigo: '2', descricao: 'Pendente de Documentação' }, { codigo: '3', descricao: 'Aguardando Impressão' }, { codigo: '4', descricao: 'Carteira Impressa' }, { codigo: '5', descricao: 'Enviado pelo Correio' }, { codigo: '6', descricao: 'Entregue ao estudante' }, { codigo: '7', descricao: 'Cancelado' }];
        this.nacionalidadeTemp = "";
        this.cidadeTemp = "";
        this.carregando = true;
        this.ocultarDadosPessoais = false;
        this.ocultarEndereco = false;
        this.ocultarDocumentosPessoais = false;
        this.ocultarRegistro = false;
        this.ocultarIes = false;
    }
    ModalEstudante.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            carteira: this.fb.group({
                ies: [null],
                curso: [null],
                periodo: [null],
                ano_conclusao: [null]
            }),
            pessoaFisica: this.fb.group({
                cpf: [null],
                celular: [null],
                dataNascimento: [null, [this.validarData]],
                sexo: [null],
                estadoCivil: [null],
                pai: [null],
                mae: [null],
                nacionalidade: [null],
                naturalidadeUf: [null],
                naturalidade: [null],
                rg: [null],
                orgaoExpedidor: [null],
                dataExpedicao: [null, [this.validarData]],
                tituloEleitor: [null],
                senha: []
            }),
            endereco: this.fb.group({
                cep: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_form_validation__WEBPACK_IMPORTED_MODULE_5__["cepValidator"]]],
                complemento: [null],
                logradouro: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                bairro: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cidade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                uf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
        this.dropdownService.getPaises().subscribe(function (dados) {
            _this.paises = dados;
            _this.dropdownService.getEstadosBr().subscribe(function (dados) {
                _this.estados = dados;
                //CARREGA OS DADOS DO REGISTRADO
                for (var key in _this.estudante) {
                    if (_this.estudante.hasOwnProperty(key)) {
                        if (_this.form.get(key) == null) {
                            console.info('Campo ' + key + ' não definido no formulário');
                        }
                        else {
                            _this.form.get(key).setValue(_this.estudante[key]);
                            if (key.indexOf("data") > -1) {
                                console.info('Campo ' + key + _this.estudante[key]);
                                var dataSemFormatacao = _this.estudante[key];
                                var ano = dataSemFormatacao.substr(0, 4);
                                var mes = dataSemFormatacao.substr(5, 2);
                                var dia = dataSemFormatacao.substr(8, 2);
                                console.info('Campo sem formato ' + "|" + dia + "|" + mes + "|" + ano);
                                _this.form.get(key).setValue(dia + mes + ano);
                            }
                        }
                    }
                }
                _this.carregando = false;
            });
        });
        this.form.get('endereco.uf').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (uf) { return console.log('Novo estado: ', uf); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (uf) { return _this.estados.filter(function (e) { return e.sigla === uf; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (estados) { return estados && estados.length > 0 ? estados[0].id : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (estadoId) { return _this.dropdownService.getCidades(estadoId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(console.log)).subscribe(function (cidades) { return _this.cidades = cidades; });
        this.form.get('pessoaFisica.naturalidadeUf').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (uf) { return console.log('Novo estado: ', uf); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (uf) { return _this.estados.filter(function (e) { return e.sigla === uf; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (estados) { return estados && estados.length > 0 ? estados[0].id : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (estadoId) { return _this.dropdownService.getCidades(estadoId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(console.log)).subscribe(function (cidades) { return _this.cidadesNaturalidade = cidades; });
        this.form.get('endereco.cep').statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (value) { return console.log('status CEP:', value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (status) { return status === 'VALID' ?
            _this.cepService.consultaCEP(_this.form.get('cep').value)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])(); }))
            .subscribe(function (dados) { return dados ? _this.populaDadosForm(dados) : {}; });
    };
    ModalEstudante.prototype.populaDadosForm = function (dados) {
        // this.formulario.setValue({});
        this.form.patchValue({
            uf: dados.uf,
            cidade: dados.localidade,
            logradouro: dados.logradouro,
            complemento: dados.complemento,
            bairro: dados.bairro,
        });
    };
    ModalEstudante.prototype.resetaDadosEnderecoForm = function () {
        this.form.patchValue({
            rua: null,
            complemento: null,
            bairro: null,
            cidade: null,
            uf: null
        });
    };
    ModalEstudante.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    ModalEstudante.prototype.getLabelField = function (fieldName) {
        return Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_5__["getLabelAllFields"])(fieldName);
    };
    ModalEstudante.prototype.validarData = function (control) {
        var v = control.value;
        if (null != v && v.length == 8) {
            var data = v.substr(0, 2) + "/" + v.substr(2, 2) + "/" + v.substr(4, 4);
            var patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
            if (!patternData.test(data)) {
                return { dataInvalida: true };
            }
        }
    };
    ModalEstudante.prototype.salvar = function () {
        var _this = this;
        console.log('Salvando Estudante');
        this.alerts = [];
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            this.alerts = Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_5__["getFormValidationErrors"])(this.form.controls);
            console.log('Formulário inválido');
            return;
        }
        this.carregando = true;
        this.service.salvar(this.form)
            .subscribe(function (response) {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                _this.alerts = Array.from([{ type: 'success', message: response.status.mensagem }]);
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
    ModalEstudante.prototype.show = function (secao) {
        if (secao == 'ocultarDadosPessoais') {
            if (this.ocultarDadosPessoais) {
                this.ocultarDadosPessoais = false;
            }
            else {
                this.ocultarDadosPessoais = true;
            }
        }
        if (secao == 'ocultarEndereco') {
            if (this.ocultarEndereco) {
                this.ocultarEndereco = false;
            }
            else {
                this.ocultarEndereco = true;
            }
        }
        if (secao == 'ocultarDocumentosPessoais') {
            if (this.ocultarDocumentosPessoais) {
                this.ocultarDocumentosPessoais = false;
            }
            else {
                this.ocultarDocumentosPessoais = true;
            }
        }
        if (secao == 'ocultarRegistro') {
            if (this.ocultarRegistro) {
                this.ocultarRegistro = false;
            }
            else {
                this.ocultarRegistro = true;
            }
        }
        if (secao == 'ocultarIes') {
            if (this.ocultarIes) {
                this.ocultarIes = false;
            }
            else {
                this.ocultarIes = true;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], ModalEstudante.prototype, "estudante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
    ], ModalEstudante.prototype, "passEntry", void 0);
    ModalEstudante = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-modal-estudante',
            template: __webpack_require__(/*! ./modal-estudante.html */ "./src/app/estudante/modal-estudante/modal-estudante.html"),
            styles: [__webpack_require__(/*! ./modal-estudante.css */ "./src/app/estudante/modal-estudante/modal-estudante.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_estudante_service__WEBPACK_IMPORTED_MODULE_8__["EstudanteService"],
            _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__["ConsultaCepService"],
            _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__["DropdownService"]])
    ], ModalEstudante);
    return ModalEstudante;
}());



/***/ }),

/***/ "./src/app/estudante/modal-estudante/modal-estudante.css":
/*!***************************************************************!*\
  !*** ./src/app/estudante/modal-estudante/modal-estudante.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    input {\r\n      margin-bottom: 10px;\r\n    }\r\n  }\r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0dWRhbnRlL21vZGFsLWVzdHVkYW50ZS9tb2RhbC1lc3R1ZGFudGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7TUFDRSxtQkFBbUI7SUFDckI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2VzdHVkYW50ZS9tb2RhbC1lc3R1ZGFudGUvbW9kYWwtZXN0dWRhbnRlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGlucHV0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/estudante/modal-estudante/modal-estudante.html":
/*!****************************************************************!*\
  !*** ./src/app/estudante/modal-estudante/modal-estudante.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div class=\"bd-callout bd-callout-info\">\r\n    <h4 id=\"data-attributes-for-individual-tooltips\">Estudante</h4>\r\n  </div>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form class=\"mt-5\" (ngSubmit)=\"submit()\" [formGroup]=\"form\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <p *ngFor=\"let alert of alerts\">\r\n            <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n              <div [innerHTML]=\"alert.message\"></div>\r\n            </ngb-alert>\r\n          </p>\r\n\r\n          <p *ngIf=\"carregando\"  style=\"align-content: center\">\r\n              <img  class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n           </p>\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\">\r\n          <div class=\"card bg-light mb-12\">\r\n            <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n              <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Dados Pessoais </div>\r\n            </div>\r\n            <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\" col-md-3\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('cpf')}}</label>\r\n                  <input #cpf type=\"text\" matInput mask=\"000.000.000-00\" formControlName=\"cpf\" class=\"form-control\"\r\n                    placeholder=\"\" id=\"birth-date\" />\r\n                </div>\r\n  \r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('nome')}}</label>\r\n                  <input type=\"text\" formControlName=\"nome\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('email')}}</label>\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-envelope\"></i> </span>\r\n                    </div>\r\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"\" aria-label=\"Email\"\r\n                      aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n                <div class=\" col-md-3\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('celular')}}</label>\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-mobile-alt\"></i> </span>\r\n                    </div>\r\n                    <input type=\"text\" formControlName=\"celular\" class=\"form-control\" placeholder=\"\" matInput\r\n                      mask=\"(00) 00000-0000\" aria-label=\"Celular\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n                <div class=\" col-md-3\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('dataNascimento')}}</label>\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-calendar-alt\"></i> </span>\r\n                    </div>\r\n                    <input class=\"form-control\" matInput mask=\"00/00/0000\" formControlName=\"dataNascimento\">\r\n                  </div>\r\n                </div>\r\n                <div class=\" col-md-3\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('sexo')}}</label>\r\n                  <select id=\"sexo\" formControlName=\"sexo\" class=\"form-control\" placeholder=\"\">\r\n                    <option *ngFor=\"let s of sexos\" [value]=\"s.codigo\">{{s.descricao}}\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-3\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('estadoCivil')}}</label>\r\n                  <select formControlName=\"estadoCivil\" class=\"form-control\" placeholder=\"\">\r\n                    <option *ngFor=\"let e of estadosCivil\" [value]=\"e.codigo\">{{e.descricao}}\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-6\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('pai')}}</label>\r\n                  <input type=\"text\" formControlName=\"pai\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-6\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('mae')}}</label>\r\n                  <input type=\"text\" formControlName=\"mae\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\" formGroupName=\"endereco\">\r\n          <div class=\"card bg-light mb-12\">\r\n            <div style=\"cursor: pointer;\" (click)=\"show('ocultarEndereco')\">\r\n              <div class=\"card-header alert-primary\"><i class=\"fa fa-home\"></i> Endereço</div>\r\n            </div>\r\n            <div [hidden]=\"ocultarEndereco\" class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('cep')}}</label>\r\n                  <input type=\"text\" formControlName=\"cep\" matInput mask=\"00.000-000\" class=\"form-control\"\r\n                    placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('uf')}}</label>\r\n                  <select formControlName=\"uf\" class=\"form-control\" placeholder=\"\">\r\n                    <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.sigla }}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('cidade')}}</label>\r\n                  <select formControlName=\"cidade\" class=\"form-control\" placeholder=\"\">\r\n                    <option *ngFor=\"let cidade of cidades\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('bairro')}}</label>\r\n                  <input type=\"text\" formControlName=\"bairro\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('logradouro')}}</label>\r\n                  <input type=\"text\" formControlName=\"logradouro\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n  \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\">\r\n          <div class=\"card\" formGroupName=\"pessoaFisica\">\r\n            <div style=\"cursor: pointer;\" (click)=\"show('ocultarDocumentosPessoais')\">\r\n              <div class=\"card-header alert-primary\"><i class=\"fa fa-briefcase \"></i> Documentos Pessoais</div>\r\n            </div>\r\n            <div [hidden]=\"ocultarDocumentosPessoais\" class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\" col-md-4\">\r\n                  <label>{{getLabelField('rg')}}</label>\r\n                  <input type=\"text\" formControlName=\"rg\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-4\">\r\n                  <label>{{getLabelField('orgaoExpedidor')}}</label>\r\n                  <input type=\"text\" formControlName=\"orgaoExpedidor\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-4\">\r\n                  <label>{{getLabelField('dataExpedicao')}}</label>\r\n                  <input type=\"text\" formControlName=\"dataExpedicao\" matInput mask=\"00/00/0000\" class=\"form-control\"\r\n                    placeholder=\"\" />\r\n                </div>\r\n                <!--div class=\" col-md-4\">\r\n                  <label>{{getLabelField('senha')}}</label>\r\n                  <input type=\"password\" formControlName=\"senha\" class=\"form-control\" placeholder=\"\" />\r\n                </div-->\r\n  \r\n                <div class=\"col-md-6\">\r\n                  <label>{{getLabelField('nacionalidade')}}</label>\r\n                  <select formControlName=\"nacionalidade\" class=\"form-control\" placeholder=\"\">\r\n                    <option *ngFor=\"let pais of paises;let i= index;\" [value]=\"pais.gentilico\" selected=\"i==30\">\r\n                      {{ pais.gentilico }}</option>\r\n                  </select>\r\n                  <div [hidden]=\"nacionalidadeTemp == '' \" class=\"alert alert-warning alert-dismissible fade show\"\r\n                    style=\"padding:0px; height:20px\" role=\"alert\">\r\n                    <p style=\"font-size:10px\">{{nacionalidadeTemp}} </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label>{{getLabelField('naturalidade')}}</label>\r\n                  <div class=\"input-group\">\r\n                    <select formControlName=\"naturalidadeUf\" class=\"\" placeholder=\"\"\r\n                      style=\"width:50px; border: 1px solid #ced4da;color: #495057;\">\r\n                      <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.sigla }}</option>\r\n                    </select>\r\n                    <select formControlName=\"naturalidade\" class=\"form-control\" placeholder=\"\">\r\n                      <option *ngFor=\"let cidade of cidadesNaturalidade\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\" formGroupName=\"carteira\">\r\n          <div class=\"card bg-light mb-12\">\r\n            <div style=\"cursor: pointer;\" (click)=\"show('ocultarIes')\">\r\n              <div class=\"card-header alert-primary\"><i class=\"fa fa-calendar-alt\"></i> Instituição de Ensino</div>\r\n            </div>\r\n            <div [hidden]=\"ocultarIes\" class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('ies')}}</label>\r\n                  <input type=\"text\" formControlName=\"ies\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('curso')}}</label>\r\n                  <input type=\"text\" formControlName=\"curso\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('periodo')}}</label>\r\n                  <input type=\"text\" formControlName=\"periodo\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('ano_conclusao')}}</label>\r\n                  <input type=\"text\" formControlName=\"ano_conclusao\" matInput mask=\"0000\" class=\"form-control\"\r\n                    placeholder=\"\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n\r\n\r\n\r\n        <div class=\"col-12 col-sm-12\">\r\n          <div class=\"mx-auto\"><br> <button type=\"submit\" (click)=\"salvar()\" class=\"btn btn-dark text-right\">Salvar</button>\r\n            <hr>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <!--button (click)=\"passBack()\" type=\"submit\" class=\"btn btn-primary w-100\">Pass back</button-->\r\n</div>"

/***/ }),

/***/ "./src/app/estudante/services/estudante.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/estudante/services/estudante.service.ts ***!
  \*********************************************************/
/*! exports provided: EstudanteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudanteService", function() { return EstudanteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EstudanteService = /** @class */ (function () {
    function EstudanteService(http) {
        this.http = http;
        this.API_GET_LISTA_ESTUDANTE = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "estudante/getLista";
        this.API_SALVAR_ESTUDANTE = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "estudante/salvar";
        this.API_GET_ESTUDANTE = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "estudante/get";
        this.API_GERAR_CARTEIRA_ESTUDANTE = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "estudante/carteira";
        this.API_LOAD_COMBOS = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "tabelas/loadCombos";
        this.API_SALVAR_ANDAMENTO = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "estudante/salvarAndamento";
        this.API_EXCLUIR_ANDAMENTO = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "estudante/excluirAndamento";
        this.API_GET_ANDAMENTOS = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "estudante/getAndamentos";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    EstudanteService.prototype.getListaByStatus = function (search) {
        return this.http.post(this.API_GET_LISTA_ESTUDANTE, { campos: [{ campo: 'status', valor: search, operador: '=', condicao: '' }] }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    EstudanteService.prototype.getBusca = function (search) {
        return this.http.post(this.API_GET_LISTA_ESTUDANTE, { campos: [{ campo: 'nome', valor: search, operador: 'LIKE', condicao: ' OR ' }, { campo: 'pessoa_fisica.cpf', valor: search, operador: 'LIKE', condicao: ' OR ' }, { campo: 'pessoa_fisica.cidade', valor: search, operador: 'LIKE', condicao: ' OR ' }] }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    EstudanteService.prototype.get = function (cpf) {
        return this.http.post(this.API_GET_ESTUDANTE, { campos: [{ campo: 'pessoa_fisica.cpf', valor: cpf, operador: '=', condicao: '' }] }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    EstudanteService.prototype.gerarCarteiraEstudante = function (cpf) {
        return this.http.get(this.API_GERAR_CARTEIRA_ESTUDANTE + "/" + cpf, { responseType: "blob" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    EstudanteService.prototype.loadCombos = function () {
        return this.http.post(this.API_LOAD_COMBOS, {}, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    EstudanteService.prototype.salvar = function (form) {
        var formObj = form.getRawValue(); // {name: '', description: ''}
        var serializedForm = JSON.stringify(formObj);
        return this.http.post(this.API_SALVAR_ESTUDANTE, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    EstudanteService.prototype.salvarAndamento = function (form) {
        var formObj = form.getRawValue(); // {name: '', description: ''}
        var serializedForm = JSON.stringify(formObj);
        return this.http.post(this.API_SALVAR_ANDAMENTO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    EstudanteService.prototype.excluirAndamento = function (form) {
        //    let formObj = form.getRawValue(); // {name: '', description: ''}
        var serializedForm = JSON.stringify(form);
        return this.http.post(this.API_EXCLUIR_ANDAMENTO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    EstudanteService.prototype.getAndamentos = function (id) {
        return this.http.post(this.API_GET_ANDAMENTOS, { campos: [{ campo: 'id_estudante', valor: id, operador: '=', condicao: '' }] }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    EstudanteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EstudanteService);
    return EstudanteService;
}());



/***/ })

}]);
//# sourceMappingURL=app-estudante-estudante-module.js.map