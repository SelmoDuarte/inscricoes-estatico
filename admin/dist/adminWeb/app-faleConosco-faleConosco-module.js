(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-faleConosco-faleConosco-module"],{

/***/ "./src/app/faleConosco/faleConosco.component.ts":
/*!******************************************************!*\
  !*** ./src/app/faleConosco/faleConosco.component.ts ***!
  \******************************************************/
/*! exports provided: FaleConoscoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaleConoscoComponent", function() { return FaleConoscoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/service */ "./src/app/faleConosco/services/service.ts");
/* harmony import */ var _modal_modal_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/modal.components */ "./src/app/faleConosco/modal/modal.components.ts");
/* harmony import */ var _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-andamento/modal-andamento.components */ "./src/app/faleConosco/modal-andamento/modal-andamento.components.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FaleConoscoComponent = /** @class */ (function () {
    function FaleConoscoComponent(router, service, modalService) {
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
        this.listaStatus = [{ codigo: '0', descricao: 'Pendente' }, { codigo: '1', descricao: 'Aguardando parecer' }, { codigo: '2', descricao: 'Concluído' }, { codigo: '3', descricao: 'Cancelado' }];
        this.listaAssuntos = [{ codigo: '', descricao: 'Todos' }, { codigo: 'Fiscalização', descricao: 'Fiscalização' }, { codigo: 'Registro', descricao: 'Registro' }, { codigo: 'Financeiro', descricao: 'Financeiro' }, { codigo: 'Assessoria de Imprensa', descricao: 'Assessoria de Imprensa' }, { codigo: 'Convênios', descricao: 'Convênios' }, { codigo: 'Informática', descricao: 'Informática' }];
    }
    FaleConoscoComponent.prototype.ngOnInit = function () {
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
    FaleConoscoComponent.prototype.novo = function () {
        this.router.navigate(['/estudante', 'novo']);
    };
    FaleConoscoComponent.prototype.openModal = function (formPai) {
        var _this = this;
        this.subscription = this.service.get(formPai.id)
            .subscribe(function (response) {
            var currentObject = response.dados[0];
            var modalRef = _this.modalService.open(_modal_modal_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], { size: 'lg' });
            modalRef.componentInstance.formPai = response.dados;
        });
    };
    FaleConoscoComponent.prototype.openModalAndamento = function (formPai) {
        var modalRef = this.modalService.open(_modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_6__["ModalAndamento"], { size: 'lg' });
        modalRef.componentInstance.formPai = formPai;
    };
    FaleConoscoComponent.prototype.pesquisar = function () {
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
    FaleConoscoComponent.prototype.filtro = function () {
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
    FaleConoscoComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    FaleConoscoComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    FaleConoscoComponent.prototype.exportToExcel = function (event) {
        this.service.exportAsExcelFile(this.lista, 'faleConosco');
    };
    FaleConoscoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faleConosco',
            template: __webpack_require__(/*! ./lista.component.html */ "./src/app/faleConosco/lista.component.html"),
            styles: [__webpack_require__(/*! ./lista.component.css */ "./src/app/faleConosco/lista.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_service__WEBPACK_IMPORTED_MODULE_4__["Service"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], FaleConoscoComponent);
    return FaleConoscoComponent;
}());



/***/ }),

/***/ "./src/app/faleConosco/faleConosco.module.ts":
/*!***************************************************!*\
  !*** ./src/app/faleConosco/faleConosco.module.ts ***!
  \***************************************************/
/*! exports provided: FaleConoscoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaleConoscoModule", function() { return FaleConoscoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/ngx-mask */ "./src/app/shared/ngx-mask/index.ts");
/* harmony import */ var _faleConosco_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faleConosco.routing.module */ "./src/app/faleConosco/faleConosco.routing.module.ts");
/* harmony import */ var _modal_modal_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/modal.components */ "./src/app/faleConosco/modal/modal.components.ts");
/* harmony import */ var _faleConosco_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faleConosco.component */ "./src/app/faleConosco/faleConosco.component.ts");
/* harmony import */ var _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-andamento/modal-andamento.components */ "./src/app/faleConosco/modal-andamento/modal-andamento.components.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ "../node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FaleConoscoModule = /** @class */ (function () {
    function FaleConoscoModule() {
    }
    FaleConoscoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _faleConosco_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _shared_ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forRoot(),
            ],
            declarations: [_faleConosco_component__WEBPACK_IMPORTED_MODULE_8__["FaleConoscoComponent"], _modal_modal_components__WEBPACK_IMPORTED_MODULE_7__["Modal"], _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_9__["ModalAndamento"]],
            entryComponents: [_modal_modal_components__WEBPACK_IMPORTED_MODULE_7__["Modal"], _modal_andamento_modal_andamento_components__WEBPACK_IMPORTED_MODULE_9__["ModalAndamento"]]
        })
    ], FaleConoscoModule);
    return FaleConoscoModule;
}());



