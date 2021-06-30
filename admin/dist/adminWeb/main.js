(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Mostly: http://ryanfait.com/sticky-footer/ */\r\n\r\n* {\r\n\tmargin: 0;\r\n}\r\n\r\nhtml, body {\r\n\theight: 100%;\r\n}\r\n\r\n.page-wrap {\r\n  min-height: 100%;\r\n  /* equal to footer height */\r\n\tmargin-bottom: -142px; \r\n  position: relative;\r\n}\r\n\r\n.page-wrap:after {\r\n  content: \"\";\r\n  display: block;\r\n}\r\n\r\n.site-footer, .page-wrap:after {\r\n  /* .push must be the same height as footer */\r\n\theight: 142px; \r\n}\r\n\r\n.site-footer {\r\n  background: orange;\r\n}\r\n\r\n#add{position: absolute; bottom: 160px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDOztBQUUvQztDQUNDLFNBQVM7QUFDVjs7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwyQkFBMkI7Q0FDNUIscUJBQXFCO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsNENBQTRDO0NBQzdDLGFBQWE7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQSxLQUFLLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW9zdGx5OiBodHRwOi8vcnlhbmZhaXQuY29tL3N0aWNreS1mb290ZXIvICovXHJcblxyXG4qIHtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuaHRtbCwgYm9keSB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5wYWdlLXdyYXAge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgLyogZXF1YWwgdG8gZm9vdGVyIGhlaWdodCAqL1xyXG5cdG1hcmdpbi1ib3R0b206IC0xNDJweDsgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wYWdlLXdyYXA6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNpdGUtZm9vdGVyLCAucGFnZS13cmFwOmFmdGVyIHtcclxuICAvKiAucHVzaCBtdXN0IGJlIHRoZSBzYW1lIGhlaWdodCBhcyBmb290ZXIgKi9cclxuXHRoZWlnaHQ6IDE0MnB4OyBcclxufVxyXG4uc2l0ZS1mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcclxufVxyXG4jYWRke3Bvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxNjBweDt9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<div  style=\"position: fixed;left: 0;bottom: 0;width: 100%;\"  class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <div class=\"float-right\"><p class=\"text-white bg-dark\">© TECNOSYS Consultoria e Informática</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, route) {
        this.authService = authService;
        this.route = route;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.route.url);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_login_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_ngx_mask_ngx_mask_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/ngx-mask/ngx-mask.module */ "./src/app/shared/ngx-mask/ngx-mask.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagina-nao-encontrada/pagina-nao-encontrada.component */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_registroPf_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/registroPf.guard */ "./src/app/guards/registroPf.guard.ts");
/* harmony import */ var _guards_estudante_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/estudante.guard */ "./src/app/guards/estudante.guard.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload */ "../node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal-acessoNegado/modal-acessoNegado.component */ "./src/app/modal-acessoNegado/modal-acessoNegado.component.ts");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/usuario/usuario.component.ts");
/* harmony import */ var _areaParticipante_areaParticipante_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./areaParticipante/areaParticipante.component */ "./src/app/areaParticipante/areaParticipante.component.ts");
/* harmony import */ var _inscricoes_inscricoes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./inscricoes/inscricoes.component */ "./src/app/inscricoes/inscricoes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_18__["UsuarioComponent"],
                _areaParticipante_areaParticipante_component__WEBPACK_IMPORTED_MODULE_19__["AreaParticipanteComponent"],
                _inscricoes_inscricoes_component__WEBPACK_IMPORTED_MODULE_20__["InscricoesComponent"],
                _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_11__["PaginaNaoEncontradaComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_17__["ModalAcessoNegadoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                _shared_ngx_mask_ngx_mask_module__WEBPACK_IMPORTED_MODULE_0__["NgxMaskModule"].forRoot(),
            ],
            entryComponents: [_modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_17__["ModalAcessoNegadoComponent"]],
            providers: [
                _login_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"],
                _guards_registroPf_guard__WEBPACK_IMPORTED_MODULE_14__["RegistroPfGuard"],
                _guards_estudante_guard__WEBPACK_IMPORTED_MODULE_15__["EstudanteGuard"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/usuario/usuario.component.ts");
/* harmony import */ var _areaParticipante_areaParticipante_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./areaParticipante/areaParticipante.component */ "./src/app/areaParticipante/areaParticipante.component.ts");
/* harmony import */ var _inscricoes_inscricoes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inscricoes/inscricoes.component */ "./src/app/inscricoes/inscricoes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    //    {
    //        path: 'cursos',
    //        loadChildren: 'app/cursos/cursos.module#CursosModule',
    //        canActivate: [AuthGuard],
    //        canActivateChild: [CursosGuard],
    //        canLoad: [AuthGuard]
    //    },
    //    {
    //        path: 'alunos',
    //        loadChildren: 'app/alunos/alunos.module#AlunosModule',
    //        canActivate: [AuthGuard],
    //        canLoad: [AuthGuard]
    //    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'usuario', component: _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioComponent"] },
    { path: 'areaParticipante', component: _areaParticipante_areaParticipante_component__WEBPACK_IMPORTED_MODULE_6__["AreaParticipanteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'inscricoes', component: _inscricoes_inscricoes_component__WEBPACK_IMPORTED_MODULE_7__["InscricoesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/areaParticipante/areaParticipante.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/areaParticipante/areaParticipante.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".IN_ANALYSIS{\r\n    color:red;\r\n}\r\n.AUTHORIZED{\r\n   font-weight: bold;\r\n    color: #155724;\r\n \r\n}\r\n.WAITING{\r\n    font-weight: bold;\r\n    color:rgb(255, 196, 0);\r\n}\r\n.CANCELLED{\r\n        color:red; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYVBhcnRpY2lwYW50ZS9hcmVhUGFydGljaXBhbnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtHQUNHLGlCQUFpQjtJQUNoQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjtBQUNBO1FBQ1EsU0FBUztBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FyZWFQYXJ0aWNpcGFudGUvYXJlYVBhcnRpY2lwYW50ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLklOX0FOQUxZU0lTe1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5BVVRIT1JJWkVEe1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gXHJcbn1cclxuLldBSVRJTkd7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOnJnYigyNTUsIDE5NiwgMCk7XHJcbn0gICAgXHJcbi5DQU5DRUxMRUR7XHJcbiAgICAgICAgY29sb3I6cmVkOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/areaParticipante/areaParticipante.component.html":
/*!******************************************************************!*\
  !*** ./src/app/areaParticipante/areaParticipante.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"container\">\r\n  <p style=\"align-content: center\">\r\n     <img *ngIf=\"carregando\" class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n  </p>\r\n  <div class=\"row\">\r\n     <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n        <nav class=\"navbar alert-primary\">\r\n           <a class=\"nav-link\" routerLink=\"/inscricoes\"> <i class=\"fa fa-cart-plus\"></i> - INSCRICOES PAGAMENTOS </a>\r\n        </nav>\r\n        <br>\r\n        <nav class=\"navbar alert-primary\">\r\n           <button type=\"button\" (click)=\"alterarSenha(content)\" class=\"btn btn-link\"><i class=\"fa fa-unlock-alt\"></i> - ALTERAR SENHA</button>\r\n        </nav>\r\n        <br>\r\n        <nav class=\"navbar alert-primary\">\r\n           <a class=\"nav-link\" routerLink=\"/usuario\"> <i class=\"fa fa-users-cog\"></i> - ATUALIZAR DADOS </a>\r\n        </nav>\r\n        <br>\r\n        <nav class=\"navbar alert-primary\">\r\n           <a class=\"nav-link\" href=\"#\" (click)=\"acessoNegado()\" > <i class=\"fa fa-flag-checkered\"></i> - CERTIFICADO </a>\r\n        </nav>\r\n        <br>\r\n        <nav class=\"navbar alert-primary\">\r\n           <a class=\"nav-link\" href=\"https://www.conad.adm.br/ojs/\" target=\"_blank\"> <i class=\"fa fa-file-pdf\"></i> - ENVIAR TRABALHO </a>\r\n        </nav>\r\n        <br>\r\n        <nav class=\"navbar alert-primary\">\r\n           <a class=\"nav-link\"  href=\"#\" (click)=\"logoff()\"> <i class=\"fa fa-sign-out-alt\"></i> - LOGOFF </a>\r\n        </nav>\r\n     </div>\r\n     <div class=\"col-sm-5 col-md-5 col-lg-5\">\r\n        <h3>Seja Bem Vindo</h3>\r\n        <hr>\r\n        <p><b>Datas Importantes:</b></p>\r\n        <ul>\r\n           <li>Submissão de Trabalho<br>\r\n              07/06/2021 a 14/08/2021\r\n           <li>Prazo Final para o Pagamento da Taxa de Avaliação dos Artigos<br>\r\n              15/08/2021\r\n           <li>Resultado dos Trabalhos Aceitos para Apresentação / Publicação<br>\r\n              30/08/2021\r\n           <li>Prazo Final para Inscrição no 26º CONAD<br>\r\n              05/09/2021\r\n        </ul>\r\n     </div>\r\n     <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n        <!-- Heading -->\r\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n           <span class=\"text-muted\">Meus Eventos</span>\r\n           <span class=\"badge badge-secondary badge-pill\">{{listaMeusEventos.length}}</span>\r\n        </h4>\r\n        <!-- Cart -->\r\n        <ul *ngFor=\"let reg of listaMeusEventos\" class=\"list-group mb-3 z-depth-1\">\r\n           <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n               <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                  <h6 class=\"my-0\">{{reg.descricao}}</h6>\r\n               </div>\r\n               <div class=\"col-sm-4 col-md-4 col-lg-4 text-center align-middle\">\r\n                     <p style=\"font-size: 80%;\" [ngClass]=\"reg.status\" >{{reg.status_descricao}}</p>\r\n               </div>\r\n           </li>\r\n        </ul>\r\n        <ul class=\"list-group mb-3 z-depth-1\">\r\n           <li  class=\"list-group-item d-flex justify-content-between bg-light\">\r\n              <div [hidden]= \"! possuiCaravana()\" class=\"text-success\">\r\n               <p class=\"text-muted\">Minha Caravana</p>\r\n             \r\n              </div>\r\n        \r\n           </li>\r\n           <li class=\"list-group-item d-flex justify-content-between\">\r\n              <span></span>\r\n              <strong>{{usuarioLogado.caravana}}</strong>\r\n              <button [hidden]= \"! possuiCaravana()\" type=\"button\" (click)=\"sairCaravana()\" title=\"Sair desta Caravana\" class=\"btn btn-link\"><i class=\"fa fa-times\"></i></button>\r\n\r\n           </li>\r\n        </ul>\r\n        <nav [hidden]= \"possuiCaravana()\" class=\"navbar alert-primary\">\r\n         <button type=\"button\" (click)=\"selecionarCaravana(contentCaravana)\" style=\"text-decoration: none;\" class=\"btn btn-link\"><i class=\"fa fa-bus\"></i> - INFORME SUA CARAVANA</button>\r\n      </nav>        \r\n     </div>\r\n  </div>\r\n</div>  \r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n   <div class=\"modal-header\">\r\n     <h4 class=\"modal-title\" id=\"modal-basic-title\">Alterar Senha</h4>\r\n     <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('EXIT')\">\r\n       <span aria-hidden=\"true\">&times;</span>\r\n     </button>\r\n   </div>\r\n   <div class=\"modal-body\">\r\n     <div class=\"col-12\">\r\n       <p *ngFor=\"let alert of alerts\">\r\n         <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n           <div [innerHTML]=\"alert.message\"></div>\r\n         </ngb-alert>\r\n       </p>\r\n     </div>\r\n \r\n     <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\">\r\n       <div class=\"card bg-light mb-12\">\r\n         <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n           <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Dados do Usuário </div>\r\n         </div>\r\n         <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n           <div class=\"row\">\r\n             <div class=\" col-md-12\" >\r\n               <div class=\"form-label-group\">\r\n                 <label for=\"inputEmail\">Usuário</label>\r\n                 <input #loginField [(ngModel)]=\"usuario.login\" type=\"text\" class=\"form-control\" required value=\"\" disabled \r\n                   autocomplete=\"off\">\r\n               </div>\r\n           \r\n               <div class=\"form-label-group\">\r\n                 <label for=\"inputPassword\">Senha Anterior</label>\r\n                 <input [(ngModel)]=\"usuario.password_anterior\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                   placeholder=\"Password\" required>\r\n               </div>\r\n             </div>\r\n             <div class=\" col-md-6\" >\r\n \r\n               <div class=\"form-label-group\">\r\n                 <label for=\"inputPassword\">Nova Senha</label>\r\n                 <input [(ngModel)]=\"usuario.password\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                   placeholder=\"Password\" required>\r\n               </div>\r\n             </div>\r\n             <div class=\" col-md-6\" >\r\n \r\n               <div class=\"form-label-group\">\r\n                 <label for=\"inputPassword\">Repita Nova Senha</label>\r\n                 <input [(ngModel)]=\"usuario.password_conferir\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                   placeholder=\"Password\" required>\r\n               </div>\r\n             </div>\r\n           \r\n             </div>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>     \r\n \r\n   <div class=\"modal-footer\">\r\n     <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('SAVE')\">Confirmar</button>\r\n   </div>\r\n </ng-template>\r\n \r\n\r\n <ng-template #contentCaravana let-c=\"close\" let-d=\"dismiss\">\r\n   <div class=\"modal-header\">\r\n     <h4 class=\"modal-title\" id=\"modal-basic-title\">Caravana Virtual</h4>\r\n     <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('EXIT')\">\r\n       <span aria-hidden=\"true\">&times;</span>\r\n     </button>\r\n   </div>\r\n   <div class=\"modal-body\">\r\n     <div class=\"col-12\">\r\n       <p *ngFor=\"let alert of alerts\">\r\n         <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n           <div [innerHTML]=\"alert.message\"></div>\r\n         </ngb-alert>\r\n       </p>\r\n     </div>\r\n \r\n     <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\">\r\n       <div class=\"card bg-light mb-12\">\r\n         <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n           <div class=\"card-header alert-primary\"><i class=\"fa fa-bus\"></i> Selecione uma caravana </div>\r\n         </div>\r\n         <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n           <div class=\"row\">\r\n             <div class=\" col-md-12\" >\r\n               <div class=\"form-label-group\">\r\n                 <label for=\"inputEmail\"></label>\r\n                   <select  [(ngModel)]=\"usuario.caravana\" class=\"form-control\" placeholder=\"\">\r\n                     <option *ngFor=\"let t of listaCaravanas\" [value]=\"t.descricao\">{{ t.descricao }}</option>\r\n                   </select>                   \r\n               </div>\r\n           \r\n            </div>\r\n           </div>\r\n         </div>\r\n         </div>\r\n     </div>     \r\n    </div> \r\n \r\n   <div class=\"modal-footer\">\r\n     <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('SAVE')\">Confirmar</button>\r\n   </div>\r\n </ng-template>\r\n\r\n\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/areaParticipante/areaParticipante.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/areaParticipante/areaParticipante.component.ts ***!
  \****************************************************************/
/*! exports provided: AreaParticipanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaParticipanteComponent", function() { return AreaParticipanteComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/dropdown.service */ "./src/app/shared/services/dropdown.service.ts");
/* harmony import */ var _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/consulta-cep.service */ "./src/app/shared/services/consulta-cep.service.ts");
/* harmony import */ var _shared_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/form-validation */ "./src/app/shared/form-validation.ts");
/* harmony import */ var _areaParticipante_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./areaParticipante.service */ "./src/app/areaParticipante/areaParticipante.service.ts");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_usuario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login/usuario */ "./src/app/login/usuario.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modal-acessoNegado/modal-acessoNegado.component */ "./src/app/modal-acessoNegado/modal-acessoNegado.component.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AreaParticipanteComponent = /** @class */ (function () {
    function AreaParticipanteComponent(fb, dropdownService, authService, router, cepService, service, usuarioService, http, modalService) {
        this.fb = fb;
        this.dropdownService = dropdownService;
        this.authService = authService;
        this.router = router;
        this.cepService = cepService;
        this.service = service;
        this.usuarioService = usuarioService;
        this.http = http;
        this.modalService = modalService;
        this.usuario = new _login_usuario__WEBPACK_IMPORTED_MODULE_9__["Usuario"]();
        this.submitted = false;
        this.alerts = [];
        this.listaCaravanas = [];
        this.tiposRegistro = [];
        this.situacoesRegistro = [];
        this.paises = [];
        this.estados = [];
        this.cidades = [];
        this.listaTipos = [{ codigo: '1', descricao: 'Administrador e Tecnólogo' }, { codigo: '2', descricao: 'Estudante' }, { codigo: '3', descricao: 'Outros Profissionais' }];
        this.listaMeusEventos = [];
        this.carregando = true;
        this.ocultarDadosPessoais = false;
        this.ocultarEndereco = false;
        this.ocultarOuvidoria = false;
        this.ocultarAnexos = false;
        this.id = 0;
    }
    // @ViewChild('cpf') firstNameElement: ElementRef;
    AreaParticipanteComponent.prototype.ngAfterViewInit = function () {
        //    this.firstNameElement.nativeElement.focus();
    };
    AreaParticipanteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMeusEventos()
            .subscribe(function (response) {
            _this.carregando = false;
            _this.listaMeusEventos = response.dados;
            _this.listaCaravanas = response.caravanas;
        }, function (err) {
            _this.carregando = false;
            _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
        });
        this.usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
    };
    AreaParticipanteComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AreaParticipanteComponent.prototype.getLabelField = function (fieldName) {
        return Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_5__["getLabelAllFields"])(fieldName);
    };
    AreaParticipanteComponent.prototype.validarData = function (control) {
        var v = control.value;
        if (null != v && v.length == 8) {
            var data = v.substr(0, 2) + "/" + v.substr(2, 2) + "/" + v.substr(4, 4);
            var patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
            if (!patternData.test(data)) {
                return { dataInvalida: true };
            }
        }
    };
    AreaParticipanteComponent.prototype.alterarSenha = function (content) {
        var _this = this;
        var string = localStorage.getItem("usuario");
        var obj = JSON.parse(string);
        this.usuario.login = obj.nome;
        this.usuario.cpf = obj.cpf;
        this.usuario.password_anterior = "";
        this.usuario.password = "";
        this.usuario.password_conferir = "";
        var modal = this.modalService.open(content);
        modal.result.then(function () {
            console.log('SALVAR');
            _this.authService.alterarSenha(_this.usuario).subscribe(function (dados) {
                if (dados.status.codigo == 99) {
                    _this.alerts = Array.from([{ type: 'danger', message: dados.status.mensagem }]);
                    _this.alterarSenha(content);
                }
                else {
                    _this.usuario.password = "";
                    _this.usuario.password_anterior = "";
                    _this.usuario.password_conferir = "";
                    console.log("Senha alterada com sucesso");
                    alert('Senha alterada com sucesso !!!');
                }
            });
        }, function () { console.log('SAIR'); });
    };
    AreaParticipanteComponent.prototype.selecionarCaravana = function (content) {
        var _this = this;
        var string = localStorage.getItem("usuario");
        var obj = JSON.parse(string);
        this.usuario.operacao = "SALVAR_MINHA_CARAVANA";
        this.usuario.cpf = obj.cpf;
        var modal = this.modalService.open(content);
        modal.result.then(function () {
            console.log('SALVAR');
            _this.usuarioService.salvarMinhaCaravana(_this.usuario).subscribe(function (response) {
                console.log("Status" + response.status);
                if (response.status.codigo == 0) {
                    localStorage.setItem("usuario", JSON.stringify(response.dados));
                    _this.usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
                }
            }, function (err) {
                _this.carregando = false;
                _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
                console.log(err);
            });
        }, function () { console.log('SAIR'); });
    };
    AreaParticipanteComponent.prototype.possuiCaravana = function () {
        if (typeof this.usuarioLogado.caravana == "undefined") {
            return false;
        }
        if (this.usuarioLogado.caravana.length <= 0) {
            return false;
        }
        else {
            return true;
        }
    };
    AreaParticipanteComponent.prototype.sairCaravana = function () {
        var _this = this;
        if (!confirm("Deseja não mais fazer parte desta Caravana ?")) {
            return;
        }
        var string = localStorage.getItem("usuario");
        var obj = JSON.parse(string);
        this.usuario.operacao = "SALVAR_MINHA_CARAVANA";
        this.usuario.caravana = "";
        this.usuario.cpf = obj.cpf;
        this.usuarioService.salvarMinhaCaravana(this.usuario).subscribe(function (response) {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                localStorage.setItem("usuario", JSON.stringify(response.dados));
                _this.usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
            }
        }, function (err) {
            _this.carregando = false;
            _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
    };
    AreaParticipanteComponent.prototype.acessoNegado = function () {
        var modalRef = this.modalService.open(_modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_11__["ModalAcessoNegadoComponent"]);
        return false;
    };
    AreaParticipanteComponent.prototype.logoff = function () {
        this.authService.logoff();
        this.router.navigate(['/login']);
    };
    AreaParticipanteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-areaParticipante',
            template: __webpack_require__(/*! ./areaParticipante.component.html */ "./src/app/areaParticipante/areaParticipante.component.html"),
            styles: [__webpack_require__(/*! ./areaParticipante.component.css */ "./src/app/areaParticipante/areaParticipante.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_3__["DropdownService"],
            _login_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_4__["ConsultaCepService"],
            _areaParticipante_service__WEBPACK_IMPORTED_MODULE_6__["AreaParticipanteService"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_12__["UsuarioService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]])
    ], AreaParticipanteComponent);
    return AreaParticipanteComponent;
}());



/***/ }),

