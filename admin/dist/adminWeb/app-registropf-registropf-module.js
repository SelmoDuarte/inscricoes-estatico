(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-registropf-registropf-module"],{

/***/ "./src/app/registropf/modal-registropf/modal-registradopf.css":
/*!********************************************************************!*\
  !*** ./src/app/registropf/modal-registropf/modal-registradopf.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    input{\r\n      margin-bottom: 10px;\r\n    }\r\n } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm9wZi9tb2RhbC1yZWdpc3Ryb3BmL21vZGFsLXJlZ2lzdHJhZG9wZi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QjtNQUNFLG1CQUFtQjtJQUNyQjtDQUNIIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cm9wZi9tb2RhbC1yZWdpc3Ryb3BmL21vZGFsLXJlZ2lzdHJhZG9wZi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBpbnB1dHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuIH0gIl19 */"

/***/ }),

/***/ "./src/app/registropf/modal-registropf/modal-registradopf.html":
/*!*********************************************************************!*\
  !*** ./src/app/registropf/modal-registropf/modal-registradopf.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div class=\"bd-callout bd-callout-info\">\r\n    <h4 id=\"data-attributes-for-individual-tooltips\">Registrado Pessoa Física</h4>\r\n  </div>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form class=\"mt-5\" [formGroup]=\"form\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <p *ngFor=\"let alert of alerts\">\r\n            <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n              <div [innerHTML]=\"alert.message\"></div>\r\n            </ngb-alert>\r\n          </p>\r\n\r\n          <p *ngIf=\"carregando\"  style=\"align-content: center\">\r\n              <img  class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n           </p>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\" formGroupName=\"registro\">\r\n            <div class=\"card bg-light mb-12\">\r\n                <div style=\"cursor: pointer;\" (click)=\"show('ocultarRegistro')\">            \r\n                  <div class=\"card-header alert-primary\"><i class=\"fa fa-calendar-alt\"></i> Dados do Registro</div>\r\n                </div>\r\n              <div [hidden]=\"ocultarRegistro\" class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\" col-md-3\">\r\n                    <label>{{getLabelField('inscricao')}}</label>\r\n                    <input type=\"text\" formControlName=\"inscricao\" disabled matInput mask=\"00000\" class=\"form-control\"  placeholder=\"\" />\r\n                  </div>\r\n                  <div class=\" col-md-3\">\r\n                    <label>{{getLabelField('tipo')}}</label>\r\n                    <select formControlName=\"tipo\" class=\"form-control\" disabled placeholder=\"\">\r\n                      <option *ngFor=\"let t of tiposRegistro\" [value]=\"t.codigo\">{{ t.denominacao }}</option>\r\n                    </select>\r\n                  </div>\r\n\r\n                  <div class=\" col-md-6\">\r\n                    <label>{{getLabelField('situacao')}}</label>\r\n                    <select formControlName=\"situacao\" class=\"form-control\" disabled placeholder=\"\">\r\n                      <option *ngFor=\"let situacao of situacoesRegistro\" [value]=\"situacao.codigo\">{{ situacao.denominacao }}</option>\r\n                    </select>\r\n\r\n                  </div>\r\n                  <div class=\" col-md-4\">\r\n                    <label>{{getLabelField('dataInscricao')}}</label>\r\n                    <input type=\"text\" formControlName=\"dataInscricao\" disabled matInput mask=\"00/00/0000\" class=\"form-control\" placeholder=\"\" />\r\n                  </div>\r\n                  <div class=\" col-md-4\">\r\n                    <label>{{getLabelField('vencimento')}}</label>\r\n                    <input type=\"text\" formControlName=\"vencimento\"  disabled matInput mask=\"00/00/0000\" class=\"form-control\" placeholder=\"\" />\r\n                  </div>\r\n                  <div class=\" col-md-4\">\r\n                      <label>{{getLabelField('habilitacao')}}</label>\r\n                      <input type=\"text\" formControlName=\"habilitacao\" class=\"form-control\" placeholder=\"\" />\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n        <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\">\r\n          <div class=\"card bg-light mb-12\">\r\n              <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n                <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Dados Pessoais </div>   \r\n            </div>\r\n            <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('tipo')}}</label>\r\n                  <select formControlName=\"tipo\" class=\"form-control\" placeholder=\"\">\r\n                    <option *ngFor=\"let tipo of tiposEntidade\" [value]=\"tipo.codigo\">{{tipo.denominacao}}\r\n                  </select>\r\n                  <!--app-error-msg [control]=\"form.get('tipo')\" label=\"Tipo\"></app-error-msg-->\r\n                </div>\r\n                <div class=\" col-md-3\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('cpf')}}</label>\r\n                  <input type=\"text\" matInput mask=\"000.000.000-00\" formControlName=\"cpf\" class=\"form-control\"\r\n                    placeholder=\"\" id=\"birth-date\" />\r\n                </div>\r\n\r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('nome')}}</label>\r\n                  <input type=\"text\" formControlName=\"nome\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('email')}}</label>\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-envelope\"></i> </span>\r\n                    </div>\r\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"\" aria-label=\"Email\"\r\n                      aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n                <div class=\" col-md-6\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('celular')}}</label>\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-mobile-alt\"></i> </span>\r\n                    </div>\r\n                    <input type=\"text\" formControlName=\"celular\" class=\"form-control\" placeholder=\"\" matInput\r\n                      mask=\"(00) 00000-0000\" aria-label=\"Celular\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n                <div class=\" col-md-4\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('dataNascimento')}}</label>\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-calendar-alt\"></i> </span>\r\n                    </div>\r\n                    <input class=\"form-control\" matInput mask=\"00/00/0000\" formControlName=\"dataNascimento\">\r\n                  </div>\r\n                </div>\r\n                <div class=\" col-md-4\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('sexo')}}</label>\r\n                  <select id=\"sexo\" formControlName=\"sexo\" class=\"form-control\" placeholder=\"\">\r\n                    <option *ngFor=\"let s of sexos\" [value]=\"s.codigo\">{{s.descricao}}\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-4\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('estadoCivil')}}</label>\r\n                  <select formControlName=\"estadoCivil\" class=\"form-control\" placeholder=\"\">\r\n                    <option *ngFor=\"let e of estadosCivil\" [value]=\"e.codigo\">{{e.descricao}}\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-6\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('pai')}}</label>\r\n                  <input type=\"text\" formControlName=\"pai\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-6\" formGroupName=\"pessoaFisica\">\r\n                  <label>{{getLabelField('mae')}}</label>\r\n                  <input type=\"text\" formControlName=\"mae\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\" formGroupName=\"endereco\">\r\n          <div class=\"card bg-light mb-12\">\r\n              <div style=\"cursor: pointer;\" (click)=\"show('ocultarEndereco')\">            \r\n                <div class=\"card-header alert-primary\"><i class=\"fa fa-home\"></i> Endereço</div>\r\n              </div>\r\n            <div [hidden]=\"ocultarEndereco\" class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('cep')}}</label>\r\n                  <input type=\"text\" formControlName=\"cep\" matInput mask=\"00.000-000\" class=\"form-control\"\r\n                    placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-3\">\r\n                  <label>{{getLabelField('uf')}}</label>\r\n                  <select formControlName=\"uf\" class=\"form-control\" placeholder=\"\">\r\n                    <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.sigla }}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('cidade')}}</label>\r\n                  <select formControlName=\"cidade\" class=\"form-control\" placeholder=\"\">\r\n                    <option *ngFor=\"let cidade of cidades\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\r\n                  </select>\r\n                  <div [hidden]=\"cidadeTemp == '' \" class=\"alert alert-warning alert-dismissible fade show\" style=\"padding:0px; height:20px\"  role=\"alert\">\r\n                      <p style=\"font-size:10px\">{{cidadeTemp}} </p>\r\n                   </div>                    \r\n                </div>\r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('bairro')}}</label>\r\n                  <input type=\"text\" formControlName=\"bairro\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-6\">\r\n                  <label>{{getLabelField('logradouro')}}</label>\r\n                  <input type=\"text\" formControlName=\"logradouro\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\">\r\n          <div class=\"card\" formGroupName=\"pessoaFisica\">\r\n              <div style=\"cursor: pointer;\" (click)=\"show('ocultarDocumentosPessoais')\">                        \r\n                <div class=\"card-header alert-primary\"><i class=\"fa fa-briefcase \"></i> Documentos Pessoais</div>\r\n              </div>  \r\n            <div [hidden]=\"ocultarDocumentosPessoais\" class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\" col-md-4\">\r\n                  <label>{{getLabelField('rg')}}</label>\r\n                  <input type=\"text\" formControlName=\"rg\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-4\">\r\n                  <label>{{getLabelField('orgaoExpedidor')}}</label>\r\n                  <input type=\"text\" formControlName=\"orgaoExpedidor\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\" col-md-4\">\r\n                  <label>{{getLabelField('dataExpedicao')}}</label>\r\n                  <input type=\"text\" formControlName=\"dataExpedicao\" class=\"form-control\" placeholder=\"\" />\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label>{{getLabelField('nacionalidade')}}</label>\r\n                  <select formControlName=\"nacionalidade\" class=\"form-control\" placeholder=\"\">\r\n                    <option *ngFor=\"let pais of paises;let i= index;\" [value]=\"pais.gentilico\" selected=\"i==30\">\r\n                      {{ pais.gentilico }}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label>{{getLabelField('naturalidade')}}</label>\r\n                  <div class=\"input-group\">\r\n                    <select formControlName=\"naturalidadeUf\" class=\"\" placeholder=\"\"\r\n                      style=\"width:50px; border: 1px solid #ced4da;color: #495057;\">\r\n                      <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.sigla }}</option>\r\n                    </select>\r\n                    <select formControlName=\"naturalidade\" class=\"form-control\" placeholder=\"\">\r\n                      <option *ngFor=\"let cidade of cidadesNaturalidade\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\r\n                    </select>\r\n                  </div>\r\n                  <div [hidden]=\"naturalidadeTemp == '' \" class=\"alert alert-warning alert-dismissible fade show\" style=\"padding:0px; height:20px\"  role=\"alert\">\r\n                      <p style=\"font-size:10px\">{{naturalidadeTemp}} </p>\r\n                   </div>                    \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12\">\r\n            <div class=\"mx-auto\"><br> <button type=\"submit\" (click)=\"salvar()\" class=\"btn btn-dark text-right\">Salvar</button>\r\n            <hr>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <!--button (click)=\"passBack()\" type=\"submit\" class=\"btn btn-primary w-100\">Pass back</button-->\r\n</div>"

/***/ }),