/***/ }),

/***/ "./src/app/faleConosco/faleConosco.routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/faleConosco/faleConosco.routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _modal_modal_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal.components */ "./src/app/faleConosco/modal/modal.components.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _faleConosco_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faleConosco.component */ "./src/app/faleConosco/faleConosco.component.ts");
/* harmony import */ var _guards_faleConosco_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/faleConosco.guard */ "./src/app/guards/faleConosco.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var moduloRoutes = [
    { path: '', component: _faleConosco_component__WEBPACK_IMPORTED_MODULE_3__["FaleConoscoComponent"],
        canActivateChild: [_guards_faleConosco_guard__WEBPACK_IMPORTED_MODULE_4__["FaleConoscoGuard"]],
        children: [
            { path: 'novo', component: _modal_modal_components__WEBPACK_IMPORTED_MODULE_0__["Modal"] }
        ] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(moduloRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/faleConosco/lista.component.css":
/*!*************************************************!*\
  !*** ./src/app/faleConosco/lista.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg-highlight {\r\n    background-color: yellow;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFsZUNvbm9zY28vbGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2ZhbGVDb25vc2NvL2xpc3RhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnLWhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/faleConosco/lista.component.html":
/*!**************************************************!*\
  !*** ./src/app/faleConosco/lista.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <nav class=\"navbar navbar-expand-lg alert-primary\">\r\n       <div class=\"container-fluid\">\r\n          <!--div class=\"col-lg-6 col-md-12\">\r\n              <div class=\"d-none d-lg-block\">\r\n               <h4><i class='fas fa-user-graduate' style='font-size:48px;color:#0080FF'></i>&nbsp;-&nbsp;Fale Conosco</h4>\r\n              </div>\r\n           </div-->  \r\n         <div class=\"col-lg-4 col-md-12\">\r\n            <div class=\"row\">\r\n               <div class=\"col-md-6\">\r\n                  <label style=\"text-align: left\">Data Inicio</label>\r\n                  <input class=\"form-control\" id=\"filtroDtInicio\" type=\"text\" matInput mask=\"00/00/0000\" name=\"data_inicio\" [(ngModel)]=\"data_inicio\"  />  \r\n                </div>  \r\n                <div class=\"col-md-6\">\r\n                  <label style=\"text-align: left\">Data Fim</label>\r\n                  <input class=\"form-control\" id=\"filtroDtFim\" type=\"text\"  matInput mask=\"00/00/0000\" name=\"data_fim\" [(ngModel)]=\"data_fim\" />\r\n               </div>  \r\n            </div>  \r\n         </div>  \r\n\r\n         <div class=\"col-lg-3 col-md-12 float-right\">\r\n            <label style=\"text-align: left\">Assunto</label>\r\n            <select id=\"comboFiltroAssunto\" class=\"form-control\" (change)=\"filtro()\">\r\n             <option *ngFor=\"let t of listaAssuntos\" [value]=\"t.codigo\">{{ t.descricao }}</option>\r\n             </select>\r\n         </div>  \r\n\r\n           <div class=\"col-lg-3 col-md-12 float-right\">\r\n              <label style=\"text-align: left\">Status</label>\r\n              <select id=\"comboFiltroStatus\" class=\"form-control\" (change)=\"filtro()\">\r\n               <option *ngFor=\"let t of listaStatus\" [value]=\"t.codigo\">{{ t.descricao }}</option>\r\n               </select>\r\n           </div>  \r\n           <div class=\"col-lg-2 col-md-12 float-right\">\r\n              <label>&nbsp;&nbsp;&nbsp;</label>\r\n              <!--div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"queryBusca\" />\r\n                 </div>\r\n                 <button type=\"button\" class=\"btn btn-dark\" (click)=\"pesquisar()\">OK</button>&nbsp;&nbsp;&nbsp;\r\n                 <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"filtroStatus()\" title=\"Atualizar\"><i class=\"fas fa-sync-alt fa-lg\"></i></button>\r\n              </div--><br>\r\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"filtro()\" title=\"Atualizar\"><i class=\"fas fa-sync-alt fa-lg\"></i></button>&nbsp;&nbsp;\r\n              <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"exportToExcel()\" title=\"Exportar Excel\"><i class=\"fas fa-file-excel fa-lg\"></i></button>              \r\n           </div>\r\n\r\n\r\n       </div>\r\n    </nav>\r\n    <div class=\"row\">\r\n       <div class=\"col-12\">\r\n          <p style=\"align-content: center\">\r\n             <img *ngIf=\"carregando\" class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n          </p>\r\n       </div>\r\n    </div>\r\n    <form>\r\n       <div class=\"col-12\">\r\n          <p *ngFor=\"let alert of alerts\">\r\n             <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n          <div [innerHTML]=\"alert.message\"></div>\r\n          </ngb-alert>\r\n          </p>\r\n       </div>\r\n       <div class=\"col-12\">\r\n          <table class=\"table table-sm table-striped table-fixed\">\r\n             <thead>\r\n                <tr>\r\n                   <th scope=\"col\">Data</th>\r\n                   <th scope=\"col\" sortable=\"area\" (sort)=\"onSort($event)\">Assunto</th>\r\n                   <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Nome</th>\r\n                   <th scope=\"col\" sortable=\"population\" (sort)=\"onSort($event)\">Descricao</th>\r\n                   <th scope=\"col\" colspan=\"2\" sortable=\"population\" (sort)=\"onSort($event)\"></th>\r\n                </tr>\r\n             </thead>\r\n             <tbody>\r\n                <tr *ngFor=\"let reg of lista\">\r\n                  <td class=\"align-middle\" style=\" background: transparent;\">\r\n                     <ngb-highlight [result]=\"reg.data_formatada\" [term]=\"queryBusca\"></ngb-highlight>\r\n                  </td>\r\n                   <td class=\"align-middle\">\r\n                      <ngb-highlight  [result]=\"reg.assunto\" [term]=\"queryBusca\">\r\n                      </ngb-highlight>\r\n                   </td>\r\n                   <td class=\"align-middle\">\r\n                      <ngb-highlight [result]=\"reg.nome\" [term]=\"queryBusca\"></ngb-highlight><br>\r\n                      <ngb-highlight [result]=\"reg.telefone\" [term]=\"queryBusca\"></ngb-highlight><br>\r\n                      <ngb-highlight [result]=\"reg.email\" [term]=\"queryBusca\" class=\"d-none d-lg-block\"></ngb-highlight>\r\n                      <br>\r\n                   </td>\r\n                   <td class=\"align-middle\">\r\n                      <ngb-highlight [result]=\"reg.mensagem\" [term]=\"queryBusca\"></ngb-highlight>\r\n                   </td>\r\n                   <td class=\"align-middle text-right\">\r\n                      <p class=\"text-right\">\r\n                         <!--button type=\"button\" class=\"btn btn-link\" (click)=\"openModal(reg)\" title=\"Detalhe do Contato\"><i\r\n                            class=\"fas fa-id-card-alt fa-lg\"></i></button><br-->\r\n                         <button type=\"button\" class=\"btn btn-link\" (click)=\"openModalAndamento(reg)\" title=\"Andamento\"><i\r\n                            class=\"fas fa-ad fa-lg\"></i></button><br>\r\n                      </p>\r\n                   </td>\r\n                </tr>\r\n             </tbody>\r\n          </table>\r\n          <div class=\"d-flex justify-content-between p-2\">\r\n             <ngb-pagination [collectionSize]=\"total\" [(page)]=\"page\" [pageSize]=\"pageSize\">\r\n             </ngb-pagination>\r\n             <select class=\"custom-select\" style=\"width: auto\" name=\"pageSize\" [(ngModel)]=\"pageSize\">\r\n             <option [ngValue]=\"2\">2 items per page</option>\r\n             <option [ngValue]=\"4\">4 items per page</option>\r\n             <option [ngValue]=\"6\">6 items per page</option>\r\n             </select>\r\n          </div>\r\n       </div>\r\n    </form>\r\n </div>\r\n\r\n <style>\r\n    @media screen and (max-width: 700px) {\r\n    .table {\r\n    font-size: 11px;\r\n    }\r\n    }\r\n </style>\r\n <router-outlet></router-outlet>\r\n "

/***/ }),