/***/ "./src/app/areaParticipante/areaParticipante.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/areaParticipante/areaParticipante.service.ts ***!
  \**************************************************************/
/*! exports provided: AreaParticipanteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaParticipanteService", function() { return AreaParticipanteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AreaParticipanteService = /** @class */ (function () {
    function AreaParticipanteService(http) {
        this.http = http;
        this.API_GET_MEUS_EVENTOS = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "inscricoes/getMeusEventos.php";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    AreaParticipanteService.prototype.getMeusEventos = function () {
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        return this.http.post(this.API_GET_MEUS_EVENTOS, { cpf: jsonUsuario.cpf }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    AreaParticipanteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AreaParticipanteService);
    return AreaParticipanteService;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-acessoNegado/modal-acessoNegado.component */ "./src/app/modal-acessoNegado/modal-acessoNegado.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, modalService) {
        this.authService = authService;
        this.router = router;
        this.modalService = modalService;
        this.listaAcesso = ['faleConosco', 'ouvidoria', 'toDo'];
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log('AuthGuard' + state.url);
        return this.verificarAcesso(state.url);
    };
    AuthGuard.prototype.verificarAcesso = function (url_destino) {
        if (localStorage.getItem("usuario") == null) {
            console.log("REDIRECIONA TELA LOGIN");
            this.router.navigate(['/login']);
            return false;
        }
        var possuiAcesso = false;
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        var meusAcessos = jsonUsuario.acessos;
        var url = url_destino.replace("/", "");
        if (meusAcessos.indexOf(url) >= 0) {
            possuiAcesso = true;
        }
        if (!possuiAcesso) {
            var modalRef = this.modalService.open(_modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_4__["ModalAcessoNegadoComponent"]);
            return false;
        }
        return true;
    };
    AuthGuard.prototype.canLoad = function (route) {
        console.log('canLoad: verificando se usuário pode carregar o cod módulo');
        //return this.verificarAcesso();
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/estudante.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/estudante.guard.ts ***!
  \*******************************************/
/*! exports provided: EstudanteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudanteGuard", function() { return EstudanteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EstudanteGuard = /** @class */ (function () {
    function EstudanteGuard() {
    }
    EstudanteGuard.prototype.canActivateChild = function (route, state) {
        //console.log(route);
        //console.log(state);
        console.log('EstudanteGuard: Guarda de rota filha');
        if (state.url.includes('editar')) {
            //alert('Usuário sem acesso');
            //return Observable.of(false);
        }
        return true;
    };
    EstudanteGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EstudanteGuard);
    return EstudanteGuard;
}());



/***/ }),

/***/ "./src/app/guards/registroPf.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/registroPf.guard.ts ***!
  \********************************************/
/*! exports provided: RegistroPfGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPfGuard", function() { return RegistroPfGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegistroPfGuard = /** @class */ (function () {
    function RegistroPfGuard() {
    }
    RegistroPfGuard.prototype.canActivateChild = function (route, state) {
        //console.log(route);
        //console.log(state);
        console.log('EntidadesGuard: Guarda de rota filha');
        if (state.url.includes('editar')) {
            //alert('Usuário sem acesso');
            //return Observable.of(false);
        }
        return true;
    };
    RegistroPfGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], RegistroPfGuard);
    return RegistroPfGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--nav *ngIf=\"mostrarMenu\" >\r\n  <div class=\"nav-wrapper\">\r\n      <a routerLink=\"\" class=\"brand-logo right\">Rotas Ng2</a>\r\n      <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/login\">Login</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"\">Home</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/cursos\" [queryParams]=\"{pagina:1}\">Cursos</a></li>  \r\n      <li routerLinkActive=\"active\"><a routerLink=\"/alunos\" >Alunos</a></li>  \r\n      <li routerLinkActive=\"active\"><a routerLink=\"/entidades\" >Entidades</a></li>  \r\n      </ul>\r\n  </div>\r\n</nav-->\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-primary alert-primary\" *ngIf=\"userAutenticado()\">\r\n  <h3>Área do Participante</h3><br><br>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <!--li routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/registroPf\">| REGISTRO PF</a>\r\n      </li>\r\n      <li routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/estudante\">| ESTUDANTE</a>\r\n      </li-->\r\n\r\n    \r\n      </ul>\r\n      <div class=\"float-right\"><a  href=\"#\" (click)=\"logoff()\" ><p class=\"alert-primary\">{{usuarioLogado}}<br>LOGOFF</p></a></div>\r\n  </div>\r\n</nav>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Alterar Senha</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('EXIT')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"col-12\">\r\n      <p *ngFor=\"let alert of alerts\">\r\n        <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n          <div [innerHTML]=\"alert.message\"></div>\r\n        </ngb-alert>\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\">\r\n      <div class=\"card bg-light mb-12\">\r\n        <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n          <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Dados do Usuário </div>\r\n        </div>\r\n        <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\" col-md-12\" >\r\n              <div class=\"form-label-group\">\r\n                <label for=\"inputEmail\">Usuário</label>\r\n                <input #loginField [(ngModel)]=\"usuario.login\" type=\"text\" class=\"form-control\" required value=\"\" disabled \r\n                  autocomplete=\"off\">\r\n              </div>\r\n          \r\n              <div class=\"form-label-group\">\r\n                <label for=\"inputPassword\">Senha Anterior</label>\r\n                <input [(ngModel)]=\"usuario.password_anterior\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                  placeholder=\"Password\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\" col-md-6\" >\r\n\r\n              <div class=\"form-label-group\">\r\n                <label for=\"inputPassword\">Nova Senha</label>\r\n                <input [(ngModel)]=\"usuario.password\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                  placeholder=\"Password\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\" col-md-6\" >\r\n\r\n              <div class=\"form-label-group\">\r\n                <label for=\"inputPassword\">Repita Nova Senha</label>\r\n                <input [(ngModel)]=\"usuario.password_conferir\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                  placeholder=\"Password\" required>\r\n              </div>\r\n            </div>\r\n          \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>     \r\n\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('SAVE')\">Confirmar</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/usuario */ "./src/app/login/usuario.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, modalService) {
        this.authService = authService;
        this.router = router;
        this.modalService = modalService;
        this.mostrarMenu = false;
        this.mostrarMenuEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usuario = new _login_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
        this.alerts = [];
        this.usuarioLogado = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.userAutenticado = function () {
        if (localStorage.getItem("usuario") == null) {
            return false;
        }
        else {
            var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
            console.log(jsonUsuario.login);
            this.usuarioLogado = jsonUsuario.nome;
            return true;
        }
    };
    HeaderComponent.prototype.logoff = function () {
        this.authService.logoff();
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.alterarSenha = function (content) {
        var _this = this;
        var string = localStorage.getItem("usuario");
        var obj = JSON.parse(string);
        this.usuario.login = obj.login;
        this.usuario.password_anterior = "";
        this.usuario.password = "";
        this.usuario.password_conferir = "";
        var modal = this.modalService.open(content);
        modal.result.then(function () {
            console.log('SALVAR');
            if (_this.usuario.password_anterior == "") {
                _this.alerts = Array.from([{ type: 'danger', message: 'Senha atual inválida' }]);
                _this.alterarSenha(content);
                return;
            }
            if (_this.usuario.password == "" || _this.usuario.password != _this.usuario.password_conferir) {
                _this.alerts = Array.from([{ type: 'danger', message: 'Senha atual diferente nos campos Senha e Repetir Senha' }]);
                _this.alterarSenha(content);
                return;
            }
            _this.authService.alterarSenha(_this.usuario).subscribe(function (dados) {
                if (dados.status.codigo == 99) {
                    _this.alerts = Array.from([{ type: 'danger', message: dados.status.mensagem }]);
                    _this.alterarSenha(content);
                }
                else {
                    _this.usuario.password = "";
                    _this.usuario.password_anterior = "";
                    _this.usuario.password_conferir = "";
                    console.log("Senha alterada com sucesso");
                    alert('Senha alterada com sucesso !!!');
                }
            });
        }, function () { console.log('SAIR'); });
    };
    HeaderComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_login_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 mx-auto\">\r\n    <div class=\"align-middle\">\r\n      <div class=\"text-center\"><br><br><br><br>\r\n        <img src=\"assets/img/logoCRAGO.png\" width=\"300px\">\r\n        <br><br><br><br>\r\n        <h3 style=\"color:#0c5460\"><b>Bem Vindo ao ADMIN-WEB.</b></h3>\r\n        <h1 style=\"color:#0c5460\">Escolha um dos Menus acima.</h1><br><br>\r\n        <table>\r\n          <tr>\r\n              <td class=\"align-left\" width=\"20%\"></td>\r\n            <td class=\"align-left\" style=\"color:#0c5460\">\r\n                   <p class=\"text-left\" > - Contatos Realizados pelo Site</p>\r\n                    <p class=\"text-left\"> - Ouvidoria.</p>\r\n                      <p class=\"text-left\"> - Controle de Eventos. Neste Módulo voce poderá cadastrar eventos, verificar e efetivar as inscrições\r\n                      para determinado evento.</p>\r\n            </td>\r\n            <td width=\"20%\"></td>\r\n          </tr>\r\n          </table>\r\n          <br><br><br>\r\n        <p class=\"text-right\"><i>Ambiente Monitorado</i></p>\r\n      </div>\r\n      </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inscricoes/inscricoes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/inscricoes/inscricoes.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".IN_ANALYSIS{\r\n    color:red;\r\n}\r\n.AUTHORIZED{\r\n    display: none;\r\n}\r\n.text-AUTHORIZED{\r\n    color:green;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zY3JpY29lcy9pbnNjcmljb2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9pbnNjcmljb2VzL2luc2NyaWNvZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5JTl9BTkFMWVNJU3tcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4uQVVUSE9SSVpFRHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRleHQtQVVUSE9SSVpFRHtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/inscricoes/inscricoes.component.html":
/*!******************************************************!*\
  !*** ./src/app/inscricoes/inscricoes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n   <form [formGroup]=\"form\">\r\n      <div  class=\"container\">\r\n         <div class=\"row\" [hidden]=\"checkoutEmAndamento\">\r\n            <div class=\"col-12\">\r\n               <p *ngFor=\"let alert of alerts\"><br>\r\n                  <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n               <div [innerHTML]=\"alert.message\"></div>\r\n               </ngb-alert>\r\n               </p>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-12 col-lg-12 mx-auto\">\r\n               <div class=\"container\">\r\n                  <div class=\"row\">\r\n                     <!--div class=\"col-12\">\r\n                        <h3>Cadastro</h3>\r\n                        </div-->        \r\n                     <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\">\r\n                        <div class=\"card bg-light mb-12\">\r\n                           <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n                              <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> - <b>Selecione o(s) seu(s) evento(s)</b> </div>\r\n                           </div>\r\n                           <div class=\"card-body\">\r\n                              <div class=\"row\">\r\n                                 <div class=\"col-12 table-responsive-xl\">\r\n                                    <table class=\"table table-striped\" width=\"100%\">\r\n                                       <thead>\r\n                                          <tr>\r\n                                             <th scope=\"col\">#</th>\r\n                                             <th scope=\"col\" sortable=\"area\" (sort)=\"onSort($event)\">Descrição</th>\r\n                                             <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Valor</th>\r\n                                          </tr>\r\n                                       </thead>\r\n                                       <tbody>\r\n                                          <tr *ngFor=\"let reg of lista\">\r\n                                             <td   class=\"align-middle\" style=\" background: transparent;\">\r\n                                                <div [ngClass]=\"reg.status\">\r\n                                                   <div class=\"custom-control custom-checkbox\" id=\"div{{reg.id}}\">\r\n                                                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"id{{reg.id}}\" (change)=\"calcularValor()\" >\r\n                                                      <label class=\"custom-control-label\" for=\"id{{reg.id}}\" > - </label>\r\n                                                   </div>\r\n                                                </div>\r\n                                             </td>\r\n                                             <td class=\"align-middle\">\r\n                                                <ngb-highlight  [result]=\"reg.descricao\" [term]=\"queryBusca\"></ngb-highlight><br>\r\n                                                <i  class=\"text-secondary\">{{reg.detalhe}}</i>\r\n                                                <i [hidden]= \"reg.valor != '0'\" class=\"text-success\"><br><b>(Gratuita para participantes do evento principal)</b></i>                                       \r\n                                             </td>\r\n                                             <td class=\"float-right\">\r\n                                                <span [hidden]=\"reg.status=='AUTHORIZED'\" >{{reg.valor | number : '1.2-2' }}</span><br>\r\n                                                <span class=\"alert-success\" [hidden]=\"reg.status!='AUTHORIZED'\"><b>CONFIRMADO</b></span>\r\n                                             </td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                                    <div class=\"alert alert-dark\" role=\"alert\">\r\n                                       <div class=\"row\">\r\n                                          <div class=\"col-12 col-sm-9\">\r\n                                             <b>TOTAL</b>\r\n                                          </div>\r\n                                          <div class=\"col-12  col-sm-3\">\r\n                                             <div class=\"float-right\">\r\n                                                <span class=\"float-right\"><b> R$ {{valor}}</b><br></span>\r\n                                             </div>\r\n                                          </div>\r\n                                       </div>\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"col-12 col-sm-12\">\r\n                        <div class=\"mx-auto\">\r\n                           <br> <button type=\"button\" (click)=\"proximo()\" class=\"btn btn-primary text-right\" >PROXIMO</button>\r\n                           &nbsp;&nbsp;&nbsp;&nbsp;\r\n                           <button type=\"button\" (click)=\"voltar()\" class=\"btn btn-secondary text-right\"  >VOLTAR</button>      \r\n                           <br><br><br>                    \r\n                           <hr>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div [hidden]=\"! checkoutEmAndamento\" class=\"container\">\r\n         <div class=\"col-12\">\r\n            <p *ngFor=\"let alert of alerts\"><br>\r\n               <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n            <div [innerHTML]=\"alert.message\"></div>\r\n            </ngb-alert>\r\n            </p>\r\n            <div *ngIf=\"carregando\"  style=\"align-content: center\">\r\n               <br><br><br><br><br><br>\r\n               <div class=\"card bg-light mb-12\">\r\n                  <div class=\"card-body\">\r\n                     <br><br>\r\n                     <img  class=\"rounded mx-auto d-block\" src=\"assets/img/processando.gif\"><br><br>\r\n                     <p class=\"text-center text-secondary\"><b>Por favor, aguarde enquanto o seu pagamento é processado !!!</b>\r\n                  </div>\r\n               </div>\r\n               <br><br><br><br>\r\n            </div>\r\n            <!--DIV MOSTRA TELA PAGAMENTO CONFIRMADO-->\r\n            <div *ngIf=\"pagamento.confirmado\"  style=\"align-content: center\">\r\n               <br><br><br><br>\r\n               <div  class=\"card bg-light mb-12\">\r\n                  <!--CARTAO-->\r\n                  <div [hidden]=\"pagamento.tipo!='C'\" class=\"card-body\">\r\n                     <br><br>\r\n                     <div class=\"text-center\">\r\n                        <img  class=\"rounded mx-auto d-block\" src=\"assets/img/pagamentoConfirmado.png\" class=\"img-fluid\" style=\"max-width: 200px\"><br><br>\r\n                     </div>\r\n                     <p class=\"text-center text-secondary\">\r\n                        <b>\r\n                     <h3>PAGAMENTO CONFIRMADO</h3></b></p>\r\n                     <p class=\"text-center text-secondary\">\r\n                        <b>\r\n                     <h1>MUITO OBRIGADO</h1></b></p>\r\n                     <div class=\"col-12 col-sm-12\">\r\n                        <div class=\"text-center\">\r\n                           <br>\r\n                           <hr>\r\n                           <button type=\"button\" (click)=\"sair()\" class=\"btn btn-secondary text-right\"  >VOLTAR</button>      \r\n                           <br><br><br>                    \r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <!--BOLETO-->\r\n                  <div [hidden]=\"pagamento.tipo!='B'\" class=\"container\">\r\n                     <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                           <h1 class=\"text-secondary\"><i class=\"fas fa-barcode\"></i>   BOLETO BANCÁRIO </h1>\r\n                           <hr>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                           <h3 class=\"text-dark text-center\" ><i class=\"fas fa-barcode\"></i> Linha digitável</h3>\r\n                           <h3 class=\"text-info text-center\" >{{pagamento.codigoBarras}}</h3>\r\n                           <hr>\r\n                           <p class=\"text-secondary\"><strong>Vencimento: </strong>  <span data-apply-date=\"\">{{pagamento.dataVencimento}}</span></p>\r\n                           <p class=\"text-secondary\"><strong>Valor total: </strong>  <span data-apply-total=\"\">R$ {{pagamento.valor}}</span></p>\r\n                           <p class=\"text-secondary\">O prazo para a compensação do boleto pode ser de até 2 dias úteis.</p>\r\n                           <hr>\r\n                        </div>\r\n                        <div class=\"col-4 text-center\">\r\n                           <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyToClipBoard(pagamento.codigoBarras)\"><i class=\"far fa-copy\"></i> Copiar linha digitável</button>\r\n                        </div>\r\n                        <div class=\"col-4 text-center\">\r\n                           <button type=\"button\" class=\"btn btn-primary\" (click)=\"openUrl(pagamento.url)\" ><i class=\"fas fa-external-link-alt\"></i>Acessar Link Boleto</button>\r\n                        </div>\r\n                        <div class=\"col-4 text-center\">\r\n                           <button type=\"button\" (click)=\"sair()\" class=\"btn btn-secondary text-right\"  ><i class=\"fas fa-external-link-alt\"></i>VOLTAR</button><br> <br>                                      \r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <br><br>\r\n            </div>\r\n            <!--DIV MOSTRA TELA ERRO PAGAMENTO-->\r\n            <div *ngIf=\"pagamento.erro\"  style=\"align-content: center\">\r\n               <br><br><br><br>\r\n               <div class=\"card bg-light mb-12\">\r\n                  <div class=\"card-body\">\r\n                     <br><br>\r\n                     <div class=\"text-center\">\r\n                        <img [hidden]=\"pagamento.erroTipo != 'CANCELLED' \"  class=\"rounded mx-auto d-block\" src=\"assets/img/pagamentoErro.png\" class=\"img-fluid\" style=\"max-width: 200px\"><br><br>\r\n                        <img [hidden]=\"pagamento.erroTipo == 'CANCELLED' \"  class=\"rounded mx-auto d-block\" src=\"assets/img/pagamentoAlerta.png\" class=\"img-fluid\" style=\"max-width: 200px\"><br><br>\r\n                     </div>\r\n                     <p class=\"text-center text-danger\">\r\n                        <b>\r\n                     <h3 [hidden]=\"pagamento.erroTipo != 'CANCELLED' \">PAGAMENTO NÃO CONFIRMADO</h3>\r\n                     <h3 [hidden]=\"pagamento.erroTipo == 'CANCELLED' \" style=\"color:orange\">ATENÇÃO !!!</h3></b></p>\r\n                     <div class=\"text-center text-secondary\">\r\n                        <p *ngFor=\"let alert of pagamento.alerts\">\r\n                           <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n                        <div [innerHTML]=\"alert.message\"></div>\r\n                        </ngb-alert>\r\n                        </p>\r\n                     </div>\r\n                     <div class=\"col-12 col-sm-12\">\r\n                        <div class=\"text-center\">\r\n                           <br>\r\n                           <hr>\r\n                           <button type=\"button\" (click)=\"sair()\" class=\"btn btn-secondary text-right\"  >VOLTAR</button>      \r\n                           <br><br><br>                    \r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <br><br>\r\n            </div>\r\n            <p><br></p>\r\n         </div>\r\n         <div [hidden]=\"pagamento.processado\" class=\"card bg-light mb-12\">\r\n            <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n               <div class=\"card-header alert-primary\"><i class=\"fab fa-amazon-pay\"></i> <b> - Finalizar compra</b> </div>\r\n            </div>\r\n            <div  class=\"card-body\">\r\n               <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-md-12 col-lg-12 mx-auto\">\r\n                     <main class=\"mt-5 pt-4\">\r\n                        <div class=\"container wow fadeIn\">\r\n                           <div class=\"row\">\r\n                              <div class=\"col-md-8 mb-4\">\r\n                                <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n                                    <span class=\"text-muted\">Dados do Pagador:</span>\r\n                                </h4>\r\n                                 <div class=\"card\">\r\n                                    <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                       <div class=\"col-md-4 mb-4\" >\r\n                                          <label>{{getLabelField('cpf')}}</label>\r\n                                          <input  type=\"text\" matInput mask=\"000.000.000-00\" formControlName=\"cpf\"  class=\"form-control\"\r\n                                            placeholder=\"\"  tabindex=\"0\" />\r\n                                        </div>\r\n                                        <div class=\"col-md-8 mb-8\">\r\n                                          <label>{{getLabelField('nome')}}</label>\r\n                                          <input type=\"text\" formControlName=\"nome\" class=\"form-control\">\r\n                                       </div>\r\n                                       <div class=\" col-md-4\" >\r\n                                          <label>{{getLabelField('celular')}}</label>\r\n                                          <div class=\"input-group\">\r\n                                            <div class=\"input-group-prepend\">\r\n                                              <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-mobile-alt\"></i> </span>\r\n                                            </div>\r\n                                            <input type=\"text\" formControlName=\"celular\" class=\"form-control\" placeholder=\"\" matInput\r\n                                              mask=\"(00) 00000-0000\" aria-label=\"Celular\" aria-describedby=\"basic-addon1\">\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\" col-md-3\" >\r\n                                          <label>Dt Nasc.</label>\r\n                                          <input  type=\"text\" matInput mask=\"00/00/0000\" formControlName=\"dataNascimento\"  class=\"form-control\"\r\n                                            placeholder=\"\"  tabindex=\"0\" />\r\n                                        </div>\r\n                \r\n                                       <div class=\"col-md-5\">\r\n                                          <label>{{getLabelField('email')}}</label>\r\n                                          <div class=\"input-group\">\r\n                                             <div class=\"input-group-prepend\">\r\n                                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-envelope\"></i> </span>\r\n                                             </div>\r\n                                             <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"\" aria-label=\"Email\"\r\n                                                aria-describedby=\"basic-addon1\">\r\n                                          </div>\r\n                                       </div>\r\n                                       <div class=\" col-md-4\">\r\n                                          <label>{{getLabelField('cep')}}</label>\r\n                                          <input type=\"text\" formControlName=\"cep\" id=\"cep\" matInput mask=\"00.000-000\" class=\"form-control\"\r\n                                             placeholder=\"\" />\r\n                                       </div>\r\n                                       <div class=\" col-md-3\">\r\n                                          <label>{{getLabelField('uf')}}</label>\r\n                                          <select formControlName=\"uf\" class=\"form-control\" placeholder=\"\">\r\n                                          <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.sigla }}</option>\r\n                                          </select>\r\n                                       </div>\r\n                                       <div class=\" col-md-5\">\r\n                                          <label>{{getLabelField('cidade')}}</label>\r\n                                          <select formControlName=\"cidade\" class=\"form-control\" placeholder=\"\">\r\n                                          <option *ngFor=\"let cidade of cidades\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\r\n                                          </select>\r\n                                       </div>\r\n                                       <div class=\" col-md-6\">\r\n                                          <label>{{getLabelField('bairro')}}</label>\r\n                                          <input type=\"text\" formControlName=\"bairro\" class=\"form-control\" placeholder=\"\" />\r\n                                       </div>\r\n                                       <div class=\" col-md-6\">\r\n                                          <label>{{getLabelField('logradouro')}}</label>\r\n                                          <input type=\"text\" formControlName=\"logradouro\" class=\"form-control\" placeholder=\"\" />\r\n                                       </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                    <div class=\"d-block my-3\">\r\n                                       <div class=\"col-12 col-sm-12\">\r\n                                          <label><b>Pagar com:</b></label><br>                  \r\n                                          <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                             <input type=\"radio\" class=\"custom-control-input\" id=\"boleto\" name=\"meioPagamento\" value=\"1\" (change)=\"selecionarTipoPagamento()\" checked>\r\n                                             <label class=\"custom-control-label\" for=\"boleto\"><i class=\"fa fa-file-invoice-dollar\"></i> - Boleto</label>\r\n                                          </div>\r\n                                          <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                             <input type=\"radio\" class=\"custom-control-input\" id=\"cartao\" name=\"meioPagamento\" value=\"2\" (change)=\"selecionarTipoPagamento()\">\r\n                                             <label class=\"custom-control-label\" for=\"cartao\"><i class=\"fa fa-credit-card\"></i> - Cartão</label>\r\n                                          </div>\r\n                                          <br>\r\n                                       </div>\r\n                                    </div>\r\n                                    <div class=\"row\" [hidden]=\"pagamento.tipo=='B'\">\r\n                                       <div class=\"col-12\">\r\n                                          <hr>\r\n                                       </div>\r\n                                       <div class=\"col-md-6 mb-3\">\r\n                                          <label for=\"cc-name\">Nome no cartão</label>\r\n                                          <input type=\"text\" class=\"form-control\" formControlName=\"cc_nome\" id=\"cc-name\"  placeholder=\"\" required>\r\n                                          <small class=\"text-muted\">Nome conforme exibido no cartão</small>\r\n                                          <div class=\"invalid-feedback\">\r\n                                             Nome conforme exibido no cartão\r\n                                          </div>\r\n                                       </div>\r\n                                       <div class=\"col-md-6 mb-3\" >\r\n                                          <label for=\"cc-number\">Numero do cartão</label>\r\n                                          <input type=\"text\" class=\"form-control\" matInput mask=\"0000 0000 0000 0000\" formControlName=\"cc_numero\"  id=\"cc-number\" placeholder=\"\" required>\r\n                                          <div class=\"invalid-feedback\">\r\n                                             O número do cartão de crédito é obrigatório\r\n                                          </div>\r\n                                       </div>\r\n                                    </div>\r\n                                    <div class=\"row\" [hidden]=\"pagamento.tipo=='B'\">\r\n                                       <div class=\"col-md-3 mb-3\">\r\n                                          <label for=\"cc-expiration\">Vencimento</label>\r\n                                          <input type=\"text\" class=\"form-control\" matInput mask=\"00/00\" formControlName=\"cc_expiracao\" id=\"cc-expiration\"  placeholder=\"\" required>\r\n                                          <div class=\"invalid-feedback\">\r\n                                             Data de Vencimento obrigatório\r\n                                          </div>\r\n                                       </div>\r\n                                       <div class=\"col-md-3 mb-3\">\r\n                                          <label for=\"cc-expiration\">CVV</label>\r\n                                          <input type=\"text\" class=\"form-control\" matInput mask=\"0000\" formControlName=\"cc_cod_seguranca\" id=\"cc-cvv\"  placeholder=\"\" required>\r\n                                          <div class=\"invalid-feedback\">\r\n                                             Codigo de segurança obrigatório\r\n                                          </div>\r\n                                       </div>\r\n                                       <div class=\"col-md-3 mb-3\">\r\n                                          <label for=\"cc-expiration\">Qtd de Parcelas</label>\r\n                                          <select formControlName=\"cc_qtd_parcelas\" class=\"form-control\" placeholder=\"\">\r\n                                          <option *ngFor=\"let t of listaQtdParcelas\" [value]=\"t.codigo\">{{ t.descricao }}</option>\r\n                                          </select>\r\n                                       </div>\r\n                                    </div>\r\n                                    <div class=\"col-12 col-sm-12\">\r\n                                       <div class=\"mx-auto\">\r\n                                          <br> <button type=\"button\" (click)=\"checkOut()\"  id=\"btnCheckout\" class=\"btn btn-primary text-right\" >FINALIZAR</button>\r\n                                          &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                          <button type=\"button\" (click)=\"voltar()\" class=\"btn btn-secondary text-right\"  >VOLTAR</button>      \r\n                                          <br><br><br>                    \r\n                                          <hr>\r\n                                       </div>\r\n                                    </div>\r\n                                 </div>\r\n                                 <!--/.Card-->\r\n                                 </div>\r\n                              </div>\r\n                              <!--Grid column-->\r\n                              <!--Grid column-->\r\n                              <div class=\"col-md-4 mb-4\">\r\n                                 <!-- Heading -->\r\n                                 <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n                                    <span class=\"text-muted\">Seu Carrinho</span>\r\n                                    <span class=\"badge badge-secondary badge-pill\">{{listaCarrinho.length}}</span>\r\n                                 </h4>\r\n                                 <!-- Cart -->\r\n                                 <ul *ngFor=\"let reg of listaCarrinho\" class=\"list-group mb-3 z-depth-1\">\r\n                                    <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n                                       <div>\r\n                                          <h6 class=\"my-0\">{{reg.descricao}}</h6>\r\n                                          <!--small class=\"text-muted\">{{reg.detalhe}}</small-->\r\n                                       </div>\r\n                                       <span class=\"text-muted\">R$ {{reg.valor}}</span>\r\n                                    </li>\r\n                                 </ul>\r\n                                 <ul class=\"list-group mb-3 z-depth-1\">\r\n                                    <li  class=\"list-group-item d-flex justify-content-between bg-light\">\r\n                                       <div [hidden]= \"! cupomValido\" class=\"text-success\">\r\n                                          <h6 class=\"my-0\">Desconto</h6>\r\n                                          <small>CUPOM Promocional</small>\r\n                                       </div>\r\n                                       <span [hidden]= \"! cupomValido\" class=\"text-success\">-$R$ {{valorCupom}}</span>\r\n                                    </li>\r\n                                    <li class=\"list-group-item d-flex justify-content-between\">\r\n                                       <span>Total (R$)</span>\r\n                                       <strong>{{valor}}</strong>\r\n                                    </li>\r\n                                 </ul>\r\n                                 <!-- Cart -->\r\n                                 <!-- Promo code -->\r\n                                 <div class=\"input-group\">\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"cupom\" id=\"cupom\" placeholder=\"Possui um cupom de desconto ?\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n                                    <div class=\"input-group-append\">\r\n                                       <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"getCupom()\" title=\"Atualizar\"><i class=\"fas fa-sync-alt fa-lg\"></i></button>                                \r\n                                    </div>\r\n                                 </div>\r\n                                 <!-- Promo code -->\r\n                              </div>\r\n                              <!--Grid column-->\r\n                           </div>\r\n                           <!--Grid row-->\r\n                        </div>\r\n                     </main>\r\n                     <!--Main layout-->\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </form>\r\n</body>"

/***/ }),

/***/ "./src/app/inscricoes/inscricoes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/inscricoes/inscricoes.component.ts ***!
  \****************************************************/
/*! exports provided: InscricoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscricoesComponent", function() { return InscricoesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/dropdown.service */ "./src/app/shared/services/dropdown.service.ts");
/* harmony import */ var _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/consulta-cep.service */ "./src/app/shared/services/consulta-cep.service.ts");
/* harmony import */ var _shared_form_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/form-validation */ "./src/app/shared/form-validation.ts");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inscricoes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inscricoes.service */ "./src/app/inscricoes/inscricoes.service.ts");
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jsencrypt */ "../node_modules/jsencrypt/lib/index.js");
/* harmony import */ var moip_sdk_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moip-sdk-js */ "../node_modules/moip-sdk-js/index.js");
/* harmony import */ var moip_sdk_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moip_sdk_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wirecard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wirecard.service */ "./src/app/inscricoes/wirecard.service.ts");
/* harmony import */ var _wireCardObjects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wireCardObjects */ "./src/app/inscricoes/wireCardObjects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var InscricoesComponent = /** @class */ (function () {
    function InscricoesComponent(fb, dropdownService, authService, router, cepService, service, serviceWireCard, http) {
        this.fb = fb;
        this.dropdownService = dropdownService;
        this.authService = authService;
        this.router = router;
        this.cepService = cepService;
        this.service = service;
        this.serviceWireCard = serviceWireCard;
        this.http = http;
        this.carregando = false;
        this.alerts = [];
        this.paises = [];
        this.estados = [];
        this.cidades = [];
        this.subscription = null;
        this.lista = new Array();
        this.listaOriginal = new Array();
        this.listaCarrinho = [];
        this.valor = null;
        this.ocultarCupom = true;
        this.valorCupom = 0;
        this.cupomValido = false;
        this.checkoutEmAndamento = false;
        //MOSTRA DIV PAGAMENTO CONFIRMADO
        this.pagamento = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_14__["Pagamento"]();
        this.listaQtdParcelas = [{ codigo: '1', descricao: 'A Vista' }, { codigo: '2', descricao: '2 x ' }, { codigo: '3', descricao: '3x ' }, { codigo: '4', descricao: '4x ' }];
    }
    ;
    InscricoesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var campoCep = document.getElementById('cep');
        this.dropdownService.getCidades(this.form.get('uf').value).subscribe(function (dados) {
            _this.cidades = dados;
            _this.cepService.consultaCEP(_this.form.get('cep').value).subscribe(function (dados) {
                _this.populaDadosForm(dados);
            });
        });
    };
    InscricoesComponent.prototype.ngOnInit = function () {
        /*    this.subscription = this.serviceWireCard.configurarNotificacoes()
            .subscribe(
            response => {
              alert('Deu Certo');
            },
            err => {
              alert('Deu Errado');    });*/
        var _this = this;
        //MOSTRA DIV PAGAMENTO CONFIRMADO
        this.pagamento.confirmado = false;
        this.pagamento.erro = false;
        this.pagamento.processado = false;
        this.carregando = true;
        this.subscription = this.service.getEventos()
            .subscribe(function (response) {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                _this.lista = response.dados;
                _this.listaOriginal = response.dados;
            }
            else {
                _this.lista = [];
                _this.listaOriginal = [];
                _this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
            }
            _this.carregando = false;
        }, function (err) {
            _this.carregando = false;
            _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
        var jsonUsuario;
        if (localStorage.getItem("usuario") == null) {
            jsonUsuario = { "cpf": "", "nome": "", "email": "", "sexo": "", "telefone": "", "celular": "", "endereco": "", "bairro": "", "cep": "", "cidade": "", "uf": "", "pais": "", "numRegistro": "", "categoria": "", "origem": "" };
            jsonUsuario.cpf = localStorage.getItem("cpf");
        }
        else {
            jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        }
        this.form = this.fb.group({
            nome: [jsonUsuario.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(100)]],
            email: [jsonUsuario.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            dataNascimento: [jsonUsuario.dataNascimentoFormatada],
            categoria: [jsonUsuario.categoria],
            cpf: [jsonUsuario.cpf],
            celular: [jsonUsuario.celular],
            origem: [jsonUsuario.origem],
            cep: [jsonUsuario.cep, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _shared_form_validation__WEBPACK_IMPORTED_MODULE_7__["cepValidator"]]],
            complemento: [jsonUsuario.complemento],
            logradouro: [jsonUsuario.logradouro, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            bairro: [jsonUsuario.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cidade: [jsonUsuario.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            uf: [jsonUsuario.uf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cupom: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cc_nome: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cc_numero: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cc_expiracao: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cc_cod_seguranca: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cc_qtd_parcelas: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.dropdownService.getPaises().subscribe(function (dados) {
            _this.paises = dados;
            _this.dropdownService.getEstadosBr().subscribe(function (dados) {
                _this.estados = dados;
                _this.carregando = false;
            });
        });
        this.form.get('uf').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (uf) { return console.log('Novo estado: ', uf); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (uf) { return _this.estados.filter(function (e) { return e.sigla === uf; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (estados) { return estados && estados.length > 0 ? estados[0].id : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (estadoId) { return _this.dropdownService.getCidades(estadoId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log)).subscribe(function (cidades) { return _this.cidades = cidades; });
        this.form.get('cep').statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) { return console.log('status CEP:', value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (status) { return status === 'VALID' ?
            _this.cepService.consultaCEP(_this.form.get('cep').value)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])(); }))
            .subscribe(function (dados) { return dados ? _this.populaDadosForm(dados) : {}; });
    };
    InscricoesComponent.prototype.getCupom = function () {
        var _this = this;
        var campoCupom = document.getElementById('cupom');
        this.subscription = this.service.getCupom(campoCupom.value)
            .subscribe(function (response) {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                _this.valorCupom = Number(response.dados.valor).toFixed(2);
                ;
                _this.cupomValido = true;
                _this.calcularValor();
            }
            else {
                _this.valorCupom = 0;
                _this.cupomValido = false;
                _this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
                _this.calcularValor();
            }
            _this.carregando = false;
        }, function (err) {
            _this.carregando = false;
            _this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
    };
    InscricoesComponent.prototype.selecionarTipoPagamento = function () {
        var campoCartao = document.getElementById('cartao');
        if (campoCartao.checked) {
            this.pagamento.tipo = "C";
        }
        else {
            this.pagamento.tipo = "B";
        }
        ;
    };
    InscricoesComponent.prototype.populaDadosForm = function (dados) {
        // this.formulario.setValue({});
        this.form.patchValue({
            uf: dados.uf,
            cidade: dados.localidade,
            logradouro: dados.logradouro,
            // cep: dados.cep,
            complemento: dados.complemento,
            bairro: dados.bairro,
        });
    };
    InscricoesComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    InscricoesComponent.prototype.getLabelField = function (fieldName) {
        return Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_7__["getLabelAllFields"])(fieldName);
    };
    InscricoesComponent.prototype.calcularValor = function () {
        this.descontoInscritosCONAD();
        this.listaCarrinho = [];
        this.valor = 0;
        var e;
        for (var _i = 0, _a = this.lista; _i < _a.length; _i++) {
            e = _a[_i];
            var campo = document.getElementById('id' + e.id);
            if (campo.checked) {
                this.valor = this.valor + Number(e.valor);
                this.listaCarrinho.push(e);
            }
        }
        this.valor = Number(this.valor - this.valorCupom).toFixed(2);
        this.listaQtdParcelas = [{ codigo: '1', descricao: 'A Vista' }];
        this.listaQtdParcelas.push({ codigo: '2', descricao: '2 x de R$ ' + Number(this.valor / 2).toFixed(2) });
        this.listaQtdParcelas.push({ codigo: '3', descricao: '3 x de R$ ' + Number(this.valor / 3).toFixed(2) });
        this.listaQtdParcelas.push({ codigo: '4', descricao: '4 x de R$ ' + Number(this.valor / 4).toFixed(2) });
    };
    InscricoesComponent.prototype.descontoInscritosCONAD = function () {
        this.lista = new Array();
        var campo = document.getElementById('id99');
        if (campo.checked) {
            var a;
            for (var _i = 0, _a = this.listaOriginal; _i < _a.length; _i++) {
                a = _a[_i];
                var b = a;
                if (a.id == 1 || a.id == 2) {
                    a.valor = 0.00;
                }
                this.lista.push(a);
            }
        }
        else {
            var a;
            for (var _b = 0, _c = this.listaOriginal; _b < _c.length; _b++) {
                a = _c[_b];
                var b = a;
                if (a.id == 1 || a.id == 2) {
                    a.valor = 25.00;
                }
                this.lista.push(a);
            }
        }
    };
    InscricoesComponent.prototype.ativarCupom = function () {
        this.ocultarCupom = false;
    };
    InscricoesComponent.prototype.proximo = function () {
        if (Number(this.valor) <= 0) {
            this.alerts = Array.from([{ type: 'danger', message: 'Para proseguir é necessário selecionar um dos eventos abaixo' }]);
            return;
        }
        this.alerts = [];
        this.checkoutEmAndamento = true;
    };
    InscricoesComponent.prototype.checkOut = function () {
        var _this = this;
        this.pagamento.alerts = [];
        this.desabilitarCampos();
        this.carregando = true;
        this.pagamento.processado = true;
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        //VALIDA OS DADOS DO CARTÃO ANTES DE INICIAR
        if (!this.validarPagamento()) {
            this.carregando = false;
            this.pagamento.processado = false;
            this.habilitarCampos();
            return false;
        }
        // 1 PASSO - VERIFICA SE O USUÁRIO JÁ ESTA CADASTRADO NA WIRECARD
        if (jsonUsuario.id_wirecard.length <= 0) {
            // SE O USUARIO NÃO ESTIVER NA BASE DA WIRECARD INSERE
            this.subscription = this.serviceWireCard.addClienteForm(this.form)
                .subscribe(function (response) {
                console.log("Status" + response.id);
                //ATUALIZA O ID_WIRECARD NA TABELA DE PESSOAS
                _this.service.atualizarID_Wirecard(response.id).subscribe();
                _this.efetuarPagamento(response.id);
            }, function (err) {
                var ownId = _this.form.get('cpf').value + Math.floor(Math.random() * (0 - 99 + 1));
                _this.subscription = _this.serviceWireCard.addCliente(ownId, _this.form)
                    .subscribe(function (response) {
                    console.log("Status" + response.id);
                    //ATUALIZA O ID_WIRECARD NA TABELA DE PESSOAS
                    _this.service.atualizarID_Wirecard(response.id).subscribe();
                    _this.efetuarPagamento(response.id);
                }, function (err) {
                    _this.habilitarCampos();
                    _this.carregando = false;
                    _this.pagamento.processado = false;
                    _this.alerts = Array.from([{ type: 'danger', message: err.error.errors[0].description }]);
                });
            });
        }
        else {
            this.efetuarPagamento(jsonUsuario.id_wirecard);
        }
    };
    InscricoesComponent.prototype.efetuarPagamento = function (id_cliente) {
        var _this = this;
        console.log('Adicionar Pedido');
        // 2 PASSO - CLIENTE JÁ EXISTE NA BASE DA WIRECARD
        //           INSERE O PEDIDO NA WIRECARD            
        this.subscription = this.serviceWireCard.addPedido(id_cliente, this.form, this.valorCupom, this.listaCarrinho)
            .subscribe(function (response) {
            console.log("Pedido incluido: " + response.id);
            console.log("Adicionando Pagamento");
            var campoCartao = document.getElementById('cartao');
            if (campoCartao.checked) {
                _this.pagamento.tipo = "C";
                _this.efetuarPagamentoCartao(response.id);
            }
            else {
                _this.pagamento.tipo = "B";
                // PAGAMENTO PELO BOLETO
                _this.efetuarPagamentoBoleto(response.id);
            }
            ;
        }, function (err) {
            _this.habilitarCampos();
            _this.carregando = false;
            _this.pagamento.processado = false;
            _this.alerts = Array.from([{ type: 'danger', message: err.error.errors[0].description }]);
            console.log(err);
        });
    };
    InscricoesComponent.prototype.efetuarPagamentoCartao = function (id_pedido) {
        var _this = this;
        // const pubKey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi3ySIPM5R2khxvvFD0vEskXclzWtRCSl7KRZKxYj0YRkkEcksRQkEaApQzzEC2Ax8Jx9dNM4un0JnpreSMWG4YjAeQioh4L5E3HU5AkcKdvxlx/QaCfIMj0Wi0554ZCmcviJWH8cVyUxTXMqVpAdhN0fX7GvVaPF8IMO5WpG9z1YBTBfaM/XEfk/JPuvJiG0nnD9ME7pQgn0nuA3v5sbUtdenyBukEEf9qPL6AtWaryhPBQJUlPUMwuj+bilegIXufVbZK3jPVanSwVqfFU3+mBBaKbpMUmEfznS3aplLARNI4Uow+DYed8VSfab9/YPfi2IVIKkG/kv8kl8CiVxKQIDAQAB-----END PUBLIC KEY-----";
        var pubKey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmFLYXWpgi6SrYFZNUDu8S2BiaaSKy9jAs/pHu9bVvJdsVzYdG2Ma01uaTPLq/oG2+o25ggQCbfHxWP+wk/ja+YjSgRnmLGUewSVnp2Er+tpmVILCuq3no/P6XA7ama1YOn26viJBxvL+7TBP3atQCSck12EnMlzTXUTUKjzMRfNTHF5j5E1hjrPDr3P+fkj0nP7+D2qnaYww2s3u8PnbGkNLXkcHsmp9aUijwrUR8g98FT8gjSoBUOCWj09NgfVtGOHS/47GFagAbZMVgc9HCCS5pCMKW49+1UO9Y326B+IMWPZFfZHBuh8BqS81dYsTQwW3qf4ERdYReK9xu1ShKQIDAQAB-----END PUBLIC KEY-----";
        var expiracaoDia = (this.form.get("cc_expiracao").value).substring(0, 2);
        var expiracaoAno = (this.form.get("cc_expiracao").value).substring(2, 4);
        // 3 PASSO - GERA O HASH COM OS DADOS DO CARTÃO
        moip_sdk_js__WEBPACK_IMPORTED_MODULE_12__["MoipCreditCard"]
            .setEncrypter(jsencrypt__WEBPACK_IMPORTED_MODULE_11__["default"], 'ionic')
            .setPubKey(pubKey)
            .setCreditCard({
            number: this.form.get("cc_numero").value,
            cvc: this.form.get("cc_cod_seguranca").value,
            expirationMonth: expiracaoDia,
            expirationYear: expiracaoAno
        })
            .hash()
            .then(function (hash) {
            // 4 PASSO - GERA PAGAMENTO PELO CARTÃO DE CRÉDITO
            _this.subscription = _this.serviceWireCard.addPagamentoCartao(id_pedido, _this.form, hash)
                .subscribe(function (response) {
                if (response.status == 'CANCELLED') {
                    _this.pagamento.confirmado = false;
                    _this.carregando = false;
                    _this.pagamento.erro = true;
                    _this.pagamento.erroTipo = response.status;
                    _this.pagamento.alerts = Array.from([{ type: 'danger', message: 'Não foi possível confirmar este pagamento' }]);
                }
                if (response.status == 'WAITING') {
                    _this.pagamento.confirmado = false;
                    _this.carregando = false;
                    _this.pagamento.erro = true;
                    _this.pagamento.erroTipo = response.status;
                    _this.pagamento.alerts = Array.from([{ type: 'warning', message: 'Ainda não foi possível confirmar este pagamento, estamos aguardando o retorno da operadora de cartão' }]);
                }
                if (response.status == 'IN_ANALYSIS') {
                    _this.pagamento.confirmado = false;
                    _this.carregando = false;
                    _this.pagamento.erro = true;
                    _this.pagamento.erroTipo = response.status;
                    _this.pagamento.alerts = Array.from([{ type: 'warning', message: 'Ainda não foi possível confirmar este pagamento, estamos aguardando o retorno da operadora de cartão' }]);
                }
                if (response.status == 'AUTHORIZED') {
                    _this.pagamento.erro = false;
                    _this.pagamento.confirmado = true;
                    _this.carregando = false;
                    //ATUALIZA A TABELA DE EVENTOS INSCRITOS
                }
                _this.service.inscricao(response.id, response.status, _this.listaCarrinho, _this.form.get('cupom').value).subscribe();
            }, function (erroResponse) {
                _this.carregando = false;
                _this.pagamento.erro = true;
                _this.pagamento.alerts = Array.from([{ type: 'danger', message: erroResponse.error.errors[0].description }]);
            });
        });
    };
    InscricoesComponent.prototype.efetuarPagamentoBoleto = function (id_pedido) {
        var _this = this;
        // 4 PASSO - GERA PAGAMENTO PELO CARTÃO DE CRÉDITO
        this.subscription = this.serviceWireCard.addPagamentoBoleto(id_pedido, this.form)
            .subscribe(function (response) {
            _this.pagamento.confirmado = true;
            _this.carregando = false;
            //ATUALIZA A TABELA DE EVENTOS INSCRITOS
            _this.service.inscricao(response.id, response.status, _this.listaCarrinho, _this.form.get('cupom').value).subscribe();
            _this.pagamento.url = response._links.payBoleto.printHref;
            var dt = response.fundingInstrument.boleto.expirationDate;
            var data = dt.substring(8, 10) + "/" + dt.substring(5, 7) + "/" + dt.substring(0, 4);
            _this.pagamento.dataVencimento = data;
            _this.pagamento.codigoBarras = response.fundingInstrument.boleto.lineCode;
            _this.pagamento.valor = Number(response.amount.total / 100).toFixed(2);
        }, function (erroResponse) {
            _this.carregando = false;
            _this.pagamento.erro = true;
            _this.pagamento.alerts = Array.from([{ type: 'danger', message: erroResponse.error.errors[0].description }]);
        });
    };
    InscricoesComponent.prototype.validarPagamento = function () {
        var campoCartao = document.getElementById('cartao');
        if (campoCartao.checked) {
            // PAGAMENTO PELO CARTÃO DE CRÉDITO
            if (this.form.get("cc_nome").value == "") {
                this.carregando = false;
                this.alerts = Array.from([{ type: 'danger', message: "Nome do titular do cartão não informado" }]);
                return false;
            }
            if (this.form.get("cc_numero").value == "") {
                this.carregando = false;
                this.alerts = Array.from([{ type: 'danger', message: "Número do cartão não informado" }]);
                return false;
            }
            if (this.form.get("cc_expiracao").value == "") {
                this.carregando = false;
                this.alerts = Array.from([{ type: 'danger', message: "Data de Expiração do cartão não informado" }]);
                return false;
            }
            if (this.form.get("cc_cod_seguranca").value == "") {
                this.carregando = false;
                this.alerts = Array.from([{ type: 'danger', message: "Código de segurança do cartão não informado" }]);
                return false;
            }
        }
        return true;
    };
    InscricoesComponent.prototype.logoff = function () {
        this.authService.logoff();
        this.router.navigate(['/login']);
    };
    InscricoesComponent.prototype.voltar = function () {
        this.alerts = [];
        if (this.checkoutEmAndamento) {
            this.checkoutEmAndamento = false;
        }
        else {
            this.router.navigate(['/areaParticipante']);
        }
    };
    InscricoesComponent.prototype.sair = function () {
        this.router.navigate(['/areaParticipante']);
    };
    InscricoesComponent.prototype.desabilitarCampos = function () {
        this.form.disable();
        document.getElementById("btnCheckout").disabled = true;
    };
    InscricoesComponent.prototype.habilitarCampos = function () {
        this.form.enable();
        document.getElementById("btnCheckout").disabled = false;
    };
    InscricoesComponent.prototype.copyToClipBoard = function (val) {
        var selBox = document.createElement('textarea');
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
    };
    InscricoesComponent.prototype.openUrl = function (url) {
        window.open(url, "_blank");
    };
    InscricoesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inscricoes',
            template: __webpack_require__(/*! ./inscricoes.component.html */ "./src/app/inscricoes/inscricoes.component.html"),
            styles: [__webpack_require__(/*! ./inscricoes.component.css */ "./src/app/inscricoes/inscricoes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["DropdownService"],
            _login_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_6__["ConsultaCepService"],
            _inscricoes_service__WEBPACK_IMPORTED_MODULE_10__["InscricoesService"],
            _wirecard_service__WEBPACK_IMPORTED_MODULE_13__["WireCardService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], InscricoesComponent);
    return InscricoesComponent;
}());



/***/ }),

/***/ "./src/app/inscricoes/inscricoes.service.ts":
/*!**************************************************!*\
  !*** ./src/app/inscricoes/inscricoes.service.ts ***!
  \**************************************************/
/*! exports provided: InscricoesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscricoesService", function() { return InscricoesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InscricoesService = /** @class */ (function () {
    function InscricoesService(http) {
        this.http = http;
        this.API_GET_EVENTOS = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "inscricoes/getEventos.php";
        this.API_ATUALIZAR_ID_WIRECARD = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "inscricoes/atualizarIdWirecard.php";
        this.API_GET_CUPOM = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "inscricoes/getCupom.php";
        this.API_SALVAR_INSCRICAO = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "inscricoes/getEventos.php";
        this.API_INSCRICOES = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "inscricoes/index.php";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    InscricoesService.prototype.getEventos = function () {
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        return this.http.post(this.API_GET_EVENTOS, { cpf: jsonUsuario.cpf }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    InscricoesService.prototype.atualizarID_Wirecard = function (id) {
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        return this.http.post(this.API_ATUALIZAR_ID_WIRECARD, { cpf: jsonUsuario.cpf, id_wirecard: id }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    InscricoesService.prototype.inscricao = function (id, status_wirecard, lista, id_cupom) {
        var id_eventos = "";
        var e;
        for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
            e = lista_1[_i];
            id_eventos = id_eventos + e.id + ", ";
        }
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        return this.http.post(this.API_INSCRICOES, { cpf: jsonUsuario.cpf, id_pagamento_wirecard: id, eventos: id_eventos, status: status_wirecard, cupom: id_cupom }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    InscricoesService.prototype.getCupom = function (nomeCupom) {
        return this.http.post(this.API_GET_CUPOM, { cupom: nomeCupom }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    InscricoesService.prototype.salvar = function (form) {
        var formObj = form.getRawValue(); // {name: '', description: ''}
        var serializedForm = JSON.stringify(formObj);
        return this.http.post(this.API_SALVAR_INSCRICAO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    InscricoesService.prototype.geBoletoGerado = function (url) {
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    InscricoesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InscricoesService);
    return InscricoesService;
}());



/***/ }),

/***/ "./src/app/inscricoes/wireCardObjects.ts":
/*!***********************************************!*\
  !*** ./src/app/inscricoes/wireCardObjects.ts ***!
  \***********************************************/
/*! exports provided: UsuarioWireCard, TaxDocumentObject, ShippingAddressObject, PedidoWireCard, CustomerObject, AmountObject, SubTotalObject, ProductObject, PagamentoCartaoWireCard, PagamentoBoletoWireCard, FundingInstrumentCartaoObject, FundingInstrumentBoletoObject, CreditCardObject, BoletoObject, InstructionLinesObject, HolderObject, PhoneObject, BillingAddressObject, DeviceObject, GeoLocationObject, Pagamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioWireCard", function() { return UsuarioWireCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxDocumentObject", function() { return TaxDocumentObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressObject", function() { return ShippingAddressObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoWireCard", function() { return PedidoWireCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerObject", function() { return CustomerObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountObject", function() { return AmountObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTotalObject", function() { return SubTotalObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductObject", function() { return ProductObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamentoCartaoWireCard", function() { return PagamentoCartaoWireCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamentoBoletoWireCard", function() { return PagamentoBoletoWireCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundingInstrumentCartaoObject", function() { return FundingInstrumentCartaoObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundingInstrumentBoletoObject", function() { return FundingInstrumentBoletoObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardObject", function() { return CreditCardObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoObject", function() { return BoletoObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionLinesObject", function() { return InstructionLinesObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolderObject", function() { return HolderObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneObject", function() { return PhoneObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressObject", function() { return BillingAddressObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceObject", function() { return DeviceObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoLocationObject", function() { return GeoLocationObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagamento", function() { return Pagamento; });
var UsuarioWireCard = /** @class */ (function () {
    function UsuarioWireCard() {
    }
    return UsuarioWireCard;
}());

var TaxDocumentObject = /** @class */ (function () {
    function TaxDocumentObject() {
    }
    return TaxDocumentObject;
}());

var ShippingAddressObject = /** @class */ (function () {
    function ShippingAddressObject() {
    }
    return ShippingAddressObject;
}());

//PEDIDO
var PedidoWireCard = /** @class */ (function () {
    function PedidoWireCard() {
        this.items = new Array();
    }
    return PedidoWireCard;
}());

var CustomerObject = /** @class */ (function () {
    function CustomerObject() {
    }
    return CustomerObject;
}());

var AmountObject = /** @class */ (function () {
    function AmountObject() {
        this.currency = "BRL";
    }
    return AmountObject;
}());

var SubTotalObject = /** @class */ (function () {
    function SubTotalObject() {
    }
    return SubTotalObject;
}());

var ProductObject = /** @class */ (function () {
    function ProductObject() {
        this.category = "OTHER_CATEGORIES";
        this.quantity = "1";
    }
    return ProductObject;
}());

// PAGAMENTO
var PagamentoCartaoWireCard = /** @class */ (function () {
    function PagamentoCartaoWireCard() {
        this.statementDescriptor = "CONAD 2021";
    }
    return PagamentoCartaoWireCard;
}());

var PagamentoBoletoWireCard = /** @class */ (function () {
    function PagamentoBoletoWireCard() {
        this.statementDescriptor = "CONAD 2021";
    }
    return PagamentoBoletoWireCard;
}());

var FundingInstrumentCartaoObject = /** @class */ (function () {
    function FundingInstrumentCartaoObject() {
    }
    return FundingInstrumentCartaoObject;
}());

var FundingInstrumentBoletoObject = /** @class */ (function () {
    function FundingInstrumentBoletoObject() {
    }
    return FundingInstrumentBoletoObject;
}());

var CreditCardObject = /** @class */ (function () {
    function CreditCardObject() {
        this.store = "false";
    }
    return CreditCardObject;
}());

var BoletoObject = /** @class */ (function () {
    function BoletoObject() {
        this.logoUri = "https://conad.adm.br/sistemas/inscricoes-api/img/logo.png";
    }
    return BoletoObject;
}());

var InstructionLinesObject = /** @class */ (function () {
    function InstructionLinesObject() {
    }
    return InstructionLinesObject;
}());

var HolderObject = /** @class */ (function () {
    function HolderObject() {
    }
    return HolderObject;
}());

var PhoneObject = /** @class */ (function () {
    function PhoneObject() {
    }
    return PhoneObject;
}());

var BillingAddressObject = /** @class */ (function () {
    function BillingAddressObject() {
    }
    return BillingAddressObject;
}());

var DeviceObject = /** @class */ (function () {
    function DeviceObject() {
    }
    return DeviceObject;
}());

var GeoLocationObject = /** @class */ (function () {
    function GeoLocationObject() {
    }
    return GeoLocationObject;
}());

// Dados do Pagamento 
var Pagamento = /** @class */ (function () {
    function Pagamento() {
        this.tipo = "B";
    }
    return Pagamento;
}());



/***/ }),

/***/ "./src/app/inscricoes/wirecard.service.ts":
/*!************************************************!*\
  !*** ./src/app/inscricoes/wirecard.service.ts ***!
  \************************************************/
/*! exports provided: WireCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WireCardService", function() { return WireCardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wireCardObjects */ "./src/app/inscricoes/wireCardObjects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WireCardService = /** @class */ (function () {
    function WireCardService(http) {
        this.http = http;
        //  private readonly API_URL_AMBIENTE = "https://sandbox.moip.com.br/v2/";
        this.API_URL_AMBIENTE = "https://api.moip.com.br/v2/";
        this.API_NOVO_USUARIO = this.API_URL_AMBIENTE + 'customers';
        this.API_NOVO_PEDIDO = this.API_URL_AMBIENTE + 'orders';
        this.API_NOVO_PAGAMENTO = this.API_URL_AMBIENTE + 'orders';
        this.API_CONSULTA_PEDIDOS = this.API_URL_AMBIENTE + 'orders?q=';
        this.API_GET_PEDIDO = this.API_URL_AMBIENTE + 'orders/';
        this.API_SETAR_NOTIFICACOES = this.API_URL_AMBIENTE + '/preferences/notifications';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                //DESENV      'Authorization':	'Basic ' + "U1NXTE4yM0lCUFVZTFNNWFJFQUtVSTdaNllFM01aQ1c6VFdIVkdRRVBKWEpOWEw2MUZWSVBRVklEUTlCM0lOQTVNM1Y0UTc1Rw==",
                'Authorization': 'Basic ' + "WVRDT0dQS1JPNExCUDQyV1pLRERIRE5DMktET1dDU1U6REtBRFNONzJLR1VFRk8zTUJVSk5GQUVNR0c4TDhDVVA0VFg5VUFRVw==",
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    WireCardService.prototype.addClienteForm = function (form) {
        var formObj = form.getRawValue();
        return this.addCliente(formObj.cpf, form);
    };
    WireCardService.prototype.addCliente = function (ownId, form) {
        //    let formObj = form.getRawValue(); 
        var formObj = JSON.parse(localStorage.getItem("usuario"));
        var usuarioWireCard = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["UsuarioWireCard"]();
        usuarioWireCard.ownId = ownId;
        usuarioWireCard.fullname = formObj.nome;
        usuarioWireCard.email = formObj.email;
        usuarioWireCard.phone = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["PhoneObject"]();
        usuarioWireCard.phone.countryCode = "55";
        usuarioWireCard.phone.areaCode = formObj.prefixoCelular;
        usuarioWireCard.phone.number = formObj.numeroCelular;
        usuarioWireCard.birthDate = formObj.dataNascimento;
        usuarioWireCard.taxDocument = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["TaxDocumentObject"]();
        usuarioWireCard.taxDocument.type = "CPF";
        usuarioWireCard.taxDocument.number = formObj.cpf;
        usuarioWireCard.shippingAddress = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["ShippingAddressObject"]();
        usuarioWireCard.shippingAddress.city = formObj.cidade;
        usuarioWireCard.shippingAddress.complement = "";
        usuarioWireCard.shippingAddress.country = "BR";
        usuarioWireCard.shippingAddress.district = formObj.bairro;
        usuarioWireCard.shippingAddress.state = formObj.uf;
        usuarioWireCard.shippingAddress.street = formObj.endereco;
        usuarioWireCard.shippingAddress.streetNumber = "";
        usuarioWireCard.shippingAddress.zipCode = formObj.cep;
        var serializedForm = JSON.stringify(usuarioWireCard);
        return this.http.post(this.API_NOVO_USUARIO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    WireCardService.prototype.addPedido = function (id_wirecard, form, valorCupom, listaProdutos) {
        var formObj = form.getRawValue();
        var pedidoWireCard = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["PedidoWireCard"]();
        pedidoWireCard.ownId = formObj.cpf;
        pedidoWireCard.amount = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["AmountObject"]();
        pedidoWireCard.amount.subtotals = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["SubTotalObject"]();
        pedidoWireCard.amount.subtotals.discount = Number(Number(valorCupom) * 100);
        ;
        var e;
        for (var _i = 0, listaProdutos_1 = listaProdutos; _i < listaProdutos_1.length; _i++) {
            e = listaProdutos_1[_i];
            var productObject = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["ProductObject"]();
            productObject.product = e.descricao;
            productObject.detail = e.detalhe;
            productObject.price = Number(Number(e.valor) * 100);
            pedidoWireCard.items.push(productObject);
        }
        pedidoWireCard.customer = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["CustomerObject"]();
        pedidoWireCard.customer.id = id_wirecard;
        var serializedForm = JSON.stringify(pedidoWireCard);
        return this.http.post(this.API_NOVO_PEDIDO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    WireCardService.prototype.addPagamentoCartao = function (id_ord, f, hash) {
        var form = f.getRawValue();
        var pagamentoWireCard = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["PagamentoCartaoWireCard"]();
        pagamentoWireCard.installmentCount = form.cc_qtd_parcelas;
        pagamentoWireCard.fundingInstrument = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["FundingInstrumentCartaoObject"]();
        pagamentoWireCard.fundingInstrument.method = "CREDIT_CARD";
        pagamentoWireCard.fundingInstrument.creditCard = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["CreditCardObject"]();
        pagamentoWireCard.fundingInstrument.creditCard.hash = hash;
        pagamentoWireCard.fundingInstrument.creditCard.store = "false";
        pagamentoWireCard.fundingInstrument.creditCard.holder = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["HolderObject"]();
        pagamentoWireCard.fundingInstrument.creditCard.holder.fullname = form.nome;
        if (form.dataNascimento.length == 8) {
            pagamentoWireCard.fundingInstrument.creditCard.holder.birthdate = form.dataNascimento.substring(4, 8) + "-" + form.dataNascimento.substring(2, 4) + "-" + form.dataNascimento.substring(0, 2);
        }
        else {
            pagamentoWireCard.fundingInstrument.creditCard.holder.birthdate = form.dataNascimento.substring(6, 10) + "-" + form.dataNascimento.substring(3, 5) + "-" + form.dataNascimento.substring(0, 2);
        }
        pagamentoWireCard.fundingInstrument.creditCard.holder.taxDocument = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["TaxDocumentObject"]();
        pagamentoWireCard.fundingInstrument.creditCard.holder.taxDocument.type = "CPF";
        pagamentoWireCard.fundingInstrument.creditCard.holder.taxDocument.number = form.cpf;
        pagamentoWireCard.fundingInstrument.creditCard.holder.phone = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["PhoneObject"]();
        pagamentoWireCard.fundingInstrument.creditCard.holder.phone.countryCode = "55";
        pagamentoWireCard.fundingInstrument.creditCard.holder.phone.areaCode = form.celular.substring(0, 2);
        pagamentoWireCard.fundingInstrument.creditCard.holder.phone.number = form.celular.substring(3, 15);
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["BillingAddressObject"]();
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.city = form.cidade;
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.district = "";
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.street = form.logradouro;
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.streetNumber = "";
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.zipCode = form.cep.replace(".", "").replace("-", "");
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.state = form.uf;
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.country = "BRA";
        pagamentoWireCard.device = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["DeviceObject"]();
        pagamentoWireCard.device.ip = "127.0.0.1";
        pagamentoWireCard.device.geolocation = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["GeoLocationObject"]();
        pagamentoWireCard.device.geolocation.latitude = "-33.867";
        pagamentoWireCard.device.geolocation.longitude = "151.206";
        pagamentoWireCard.device.userAgente = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36";
        pagamentoWireCard.device.fingerprint = "QAZXswedCVGrtgBNHyuj";
        var serializedForm = JSON.stringify(pagamentoWireCard);
        return this.http.post(this.API_NOVO_PAGAMENTO + "/" + id_ord + "/payments", serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    WireCardService.prototype.addPagamentoBoleto = function (id_ord, f) {
        var diasVencimento = 5;
        var dataVencimento = new Date(Date.now() + diasVencimento * 24 * 60 * 60 * 1000);
        var dataAtualFormatada = (this.adicionaZero(dataVencimento.getFullYear().toString()) + "-" + (this.adicionaZero(dataVencimento.getMonth() + 1).toString()) + "-" + this.adicionaZero(dataVencimento.getDate()));
        var form = f.getRawValue();
        var pagamentoWireCard = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["PagamentoBoletoWireCard"]();
        pagamentoWireCard.fundingInstrument = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["FundingInstrumentBoletoObject"]();
        pagamentoWireCard.fundingInstrument.method = "BOLETO";
        pagamentoWireCard.fundingInstrument.boleto = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["BoletoObject"]();
        pagamentoWireCard.fundingInstrument.boleto.expirationDate = dataAtualFormatada;
        pagamentoWireCard.fundingInstrument.boleto.instructionLines = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["InstructionLinesObject"]();
        pagamentoWireCard.fundingInstrument.boleto.instructionLines.first = "CONAD 2021 - Congresso Nacional de Administração";
        pagamentoWireCard.fundingInstrument.boleto.instructionLines.second = "Inscrição para o evento";
        pagamentoWireCard.fundingInstrument.boleto.instructionLines.third = "";
        pagamentoWireCard.device = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["DeviceObject"]();
        pagamentoWireCard.device.ip = "127.0.0.1";
        pagamentoWireCard.device.geolocation = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_3__["GeoLocationObject"]();
        pagamentoWireCard.device.geolocation.latitude = "-33.867";
        pagamentoWireCard.device.geolocation.longitude = "151.206";
        pagamentoWireCard.device.userAgente = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36";
        pagamentoWireCard.device.fingerprint = "QAZXswedCVGrtgBNHyuj";
        var serializedForm = JSON.stringify(pagamentoWireCard);
        return this.http.post(this.API_NOVO_PAGAMENTO + "/" + id_ord + "/payments", serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    WireCardService.prototype.consultaPedidos = function (cpf) {
        return this.http.get(this.API_CONSULTA_PEDIDOS + cpf + "&limit=1", this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    WireCardService.prototype.configurarNotificacoes = function () {
        return this.http.get(this.API_SETAR_NOTIFICACOES, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
        /*return this.http.post(this.API_SETAR_NOTIFICACOES, {
           "events": [
             "PAYMENT.AUTHORIZED",
             "PAYMENT.CANCELLED"
           ],
           "target": "http://conad.adm.br/sistemas/inscricoes-api/api/inscricoes/notificacoesV1.php",
           "media": "WEBHOOK"
         }  , this.httpOptions)
           .pipe(
              tap(console.log)
         );    */
    };
    WireCardService.prototype.getPedido = function (id_pedido) {
        return this.http.get(this.API_GET_PEDIDO + id_pedido, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    WireCardService.prototype.adicionaZero = function (numero) {
        if (numero <= 9)
            return "0" + numero;
        else
            return numero;
    };
    WireCardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WireCardService);
    return WireCardService;
}());



/***/ }),

/***/ "./src/app/login/auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/login/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        //    this.mostrarMenuEmitter.emit(false);
        this.router = router;
        this.http = http;
        this.API_LOGIN = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "login/index.php";
        this.API_VALIDAR_CPF = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "login/validarCPF.php";
        this.API_ALTERAR_SENHA = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "login/alterarSenha.php";
        this.API_RECUPERAR_SENHA = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "login/recuperarSenha.php";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        this.router.navigate(['/']);
    }
    AuthService.prototype.login = function (usuario) {
        console.log(usuario);
        return this.http.post(this.API_LOGIN, usuario, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log));
    };
    AuthService.prototype.validarCPF = function (usuario) {
        console.log(usuario);
        return this.http.post(this.API_VALIDAR_CPF, usuario, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log));
    };
    AuthService.prototype.alterarSenha = function (usuario) {
        console.log(usuario);
        return this.http.post(this.API_ALTERAR_SENHA, usuario, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log));
    };
    AuthService.prototype.recuperarSenha = function (usuario) {
        console.log(usuario);
        return this.http.post(this.API_RECUPERAR_SENHA, usuario, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log));
    };
    AuthService.prototype.logoff = function () {
        console.log("LOGOFF Realizado");
        localStorage.removeItem("usuario");
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <p style=\"align-content: center\">\r\n\r\n        <img *ngIf=\"carregando\" class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n      </p>\r\n\r\n    <div [hidden]=\"carregando\" class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n          <div class=\"card card-signin my-5\">\r\n            <div class=\"card-body\"> <img src=\"assets/img/logo.png\" width=\"300px\"><br><br>\r\n              <div class=\"card-header alert-primary\">\r\n            \r\n                <h3>Área do Participante</h3>\r\n                <i class=\"fa fa-sign-in-alt\"></i> Informe seu CPF para prosseguir</div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\"><br>\r\n                  <p *ngFor=\"let alert of alerts\">\r\n                    <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n                      <div [innerHTML]=\"alert.message\"></div>\r\n                    </ngb-alert>\r\n                  </p>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"form-label-group\">\r\n                <label for=\"inputEmail\">CPF:</label>\r\n                <input #loginField [(ngModel)]=\"usuario.login\"  #cpf type=\"text\" matInput mask=\"000.000.000-00\" class=\"form-control\" required value=\"\"\r\n                  autocomplete=\"off\" (keyup.enter)=\"validarCPF()\">\r\n              </div>\r\n\r\n              <div [hidden]=\"cpfNaoCadastrado\" class=\"form-label-group\">\r\n                <label for=\"inputPassword\">Senha</label>\r\n                <input [(ngModel)]=\"usuario.password\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                  placeholder=\"Password\" required (keyup.enter)=\"login()\">\r\n              </div>\r\n              <div class=\"form-label-group\"><br>\r\n                <button class=\"btn btn-secondary\" (click)=\"proximo()\"\r\n                type=\"submit\">PROXIMO</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <button [hidden]=\"cpfNaoCadastrado\" class=\"btn btn-link\" (click)=\"recuperarSenha()\"\r\n                type=\"submit\">Recuperar Senha</button>\r\n\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario */ "./src/app/login/usuario.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.carregando = false;
        this.cpfNaoCadastrado = true;
        this.alerts = [];
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.firstNameElement.nativeElement.focus();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.usuario.login = "";
        this.usuario.password = "";
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.carregando = true;
        this.authService.login(this.usuario).subscribe(function (resp) {
            if (resp.status.codigo == 99) {
                _this.alerts = Array.from([{ type: 'danger', message: 'Usuário ou senha inválidos' }]);
                localStorage.removeItem("usuario");
                _this.carregando = false;
            }
            else {
                _this.usuario.password = "";
                localStorage.setItem("usuario", JSON.stringify(resp.dados));
                console.log("USUARIO AUTENTICADO");
                _this.router.navigate(['/areaParticipante']);
                //        this.carregando = false;
            }
        });
    };
    LoginComponent.prototype.proximo = function () {
        if (this.cpfNaoCadastrado) {
            this.validarCPF();
        }
        else {
            this.login();
        }
    };
    LoginComponent.prototype.validarCPF = function () {
        var _this = this;
        if (this.usuario.login == "") {
            this.alerts = Array.from([{ type: 'danger', message: 'Informe o seu CPF !!!' }]);
            return;
        }
        if (!this.isValidCPF(this.usuario.login)) {
            this.alerts = Array.from([{ type: 'danger', message: 'CPF inválido !!!' }]);
            return;
        }
        this.authService.validarCPF(this.usuario).subscribe(function (dados) {
            if (dados.status.codigo == 99) {
                localStorage.removeItem("usuario");
                localStorage.setItem("cpf", _this.usuario.login);
                _this.carregando = false;
                _this.router.navigate(['/usuario']);
            }
            else {
                _this.carregando = false;
                _this.cpfNaoCadastrado = false;
                document.getElementById("inputPassword").focus();
            }
        });
    };
    LoginComponent.prototype.recuperarSenha = function () {
        var _this = this;
        if (this.usuario.login == "") {
            this.alerts = Array.from([{ type: 'danger', message: 'Informe o seu usuário !!!' }]);
            return;
        }
        this.authService.recuperarSenha(this.usuario).subscribe(function (dados) {
            if (dados.status.codigo == 99) {
                _this.alerts = Array.from([{ type: 'danger', message: dados.status.mensagem }]);
                localStorage.removeItem("usuario");
                _this.carregando = false;
            }
            else {
                _this.alerts = Array.from([{ type: 'success', message: dados.status.mensagem }]);
            }
        });
    };
    LoginComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    LoginComponent.prototype.isValidCPF = function (number) {
        var sum;
        var rest;
        sum = 0;
        if (number == "00000000000")
            return false;
        for (var i = 1; i <= 9; i++)
            sum = sum + parseInt(number.substring(i - 1, i)) * (11 - i);
        rest = (sum * 10) % 11;
        if ((rest == 10) || (rest == 11))
            rest = 0;
        if (rest != parseInt(number.substring(9, 10)))
            return false;
        sum = 0;
        for (i = 1; i <= 10; i++)
            sum = sum + parseInt(number.substring(i - 1, i)) * (12 - i);
        rest = (sum * 10) % 11;
        if ((rest == 10) || (rest == 11))
            rest = 0;
        if (rest != parseInt(number.substring(10, 11)))
            return false;
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginField'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "firstNameElement", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/usuario.ts":
/*!**********************************!*\
  !*** ./src/app/login/usuario.ts ***!
  \**********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/modal-acessoNegado/modal-acessoNegado.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modal-acessoNegado/modal-acessoNegado.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWFjZXNzb05lZ2Fkby9tb2RhbC1hY2Vzc29OZWdhZG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modal-acessoNegado/modal-acessoNegado.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modal-acessoNegado/modal-acessoNegado.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Acesso não autorizado !!!</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p *ngFor=\"let alert of alerts\">\r\n            <ngb-alert [type]=\"alert.type\" [dismissible]=\"false\"><b>ATENÇÃO</b>, você não está autorizado a executar esta operação. Por favor, solicite acesso junto ao gestor.</ngb-alert>\r\n          </p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n   \r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/modal-acessoNegado/modal-acessoNegado.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modal-acessoNegado/modal-acessoNegado.component.ts ***!
  \********************************************************************/
/*! exports provided: ModalAcessoNegadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAcessoNegadoComponent", function() { return ModalAcessoNegadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalAcessoNegadoComponent = /** @class */ (function () {
    function ModalAcessoNegadoComponent(activeModal) {
        this.activeModal = activeModal;
        this.alerts = [
            {
                type: 'danger',
                message: '<b>ATENÇÃO</b>, voçê não está autorizado a executar esta operação. Solicite acesso junto ao gestor.',
            }
        ];
    }
    ;
    ModalAcessoNegadoComponent.prototype.ngOnInit = function () {
    };
    ModalAcessoNegadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-acessoNegado',
            template: __webpack_require__(/*! ./modal-acessoNegado.component.html */ "./src/app/modal-acessoNegado/modal-acessoNegado.component.html"),
            styles: [__webpack_require__(/*! ./modal-acessoNegado.component.css */ "./src/app/modal-acessoNegado/modal-acessoNegado.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalAcessoNegadoComponent);
    return ModalAcessoNegadoComponent;
}());



/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS1uYW8tZW5jb250cmFkYS9wYWdpbmEtbmFvLWVuY29udHJhZGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pagina-nao-encontrada works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts ***!
  \**************************************************************************/
/*! exports provided: PaginaNaoEncontradaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaNaoEncontradaComponent", function() { return PaginaNaoEncontradaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginaNaoEncontradaComponent = /** @class */ (function () {
    function PaginaNaoEncontradaComponent() {
    }
    PaginaNaoEncontradaComponent.prototype.ngOnInit = function () {
    };
    PaginaNaoEncontradaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagina-nao-encontrada',
            template: __webpack_require__(/*! ./pagina-nao-encontrada.component.html */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html"),
            styles: [__webpack_require__(/*! ./pagina-nao-encontrada.component.css */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginaNaoEncontradaComponent);
    return PaginaNaoEncontradaComponent;
}());



/***/ }),

/***/ "./src/app/shared/form-validation.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/form-validation.ts ***!
  \*******************************************/
/*! exports provided: getFormValidationErrors, getErrorMsg, getLabelAllFields, requiredMinCheckbox, cepValidator, equalsTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormValidationErrors", function() { return getFormValidationErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMsg", function() { return getErrorMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelAllFields", function() { return getLabelAllFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredMinCheckbox", function() { return requiredMinCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cepValidator", function() { return cepValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalsTo", function() { return equalsTo; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");

function getFormValidationErrors(controls) {
    var listErros = [];
    Object.keys(controls).forEach(function (key) {
        var control = controls[key];
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
            listErros = listErros.concat(getFormValidationErrors(control.controls));
        }
        var controlErrors = controls[key].errors;
        if (controlErrors !== null) {
            Object.keys(controlErrors).forEach(function (keyError) {
                console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
                listErros.push({ type: "danger", message: getErrorMsg(key, keyError, controlErrors[keyError]) });
            });
        }
    });
    console.log(listErros);
    return listErros;
}
function getErrorMsg(fieldName, validatorName, validatorValue) {
    var config = {
        'required': getLabelAllFields(fieldName) + " \u00E9 obrigat\u00F3rio.",
        'dataInvalida': getLabelAllFields(fieldName) + " inv\u00E1lida. (dd/mm/yyyy)",
        'minlength': getLabelAllFields(fieldName) + " precisa ter no m\u00EDnimo " + validatorValue.requiredLength + " caracteres.",
        'maxlength': getLabelAllFields(fieldName) + " precisa ter no m\u00E1ximo " + validatorValue.requiredLength + " caracteres.",
        'cepInvalido': 'CEP inválido.',
        'emailInvalido': 'Email já cadastrado!',
        'email': 'Email já cadastrado!',
        'ngbDate': 'Selecione a data',
        'equalsTo': 'Campos não são iguais',
        'pattern': 'Campo inválido'
    };
    return config[validatorName];
}
function getLabelAllFields(fieldName) {
    var config = {
        'cpf': 'CPF',
        'nome': 'Nome',
        'tipo': 'Tipo',
        'codigo': 'Codigo',
        'email': 'Email',
        'celular': 'Celular',
        'dataNascimento': 'Data de Nascimento',
        'sexo': 'Sexo',
        'estadoCivil': 'Estado Civil',
        'pai': 'Pai',
        'mae': 'Mãe',
        'nacionalidade': 'Nacionalidade',
        'naturalidade': 'Naturalidade',
        'rg': ' Num. RG',
        'orgaoExpedidor': 'Orgão Expedidor',
        'dataExpedicao': 'Data Expedição',
        'tituloEleitor': 'Titulo de Eleitor',
        'senha': 'Senha',
        'responsavel': 'Responsável',
        'tema': 'Tema',
        'inscricao': 'Inscrição',
        'situacao': 'Situação',
        'processo': 'Nº processo',
        'dataInscricao': 'Data de Inscrição',
        'habilitacao': 'Habilitação',
        'vencimento': 'Data Vencimento',
        'dataCadastro': 'Data do Cadastro',
        'status': 'Status Atual',
        'ano_conclusao': 'Ano de Conclusão',
        'cep': 'CEP',
        'numero': 'Numero',
        'complemento': 'Complemento',
        'rua': 'Rua',
        'logradouro': 'Logradouro',
        'bairro': 'Bairro',
        'cidade': 'Cidade',
        'uf': 'UF',
        'ies': 'IES',
        'curso': 'Curso',
        'periodo': 'Período',
        'data': 'Data',
        'hora': 'Hora',
        'descricao': 'Descrição',
        'palestrante': 'Palestrante',
        'carga_horaria': 'Carga Horária',
        'inscricoes_abertas': 'Inscrições Abertas ?',
        'local': 'Local',
        'prazo': 'Prazo',
        'ies_empresa': 'IES/Empresa',
        'repita_senha': 'Repita a Senha',
    };
    return config[fieldName];
}
function requiredMinCheckbox(min) {
    if (min === void 0) { min = 1; }
    var validator = function (formArray) {
        /* const values = formArray.controls;
        let totalChecked = 0;
        for (let i = 0; i < values.length; i++) {
          if (values[i].value) {
            totalChecked += 1;
          }
        } */
        var totalChecked = formArray.controls
            .map(function (v) { return v.value; })
            .reduce(function (total, current) { return current ? total + current : total; }, 0);
        return totalChecked >= min ? null : { required: true };
    };
    return validator;
}
function cepValidator(control) {
    var cep = control.value;
    if (cep && cep !== '') {
        var validacep = /^[0-9]{8}$/;
        return validacep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
}
function equalsTo(otherField) {
    var validator = function (formControl) {
        if (otherField == null) {
            throw new Error('É necessário informar um campo.');
        }
        if (!formControl.root || !formControl.root.controls) {
            return null;
        }
        var field = formControl.root.get(otherField);
        if (!field) {
            throw new Error('É necessário informar um campo válido.');
        }
        if (field.value !== formControl.value) {
            return { equalsTo: otherField };
        }
        return null;
    };
    return validator;
}


/***/ }),

/***/ "./src/app/shared/ngx-mask/config.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/ngx-mask/config.ts ***!
  \*******************************************/
/*! exports provided: config, NEW_CONFIG, INITIAL_CONFIG, initialConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CONFIG", function() { return NEW_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CONFIG", function() { return INITIAL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfig", function() { return initialConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('config');
var NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NEW_CONFIG');
var INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('INITIAL_CONFIG');
var initialConfig = {
    sufix: '',
    prefix: '',
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    dropSpecialCharacters: true,
    shownMaskExpression: '',
    specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '\"', '\''],
    patterns: {
        '0': {
            pattern: new RegExp('\\d'),
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true
        },
        'A': {
            pattern: new RegExp('\[a-zA-Z0-9\]')
        },
        'S': {
            pattern: new RegExp('\[a-zA-Z\]')
        },
        'd': {
            pattern: new RegExp('\\d'),
        },
        'm': {
            pattern: new RegExp('\\d'),
        },
        'H': {
            pattern: new RegExp('\\d'),
        },
        'h': {
            pattern: new RegExp('\\d'),
        },
        's': {
            pattern: new RegExp('\\d'),
        }
    }
};


/***/ }),

/***/ "./src/app/shared/ngx-mask/mask-applier.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/ngx-mask/mask-applier.service.ts ***!
  \*********************************************************/
/*! exports provided: MaskApplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskApplierService", function() { return MaskApplierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/shared/ngx-mask/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MaskApplierService = /** @class */ (function () {
    function MaskApplierService(_config) {
        this._config = _config;
        this.maskExpression = '';
        this.shownMaskExpression = '';
        this.separator = function (str, char, decimalChar, precision) {
            str += '';
            var x = str.split(decimalChar);
            var decimals = x.length > 1 ? "" + decimalChar + x[1] : '';
            var res = x[0];
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, '$1' + char + '$2');
            }
            if (precision === undefined) {
                return res + decimals;
            }
            else if (precision === 0) {
                return res;
            }
            return res + decimals.substr(0, precision + 1);
        };
        this.percentage = function (str) {
            return Number(str) >= 0 && Number(str) <= 100;
        };
        this.getPrecision = function (maskExpression) {
            var x = maskExpression.split('.');
            if (x.length > 1) {
                return Number(x[x.length - 1]);
            }
            return Infinity;
        };
        this.checkInputPrecision = function (inputValue, precision, decimalMarker) {
            if (precision < Infinity) {
                var precisionRegEx = void 0;
                if (decimalMarker === '.') {
                    precisionRegEx = new RegExp("\\.\\d{" + precision + "}.*$");
                }
                else {
                    precisionRegEx = new RegExp(",\\d{" + precision + "}.*$");
                }
                var precisionMatch = inputValue.match(precisionRegEx);
                if (precisionMatch && precisionMatch[0].length - 1 > precision) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
                else if (precision === 0 && inputValue.endsWith(decimalMarker)) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
            }
            return inputValue;
        };
        this._shift = new Set();
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.sufix = this._config.sufix;
    }
    // tslint:disable-next-line:no-any
    MaskApplierService.prototype.applyMaskWithPattern = function (inputValue, maskAndPattern) {
        var mask = maskAndPattern[0], customPattern = maskAndPattern[1];
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    };
    MaskApplierService.prototype.applyMask = function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
            return '';
        }
        var cursor = 0;
        var result = "";
        var multi = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        var inputArray = inputValue.toString()
            .split('');
        if (maskExpression === 'percent') {
            if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)) {
                inputValue = inputValue.substring(0, inputValue.length - 1);
            }
            if (this.percentage(inputValue)) {
                result = inputValue;
            }
            else {
                result = inputValue.substring(0, inputValue.length - 1);
            }
        }
        else if (maskExpression === 'separator'
            || maskExpression === 'dot_separator' || maskExpression.startsWith('dot_separator')
            || maskExpression === 'coma_separator' || maskExpression.startsWith('coma_separator')) {
            if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[@#!$%^&*()_+|~=`{}\[\]:";<>?\/]/)) {
                inputValue = inputValue.substring(0, inputValue.length - 1);
            }
            var precision = this.getPrecision(maskExpression);
            var strForSep = void 0;
            if (maskExpression === 'separator') {
                if (inputValue.includes(',')
                    && inputValue.endsWith(',') && inputValue.indexOf(',') !== inputValue.lastIndexOf(',')) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
                if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[@#!$%^&*()_+|~=`{}\[\]:.";<>?\/]/)) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
                strForSep = inputValue.replace(/\s/g, '');
                result = this.separator(strForSep, ' ', '.', precision);
            }
            else if (maskExpression === 'dot_separator' || maskExpression.startsWith('dot_separator')) {
                if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[@#!$%^&*()_+|~=`{}\[\]:\s";<>?\/]/)) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
                inputValue = this.checkInputPrecision(inputValue, precision, ',');
                strForSep = inputValue.replace(/\./g, '');
                result = this.separator(strForSep, '.', ',', precision);
            }
            else if (maskExpression === 'coma_separator' || maskExpression.startsWith('coma_separator')) {
                inputValue = this.checkInputPrecision(inputValue, precision, '.');
                strForSep = inputValue.replace(/\,/g, '');
                result = this.separator(strForSep, ',', '.', precision);
            }
            position = result.length + 1;
            cursor = position;
            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                ? inputArray.length
                : cursor;
            this._shift.add(shiftStep + this.prefix.length || 0);
        }
        else {
            // tslint:disable-next-line
            for (var i = 0, inputSymbol = inputArray[0]; i
                < inputArray.length; i++, inputSymbol = inputArray[i]) {
                if (cursor === maskExpression.length) {
                    break;
                }
                if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                    result += inputSymbol;
                    cursor += 2;
                }
                else if (maskExpression[cursor + 1] === '*' && multi
                    && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                    multi = false;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])
                    && maskExpression[cursor + 1]
                        === '*') {
                    result += inputSymbol;
                    multi = true;
                }
                else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                    if (maskExpression[cursor] === 'H') {
                        if (Number(inputSymbol) > 2) {
                            result += 0;
                            cursor += 1;
                            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'h') {
                        if (result === '2' && Number(inputSymbol) > 3) {
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'm') {
                        if (Number(inputSymbol) > 5) {
                            result += 0;
                            cursor += 1;
                            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 's') {
                        if (Number(inputSymbol) > 5) {
                            result += 0;
                            cursor += 1;
                            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'd') {
                        if (Number(inputSymbol) > 3) {
                            result += 0;
                            cursor += 1;
                            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor - 1] === 'd') {
                        if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 31) {
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'm') {
                        if (Number(inputSymbol) > 1) {
                            result += 0;
                            cursor += 1;
                            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor - 1] === 'm') {
                        if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 12) {
                            continue;
                        }
                    }
                    result += inputSymbol;
                    cursor++;
                }
                else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                    result += maskExpression[cursor];
                    cursor++;
                    var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                        ? inputArray.length
                        : cursor;
                    this._shift.add(shiftStep + this.prefix.length || 0);
                    i--;
                }
                else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1
                    && this.maskAvailablePatterns[maskExpression[cursor]]
                    && this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                    cursor++;
                    i--;
                }
                else if ((this.maskExpression[cursor + 1] === '*')
                    && (this._findSpecialChar(this.maskExpression[cursor + 2]))
                    && (this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2]) && multi) {
                    cursor += 3;
                    result += inputSymbol;
                }
            }
        }
        if (result.length + 1 === maskExpression.length
            && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        var shift = 1;
        var newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0);
        var res = "" + this.prefix + result;
        res = this.sufix ? "" + this.prefix + result + this.sufix : "" + this.prefix + result;
        if (result.length === 0) {
            res = "" + this.prefix + result;
        }
        return res;
    };
    MaskApplierService.prototype._findSpecialChar = function (inputSymbol) {
        var symbol = this.maskSpecialCharacters
            .find(function (val) { return val === inputSymbol; });
        return symbol;
    };
    MaskApplierService.prototype._checkSymbolMask = function (inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern
            ? this.customPattern
            : this.maskAvailablePatterns;
        return this.maskAvailablePatterns[maskSymbol]
            && this.maskAvailablePatterns[maskSymbol].pattern
            && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
    };
    MaskApplierService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_1__["config"])),
        __metadata("design:paramtypes", [Object])
    ], MaskApplierService);
    return MaskApplierService;
}());



/***/ }),

/***/ "./src/app/shared/ngx-mask/mask.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/ngx-mask/mask.directive.ts ***!
  \***************************************************/
/*! exports provided: MaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskDirective", function() { return MaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mask_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask.service */ "./src/app/shared/ngx-mask/mask.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MaskDirective = /** @class */ (function () {
    function MaskDirective(
    // tslint:disable-next-line
    document, _maskService) {
        this.document = document;
        this._maskService = _maskService;
        this._position = null;
        // tslint:disable-next-line
        this.onChange = function (_) { };
        this.onTouch = function () { };
    }
    MaskDirective_1 = MaskDirective;
    Object.defineProperty(MaskDirective.prototype, "maskExpression", {
        set: function (value) {
            this._maskValue = value || '';
            if (!this._maskValue) {
                return;
            }
            this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue);
            this._maskService.formElementProperty = [
                'value',
                this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "specialCharacters", {
        set: function (value) {
            if (!value ||
                !Array.isArray(value) ||
                (Array.isArray(value) && !value.length)) {
                return;
            }
            this._maskService.maskSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "patterns", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.maskAvailablePatterns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "prefix", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.prefix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "sufix", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.sufix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "dropSpecialCharacters", {
        set: function (value) {
            this._maskService.dropSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "showMaskTyped", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.showMaskTyped = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "shownMaskExpression", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.shownMaskExpression = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "showTemplate", {
        set: function (value) {
            this._maskService.showTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "clearIfNotMatch", {
        set: function (value) {
            this._maskService.clearIfNotMatch = value;
        },
        enumerable: true,
        configurable: true
    });
    MaskDirective.prototype.onInput = function (e) {
        var el = e.target;
        this._inputValue = el.value;
        if (!this._maskValue) {
            this.onChange(el.value);
            return;
        }
        var position = el.selectionStart === 1
            ? el.selectionStart + this._maskService.prefix.length
            : el.selectionStart;
        var caretShift = 0;
        this._maskService.applyValueChanges(position, function (shift) { return (caretShift = shift); });
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        el.selectionStart = el.selectionEnd =
            this._position !== null
                ? this._position
                : position +
                    // tslint:disable-next-line
                    (e.inputType === 'deleteContentBackward' ? 0 : caretShift);
        this._position = null;
    };
    MaskDirective.prototype.onBlur = function () {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    };
    MaskDirective.prototype.onFocus = function (e) {
        var el = e.target;
        if (el !== null && el.selectionStart !== null &&
            el.selectionStart === el.selectionEnd &&
            el.selectionStart > this._maskService.prefix.length &&
            // tslint:disable-next-line
            e.keyCode !== 38) {
            return;
        }
        if (this._maskService.showMaskTyped) {
            this._maskService.maskIsShown = this._maskService.showMaskInInput();
        }
        el.value = !el.value || el.value === this._maskService.prefix
            ? this._maskService.prefix + this._maskService.maskIsShown
            : el.value;
        /** fix of cursor position with prefix when mouse click occur */
        if ((el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
        }
    };
    MaskDirective.prototype.a = function (e) {
        var el = e.target;
        if (e.keyCode === 38) {
            e.preventDefault();
        }
        if (e.keyCode === 37 || e.keyCode === 8) {
            if (el.selectionStart <= this._maskService.prefix.length
                && el.selectionEnd <= this._maskService.prefix.length) {
                e.preventDefault();
            }
            this.onFocus(e);
            if (e.keyCode === 8
                && el.selectionStart === 0
                && el.selectionEnd === el.value.length) {
                el.value = this._maskService.prefix;
                this._position = this._maskService.prefix ? this._maskService.prefix.length : 1;
                this.onInput(e);
            }
        }
    };
    MaskDirective.prototype.onPaste = function () {
        this._position = Number.MAX_SAFE_INTEGER;
    };
    /** It writes the value in the input */
    MaskDirective.prototype.writeValue = function (inputValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (inputValue === undefined) {
                    inputValue = '';
                }
                if (typeof inputValue === 'number') {
                    inputValue = String(inputValue);
                    this._maskService.isNumberValue = true;
                }
                inputValue && this._maskService.maskExpression ||
                    this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)
                    ? (this._maskService.formElementProperty = [
                        'value',
                        this._maskService.applyMask(inputValue, this._maskService.maskExpression)
                    ])
                    : (this._maskService.formElementProperty = ['value', inputValue]);
                this._inputValue = inputValue;
                return [2 /*return*/];
            });
        });
    };
    // tslint:disable-next-line
    MaskDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
        this._maskService.onChange = this.onChange;
    };
    // tslint:disable-next-line
    MaskDirective.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    /** It disables the input element */
    MaskDirective.prototype.setDisabledState = function (isDisabled) {
        this._maskService.formElementProperty = ['disabled', isDisabled];
    };
    MaskDirective.prototype._repeatPatternSymbols = function (maskExp) {
        var _this = this;
        return maskExp.match(/{[0-9]+}/)
            && maskExp.split('')
                .reduce(function (accum, currval, index) {
                _this._start = (currval === '{') ? index : _this._start;
                if (currval !== '}') {
                    return _this._maskService._findSpecialChar(currval) ? accum + currval : accum;
                }
                _this._end = index;
                var repeatNumber = Number(maskExp
                    .slice(_this._start + 1, _this._end));
                var repaceWith = new Array(repeatNumber + 1)
                    .join(maskExp[_this._start - 1]);
                return accum + repaceWith;
            }, '') || maskExp;
    };
    var MaskDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mask'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MaskDirective.prototype, "maskExpression", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "specialCharacters", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "patterns", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "prefix", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "sufix", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "dropSpecialCharacters", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "showMaskTyped", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "shownMaskExpression", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "showTemplate", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "clearIfNotMatch", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onInput", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onBlur", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "a", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('paste'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onPaste", null);
    MaskDirective = MaskDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mask]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MaskDirective_1; }),
                    multi: true
                },
                _mask_service__WEBPACK_IMPORTED_MODULE_3__["MaskService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _mask_service__WEBPACK_IMPORTED_MODULE_3__["MaskService"]])
    ], MaskDirective);
    return MaskDirective;
}());