/***/ "./src/app/registropf/modal-registropf/modal-registropf.components.ts":
/*!****************************************************************************!*\
  !*** ./src/app/registropf/modal-registropf/modal-registropf.components.ts ***!
  \****************************************************************************/
/*! exports provided: ModalRegistradoPf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRegistradoPf", function() { return ModalRegistradoPf; });
/* harmony import */ var _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/dropdown.service */ "./src/app/shared/services/dropdown.service.ts");
/* harmony import */ var _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/consulta-cep.service */ "./src/app/shared/services/consulta-cep.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/form-validation */ "./src/app/shared/form-validation.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_registropf_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/registropf.service */ "./src/app/registropf/services/registropf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ModalRegistradoPf = /** @class */ (function () {
    function ModalRegistradoPf(activeModal, fb, service, cepService, dropdownService) {
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
        this.naturalidadeTemp = "";
        this.cidadeTemp = "";
        this.carregando = true;
        this.ocultarDadosPessoais = false;
        this.ocultarEndereco = false;
        this.ocultarDocumentosPessoais = false;
        this.ocultarRegistro = false;
    }
    ModalRegistradoPf.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]],
            tipo: [null],
            codigo: [null],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            registro: this.fb.group({
                inscricao: [null],
                tipo: [null],
                situacao: [null],
                dataInscricao: [null, [this.validarData]],
                vencimento: [null],
                habilitacao: [null],
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
                dataExpedicao: [null],
                tituloEleitor: [null]
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
                _this.service.loadCombos().subscribe(function (success) {
                    _this.tiposEntidade = Array.from(success.tiposEntidade);
                    _this.tiposRegistro = Array.from(success.tiposRegistro);
                    _this.situacoesRegistro = Array.from(success.situacoesRegistro);
                    //CARREGA OS DADOS DO REGISTRADO
                    for (var key in _this.registro) {
                        if (_this.registro.hasOwnProperty(key)) {
                            //console.info(key + ': ' + this.registro[key]);
                            if (key == "pessoaFisica.naturalidade_codigo") {
                                if (_this.registro[key] > 9999) {
                                    _this.naturalidadeTemp = _this.registro["pessoaFisica.naturalidade"];
                                }
                            }
                            if (key == "endereco.cidade_codigo") {
                                if (_this.registro[key] > 9999) {
                                    _this.cidadeTemp = _this.registro["endereco.cidade"];
                                }
                            }
                            if (_this.form.get(key) == null) {
                                console.info('Campo ' + key + ' não definido no formulário');
                            }
                            else {
                                _this.form.get(key).setValue(_this.registro[key]);
                            }
                        }
                    }
                    console.log('aaaaa' + _this.form.get('tipo').value);
                    _this.carregando = false;
                });
            });
        });
        this.form.get('endereco.uf').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (uf) { return console.log('Novo estado: ', uf); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (uf) { return _this.estados.filter(function (e) { return e.sigla === uf; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (estados) { return estados && estados.length > 0 ? estados[0].id : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (estadoId) { return _this.dropdownService.getCidades(estadoId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(console.log)).subscribe(function (cidades) { return _this.cidades = cidades; });
        this.form.get('pessoaFisica.naturalidadeUf').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (uf) { return console.log('Novo estado: ', uf); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (uf) { return _this.estados.filter(function (e) { return e.sigla === uf; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (estados) { return estados && estados.length > 0 ? estados[0].id : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (estadoId) { return _this.dropdownService.getCidades(estadoId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(console.log)).subscribe(function (cidades) { return _this.cidadesNaturalidade = cidades; });
        this.form.get('endereco.cep').statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (value) { return console.log('status CEP:', value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (status) { return status === 'VALID' ?
            _this.cepService.consultaCEP(_this.form.get('endereco.cep').value)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])(); }))
            .subscribe(function (dados) { return dados ? _this.populaDadosForm(dados) : {}; });
    };
    ModalRegistradoPf.prototype.populaDadosForm = function (dados) {
        // this.formulario.setValue({});
        var bairroTemp = this.form.get('endereco.bairro').value;
        this.form.patchValue({
            endereco: {
                uf: dados.uf,
                cidade: dados.localidade,
                //logradouro: dados.logradouro,
                // cep: dados.cep,
                //complemento: dados.complemento,
                bairro: dados.bairro,
            }
        });
        if (bairroTemp !== "") {
            this.form.get('endereco.bairro').setValue(bairroTemp);
        }
    };
    ModalRegistradoPf.prototype.resetaDadosEnderecoForm = function () {
        this.form.patchValue({
            endereco: {
                rua: null,
                complemento: null,
                bairro: null,
                cidade: null,
                uf: null
            }
        });
    };
    ModalRegistradoPf.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    ModalRegistradoPf.prototype.getLabelField = function (fieldName) {
        return Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_5__["getLabelAllFields"])(fieldName);
    };
    ModalRegistradoPf.prototype.validarData = function (control) {
        var v = control.value;
        if (null != v && v.length == 8) {
            var data = v.substr(0, 2) + "/" + v.substr(2, 2) + "/" + v.substr(4, 4);
            var patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
            if (!patternData.test(data)) {
                return { dataInvalida: true };
            }
        }
    };
    ModalRegistradoPf.prototype.passBack = function () {
        this.passEntry.emit(this.registro);
    };
    ModalRegistradoPf.prototype.salvar = function () {
        var _this = this;
        console.log('Salvando Pessoa Fisica');
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
    ModalRegistradoPf.prototype.show = function (secao) {
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
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], ModalRegistradoPf.prototype, "registro", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
    ], ModalRegistradoPf.prototype, "passEntry", void 0);
    ModalRegistradoPf = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-modal-registrado-pf',
            template: __webpack_require__(/*! ./modal-registradopf.html */ "./src/app/registropf/modal-registropf/modal-registradopf.html"),
            styles: [__webpack_require__(/*! ./modal-registradopf.css */ "./src/app/registropf/modal-registropf/modal-registradopf.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_registropf_service__WEBPACK_IMPORTED_MODULE_8__["RegistroPfService"],
            _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_1__["ConsultaCepService"],
            _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_0__["DropdownService"]])
    ], ModalRegistradoPf);
    return ModalRegistradoPf;
}());



/***/ }),

/***/ "./src/app/registropf/registropf.component.css":
/*!*****************************************************!*\
  !*** ./src/app/registropf/registropf.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvcGYvcmVnaXN0cm9wZi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/registropf/registropf.component.html":
/*!******************************************************!*\
  !*** ./src/app/registropf/registropf.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n<nav class=\"navbar navbar-expand-lg alert-info\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"col-lg-6 col-md-12\">\r\n      <div class=\"d-none d-lg-block\">\r\n          <h4><i class='fas fa-user-tie' style='color:#0c5460'></i>&nbsp;-&nbsp;Emissão de Carteira Profissional</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12\">\r\n      <div class=\"float-right\">\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"queryBusca\" />\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"pesquisar()\">OK</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <p style=\"align-content: center\">\r\n        <img *ngIf=\"carregando\" class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n<form>\r\n  <div class=\"col-12\">\r\n    <p *ngFor=\"let alert of alerts\">\r\n      <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n        <div [innerHTML]=\"alert.message\"></div>\r\n      </ngb-alert>\r\n    </p>\r\n  </div>\r\n  <div class=\"col-12\">\r\n  <table class=\"table table-sm table-striped table-fixed\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Reg</th>\r\n        <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Nome</th>\r\n        <th scope=\"col\" sortable=\"area\" (sort)=\"onSort($event)\">Tipo</th>\r\n        <th scope=\"col\" sortable=\"population\" (sort)=\"onSort($event)\">Status</th>\r\n        <th scope=\"col\" colspan=\"2\" sortable=\"population\" (sort)=\"onSort($event)\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let reg of lista\">\r\n        <td class=\"align-middle\">\r\n          <ngb-highlight [result]=\"reg.inscricaoformatada\" [term]=\"queryBusca\"></ngb-highlight>\r\n        </td>\r\n        <td class=\"align-middle\">\r\n          <ngb-highlight [result]=\"reg.nome\" [term]=\"queryBusca\"></ngb-highlight>\r\n        </td>\r\n        <td class=\"align-middle\">\r\n          <ngb-highlight [result]=\"reg.tipo\" [term]=\"queryBusca\"></ngb-highlight>\r\n        </td>\r\n        <td class=\"align-middle\">\r\n          <ngb-highlight [result]=\"reg.situacao\" [term]=\"queryBusca\"></ngb-highlight>\r\n        </td>\r\n        <td class=\"align-middle text-right\">\r\n          <p class=\"text-right\">\r\n            <button type=\"button\" class=\"btn btn-link\" (click)=\"openModal(reg)\" title=\"Detalhe Registrado\"><i\r\n                class=\"fas fa-id-card-alt fa-lg\"></i></button>\r\n            <a href=\"{{url_base}}registro/pessoaFisica/carteira/{{reg.codigo}}\" target=\"_blank\" class=\"btn btn-link\"\r\n              title=\"Gerar Carteira Profissional\"><i class=\"far fa-address-card fa-lg\"></i></a>\r\n          </p>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"d-flex justify-content-between p-2\">\r\n    <ngb-pagination [collectionSize]=\"total\" [(page)]=\"page\" [pageSize]=\"pageSize\">\r\n    </ngb-pagination>\r\n    <select class=\"custom-select\" style=\"width: auto\" name=\"pageSize\" [(ngModel)]=\"pageSize\">\r\n      <option [ngValue]=\"2\">2 items per page</option>\r\n      <option [ngValue]=\"4\">4 items per page</option>\r\n      <option [ngValue]=\"6\">6 items per page</option>\r\n    </select>\r\n  </div>\r\n</div>  \r\n</form>\r\n</div>\r\n<style>\r\n@media screen and (max-width: 700px) {\r\n\r\n.table {\r\n  font-size: 12px;\r\n   }\r\n} \r\n\r\n</style>  \r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/registropf/registropf.component.ts":
/*!****************************************************!*\
  !*** ./src/app/registropf/registropf.component.ts ***!
  \****************************************************/
/*! exports provided: RegistroPfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPfComponent", function() { return RegistroPfComponent; });
/* harmony import */ var _modal_registropf_modal_registropf_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-registropf/modal-registropf.components */ "./src/app/registropf/modal-registropf/modal-registropf.components.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_registropf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/registropf.service */ "./src/app/registropf/services/registropf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistroPfComponent = /** @class */ (function () {
    function RegistroPfComponent(router, service, modalService) {
        this.router = router;
        this.service = service;
        this.modalService = modalService;
        this.lista = [];
        this.page = 0;
        this.pageSize = 50;
        this.collectionSize = 0;
        this.total = 0;
        this.carregando = false;
        this.queryBusca = "";
        this.url_base = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        this.subscription = null;
    }
    RegistroPfComponent.prototype.ngOnInit = function () {
    };
    RegistroPfComponent.prototype.novo = function () {
        this.router.navigate(['/registroPf', 'novo']);
    };
    RegistroPfComponent.prototype.openModal = function (registro) {
        var _this = this;
        this.subscription = this.service.getRegistroPessoaFisica(registro.codigo)
            .subscribe(function (response) {
            console.log("Deu certo: " + response.dados);
            var currentObject = response.dados[0];
            var modalRef = _this.modalService.open(_modal_registropf_modal_registropf_components__WEBPACK_IMPORTED_MODULE_0__["ModalRegistradoPf"], { size: 'lg' });
            console.log('Antes');
            modalRef.componentInstance.registro = response.dados[0];
            //            modalRef.componentInstance.loadDados(registro);
        });
        console.log('Depois');
    };
    RegistroPfComponent.prototype.pesquisar = function () {
        var _this = this;
        this.alerts = [];
        this.carregando = true;
        this.subscription = this.service.getListaRegistroPessoaFisica(this.queryBusca)
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
    RegistroPfComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    RegistroPfComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    RegistroPfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registroPf',
            template: __webpack_require__(/*! ./registropf.component.html */ "./src/app/registropf/registropf.component.html"),
            styles: [__webpack_require__(/*! ./registropf.component.css */ "./src/app/registropf/registropf.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_registropf_service__WEBPACK_IMPORTED_MODULE_5__["RegistroPfService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], RegistroPfComponent);
    return RegistroPfComponent;
}());



/***/ }),