/***/ "./src/app/faleConosco/modal-andamento/modal-andamento.components.ts":
/*!***************************************************************************!*\
  !*** ./src/app/faleConosco/modal-andamento/modal-andamento.components.ts ***!
  \***************************************************************************/
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
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/service */ "./src/app/faleConosco/services/service.ts");
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










var URL_UPLOAD = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].API + "faleConosco/uploadFile.php";
;
var ModalAndamento = /** @class */ (function () {
    function ModalAndamento(activeModal, fb, service, cepService, dropdownService, http) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.service = service;
        this.cepService = cepService;
        this.dropdownService = dropdownService;
        this.http = http;
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
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({ url: URL_UPLOAD });
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
            nomeAnexos: [null],
            nome: [null],
            email: [null],
            celular: [null],
            usuario: [""],
        });
        this.uploadForm = this.fb.group({
            document: [null, null],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        console.log(jsonUsuario.nome);
        this.form.get('id_pai').setValue(this.formPai.id);
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
        this.uploadForm = this.fb.group({
            document: [null, null],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
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
                _this.uploadFiles(_this.form.get('id_pai').value + "-" + response.id);
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
    ModalAndamento.prototype.uploadFiles = function (id) {
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
    ModalAndamento.prototype.uploadFile = function (data) {
        return this.http.post(URL_UPLOAD, data);
    };
    ModalAndamento.prototype.listarAnexos = function (id, a) {
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
    ], ModalAndamento.prototype, "formPai", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
    ], ModalAndamento.prototype, "passEntry", void 0);
    ModalAndamento = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-modal-andamento',
            template: __webpack_require__(/*! ./modal-andamento.html */ "./src/app/faleConosco/modal-andamento/modal-andamento.html"),
            styles: [__webpack_require__(/*! ./modal-andamento.css */ "./src/app/faleConosco/modal-andamento/modal-andamento.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_service__WEBPACK_IMPORTED_MODULE_6__["Service"],
            _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__["ConsultaCepService"],
            _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__["DropdownService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], ModalAndamento);
    return ModalAndamento;
}());



/***/ }),

/***/ "./src/app/faleConosco/modal-andamento/modal-andamento.css":
/*!*****************************************************************!*\
  !*** ./src/app/faleConosco/modal-andamento/modal-andamento.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    input {\r\n      margin-bottom: 10px;\r\n    }\r\n  }\r\n\r\n  \r\n  #nomeUsuario {\r\n   font-size: 90%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFsZUNvbm9zY28vbW9kYWwtYW5kYW1lbnRvL21vZGFsLWFuZGFtZW50by5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QjtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGOzs7RUFHQTtHQUNDLGNBQWM7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2ZhbGVDb25vc2NvL21vZGFsLWFuZGFtZW50by9tb2RhbC1hbmRhbWVudG8uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgI25vbWVVc3VhcmlvIHtcclxuICAgZm9udC1zaXplOiA5MCU7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/faleConosco/modal-andamento/modal-andamento.html":
/*!******************************************************************!*\
  !*** ./src/app/faleConosco/modal-andamento/modal-andamento.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div class=\"bd-callout bd-callout-info\">\r\n    <h4 id=\"data-attributes-for-individual-tooltips\">Andamentos</h4>\r\n  </div>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form class=\"mt-5\" (ngSubmit)=\"submit()\" [formGroup]=\"form\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n          <div class=\"col-12\">\r\n              <p *ngFor=\"let alert of alerts\">\r\n                <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n                  <div [innerHTML]=\"alert.message\"></div>\r\n                </ngb-alert>\r\n              </p>\r\n    \r\n              <p *ngIf=\"carregando\" style=\"align-content: center\">\r\n                <img class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n              </p>\r\n            </div>\r\n    \r\n\r\n          <div class=\"col-12\" [hidden]=\" ! ocultarFormulario\">\r\n          <table class=\"table table-sm table-striped table-fixed\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Data</th>\r\n                  <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Tipo</th>\r\n                  <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\" >Descrição</th>\r\n                </tr>\r\n              </thead>\r\n        \r\n\r\n              <tbody>\r\n                  <tr *ngFor=\"let andam of listaAndamentos\">\r\n                      <td>{{andam.data_formatada}}</td>\r\n                      <td>{{listaStatus[andam.status].descricao}}<br><i id=\"nomeUsuario\" class=\"text-secondary\">Resp: {{andam.usuario}}</i></td>\r\n                      <td>{{andam.descricao}}<br>\r\n                        <div [hidden]=\"  andam.anexos == '' \">\r\n                          <b><i>Anexos:</i></b><br>\r\n                          <span [innerHtml]=\"listarAnexos(andam.id_fale_conosco + '-' + andam.id, andam.anexos)\"></span>\r\n                        </div>\r\n                      </td>                        \r\n                      <td class=\"align-middle text-right\">\r\n                          <p class=\"text-right\">\r\n                             <button type=\"button\" class=\"btn btn-link\" (click)=\"excluir(andam)\" title=\"Excluir Andamento\"><i class=\"fas fa-trash-alt fa-lg\"></i></button><br>\r\n                          </p>\r\n                       </td>                      \r\n                   </tr>\r\n                   </tbody>\r\n          </table> \r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\"  [hidden]=\"ocultarFormulario\">\r\n          <div class=\"card bg-light mb-12\">\r\n            <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n              <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Andamento </div>\r\n            </div>\r\n            <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('data')}}</label>\r\n                  <input #cpf type=\"text\" matInput mask=\"00/00/0000\" formControlName=\"data\" class=\"form-control\"\r\n                    placeholder=\"\" />\r\n                </div>\r\n\r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('status')}}</label>\r\n                  <select formControlName=\"status\" class=\"form-control\">\r\n                    <option *ngFor=\"let t of listaStatus\" [value]=\"t.codigo\">{{ t.descricao }}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-3\">\r\n                  <label>Enviar Email ?</label>\r\n                  <select formControlName=\"sms\" class=\"form-control\">\r\n                    <option *ngFor=\"let t of listaSMS\" [value]=\"t.codigo\">{{ t.descricao }}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-12\">\r\n                  <label>{{getLabelField('descricao')}}</label>\r\n                  <textarea name=\"descricao\" formControlName=\"descricao\" class=\"form-control\" placeholder=\"\"></textarea>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"card bg-light mb-12\" [formGroup]=\"uploadForm\">\r\n                <div style=\"cursor: pointer;\" (click)=\"show('ocultarIes')\">\r\n                  <div class=\"card-header alert-primary\"><i class=\"fa fa-cloud-upload-alt\"></i> Anexo (PDF ou Arquivo Compactado no formato ZIP):</div>\r\n                </div>\r\n                <div [hidden]=\"ocultarIes\" class=\"card-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\" col-md-12\">\r\n                      <label>Selecione:</label><br>\r\n                      <input id=\"uploadArquivos\" formControlName=\"document\" type=\"file\"  accept=\"application/pdf,application/zip\" ng2FileSelect [uploader]=\"uploader\" />\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            </div>                    \r\n          </div>\r\n        </div>\r\n       \r\n\r\n        <div class=\"col-12 col-sm-12\">\r\n          <div class=\"mx-auto\"><br> \r\n              <button [hidden]=\" ocultarFormulario\" [disabled]=\"desabilitarBotaoSalvar\" type=\"button\" (click)=\"salvar()\" class=\"btn btn-outline-success\">Salvar</button> &nbsp;&nbsp;\r\n              <button [hidden]=\"! ocultarFormulario\" type=\"button\" (click)=\"novo()\"   class=\"btn btn-outline-success\">Novo Andamento</button> &nbsp;&nbsp;\r\n              <button [hidden]=\" ocultarFormulario\" type=\"button\" (click)=\"cancelar()\"   class=\"btn btn-outline-danger\">Cancelar</button> &nbsp;&nbsp;\r\n              <button  type=\"button\" (click)=\"activeModal.close('Close click')\"   class=\"btn btn-outline-dark\">Sair</button>              \r\n            <hr>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <!--button (click)=\"passBack()\" type=\"submit\" class=\"btn btn-primary w-100\">Pass back</button-->\r\n</div>"

/***/ }),