/***/ }),

/***/ "./src/app/shared/ngx-mask/mask.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/ngx-mask/mask.pipe.ts ***!
  \**********************************************/
/*! exports provided: MaskPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskPipe", function() { return MaskPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mask_applier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask-applier.service */ "./src/app/shared/ngx-mask/mask-applier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaskPipe = /** @class */ (function () {
    function MaskPipe(_maskService) {
        this._maskService = _maskService;
    }
    MaskPipe.prototype.transform = function (value, mask) {
        if (!value) {
            return '';
        }
        if (typeof mask === 'string') {
            return this._maskService.applyMask("" + value, mask);
        }
        return this._maskService.applyMaskWithPattern("" + value, mask);
    };
    MaskPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'mask',
            pure: true
        }),
        __metadata("design:paramtypes", [_mask_applier_service__WEBPACK_IMPORTED_MODULE_1__["MaskApplierService"]])
    ], MaskPipe);
    return MaskPipe;
}());



/***/ }),

/***/ "./src/app/shared/ngx-mask/mask.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/ngx-mask/mask.service.ts ***!
  \*************************************************/
/*! exports provided: MaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskService", function() { return MaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/shared/ngx-mask/config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mask_applier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-applier.service */ "./src/app/shared/ngx-mask/mask-applier.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MaskService = /** @class */ (function (_super) {
    __extends(MaskService, _super);
    function MaskService(
    // tslint:disable-next-line
    document, _config, _elementRef, _renderer) {
        var _this = _super.call(this, _config) || this;
        _this.document = document;
        _this._config = _config;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this.maskExpression = '';
        _this.isNumberValue = false;
        _this.showMaskTyped = false;
        _this.maskIsShown = '';
        // tslint:disable-next-line
        _this.onChange = function (_) { };
        _this.onTouch = function () { };
        _this._formElement = _this._elementRef.nativeElement;
        return _this;
    }
    MaskService.prototype.applyMask = function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';
        if (!inputValue && this.showMaskTyped) {
            return this.prefix + this.maskIsShown;
        }
        var result = _super.prototype.applyMask.call(this, inputValue, maskExpression, position, cb);
        if ((/dot_separator\.\d{1,}/.test(this.maskExpression) === true && this.dropSpecialCharacters === true)) {
            this.maskSpecialCharacters = this.maskSpecialCharacters.filter(function (item) { return item !== ','; });
        }
        if ((/coma_separator\.\d{1,}/.test(this.maskExpression) === true && this.dropSpecialCharacters === true)) {
            this.maskSpecialCharacters = this.maskSpecialCharacters.filter(function (item) { return item !== '.'; });
        }
        Array.isArray(this.dropSpecialCharacters)
            ? this.onChange(this._removeMask(this._removeSufix(this._removePrefix(result)), this.dropSpecialCharacters))
            : this.dropSpecialCharacters === true
                ? this.onChange(this.isNumberValue
                    ? Number(this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                    : this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                : this.onChange(this._removeSufix(this._removePrefix(result)));
        var ifMaskIsShown = '';
        if (!this.showMaskTyped) {
            return result;
        }
        var resLen = result.length;
        var prefNmask = this.prefix + this.maskIsShown;
        ifMaskIsShown = prefNmask.slice(resLen);
        return result + ifMaskIsShown;
    };
    MaskService.prototype.applyValueChanges = function (position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        var maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        this._formElement.value = maskedInput;
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    };
    MaskService.prototype.showMaskInInput = function () {
        if (this.showMaskTyped && !!this.shownMaskExpression) {
            if (this.maskExpression.length !== this.shownMaskExpression.length) {
                throw new Error('Mask expression must match mask placeholder length');
            }
            else {
                return this.shownMaskExpression;
            }
        }
        else if (this.showMaskTyped) {
            return this.maskExpression.replace(/\w/g, '_');
        }
        return '';
    };
    MaskService.prototype.clearIfNotMatchFn = function () {
        if (this.clearIfNotMatch === true &&
            this.maskExpression.length !== this._formElement.value.length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    };
    Object.defineProperty(MaskService.prototype, "formElementProperty", {
        set: function (_a) {
            var name = _a[0], value = _a[1];
            this._renderer.setProperty(this._formElement, name, value);
        },
        enumerable: true,
        configurable: true
    });
    MaskService.prototype._removeMask = function (value, specialCharactersForRemove) {
        return value
            ? value.replace(this._regExpForRemove(specialCharactersForRemove), '')
            : value;
    };
    MaskService.prototype._removePrefix = function (value) {
        if (!this.prefix) {
            return value;
        }
        return value
            ? value.replace(this.prefix, '')
            : value;
    };
    MaskService.prototype._removeSufix = function (value) {
        if (!this.sufix) {
            return value;
        }
        return value
            ? value.replace(this.sufix, '')
            : value;
    };
    MaskService.prototype._regExpForRemove = function (specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map(function (item) { return "\\" + item; }).join('|'), 'gi');
    };
    MaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_1__["config"])),
        __metadata("design:paramtypes", [Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], MaskService);
    return MaskService;
}(_mask_applier_service__WEBPACK_IMPORTED_MODULE_3__["MaskApplierService"]));