/***/ "./src/app/registropf/registropf.module.ts":
/*!*************************************************!*\
  !*** ./src/app/registropf/registropf.module.ts ***!
  \*************************************************/
/*! exports provided: RegistroPfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPfModule", function() { return RegistroPfModule; });
/* harmony import */ var _registropf_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registropf.routing.module */ "./src/app/registropf/registropf.routing.module.ts");
/* harmony import */ var _modal_registropf_modal_registropf_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-registropf/modal-registropf.components */ "./src/app/registropf/modal-registropf/modal-registropf.components.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _registropf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registropf.component */ "./src/app/registropf/registropf.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ngx-mask */ "./src/app/shared/ngx-mask/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var RegistroPfModule = /** @class */ (function () {
    function RegistroPfModule() {
    }
    RegistroPfModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _registropf_routing_module__WEBPACK_IMPORTED_MODULE_0__["RegistroPfRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _shared_ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            declarations: [_registropf_component__WEBPACK_IMPORTED_MODULE_3__["RegistroPfComponent"], _modal_registropf_modal_registropf_components__WEBPACK_IMPORTED_MODULE_1__["ModalRegistradoPf"]],
            entryComponents: [_modal_registropf_modal_registropf_components__WEBPACK_IMPORTED_MODULE_1__["ModalRegistradoPf"]]
        })
    ], RegistroPfModule);
    return RegistroPfModule;
}());