/***/ "./src/app/faleConosco/modal/modal.components.ts":
/*!*******************************************************!*\
  !*** ./src/app/faleConosco/modal/modal.components.ts ***!
  \*******************************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/dropdown.service */ "./src/app/shared/services/dropdown.service.ts");
/* harmony import */ var _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/consulta-cep.service */ "./src/app/shared/services/consulta-cep.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/form-validation */ "./src/app/shared/form-validation.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/service */ "./src/app/faleConosco/services/service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Modal = /** @class */ (function () {
    function Modal(activeModal, fb, service, cepService, dropdownService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.service = service;
        this.cepService = cepService;
        this.dropdownService = dropdownService;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.submitted = false;
        this.alerts = [];
        this.cidadeTemp = "";
        this.carregando = true;
        this.ocultarDadosPessoais = false;
        this.ocultarEndereco = false;
        this.ocultarDocumentosPessoais = false;
        this.listaTipos = [{ codigo: '1', descricao: 'Informação' }, { codigo: '2', descricao: 'Solicitação' }, { codigo: '3', descricao: 'Reclamação' }, { codigo: '4', descricao: 'Agendamento' }];
        this.modoLeitura = true;
    }
    Modal.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            tipo: [null],
            mensagem: [null],
            cpf: [null],
            celular: [null],
            cep: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_form_validation__WEBPACK_IMPORTED_MODULE_5__["cepValidator"]]],
            complemento: [null],
            logradouro: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bairro: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cidade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            uf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.dropdownService.getPaises().subscribe(function (dados) {
            _this.paises = dados;
            _this.dropdownService.getEstadosBr().subscribe(function (dados) {
                _this.estados = dados;
                //CARREGA OS DADOS DO MODAL
                for (var key in _this.formPai) {
                    if (_this.formPai.hasOwnProperty(key)) {
                        if (_this.form.get(key) == null) {
                            console.info('Campo ' + key + ' não definido no formulário');
                        }
                        else {
                            console.info('Campo ' + key + ' definido');
                            _this.form.get(key).setValue(_this.formPai[key]);
                            if (key.indexOf("data") > -1) {
                                console.info('Campo ' + key + _this.formPai[key]);
                                var dataSemFormatacao = _this.formPai[key];
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
        this.form.get('uf').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (uf) { return console.log('Novo estado: ', uf); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (uf) { return _this.estados.filter(function (e) { return e.sigla === uf; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (estados) { return estados && estados.length > 0 ? estados[0].id : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (estadoId) { return _this.dropdownService.getCidades(estadoId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(console.log)).subscribe(function (cidades) { return _this.cidades = cidades; });
        this.form.get('cep').statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (value) { return console.log('status CEP:', value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (status) { return status === 'VALID' ?
            _this.cepService.consultaCEP(_this.form.get('cep').value)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])(); }))
            .subscribe(function (dados) { return dados ? _this.populaDadosForm(dados) : {}; });
    };
    Modal.prototype.sair = function () {
        this.activeModal.close('FECHAR');
    };
    Modal.prototype.populaDadosForm = function (dados) {
        // this.formulario.setValue({});
        this.form.patchValue({
            uf: dados.uf,
            cidade: dados.localidade,
            logradouro: dados.logradouro,
            complemento: dados.complemento,
            bairro: dados.bairro,
        });
    };
    Modal.prototype.resetaDadosEnderecoForm = function () {
        this.form.patchValue({
            rua: null,
            complemento: null,
            bairro: null,
            cidade: null,
            uf: null
        });
    };
    Modal.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    Modal.prototype.getLabelField = function (fieldName) {
        return Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_5__["getLabelAllFields"])(fieldName);
    };
    Modal.prototype.validarData = function (control) {
        var v = control.value;
        if (null != v && v.length == 8) {
            var data = v.substr(0, 2) + "/" + v.substr(2, 2) + "/" + v.substr(4, 4);
            var patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
            if (!patternData.test(data)) {
                return { dataInvalida: true };
            }
        }
    };
    Modal.prototype.salvar = function () {
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
    Modal.prototype.show = function (secao) {
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
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], Modal.prototype, "formPai", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
    ], Modal.prototype, "passEntry", void 0);
    Modal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.html */ "./src/app/faleConosco/modal/modal.html"),
            styles: [__webpack_require__(/*! ./modal.css */ "./src/app/faleConosco/modal/modal.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_service__WEBPACK_IMPORTED_MODULE_8__["Service"],
            _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__["ConsultaCepService"],
            _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__["DropdownService"]])
    ], Modal);
    return Modal;
}());



/***/ }),

/***/ "./src/app/faleConosco/modal/modal.css":
/*!*********************************************!*\
  !*** ./src/app/faleConosco/modal/modal.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    input {\r\n      margin-bottom: 10px;\r\n    }\r\n  }\r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFsZUNvbm9zY28vbW9kYWwvbW9kYWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7TUFDRSxtQkFBbUI7SUFDckI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZhbGVDb25vc2NvL21vZGFsL21vZGFsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGlucHV0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/faleConosco/modal/modal.html":
/*!**********************************************!*\
  !*** ./src/app/faleConosco/modal/modal.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div class=\"bd-callout bd-callout-info\">\r\n    <h4 id=\"data-attributes-for-individual-tooltips\">Solicitação</h4>\r\n  </div>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form class=\"mt-5\" (ngSubmit)=\"submit()\" [formGroup]=\"form\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <p *ngFor=\"let alert of alerts\">\r\n            <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n              <div [innerHTML]=\"alert.message\"></div>\r\n            </ngb-alert>\r\n          </p>\r\n\r\n          <p *ngIf=\"carregando\"  style=\"align-content: center\">\r\n              <img  class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n           </p>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\">\r\n            <div class=\"card bg-light mb-12\">\r\n                <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n                  <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Dados Pessoais </div>   \r\n              </div>\r\n              <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\" col-md-4\" >\r\n                    <label>{{getLabelField('cpf')}}</label>\r\n                    <input [readonly]=\"modoLeitura\" #cpf type=\"text\" matInput mask=\"000.000.000-00\" formControlName=\"cpf\"  class=\"form-control\"\r\n                      placeholder=\"\" id=\"birth-date\" />\r\n                  </div>\r\n                  <div class=\" col-md-4\" >\r\n                    <label>{{getLabelField('celular')}}</label>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-mobile-alt\"></i> </span>\r\n                      </div>\r\n                      <input [readonly]=\"modoLeitura\" type=\"text\" formControlName=\"celular\" class=\"form-control\" placeholder=\"\" matInput\r\n                        mask=\"(00) 00000-0000\" aria-label=\"Celular\" aria-describedby=\"basic-addon1\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\" col-md-4\">\r\n                    <label>{{getLabelField('email')}}</label>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-envelope\"></i> </span>\r\n                      </div>\r\n                      <input [readonly]=\"modoLeitura\" type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"\" aria-label=\"Email\"\r\n                        aria-describedby=\"basic-addon1\">\r\n                    </div>\r\n                  </div>\r\n  \r\n                  <div class=\" col-md-12\">\r\n                    <label>{{getLabelField('nome')}}</label>\r\n                    <input [readonly]=\"modoLeitura\" type=\"text\" formControlName=\"nome\" class=\"form-control\" placeholder=\"\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\" >\r\n            <div class=\"card bg-light mb-12\">\r\n                <div style=\"cursor: pointer;\" (click)=\"show('ocultarEndereco')\">            \r\n                  <div class=\"card-header alert-primary\"><i class=\"fa fa-home\"></i> Endereço</div>\r\n                </div>\r\n              <div [hidden]=\"ocultarEndereco\" class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\" col-md-3\">\r\n                    <label>{{getLabelField('cep')}}</label>\r\n                    <input [readonly]=\"modoLeitura\" type=\"text\" formControlName=\"cep\" matInput mask=\"00.000-000\" class=\"form-control\"\r\n                      placeholder=\"\" />\r\n                  </div>\r\n                  <div class=\" col-md-3\">\r\n                    <label>{{getLabelField('uf')}}</label>\r\n                    <select [attr.disabled]=\"modoLeitura\" formControlName=\"uf\" class=\"form-control\" placeholder=\"\">\r\n                      <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.sigla }}</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\" col-md-6\">\r\n                    <label>{{getLabelField('cidade')}}</label>\r\n                    <select [attr.disabled]=\"modoLeitura\" formControlName=\"cidade\" class=\"form-control\" placeholder=\"\">\r\n                      <option *ngFor=\"let cidade of cidades\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\" col-md-6\">\r\n                    <label>{{getLabelField('bairro')}}</label>\r\n                    <input [readonly]=\"modoLeitura\" type=\"text\" formControlName=\"bairro\" class=\"form-control\" placeholder=\"\" />\r\n                  </div>\r\n                  <div class=\" col-md-6\">\r\n                    <label>{{getLabelField('logradouro')}}</label>\r\n                    <input [readonly]=\"modoLeitura\" type=\"text\" formControlName=\"logradouro\" class=\"form-control\" placeholder=\"\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\" >\r\n              <div class=\"card bg-light mb-12\">\r\n                  <div style=\"cursor: pointer;\" (click)=\"show('ocultarOuvidoria')\">\r\n                    <div class=\"card-header alert-primary\"><i class=\"fa fa-calendar-alt\"></i> Por favor descreva o motivo do seu contato:</div>\r\n                  </div>\r\n                <div [hidden]=\"ocultarOuvidoria\" class=\"card-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\" col-md-12\">\r\n                      <label>{{getLabelField('tipo')}}</label>\r\n                      <select [attr.disabled]=\"modoLeitura\" formControlName=\"tipo\" class=\"form-control\" placeholder=\"\">\r\n                        <option *ngFor=\"let t of listaTipos\" [value]=\"t.descricao\">{{ t.descricao }}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\" col-md-12\">\r\n                      <label>{{getLabelField('mensagem')}}</label>\r\n                      <textarea [readonly]=\"modoLeitura\" formControlName=\"mensagem\" class=\"form-control\" placeholder=\"\" ></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n        <div class=\"col-12 col-sm-12\">\r\n              <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"sair()\">SAIR</button>            \r\n            <hr>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <!--button (click)=\"passBack()\" type=\"submit\" class=\"btn btn-primary w-100\">Pass back</button-->\r\n</div>"

/***/ }),