/***/ }),

/***/ "./src/app/shared/ngx-mask/ngx-mask.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/ngx-mask/ngx-mask.module.ts ***!
  \****************************************************/
/*! exports provided: NgxMaskModule, _configFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaskModule", function() { return NgxMaskModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_configFactory", function() { return _configFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/shared/ngx-mask/config.ts");
/* harmony import */ var _mask_applier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-applier.service */ "./src/app/shared/ngx-mask/mask-applier.service.ts");
/* harmony import */ var _mask_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask.directive */ "./src/app/shared/ngx-mask/mask.directive.ts");
/* harmony import */ var _mask_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mask.pipe */ "./src/app/shared/ngx-mask/mask.pipe.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NgxMaskModule = /** @class */ (function () {
    function NgxMaskModule() {
    }
    NgxMaskModule_1 = NgxMaskModule;
    NgxMaskModule.forRoot = function (configValue) {
        return {
            ngModule: NgxMaskModule_1,
            providers: [
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_1__["NEW_CONFIG"],
                    useValue: configValue
                },
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_1__["INITIAL_CONFIG"],
                    useValue: _config__WEBPACK_IMPORTED_MODULE_1__["initialConfig"]
                },
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_1__["config"],
                    useFactory: _configFactory,
                    deps: [_config__WEBPACK_IMPORTED_MODULE_1__["INITIAL_CONFIG"], _config__WEBPACK_IMPORTED_MODULE_1__["NEW_CONFIG"]]
                },
            ]
        };
    };
    NgxMaskModule.forChild = function (_configValue) {
        return {
            ngModule: NgxMaskModule_1,
        };
    };
    var NgxMaskModule_1;
    NgxMaskModule = NgxMaskModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_mask_applier_service__WEBPACK_IMPORTED_MODULE_2__["MaskApplierService"]],
            exports: [_mask_directive__WEBPACK_IMPORTED_MODULE_3__["MaskDirective"], _mask_pipe__WEBPACK_IMPORTED_MODULE_4__["MaskPipe"]],
            declarations: [_mask_directive__WEBPACK_IMPORTED_MODULE_3__["MaskDirective"], _mask_pipe__WEBPACK_IMPORTED_MODULE_4__["MaskPipe"]]
        })
    ], NgxMaskModule);
    return NgxMaskModule;
}());