/***/ }),

/***/ "./src/app/registropf/registropf.routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/registropf/registropf.routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RegistroPfRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPfRoutingModule", function() { return RegistroPfRoutingModule; });
/* harmony import */ var _modal_registropf_modal_registropf_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-registropf/modal-registropf.components */ "./src/app/registropf/modal-registropf/modal-registropf.components.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registropf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registropf.component */ "./src/app/registropf/registropf.component.ts");
/* harmony import */ var _guards_registroPf_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/registroPf.guard */ "./src/app/guards/registroPf.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var registropfRoutes = [
    { path: '', component: _registropf_component__WEBPACK_IMPORTED_MODULE_3__["RegistroPfComponent"],
        canActivateChild: [_guards_registroPf_guard__WEBPACK_IMPORTED_MODULE_4__["RegistroPfGuard"]],
        children: [
            { path: 'novo', component: _modal_registropf_modal_registropf_components__WEBPACK_IMPORTED_MODULE_0__["ModalRegistradoPf"] }
        ] }
];
var RegistroPfRoutingModule = /** @class */ (function () {
    function RegistroPfRoutingModule() {
    }
    RegistroPfRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(registropfRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegistroPfRoutingModule);
    return RegistroPfRoutingModule;
}());



/***/ }),

/***/ "./src/app/registropf/services/registropf.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/registropf/services/registropf.service.ts ***!
  \***********************************************************/