/***/ "./src/app/faleConosco/services/service.ts":
/*!*************************************************!*\
  !*** ./src/app/faleConosco/services/service.ts ***!
  \*************************************************/
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
        this.API_GET_LISTA = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "faleConosco/getLista.php";
        this.API_SALVAR = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "faleConosco/salvar.php";
        this.API_SALVAR_ANDAMENTO = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "faleConosco/salvarAndamento.php";
        this.API_GET_LISTA_ANDAMENTOS = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "faleConosco/getListaAndamentos.php";
        this.API_EXCLUIR_ANDAMENTO = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "faleConosco/excluirAndamento.php";
        this.API_GET = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "faleConosco/get.php";
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
            return this.http.post(this.API_GET_LISTA, { campos: [{ campo: 'fale_conosco.data', valor: data_inicio, operador: '>', condicao: '' }, { campo: 'fale_conosco.data', valor: data_fim, operador: '<', condicao: '' }, { campo: 'fale_conosco.status', valor: status, operador: '=', condicao: '' }], usuario: jsonUsuario.login }, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
        }
        else {
            return this.http.post(this.API_GET_LISTA, { campos: [{ campo: 'fale_conosco.data', valor: data_inicio, operador: '>', condicao: '' }, { campo: 'fale_conosco.data', valor: data_fim, operador: '<', condicao: '' }, { campo: 'fale_conosco.assunto', valor: assunto, operador: '=', condicao: '' }, { campo: 'fale_conosco.status', valor: status, operador: '=', condicao: '' }], usuario: jsonUsuario.login }, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
        }
    };
    Service.prototype.getBusca = function (search) {
        return this.http.post(this.API_GET_LISTA, { campos: [{ campo: 'nome', valor: search, operador: 'LIKE', condicao: ' OR ' }, { campo: 'assunto', valor: search, operador: 'LIKE', condicao: ' OR ' }, { campo: 'mensagem', valor: search, operador: 'LIKE', condicao: ' OR ' }] }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    Service.prototype.get = function (id) {
        return this.http.post(this.API_GET, { campos: [{ campo: 'fale_conosco.id', valor: id, operador: '=', condicao: '' }] }, this.httpOptions)
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



/***/ })

}]);
//# sourceMappingURL=app-faleConosco-faleConosco-module.js.map