/**
 * @internal
 */
function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : __assign({}, initConfig, configValue);
}


/***/ }),

/***/ "./src/app/shared/services/consulta-cep.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/consulta-cep.service.ts ***!
  \*********************************************************/
/*! exports provided: ConsultaCepService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaCepService", function() { return ConsultaCepService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsultaCepService = /** @class */ (function () {
    function ConsultaCepService(http) {
        this.http = http;
    }
    ConsultaCepService.prototype.consultaCEP = function (cep) {
        console.log(cep);
        // Nova variável "cep" somente com dígitos.
        cep = cep.replace(/\D/g, '');
        // Verifica se campo cep possui valor informado.
        if (cep !== '') {
            // Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
            // Valida o formato do CEP.
            if (validacep.test(cep)) {
                return this.http.get("//viacep.com.br/ws/" + cep + "/json");
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
    };
    ConsultaCepService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConsultaCepService);
    return ConsultaCepService;
}());



/***/ }),

/***/ "./src/app/shared/services/dropdown.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/dropdown.service.ts ***!
  \*****************************************************/
/*! exports provided: DropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownService", function() { return DropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DropdownService = /** @class */ (function () {
    function DropdownService(http) {
        this.http = http;
    }
    DropdownService.prototype.getPaises = function () {
        return this.http.get('assets/dados/paises-gentilicos-google-maps.json');
    };
    DropdownService.prototype.getEstadosBr = function () {
        return this.http.get('assets/dados/estadosbr.json');
    };
    DropdownService.prototype.getCidades = function (idEstado) {
        return this.http.get('assets/dados/cidades.json')
            .pipe(
        // tslint:disable-next-line:triple-equals
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (cidades) { return cidades.filter(function (c) { return c.estado == idEstado; }); }));
    };
    DropdownService.prototype.getCargos = function () {
        return [
            { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
            { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
            { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
        ];
    };
    DropdownService.prototype.getTecnologias = function () {
        return [
            { nome: 'java', desc: 'Java' },
            { nome: 'javascript', desc: 'JavaScript' },
            { nome: 'php', desc: 'PHP' },
            { nome: 'ruby', desc: 'Ruby' }
        ];
    };
    DropdownService.prototype.getNewsletter = function () {
        return [
            { valor: 's', desc: 'Sim' },
            { valor: 'n', desc: 'Não' }
        ];
    };
    DropdownService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DropdownService);
    return DropdownService;
}());



/***/ }),