/*! exports provided: RegistroPfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPfService", function() { return RegistroPfService; });
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




var RegistroPfService = /** @class */ (function () {
    function RegistroPfService(http) {
        this.http = http;
        this.API = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "entidade";
        this.API_GET_LISTA_REGISTROS_PESSOAS_FISICA = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "registro/pessoaFisica/getLista";
        this.API_GET_REGISTRO_PESSOAS_FISICA = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "registro/pessoaFisica/get";
        this.API_GERAR_CARTEIRA_PESSOA_FISICA = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "pessoaFisica/carteira";
        this.API_SALVAR_REGISTRO_PESSOA_FISICA = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "registro/pessoaFisica/salvar";
        this.API_LOAD_COMBOS = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "tabelas/loadCombos";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    RegistroPfService.prototype.getListaRegistroPessoaFisica = function (search) {
        return this.http.post(this.API_GET_LISTA_REGISTROS_PESSOAS_FISICA, { campos: [{ campo: 'entidade.nome', valor: search, operador: 'LIKE', condicao: ' OR ' }, { campo: 'pessoafisica.cpf', valor: search, operador: 'LIKE', condicao: ' OR ' }] }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    RegistroPfService.prototype.getRegistroPessoaFisica = function (search) {
        return this.http.post(this.API_GET_REGISTRO_PESSOAS_FISICA, { campos: [{ campo: 'registro.entidade', valor: search, operador: '=', condicao: '' }] }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    RegistroPfService.prototype.gerarCarteiraPessoaFisica = function (codigoEntidade) {
        return this.http.get(this.API_GERAR_CARTEIRA_PESSOA_FISICA + "/" + codigoEntidade, { responseType: "blob" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    RegistroPfService.prototype.loadCombos = function () {
        return this.http.post(this.API_LOAD_COMBOS, {}, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    RegistroPfService.prototype.salvar = function (form) {
        var formObj = form.getRawValue(); // {name: '', description: ''}
        var serializedForm = JSON.stringify(formObj);
        return this.http.post(this.API_SALVAR_REGISTRO_PESSOA_FISICA, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    RegistroPfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegistroPfService);
    return RegistroPfService;
}());



/***/ })

}]);
//# sourceMappingURL=app-registropf-registropf-module.js.map