/***/ "./src/app/usuario/usuario.component.css":
/*!***********************************************!*\
  !*** ./src/app/usuario/usuario.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vdXN1YXJpby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/usuario/usuario.component.html":
/*!************************************************!*\
  !*** ./src/app/usuario/usuario.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <p style=\"align-content: center\">\r\n\r\n        <img *ngIf=\"carregando\" class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n      </p>\r\n\r\n    <div [hidden]=\"carregando\" class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12 mx-auto\">\r\n          <form class=\"mt-5\" [formGroup]=\"form\" >\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                \r\n                  <!--div class=\"col-12\">\r\n                      <h3>Cadastro</h3>\r\n                    </div-->        \r\n          \r\n                <div class=\"col-12\">\r\n                  <p *ngFor=\"let alert of alerts\">\r\n                    <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n                      <div [innerHTML]=\"alert.message\"></div>\r\n                    </ngb-alert>\r\n                  </p>\r\n        \r\n                  <p *ngIf=\"carregando\"  style=\"align-content: center\">\r\n                      <img  class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n                   </p>\r\n                </div>\r\n         \r\n                <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\">\r\n                  <div class=\"card bg-light mb-12\">\r\n                      <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n                        <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Dados Pessoais </div>   \r\n                    </div>\r\n                    <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n                      <div class=\"row\">\r\n                        <div class=\" col-md-4\" >\r\n                          <label>{{getLabelField('cpf')}}</label>\r\n                          <input  type=\"text\" matInput mask=\"000.000.000-00\" formControlName=\"cpf\"  class=\"form-control\"\r\n                            placeholder=\"\"  tabindex=\"0\" />\r\n                        </div>\r\n                        <div class=\" col-md-8\">\r\n                          <label>{{getLabelField('nome')}}</label>\r\n                          <input type=\"text\" formControlName=\"nome\" class=\"form-control\" placeholder=\"\" />\r\n                        </div>\r\n\r\n                        <div class=\" col-md-4\" >\r\n                          <label>{{getLabelField('celular')}}</label>\r\n                          <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-mobile-alt\"></i> </span>\r\n                            </div>\r\n                            <input type=\"text\" formControlName=\"celular\" class=\"form-control\" placeholder=\"\" matInput\r\n                              mask=\"(00) 00000-0000\" aria-label=\"Celular\" aria-describedby=\"basic-addon1\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\" col-md-4\">\r\n                          <label>{{getLabelField('email')}}</label>\r\n                          <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-envelope\"></i> </span>\r\n                            </div>\r\n                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"\" aria-label=\"Email\"\r\n                              aria-describedby=\"basic-addon1\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\" col-md-4\" >\r\n                          <label>{{getLabelField('dataNascimento')}}</label>\r\n                          <input  type=\"text\" matInput mask=\"00/00/0000\" formControlName=\"dataNascimento\"  class=\"form-control\"\r\n                            placeholder=\"\"  tabindex=\"0\" />\r\n                        </div>\r\n        \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\" >\r\n                  <div class=\"card bg-light mb-12\">\r\n                      <div style=\"cursor: pointer;\" (click)=\"show('ocultarEndereco')\">            \r\n                        <div class=\"card-header alert-primary\"><i class=\"fa fa-home\"></i> Endereço</div>\r\n                      </div>\r\n                    <div [hidden]=\"ocultarEndereco\" class=\"card-body\">\r\n                      <div class=\"row\">\r\n                        <div class=\" col-md-3\">\r\n                          <label>{{getLabelField('cep')}}</label>\r\n                          <input type=\"text\" formControlName=\"cep\" id=\"cep\" matInput mask=\"00.000-000\" class=\"form-control\"\r\n                            placeholder=\"\" />\r\n                        </div>\r\n                        <div class=\" col-md-3\">\r\n                          <label>{{getLabelField('uf')}}</label>\r\n                          <select formControlName=\"uf\" class=\"form-control\" placeholder=\"\">\r\n                            <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.sigla }}</option>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\" col-md-6\">\r\n                          <label>{{getLabelField('cidade')}}</label>\r\n                          <select formControlName=\"cidade\" class=\"form-control\" placeholder=\"\">\r\n                            <option *ngFor=\"let cidade of cidades\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\" col-md-6\">\r\n                          <label>{{getLabelField('bairro')}}</label>\r\n                          <input type=\"text\" formControlName=\"bairro\" class=\"form-control\" placeholder=\"\" />\r\n                        </div>\r\n                        <div class=\" col-md-6\">\r\n                          <label>{{getLabelField('logradouro')}}</label>\r\n                          <input type=\"text\" formControlName=\"logradouro\" class=\"form-control\" placeholder=\"\" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\" >\r\n                    <div class=\"card bg-light mb-12\">\r\n                        <div style=\"cursor: pointer;\" (click)=\"show('ocultarOuvidoria')\">\r\n                          <div class=\"card-header alert-primary\"><i class=\"fa fa-calendar-alt\"></i> Categoria:</div>\r\n                        </div>\r\n                      <div [hidden]=\"ocultarOuvidoria\" class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\" col-md-6\">\r\n                            <label>{{getLabelField('tipo')}}</label>\r\n                            <select formControlName=\"categoria\" class=\"form-control\" placeholder=\"\">\r\n                              <option *ngFor=\"let t of listaTipos\" [value]=\"t.descricao\">{{ t.descricao }}</option>\r\n                            </select>\r\n                          </div>\r\n                          <div class=\" col-md-6\">\r\n                            <label>{{getLabelField('ies_empresa')}}</label>\r\n                            <input type=\"text\" formControlName=\"origem\" class=\"form-control\" placeholder=\"\" />\r\n                          </div>\r\n                          <div class=\" col-md-6\">\r\n                            <label>{{getLabelField('senha')}}</label>\r\n                            <input type=\"password\" formControlName=\"senha\" id=\"senha\" class=\"form-control\" placeholder=\"\" />\r\n                          </div>\r\n                          <div class=\" col-md-6\">\r\n                            <label>{{getLabelField('repita_senha')}}</label>\r\n                            <input type=\"password\" formControlName=\"senha_repita\" id=\"senha_repita\" class=\"form-control\"  placeholder=\"\" />\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n        \r\n                <div class=\"col-12 col-sm-12\">\r\n        \r\n                  <div class=\"mx-auto\"><br> <button type=\"submit\" (click)=\"salvar()\" class=\"btn btn-primary text-right\"  [disabled]=\"id !== 0\">Salvar</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"submit\" (click)=\"voltar()\" class=\"btn btn-secondary text-right\"  >VOLTAR</button>      \r\n                    <br><br><br>                    \r\n                    <hr>\r\n                  </div>\r\n        \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./src/app/usuario/usuario.component.ts":
/*!**********************************************!*\
  !*** ./src/app/usuario/usuario.component.ts ***!
  \**********************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/dropdown.service */ "./src/app/shared/services/dropdown.service.ts");
/* harmony import */ var _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/consulta-cep.service */ "./src/app/shared/services/consulta-cep.service.ts");
/* harmony import */ var _shared_form_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/form-validation */ "./src/app/shared/form-validation.ts");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./usuario */ "./src/app/usuario/usuario.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(router, fb, dropdownService, cepService, service, http) {
        this.router = router;
        this.fb = fb;
        this.dropdownService = dropdownService;
        this.cepService = cepService;
        this.service = service;
        this.http = http;
        this.submitted = false;
        this.alerts = [];
        this.tiposEntidade = [];
        this.tiposRegistro = [];
        this.situacoesRegistro = [];
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_9__["Usuario"]();
        this.paises = [];
        this.estados = [];
        this.cidades = [];
        this.listaTipos = [{ codigo: '1', descricao: 'Administrador e Tecnólogo' }, { codigo: '2', descricao: 'Estudante' }, { codigo: '3', descricao: 'Outros Profissionais' }];
        this.carregando = true;
        this.ocultarDadosPessoais = false;
        this.ocultarEndereco = false;
        this.ocultarOuvidoria = false;
        this.ocultarAnexos = false;
        this.id = 0;
    }
    UsuarioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var campoCep = document.getElementById('cep');
        this.dropdownService.getCidades(this.form.get('uf').value).subscribe(function (dados) {
            _this.cidades = dados;
            _this.cepService.consultaCEP(_this.form.get('cep').value).subscribe(function (dados) {
                _this.populaDadosForm(dados);
            });
        });
    };
    UsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        var jsonUsuario;
        if (localStorage.getItem("usuario") == null) {
            jsonUsuario = { "cpf": "", "nome": "", "email": "", "sexo": "", "telefone": "", "celular": "", "endereco": "", "bairro": "", "cep": "", "cidade": "", "uf": "", "pais": "", "numRegistro": "", "categoria": "", "origem": "" };
            jsonUsuario.cpf = localStorage.getItem("cpf");
        }
        else {
            jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        }
        this.form = this.fb.group({
            nome: [jsonUsuario.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(100)]],
            email: [jsonUsuario.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            categoria: [jsonUsuario.categoria],
            cpf: [jsonUsuario.cpf],
            dataNascimento: [jsonUsuario.dataNascimentoFormatada],
            celular: [jsonUsuario.celular],
            origem: [jsonUsuario.origem],
            cep: [jsonUsuario.cep, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _shared_form_validation__WEBPACK_IMPORTED_MODULE_7__["cepValidator"]]],
            complemento: [jsonUsuario.complemento],
            logradouro: [jsonUsuario.logradouro, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            bairro: [jsonUsuario.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cidade: [jsonUsuario.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            uf: [jsonUsuario.uf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            senha: [null],
            senha_repita: [null],
        });
        this.dropdownService.getPaises().subscribe(function (dados) {
            _this.paises = dados;
            _this.dropdownService.getEstadosBr().subscribe(function (dados) {
                _this.estados = dados;
                _this.carregando = false;
            });
        });
        this.form.get('uf').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (uf) { return console.log('Novo estado: ', uf); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (uf) { return _this.estados.filter(function (e) { return e.sigla === uf; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (estados) { return estados && estados.length > 0 ? estados[0].id : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (estadoId) { return _this.dropdownService.getCidades(estadoId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log)).subscribe(function (cidades) { return _this.cidades = cidades; });
        this.form.get('cep').statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) { return console.log('status CEP:', value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (status) { return status === 'VALID' ?
            _this.cepService.consultaCEP(_this.form.get('cep').value)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])(); }))
            .subscribe(function (dados) { return dados ? _this.populaDadosForm(dados) : {}; });
    };
    UsuarioComponent.prototype.populaDadosForm = function (dados) {
        // this.formulario.setValue({});
        this.form.patchValue({
            uf: dados.uf,
            cidade: dados.localidade,
            logradouro: dados.logradouro,
            // cep: dados.cep,
            complemento: dados.complemento,
            bairro: dados.bairro,
        });
    };
    UsuarioComponent.prototype.resetaDadosEnderecoForm = function () {
        this.form.patchValue({
            rua: null,
            complemento: null,
            bairro: null,
            cidade: null,
            uf: null
        });
    };
    UsuarioComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    UsuarioComponent.prototype.getLabelField = function (fieldName) {
        return Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_7__["getLabelAllFields"])(fieldName);
    };
    UsuarioComponent.prototype.validarData = function (control) {
        var v = control.value;
        if (null != v && v.length == 8) {
            var data = v.substr(0, 2) + "/" + v.substr(2, 2) + "/" + v.substr(4, 4);
            var patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
            if (!patternData.test(data)) {
                return { dataInvalida: true };
            }
        }
    };
    UsuarioComponent.prototype.show = function (secao) {
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
        if (secao == 'ocultarOuvidoria') {
            if (this.ocultarOuvidoria) {
                this.ocultarOuvidoria = false;
            }
            else {
                this.ocultarOuvidoria = true;
            }
        }
        if (secao == 'ocultarAnexos') {
            if (this.ocultarAnexos) {
                this.ocultarAnexos = false;
            }
            else {
                this.ocultarAnexos = true;
            }
        }
    };
    UsuarioComponent.prototype.salvar = function () {
        var _this = this;
        console.log('Salvando Usuario Form');
        this.alerts = [];
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            this.alerts = Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_7__["getFormValidationErrors"])(this.form.controls);
            console.log('Formulário inválido');
            return;
        }
        var campoSenha = document.getElementById('senha');
        var campoSenhaRepita = document.getElementById('senha_repita');
        if (localStorage.getItem("usuario") == null) {
            if (campoSenha.value.length <= 0) {
                this.alerts = Array.from([{ type: 'danger', message: 'Por favor, informe uma senha de acesso  !!!' }]);
                return;
            }
        }
        if (campoSenha.value != campoSenhaRepita.value) {
            this.alerts = Array.from([{ type: 'danger', message: 'Senha informadas divergentes nos campos !!!' }]);
            return;
        }
        this.form.disable();
        this.carregando = true;
        this.service.salvar(this.form)
            .subscribe(function (response) {
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
                _this.form.disabled;
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
    UsuarioComponent.prototype.voltar = function () {
        this.router.navigate(['/areaParticipante']);
    };
    UsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.css */ "./src/app/usuario/usuario.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["DropdownService"],
            _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_6__["ConsultaCepService"],
            _usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/usuario/usuario.service.ts":
/*!********************************************!*\
  !*** ./src/app/usuario/usuario.service.ts ***!
  \********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
        this.API_SALVAR_USUARIO = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "usuario/salvar.php";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    UsuarioService.prototype.salvar = function (form) {
        var formObj = form.getRawValue(); // {name: '', description: ''}
        formObj.operacao = "SALVAR";
        var serializedForm = JSON.stringify(formObj);
        return this.http.post(this.API_SALVAR_USUARIO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    UsuarioService.prototype.salvarMinhaCaravana = function (form) {
        return this.http.post(this.API_SALVAR_USUARIO, form, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    UsuarioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/app/usuario/usuario.ts":
/*!************************************!*\
  !*** ./src/app/usuario/usuario.ts ***!
  \************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    API: 'https://conad.adm.br/sistemas/inscricoes-api/api/'
    //API: 'http://localhost/adminweb-api-php/api/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\SPD\CONAD\Projetos\inscricoes-estatico\admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map