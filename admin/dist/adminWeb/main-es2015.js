(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!***************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<div  style=\"position: fixed;left: 0;bottom: 0;width: 100%;\"  class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <div class=\"float-right\"><p class=\"text-white bg-dark\">© TECNOSYS Consultoria e Informática</div>\r\n</div>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/areaParticipante/areaParticipante.component.html":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/areaParticipante/areaParticipante.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <div class=\"container\">\r\n  <p style=\"align-content: center\">\r\n     <img *ngIf=\"carregando\" class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n  </p>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm-9 col-md-9 col-lg-9\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <b>Agenda de Eventos:</b>  \r\n      </div>\r\n        \r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n\r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"heading4\">\r\n              \r\n                <div class=\"alert alert-dark\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-target=\"#collapse5\" aria-expanded=\"false\" aria-controls=\"collapse5\" role=\"alert\">\r\n                  <div class=\"clearfix\">\r\n                    <div [hidden]=\"! spinnerEvento99\" class=\"spinner-border float-end text-success\" role=\"status\">\r\n                      <span class=\"visually-hidden\"></span>\r\n                    </div>\r\n                    <b> Evento Principal </b>\r\n                  </div>\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" style=\"width: 0%;\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\">0%</div>\r\n                  </div>                  \r\n                </div>\r\n            </div>\r\n        \r\n            <div id=\"collapse5\" class=\"collapse\" aria-labelledby=\"heading4\" data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <ul class=\"list-group\">\r\n                  <li class=\"list-group-item\" style=\"cursor: pointer;\" title=\"Click para assitir esta palestra\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                      <p><b>Dia 17/09 - Sexta- feira</b> </p>\r\n                      <iframe id=\"iframeAoVivo\" width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/3wpIYAVeGpE\" title=\"CONAD 2021 - Dia 01\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n                      <!--p class=\"text-center\"><br><button type=\"button\" (click)=\"acessoStreaming(98)\" class=\"btn btn-outline-primary\"><i class=\"far fa-play-circle\"></i> CHAT</button>&nbsp;&nbsp; <button type=\"button\" (click)=\"acessoStreaming(99)\" class=\"btn btn-outline-primary\"><i class=\"far fa-play-circle\"></i> Registrar Presença</button></p-->\r\n                    </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">                      \r\n                      <p></p><hr>\r\n                      <p></p>\r\n                      <p><b>Dia 18/09 - Sabado</b></p>\r\n                      <!--p><i>ATENÇÃO, estamos finalizando a edição das palestras ocorridas nesta data. Em breve disponibilizaremos neste canal !!!</i></p-->\r\n                      <iframe id=\"iframeAoVivo\" width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/1WP23osoup4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n                      <!--p class=\"text-center\"><br><button type=\"button\" (click)=\"acessoStreaming(98)\" class=\"btn btn-outline-primary\"><i class=\"far fa-play-circle\"></i> CHAT</button>&nbsp;&nbsp; <button type=\"button\" (click)=\"acessoStreaming(99)\" class=\"btn btn-outline-primary\"><i class=\"far fa-play-circle\"></i> Registrar Presença</button></p-->\r\n                    </div>\r\n                    </div>\r\n                </ul>      \r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"heading4\">\r\n              \r\n                <div class=\"alert alert-dark\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-target=\"#collapse4\" aria-expanded=\"false\" aria-controls=\"collapse4\" role=\"alert\">\r\n                  <div class=\"clearfix\">\r\n                    <div [hidden]=\"! spinnerEvento03\" class=\"spinner-border float-end text-success\" role=\"status\">\r\n                      <span class=\"visually-hidden\"></span>\r\n                    </div>\r\n                    <b> Apesentação de Trabalhos Científicos</b><p style=\"font-size: 70%;\"><i>16/09 (quinta-feira) 08h às 18h</i></p>                  \r\n                  </div>\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" style=\"width: 0%;\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\">0%</div>\r\n                  </div>                  \r\n                </div>\r\n            </div>\r\n        \r\n            <div id=\"collapse4\" class=\"collapse\" aria-labelledby=\"heading4\" data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <ul class=\"list-group\">\r\n                  <li class=\"list-group-item\" style=\"cursor: pointer;\" title=\"Click para assitir esta palestra\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6\">\r\n                        <p><b>Sala Rio Araguaia</b></p>\r\n                        <p><button type=\"button\" (click)=\"acessoStreaming(31)\" class=\"btn btn-outline-success\"><i class=\"far fa-play-circle\"></i> Entrar</button></p>\r\n                      </div>\r\n                        <div class=\"col-6\">\r\n                          <p><b>Sala Serra Dourada</b></p>\r\n                          <p><button type=\"button\" (click)=\"acessoStreaming(32)\" class=\"btn btn-outline-danger\"><i class=\"far fa-play-circle\"></i> Entrar</button></p>\r\n                          </div>\r\n                          </div>\r\n                </ul>      \r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card\" [hidden]=\"! evento01\">\r\n            <div class=\"card-header\" id=\"headingOne\">\r\n                <div class=\"alert alert-dark\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\" role=\"alert\">\r\n                  <div class=\"clearfix\">                  \r\n                  <div [hidden]=\"! spinnerEvento01\" class=\"spinner-border float-end text-success\" role=\"status\">\r\n                    <span class=\"visually-hidden\"></span>\r\n                  </div>\r\n                  <b> Painel de Gestão 01</b><p style=\"font-size: 70%;\"><i>17/09 (Sexta) 09h às 12h</i></p>\r\n                  </div>\r\n                  <div class=\"progress\">\r\n                    <div id=\"progressBarPainel01\" class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" style=\"width: 0%;\" [attr.aria-valuenow]=\"assistiuEvento1\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{assistiuEvento1}}%</div>\r\n                  </div>                  \r\n                </div>\r\n            </div>\r\n        \r\n            <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <ul class=\"list-group\">\r\n                  <li class=\"list-group-item\" style=\"cursor: pointer;\" (click)=\"acessoStreaming(11)\"  title=\"Click para assitir esta palestra\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-3\">\r\n                        <img src=\"https://conad.adm.br/portal/wp-content/uploads/2021/06/Conad-MarcioDourado-1.jpg\" class=\"rounded-circle img-fluid\" >\r\n                      </div>\r\n                      <div class=\"col-9\" style=\"font-size:80%;\" >\r\n                        <p ><b>“Investimento na Era Digital: Homebrokers, bancos virtuais de investimentos e as novas formas de investir”</b></p>\r\n                        <p><i class=\"fa fa-user-tie\" ></i> - Prof. Márcio Dourado</p>\r\n                        <p><button type=\"button\" class=\"btn btn-outline-primary\"> <i [hidden]=\"assistiuEvento11\" class=\"far fa-play-circle\"></i> <i [hidden]=\"! assistiuEvento11\" class=\"far fa-check-circle\" ></i> Assistir</button></p>\r\n    \r\n                      </div>\r\n                    </div>\r\n                    <li class=\"list-group-item\" style=\"cursor: pointer;\" (click)=\"acessoStreaming(12)\" title=\"Click para assitir esta palestra\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-3\">\r\n                          <img src=\"https://conad.adm.br/portal/wp-content/uploads/2021/06/IvanLourenco-2.jpg\" class=\"rounded-circle img-fluid\">\r\n                        </div>\r\n                        <div class=\"col-9\"  style=\"font-size:80%;\">\r\n                          <p><b>“Como as metodologias ágeis de gerenciamento de projetos podem melhorar os negócios”</b></p>\r\n                          <p><i class=\"fa fa-user-tie\"></i> - Ivan Lourenço</p>\r\n                          <p><button type=\"button\" class=\"btn btn-outline-primary\"><i [hidden]=\"assistiuEvento12\" class=\"far fa-play-circle\"></i> <i [hidden]=\"! assistiuEvento12\" class=\"far fa-check-circle\" ></i> Assistir</button></p>\r\n      \r\n                        </div>\r\n                      </div>\r\n                    <li class=\"list-group-item\" style=\"cursor: pointer;\" (click)=\"acessoStreaming(13)\" title=\"Click para assitir esta palestra\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-3\">\r\n                          <img src=\"https://conad.adm.br/portal/wp-content/uploads/2021/06/RejaneDuarte-1.jpg\" class=\"rounded-circle img-fluid\">\r\n                        </div>\r\n                        <div class=\"col-9\"  style=\"font-size:80%;\">\r\n                          <p><b>“O Desafio da Implantação das Novas Tecnologias”</b></p>\r\n                          <p><i class=\"fa fa-user-tie\"></i> - Rejane Duarte</p>\r\n                          <p><button type=\"button\" class=\"btn btn-outline-primary\"><i [hidden]=\"assistiuEvento13\" class=\"far fa-play-circle\"></i> <i [hidden]=\"! assistiuEvento13\" class=\"far fa-check-circle\" ></i> Assistir</button></p>\r\n \r\n                        </div>\r\n                      </div>\r\n                </ul>      \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\" [hidden]=\"! evento02\">\r\n            <div class=\"card-header\" id=\"headingTwo\">\r\n                  <div class=\"alert alert-dark\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\" role=\"alert\">\r\n                    <div class=\"clearfix\">                    \r\n                    <div [hidden]=\"! spinnerEvento02\" class=\"spinner-border float-end text-success\" role=\"status\">\r\n                      <span class=\"visually-hidden\"></span>\r\n                    </div>\r\n                    <b> Painel de Gestão 02</b><p style=\"font-size: 70%;\"><i>17/09 (Sexta) 14h às 18h</i></p>                    \r\n                    </div>\r\n                    <div class=\"progress\">\r\n                      <div id=\"progressBarPainel02\" class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" style=\"width: 0%;\" [attr.aria-valuenow]=\"assistiuEvento2\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{assistiuEvento2}}%</div>\r\n                    </div>                  \r\n                  </div>\r\n            </div>\r\n            <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <ul class=\"list-group\">\r\n                 \r\n                  <li class=\"list-group-item\" style=\"cursor: pointer;\" (click)=\"acessoStreaming(21)\" title=\"Click para assitir esta palestra\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-3\">\r\n                        <img src=\"https://conad.adm.br/portal/wp-content/uploads/2021/06/FelipeDaumas-1.jpg\" class=\"rounded-circle img-fluid\">\r\n                      </div>\r\n                      <div class=\"col-9\"  style=\"font-size:80%;\">\r\n                        <p><b>“Estratégias de Comunicação e Vendas na Internet”</b></p>\r\n                        <p><i class=\"fa fa-user-tie\"></i> - Filipe Daumas</p>\r\n                        <p><button type=\"button\" class=\"btn btn-outline-primary\"><i [hidden]=\"assistiuEvento21\" class=\"far fa-play-circle\"></i> <i [hidden]=\"! assistiuEvento21\" class=\"far fa-check-circle\" ></i> Assistir</button></p>\r\n    \r\n                      </div>\r\n                    </div>\r\n                    <li class=\"list-group-item\" style=\"cursor: pointer;\" (click)=\"acessoStreaming(22)\" title=\"Click para assitir esta palestra\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-3\">\r\n                          <img src=\"https://conad.adm.br/portal/wp-content/uploads/2021/06/RafaelMaciel-1.jpg\" class=\"rounded-circle img-fluid\">\r\n                        </div>\r\n                        <div class=\"col-9\"  style=\"font-size:80%;\">\r\n                          <p><b>“Desafios da LGPD nos primeiros anos de sua vigência”</b></p>\r\n                          <p><i class=\"fa fa-user-tie\"></i> - Rafael Maciel</p>\r\n                          <p><button type=\"button\" class=\"btn btn-outline-primary\"><i [hidden]=\"assistiuEvento22\" class=\"far fa-play-circle\"></i> <i [hidden]=\"! assistiuEvento22\" class=\"far fa-check-circle\" ></i> Assistir</button></p>\r\n      \r\n                        </div>\r\n                      </div>\r\n                    <li class=\"list-group-item\" style=\"cursor: pointer;\" (click)=\"acessoStreaming(23)\" title=\"Click para assitir esta palestra\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-3\">\r\n                          <img src=\"https://conad.adm.br/portal/wp-content/uploads/2021/06/AdrianoSouza-1.jpg\" class=\"rounded-circle img-fluid\">\r\n                        </div>\r\n                        <div class=\"col-9\" style=\"font-size:80%;\">\r\n                          <p><b>“Panorama e Tendências da automação de processos de negócios”</b></p>\r\n                          <p><i class=\"fa fa-user-tie\"></i> - Adriano Souza Pereira</p>\r\n                          <p><button type=\"button\" class=\"btn btn-outline-primary\"><i [hidden]=\"assistiuEvento23\" class=\"far fa-play-circle\"></i> <i [hidden]=\"! assistiuEvento23\" class=\"far fa-check-circle\" ></i> Assistir</button></p>\r\n      \r\n                        </div>\r\n                      </div>\r\n                </ul>      \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n     </div>\r\n     <!--div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n           <span class=\"text-muted\">Meus Eventos</span>\r\n           <span class=\"badge badge-secondary badge-pill\">{{listaMeusEventos.length}}</span>\r\n        </h4>\r\n        <ul *ngFor=\"let reg of listaMeusEventos\" class=\"list-group mb-3 z-depth-1\">\r\n           <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n               <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                  <h6 class=\"my-0\">{{reg.descricao}}</h6>\r\n               </div>\r\n               <div class=\"col-sm-4 col-md-4 col-lg-4 text-center align-middle\">\r\n                     <p style=\"font-size: 80%;\" [ngClass]=\"reg.status\" >{{reg.status_descricao}}</p>\r\n               </div>\r\n           </li>\r\n        </ul>\r\n        <ul class=\"list-group mb-3 z-depth-1\">\r\n           <li  class=\"list-group-item d-flex justify-content-between bg-light\">\r\n              <div [hidden]= \"! possuiCaravana()\" class=\"text-success\">\r\n               <p class=\"text-muted\">Minha Caravana</p>\r\n             \r\n              </div>\r\n        \r\n           </li>\r\n           <li class=\"list-group-item d-flex justify-content-between\">\r\n              <span></span>\r\n              <strong>{{usuarioLogado.caravana}}</strong>\r\n              <button [hidden]= \"! possuiCaravana()\" type=\"button\" (click)=\"sairCaravana()\" title=\"Sair desta Caravana\" class=\"btn btn-link\"><i class=\"fa fa-times\"></i></button>\r\n\r\n           </li>\r\n        </ul>\r\n        <nav [hidden]= \"possuiCaravana()\" class=\"navbar alert-primary\">\r\n         <button type=\"button\" (click)=\"selecionarCaravana(contentCaravana)\" style=\"text-decoration: none;\" class=\"btn btn-link\"><i class=\"fa fa-bus\"></i> - INFORME SUA CARAVANA</button>\r\n      </nav>        \r\n     </div-->\r\n\r\n\r\n    <div class=\"col-sm-3 col-md-3 col-lg-3\" >\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n          <b>Menu:</b>\r\n      </div>\r\n      <nav class=\"navbar alert-primary\"  style=\"font-size:80%;\">\r\n         <a class=\"nav-link\" routerLink=\"/inscricoes\"> <i class=\"fa fa-cart-plus\"></i> - INSCRICOES PAGAMENTOS </a>\r\n      </nav>\r\n      <br>\r\n      <nav class=\"navbar alert-primary\" style=\"font-size:80%;\">\r\n         <button type=\"button\" (click)=\"alterarSenha(content)\" class=\"btn btn-link\" style=\"font-size:90%;text-decoration: none;\"><i class=\"fa fa-unlock-alt\"></i> - ALTERAR SENHA</button>\r\n\r\n      </nav>\r\n      <br>\r\n      <nav class=\"navbar alert-primary\" style=\"font-size:80%;\">\r\n         <a class=\"nav-link\" routerLink=\"/usuario\"> <i class=\"fa fa-users-cog\"></i> - ATUALIZAR DADOS </a>\r\n      </nav>\r\n      <br>\r\n      <nav class=\"navbar alert-primary\" style=\"font-size:80%;\">\r\n         <button type=\"button\" (click)=\"certificado()\" class=\"btn btn-link\" style=\"font-size:90%;text-decoration: none;\"><i class=\"fa fa-flag-checkered\"></i> - CERTIFICADO</button>\r\n      </nav>\r\n      <!--br>\r\n      <nav class=\"navbar alert-primary\" style=\"font-size:80%;\">\r\n         <a class=\"nav-link\" href=\"https://www.conad.adm.br/ojs/\" target=\"_blank\"> <i class=\"fa fa-file-pdf\"></i> - ENVIAR TRABALHO </a>\r\n      </nav-->\r\n      <br>\r\n      <nav class=\"navbar alert-primary\" style=\"font-size:80%;\">\r\n        <button type=\"button\" (click)=\"quiz()\" class=\"btn btn-link\" style=\"font-size:90%;text-decoration: none;\"><i class=\"fa fa-question-circle\"></i> - QUIZ</button>\r\n     </nav>\r\n      <br>\r\n      <nav class=\"navbar alert-primary\" style=\"font-size:80%;\">\r\n        <button type=\"button\" (click)=\"fichaAvaliacao()\" class=\"btn btn-link\" style=\"font-size:90%;text-decoration: none;\"><i class=\"fa fa-paper-plane\"></i> - FICHA DE AVALIAÇÃO</button>\r\n     </nav>\r\n      <br>\r\n\r\n      <nav class=\"navbar alert-primary\" style=\"font-size:80%;\">\r\n         <a class=\"nav-link\"  href=\"#\" (click)=\"logoff()\"> <i class=\"fa fa-sign-out-alt\"></i> - LOGOFF </a>\r\n      </nav>\r\n      <br>\r\n      <nav [hidden]= \"possuiCaravana()\" class=\"navbar alert-primary\"  style=\"font-size:80%;\">\r\n        <button type=\"button\" (click)=\"selecionarCaravana(contentCaravana)\" class=\"btn btn-link\"  style=\"font-size:90%;text-decoration: none;\"><i class=\"fa fa-bus\"></i> - INFORME SUA CARAVANA</button>\r\n     </nav>        \r\n  \r\n\r\n      <ul class=\"list-group mb-3 z-depth-1\">\r\n        <li  class=\"list-group-item d-flex justify-content-between bg-light\">\r\n           <div [hidden]= \"! possuiCaravana()\" class=\"text-success\">\r\n            <p class=\"text-muted\">Minha Caravana</p>\r\n          \r\n           </div>\r\n     \r\n        </li>\r\n        <li class=\"list-group-item d-flex justify-content-between\">\r\n           <span></span>\r\n           <strong>{{usuarioLogado.caravana}}</strong>\r\n           <button [hidden]= \"! possuiCaravana()\" type=\"button\" (click)=\"sairCaravana()\" title=\"Sair desta Caravana\" class=\"btn btn-link\"><i class=\"fa fa-times\"></i></button>\r\n\r\n        </li>\r\n     </ul>\r\n   </div>\r\n  \r\n  </div>  \r\n  \r\n  </div>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n   <div class=\"modal-header\">\r\n     <h4 class=\"modal-title\" id=\"modal-basic-title\">Alterar Senha</h4>\r\n     <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('EXIT')\">\r\n       <span aria-hidden=\"true\">&times;</span>\r\n     </button>\r\n   </div>\r\n   <div class=\"modal-body\">\r\n     <div class=\"col-12\">\r\n       <p *ngFor=\"let alert of alerts\">\r\n         <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n           <div [innerHTML]=\"alert.message\"></div>\r\n         </ngb-alert>\r\n       </p>\r\n     </div>\r\n \r\n     <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\">\r\n       <div class=\"card bg-light mb-12\">\r\n         <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n           <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Dados do Usuário </div>\r\n         </div>\r\n         <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n           <div class=\"row\">\r\n             <div class=\" col-md-12\" >\r\n               <div class=\"form-label-group\">\r\n                 <label for=\"inputEmail\">Usuário</label>\r\n                 <input #loginField [(ngModel)]=\"usuario.login\" type=\"text\" class=\"form-control\" required value=\"\" disabled \r\n                   autocomplete=\"off\">\r\n               </div>\r\n           \r\n               <div class=\"form-label-group\">\r\n                 <label for=\"inputPassword\">Senha Anterior</label>\r\n                 <input [(ngModel)]=\"usuario.password_anterior\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                   placeholder=\"Password\" required>\r\n               </div>\r\n             </div>\r\n             <div class=\" col-md-6\" >\r\n \r\n               <div class=\"form-label-group\">\r\n                 <label for=\"inputPassword\">Nova Senha</label>\r\n                 <input [(ngModel)]=\"usuario.password\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                   placeholder=\"Password\" required>\r\n               </div>\r\n             </div>\r\n             <div class=\" col-md-6\" >\r\n \r\n               <div class=\"form-label-group\">\r\n                 <label for=\"inputPassword\">Repita Nova Senha</label>\r\n                 <input [(ngModel)]=\"usuario.password_conferir\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                   placeholder=\"Password\" required>\r\n               </div>\r\n             </div>\r\n           \r\n             </div>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>     \r\n \r\n   <div class=\"modal-footer\">\r\n     <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('SAVE')\">Confirmar</button>\r\n   </div>\r\n </ng-template>\r\n \r\n\r\n <ng-template #contentCaravana let-c=\"close\" let-d=\"dismiss\">\r\n   <div class=\"modal-header\">\r\n     <h4 class=\"modal-title\" id=\"modal-basic-title\">Caravana Virtual</h4>\r\n     <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('EXIT')\">\r\n       <span aria-hidden=\"true\">&times;</span>\r\n     </button>\r\n   </div>\r\n   <div class=\"modal-body\">\r\n     <div class=\"col-12\">\r\n       <p *ngFor=\"let alert of alerts\">\r\n         <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n           <div [innerHTML]=\"alert.message\"></div>\r\n         </ngb-alert>\r\n       </p>\r\n     </div>\r\n \r\n     <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\">\r\n       <div class=\"card bg-light mb-12\">\r\n         <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n           <div class=\"card-header alert-primary\"><i class=\"fa fa-bus\"></i> Selecione uma caravana </div>\r\n         </div>\r\n         <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n           <div class=\"row\">\r\n             <div class=\" col-md-12\" >\r\n               <div class=\"form-label-group\">\r\n                 <label for=\"inputEmail\"></label>\r\n                   <select  [(ngModel)]=\"usuario.caravana\" class=\"form-control\" placeholder=\"\">\r\n                     <option *ngFor=\"let t of listaCaravanas\" [value]=\"t.descricao\">{{ t.descricao }}</option>\r\n                   </select>                   \r\n               </div>\r\n           \r\n            </div>\r\n           </div>\r\n         </div>\r\n         </div>\r\n     </div>     \r\n    </div> \r\n \r\n   <div class=\"modal-footer\">\r\n     <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('SAVE')\">Confirmar</button>\r\n   </div>\r\n </ng-template>\r\n\r\n\r\n\r\n</body>\r\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!*************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--nav *ngIf=\"mostrarMenu\" >\r\n  <div class=\"nav-wrapper\">\r\n      <a routerLink=\"\" class=\"brand-logo right\">Rotas Ng2</a>\r\n      <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/login\">Login</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"\">Home</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/cursos\" [queryParams]=\"{pagina:1}\">Cursos</a></li>  \r\n      <li routerLinkActive=\"active\"><a routerLink=\"/alunos\" >Alunos</a></li>  \r\n      <li routerLinkActive=\"active\"><a routerLink=\"/entidades\" >Entidades</a></li>  \r\n      </ul>\r\n  </div>\r\n</nav-->\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-primary alert-primary\" *ngIf=\"userAutenticado()\">\r\n  <h3>Área do Participante</h3><br><br>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <!--li routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/registroPf\">| REGISTRO PF</a>\r\n      </li>\r\n      <li routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/estudante\">| ESTUDANTE</a>\r\n      </li-->\r\n\r\n    \r\n      </ul>\r\n      <div class=\"float-right\"><a  href=\"#\" (click)=\"logoff()\" ><p class=\"alert-primary\">{{usuarioLogado}}<br>LOGOFF</p></a></div>\r\n  </div>\r\n</nav>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Alterar Senha</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('EXIT')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"col-12\">\r\n      <p *ngFor=\"let alert of alerts\">\r\n        <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n          <div [innerHTML]=\"alert.message\"></div>\r\n        </ngb-alert>\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-sm-12\" style=\"margin-top:10px\">\r\n      <div class=\"card bg-light mb-12\">\r\n        <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n          <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Dados do Usuário </div>\r\n        </div>\r\n        <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\" col-md-12\" >\r\n              <div class=\"form-label-group\">\r\n                <label for=\"inputEmail\">Usuário</label>\r\n                <input #loginField [(ngModel)]=\"usuario.login\" type=\"text\" class=\"form-control\" required value=\"\" disabled \r\n                  autocomplete=\"off\">\r\n              </div>\r\n          \r\n              <div class=\"form-label-group\">\r\n                <label for=\"inputPassword\">Senha Anterior</label>\r\n                <input [(ngModel)]=\"usuario.password_anterior\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                  placeholder=\"Password\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\" col-md-6\" >\r\n\r\n              <div class=\"form-label-group\">\r\n                <label for=\"inputPassword\">Nova Senha</label>\r\n                <input [(ngModel)]=\"usuario.password\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                  placeholder=\"Password\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\" col-md-6\" >\r\n\r\n              <div class=\"form-label-group\">\r\n                <label for=\"inputPassword\">Repita Nova Senha</label>\r\n                <input [(ngModel)]=\"usuario.password_conferir\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                  placeholder=\"Password\" required>\r\n              </div>\r\n            </div>\r\n          \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>     \r\n\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('SAVE')\">Confirmar</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!*********************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12 mx-auto\">\r\n    <div class=\"align-middle\">\r\n      <div class=\"text-center\"><br><br><br><br>\r\n        <img src=\"assets/img/logoCRAGO.png\" width=\"300px\">\r\n        <br><br><br><br>\r\n        <h3 style=\"color:#0c5460\"><b>Bem Vindo ao ADMIN-WEB.</b></h3>\r\n        <h1 style=\"color:#0c5460\">Escolha um dos Menus acima.</h1><br><br>\r\n        <table>\r\n          <tr>\r\n              <td class=\"align-left\" width=\"20%\"></td>\r\n            <td class=\"align-left\" style=\"color:#0c5460\">\r\n                   <p class=\"text-left\" > - Contatos Realizados pelo Site</p>\r\n                    <p class=\"text-left\"> - Ouvidoria.</p>\r\n                      <p class=\"text-left\"> - Controle de Eventos. Neste Módulo voce poderá cadastrar eventos, verificar e efetivar as inscrições\r\n                      para determinado evento.</p>\r\n            </td>\r\n            <td width=\"20%\"></td>\r\n          </tr>\r\n          </table>\r\n          <br><br><br>\r\n        <p class=\"text-right\"><i>Ambiente Monitorado</i></p>\r\n      </div>\r\n      </div>\r\n      </div>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/inscricoes/inscricoes.component.html":
/*!*********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/inscricoes/inscricoes.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n   <form [formGroup]=\"form\">\r\n      <div  class=\"container\">\r\n         <div class=\"row\" [hidden]=\"checkoutEmAndamento\">\r\n            <div class=\"col-12\">\r\n               <p *ngFor=\"let alert of alerts\"><br>\r\n                  <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n               <div [innerHTML]=\"alert.message\"></div>\r\n               </ngb-alert>\r\n               </p>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-12 col-lg-12 mx-auto\">\r\n               <div class=\"container\">\r\n                  <div class=\"row\">\r\n                     <!--div class=\"col-12\">\r\n                        <h3>Cadastro</h3>\r\n                        </div-->        \r\n                     <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\">\r\n                        <div class=\"card bg-light mb-12\">\r\n                           <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n                              <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> - <b>Selecione o(s) seu(s) evento(s)</b> </div>\r\n                           </div>\r\n                           <div class=\"card-body\">\r\n                              <div class=\"row\">\r\n                                 <div class=\"col-12 table-responsive-xl\" style=\"font-size:70%;\">\r\n                                    <table class=\"table table-striped\" width=\"100%\">\r\n                                       <thead>\r\n                                          <tr>\r\n                                             <th scope=\"col\">#</th>\r\n                                             <th scope=\"col\" sortable=\"area\" (sort)=\"onSort($event)\">Descrição</th>\r\n                                             <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Valor</th>\r\n                                          </tr>\r\n                                       </thead>\r\n                                       <tbody>\r\n                                          <tr *ngFor=\"let reg of lista\">\r\n                                             <td   class=\"align-middle\" style=\" background: transparent;\">\r\n                                                <div [ngClass]=\"reg.status\">\r\n                                                   <div class=\"custom-control custom-checkbox\" id=\"div{{reg.id}}\">\r\n                                                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"id{{reg.id}}\" (change)=\"calcularValor()\" >\r\n                                                      <label class=\"custom-control-label\" for=\"id{{reg.id}}\" > - </label>\r\n                                                   </div>\r\n                                                </div>\r\n                                             </td>\r\n                                             <td class=\"align-middle\">\r\n                                                <ngb-highlight  [result]=\"reg.descricao\" [term]=\"queryBusca\"></ngb-highlight><br>\r\n                                                <i  class=\"text-secondary\">{{reg.detalhe}}</i>\r\n                                                <i [hidden]= \"reg.valor != '0'\" class=\"text-success\"><br><b>(Gratuita para participantes do evento principal)</b></i>                                       \r\n                                             </td>\r\n                                             <td class=\"float-right\">\r\n                                                <span [hidden]=\"reg.status=='AUTHORIZED'\" >{{reg.valor | number : '1.2-2' }}</span><br>\r\n                                                <span class=\"alert-success\" [hidden]=\"reg.status!='AUTHORIZED'\"><b>CONFIRMADO</b></span>\r\n                                             </td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                                    <div class=\"alert alert-dark\" role=\"alert\">\r\n                                       <div class=\"row\">\r\n                                          <div class=\"col-12 col-sm-9\">\r\n                                             <b>TOTAL</b>\r\n                                          </div>\r\n                                          <div class=\"col-12  col-sm-3\">\r\n                                             <div class=\"float-right\">\r\n                                                <span class=\"float-right\"><b> R$ {{valor}}</b><br></span>\r\n                                             </div>\r\n                                          </div>\r\n                                       </div>\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"col-12 col-sm-12\">\r\n                        <div class=\"mx-auto\">\r\n                           <br> <button type=\"button\" (click)=\"proximo()\" class=\"btn btn-primary text-right\" >PROXIMO</button>\r\n                           &nbsp;&nbsp;&nbsp;&nbsp;\r\n                           <button type=\"button\" (click)=\"voltar()\" class=\"btn btn-secondary text-right\"  >VOLTAR</button>      \r\n                           <br><br><br>                    \r\n                           <hr>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div [hidden]=\"! checkoutEmAndamento\" class=\"container\">\r\n         <div class=\"col-12\">\r\n            <p *ngFor=\"let alert of alerts\"><br>\r\n               <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n            <div [innerHTML]=\"alert.message\"></div>\r\n            </ngb-alert>\r\n            </p>\r\n            <div *ngIf=\"carregando\"  style=\"align-content: center\">\r\n               <br><br><br><br><br><br>\r\n               <div class=\"card bg-light mb-12\">\r\n                  <div class=\"card-body\">\r\n                     <br><br>\r\n                     <img  class=\"rounded mx-auto d-block\" src=\"assets/img/processando.gif\"><br><br>\r\n                     <p class=\"text-center text-secondary\"><b>Por favor, aguarde enquanto o seu pagamento é processado !!!</b>\r\n                  </div>\r\n               </div>\r\n               <br><br><br><br>\r\n            </div>\r\n            <!--DIV MOSTRA TELA PAGAMENTO CONFIRMADO-->\r\n            <div *ngIf=\"pagamento.confirmado\"  style=\"align-content: center\">\r\n               <br><br><br><br>\r\n               <div  class=\"card bg-light mb-12\">\r\n                  <!--CARTAO-->\r\n                  <div [hidden]=\"pagamento.tipo!='C'\" class=\"card-body\">\r\n                     <br><br>\r\n                     <div class=\"text-center\">\r\n                        <img  class=\"rounded mx-auto d-block\" src=\"assets/img/pagamentoConfirmado.png\" class=\"img-fluid\" style=\"max-width: 200px\"><br><br>\r\n                     </div>\r\n                     <p class=\"text-center text-secondary\">\r\n                        <b>\r\n                     <h3>PAGAMENTO CONFIRMADO</h3></b></p>\r\n                     <p class=\"text-center text-secondary\">\r\n                        <b>\r\n                     <h1>MUITO OBRIGADO</h1></b></p>\r\n                     <div class=\"col-12 col-sm-12\">\r\n                        <div class=\"text-center\">\r\n                           <br>\r\n                           <hr>\r\n                           <button type=\"button\" (click)=\"sair()\" class=\"btn btn-secondary text-right\"  >VOLTAR</button>      \r\n                           <br><br><br>                    \r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <!--BOLETO-->\r\n                  <div [hidden]=\"pagamento.tipo!='B'\" class=\"container\">\r\n                     <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                           <h1 class=\"text-secondary\"><i class=\"fas fa-barcode\"></i>   BOLETO BANCÁRIO </h1>\r\n                           <hr>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                           <h3 class=\"text-dark text-center\" ><i class=\"fas fa-barcode\"></i> Linha digitável</h3>\r\n                           <h3 class=\"text-info text-center\" >{{pagamento.codigoBarras}}</h3>\r\n                           <hr>\r\n                           <p class=\"text-secondary\"><strong>Vencimento: </strong>  <span data-apply-date=\"\">{{pagamento.dataVencimento}}</span></p>\r\n                           <p class=\"text-secondary\"><strong>Valor total: </strong>  <span data-apply-total=\"\">R$ {{pagamento.valor}}</span></p>\r\n                           <p class=\"text-secondary\">O prazo para a compensação do boleto pode ser de até 2 dias úteis.</p>\r\n                           <hr>\r\n                        </div>\r\n                        <div class=\"col-4 text-center\">\r\n                           <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyToClipBoard(pagamento.codigoBarras)\"><i class=\"far fa-copy\"></i> Copiar linha digitável</button>\r\n                        </div>\r\n                        <div class=\"col-4 text-center\">\r\n                           <button type=\"button\" class=\"btn btn-primary\" (click)=\"openUrl(pagamento.url)\" ><i class=\"fas fa-external-link-alt\"></i>Acessar Link Boleto</button>\r\n                        </div>\r\n                        <div class=\"col-4 text-center\">\r\n                           <button type=\"button\" (click)=\"sair()\" class=\"btn btn-secondary text-right\"  ><i class=\"fas fa-external-link-alt\"></i>VOLTAR</button><br> <br>                                      \r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <br><br>\r\n            </div>\r\n            <!--DIV MOSTRA TELA ERRO PAGAMENTO-->\r\n            <div *ngIf=\"pagamento.erro\"  style=\"align-content: center\">\r\n               <br><br><br><br>\r\n               <div class=\"card bg-light mb-12\">\r\n                  <div class=\"card-body\">\r\n                     <br><br>\r\n                     <div class=\"text-center\">\r\n                        <img [hidden]=\"pagamento.erroTipo != 'CANCELLED' \"  class=\"rounded mx-auto d-block\" src=\"assets/img/pagamentoErro.png\" class=\"img-fluid\" style=\"max-width: 200px\"><br><br>\r\n                        <img [hidden]=\"pagamento.erroTipo == 'CANCELLED' \"  class=\"rounded mx-auto d-block\" src=\"assets/img/pagamentoAlerta.png\" class=\"img-fluid\" style=\"max-width: 200px\"><br><br>\r\n                     </div>\r\n                     <p class=\"text-center text-danger\">\r\n                        <b>\r\n                     <h3 [hidden]=\"pagamento.erroTipo != 'CANCELLED' \">PAGAMENTO NÃO CONFIRMADO</h3>\r\n                     <h3 [hidden]=\"pagamento.erroTipo == 'CANCELLED' \" style=\"color:orange\">ATENÇÃO !!!</h3></b></p>\r\n                     <div class=\"text-center text-secondary\">\r\n                        <p *ngFor=\"let alert of pagamento.alerts\">\r\n                           <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n                        <div [innerHTML]=\"alert.message\"></div>\r\n                        </ngb-alert>\r\n                        </p>\r\n                     </div>\r\n                     <div class=\"col-12 col-sm-12\">\r\n                        <div class=\"text-center\">\r\n                           <br>\r\n                           <hr>\r\n                           <button type=\"button\" (click)=\"sair()\" class=\"btn btn-secondary text-right\"  >VOLTAR</button>      \r\n                           <br><br><br>                    \r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <br><br>\r\n            </div>\r\n            <p><br></p>\r\n         </div>\r\n         <div [hidden]=\"pagamento.processado\" class=\"card bg-light mb-12\">\r\n            <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n               <div class=\"card-header alert-primary\"><i class=\"fab fa-amazon-pay\"></i> <b> - Finalizar compra</b> </div>\r\n            </div>\r\n            <div  class=\"card-body\">\r\n               <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-md-12 col-lg-12 mx-auto\">\r\n                     <main class=\"mt-5 pt-4\">\r\n                        <div class=\"container wow fadeIn\">\r\n                           <div class=\"row\">\r\n                              <div class=\"col-md-8 mb-4\">\r\n                                <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n                                    <span class=\"text-muted\">Dados do Pagador:</span>\r\n                                </h4>\r\n                                 <div class=\"card\">\r\n                                    <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                       <div class=\"col-md-4 mb-4\" >\r\n                                          <label>{{getLabelField('cpf')}}</label>\r\n                                          <input  type=\"text\" matInput mask=\"000.000.000-00\" formControlName=\"cpf\"  class=\"form-control\"\r\n                                            placeholder=\"\"  tabindex=\"0\" />\r\n                                        </div>\r\n                                        <div class=\"col-md-8 mb-8\">\r\n                                          <label>{{getLabelField('nome')}}</label>\r\n                                          <input type=\"text\" formControlName=\"nome\" class=\"form-control\">\r\n                                       </div>\r\n                                       <div class=\" col-md-4\" >\r\n                                          <label>{{getLabelField('celular')}}</label>\r\n                                          <div class=\"input-group\">\r\n                                            <div class=\"input-group-prepend\">\r\n                                              <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-mobile-alt\"></i> </span>\r\n                                            </div>\r\n                                            <input type=\"text\" formControlName=\"celular\" class=\"form-control\" placeholder=\"\" matInput\r\n                                              mask=\"(00) 00000-0000\" aria-label=\"Celular\" aria-describedby=\"basic-addon1\">\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\" col-md-3\" >\r\n                                          <label>Dt Nasc.</label>\r\n                                          <input  type=\"text\" matInput mask=\"00/00/0000\" formControlName=\"dataNascimento\"  class=\"form-control\"\r\n                                            placeholder=\"\"  tabindex=\"0\" />\r\n                                        </div>\r\n                \r\n                                       <div class=\"col-md-5\">\r\n                                          <label>{{getLabelField('email')}}</label>\r\n                                          <div class=\"input-group\">\r\n                                             <div class=\"input-group-prepend\">\r\n                                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-envelope\"></i> </span>\r\n                                             </div>\r\n                                             <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"\" aria-label=\"Email\"\r\n                                                aria-describedby=\"basic-addon1\">\r\n                                          </div>\r\n                                       </div>\r\n                                       <div class=\" col-md-4\">\r\n                                          <label>{{getLabelField('cep')}}</label>\r\n                                          <input type=\"text\" formControlName=\"cep\" id=\"cep\" matInput mask=\"00.000-000\" class=\"form-control\"\r\n                                             placeholder=\"\" />\r\n                                       </div>\r\n                                       <div class=\" col-md-3\">\r\n                                          <label>{{getLabelField('uf')}}</label>\r\n                                          <select formControlName=\"uf\" class=\"form-control\" placeholder=\"\">\r\n                                          <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.sigla }}</option>\r\n                                          </select>\r\n                                       </div>\r\n                                       <div class=\" col-md-5\">\r\n                                          <label>{{getLabelField('cidade')}}</label>\r\n                                          <select formControlName=\"cidade\" class=\"form-control\" placeholder=\"\">\r\n                                          <option *ngFor=\"let cidade of cidades\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\r\n                                          </select>\r\n                                       </div>\r\n                                       <div class=\" col-md-6\">\r\n                                          <label>{{getLabelField('bairro')}}</label>\r\n                                          <input type=\"text\" formControlName=\"bairro\" class=\"form-control\" placeholder=\"\" />\r\n                                       </div>\r\n                                       <div class=\" col-md-6\">\r\n                                          <label>{{getLabelField('logradouro')}}</label>\r\n                                          <input type=\"text\" formControlName=\"logradouro\" class=\"form-control\" placeholder=\"\" />\r\n                                       </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                    <div class=\"d-block my-3\">\r\n                                       <div class=\"col-12 col-sm-12\" [hidden]= \"valor == 0\">\r\n                                          <label><b>Pagar com:</b></label><br>                  \r\n                                          <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                             <input type=\"radio\" class=\"custom-control-input\" id=\"boleto\" name=\"meioPagamento\" value=\"1\" (change)=\"selecionarTipoPagamento()\" disabled>\r\n                                             <label class=\"custom-control-label\" for=\"boleto\"><i class=\"fa fa-file-invoice-dollar\"></i> - Boleto</label>\r\n                                          </div>\r\n                                          <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                             <input type=\"radio\" class=\"custom-control-input\" id=\"cartao\" name=\"meioPagamento\" value=\"2\" (change)=\"selecionarTipoPagamento()\" checked> \r\n                                             <label class=\"custom-control-label\" for=\"cartao\"><i class=\"fa fa-credit-card\"></i> - Cartão</label>\r\n                                          </div>\r\n                                          <br>\r\n                                       </div>\r\n                                    </div>\r\n                                    <div class=\"row\" [hidden]=\"pagamento.tipo=='B'\">\r\n                                       <div class=\"col-12\">\r\n                                          <hr>\r\n                                       </div>\r\n                                       <div class=\"col-md-6 mb-3\">\r\n                                          <label for=\"cc-name\">Nome no cartão</label>\r\n                                          <input type=\"text\" class=\"form-control\" formControlName=\"cc_nome\" id=\"cc-name\"  placeholder=\"\" required>\r\n                                          <small class=\"text-muted\">Nome conforme exibido no cartão</small>\r\n                                          <div class=\"invalid-feedback\">\r\n                                             Nome conforme exibido no cartão\r\n                                          </div>\r\n                                       </div>\r\n                                       <div class=\"col-md-6 mb-3\" >\r\n                                          <label for=\"cc-number\">Numero do cartão</label>\r\n                                          <input type=\"text\" class=\"form-control\" matInput mask=\"0000 0000 0000 0000\" formControlName=\"cc_numero\"  id=\"cc-number\" placeholder=\"\" required>\r\n                                          <div class=\"invalid-feedback\">\r\n                                             O número do cartão de crédito é obrigatório\r\n                                          </div>\r\n                                       </div>\r\n                                    </div>\r\n                                    <div class=\"row\" [hidden]=\"pagamento.tipo=='B'\">\r\n                                       <div class=\"col-md-3 mb-3\">\r\n                                          <label for=\"cc-expiration\">Vencimento</label>\r\n                                          <input type=\"text\" class=\"form-control\" matInput mask=\"00/00\" formControlName=\"cc_expiracao\" id=\"cc-expiration\"  placeholder=\"\" required>\r\n                                          <div class=\"invalid-feedback\">\r\n                                             Data de Vencimento obrigatório\r\n                                          </div>\r\n                                       </div>\r\n                                       <div class=\"col-md-3 mb-3\">\r\n                                          <label for=\"cc-expiration\">CVV</label>\r\n                                          <input type=\"text\" class=\"form-control\" matInput mask=\"0000\" formControlName=\"cc_cod_seguranca\" id=\"cc-cvv\"  placeholder=\"\" required>\r\n                                          <div class=\"invalid-feedback\">\r\n                                             Codigo de segurança obrigatório\r\n                                          </div>\r\n                                       </div>\r\n                                       <div class=\"col-md-3 mb-3\">\r\n                                          <label for=\"cc-expiration\">Qtd de Parcelas</label>\r\n                                          <select formControlName=\"cc_qtd_parcelas\" class=\"form-control\" placeholder=\"\">\r\n                                          <option *ngFor=\"let t of listaQtdParcelas\" [value]=\"t.codigo\">{{ t.descricao }}</option>\r\n                                          </select>\r\n                                       </div>\r\n                                    </div>\r\n                                    <div class=\"col-12 col-sm-12\">\r\n                                       <div class=\"mx-auto\">\r\n                                          <br> <button type=\"button\" (click)=\"checkOut()\"  id=\"btnCheckout\" class=\"btn btn-primary text-right\" >FINALIZAR</button>\r\n                                          &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                          <button type=\"button\" (click)=\"voltar()\" class=\"btn btn-secondary text-right\"  >VOLTAR</button>      \r\n                                          <br><br><br>                    \r\n                                          <hr>\r\n                                       </div>\r\n                                    </div>\r\n                                 </div>\r\n                                 <!--/.Card-->\r\n                                 </div>\r\n                              </div>\r\n                              <!--Grid column-->\r\n                              <!--Grid column-->\r\n                              <div class=\"col-md-4 mb-4\">\r\n                                 <!-- Heading -->\r\n                                 <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n                                    <span class=\"text-muted\">Seu Carrinho</span>\r\n                                    <span class=\"badge badge-secondary badge-pill\">{{listaCarrinho.length}}</span>\r\n                                 </h4>\r\n                                 <!-- Cart -->\r\n                                 <ul *ngFor=\"let reg of listaCarrinho\" class=\"list-group mb-3 z-depth-1\">\r\n                                    <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n                                       <div>\r\n                                          <h6 class=\"my-0\">{{reg.descricao}}</h6>\r\n                                          <!--small class=\"text-muted\">{{reg.detalhe}}</small-->\r\n                                       </div>\r\n                                       <span class=\"text-muted\">R$ {{reg.valor}}</span>\r\n                                    </li>\r\n                                 </ul>\r\n                                 <ul class=\"list-group mb-3 z-depth-1\">\r\n                                    <li  class=\"list-group-item d-flex justify-content-between bg-light\">\r\n                                       <div [hidden]= \"! cupomValido\" class=\"text-success\">\r\n                                          <h6 class=\"my-0\">Desconto</h6>\r\n                                          <small>CUPOM Promocional</small>\r\n                                       </div>\r\n                                       <span [hidden]= \"! cupomValido\" class=\"text-success\">-{{valorCupom}} %</span>\r\n                                    </li>\r\n                                    <li class=\"list-group-item d-flex justify-content-between\">\r\n                                       <span>Total (R$)</span>\r\n                                       <strong>{{valor}}</strong>\r\n                                    </li>\r\n                                 </ul>\r\n                                 <!-- Cart -->\r\n                                 <!-- Promo code -->\r\n                                 <div class=\"input-group\">\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"cupom\" id=\"cupom\" placeholder=\"Possui um cupom de desconto ?\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n                                    <div class=\"input-group-append\">\r\n                                       <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"getCupom()\" title=\"Atualizar\"><i class=\"fas fa-sync-alt fa-lg\"></i></button>                                \r\n                                    </div>\r\n                                 </div>\r\n                                 <!-- Promo code -->\r\n                              </div>\r\n                              <!--Grid column-->\r\n                           </div>\r\n                           <!--Grid row-->\r\n                        </div>\r\n                     </main>\r\n                     <!--Main layout-->\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </form>\r\n</body>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!***********************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n    <p style=\"align-content: center\">\r\n\r\n        <img *ngIf=\"carregando\" class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n      </p>\r\n\r\n    <div [hidden]=\"carregando\" class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n          <div class=\"card card-signin my-5\">\r\n            <div class=\"card-body\"> <img src=\"assets/img/logo.png\" width=\"300px\"><br><br>\r\n              <div class=\"card-header alert-primary\">\r\n            \r\n                <h3>Área do Participante</h3>\r\n                <i class=\"fa fa-sign-in-alt\"></i> Informe seu CPF para prosseguir</div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\"><br>\r\n                  <p *ngFor=\"let alert of alerts\">\r\n                    <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n                      <div [innerHTML]=\"alert.message\"></div>\r\n                    </ngb-alert>\r\n                  </p>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"form-label-group\">\r\n                <label for=\"inputEmail\">CPF:</label>\r\n                <input #loginField [(ngModel)]=\"usuario.login\"  #cpf type=\"text\" matInput mask=\"000.000.000-00\" class=\"form-control\" required value=\"\"\r\n                  autocomplete=\"off\" (keyup.enter)=\"validarCPF()\">\r\n              </div>\r\n\r\n              <div [hidden]=\"cpfNaoCadastrado\" class=\"form-label-group\">\r\n                <label for=\"inputPassword\">Senha</label>\r\n                <input [(ngModel)]=\"usuario.password\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n                  placeholder=\"Password\" required (keyup.enter)=\"login()\">\r\n              </div>\r\n              <div class=\"form-label-group\"><br>\r\n                <button class=\"btn btn-secondary\" (click)=\"proximo()\"\r\n                type=\"submit\">PROXIMO</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <button [hidden]=\"cpfNaoCadastrado\" class=\"btn btn-link\" (click)=\"recuperarSenha()\"\r\n                type=\"submit\">Recuperar Senha</button>\r\n\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</body>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/modal-acessoNegado/modal-acessoNegado.component.html":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/modal-acessoNegado/modal-acessoNegado.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Acesso não autorizado !!!</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p *ngFor=\"let alert of alerts\">\r\n            <ngb-alert [type]=\"alert.type\" [dismissible]=\"false\"><b>ATENÇÃO</b>, você não está autorizado a executar esta operação. Por favor, solicite acesso junto ao gestor.</ngb-alert>\r\n          </p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n   \r\n    </div>\r\n  ");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html":
/*!*******************************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  pagina-nao-encontrada works!\r\n</p>\r\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.component.html":
/*!***************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n    <p style=\"align-content: center\">\r\n\r\n        <img *ngIf=\"carregando\" class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n      </p>\r\n\r\n    <div [hidden]=\"carregando\" class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12 mx-auto\">\r\n          <form class=\"mt-5\" [formGroup]=\"form\" >\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                \r\n                  <!--div class=\"col-12\">\r\n                      <h3>Cadastro</h3>\r\n                    </div-->        \r\n          \r\n                <div class=\"col-12\">\r\n                  <p *ngFor=\"let alert of alerts\">\r\n                    <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">\r\n                      <div [innerHTML]=\"alert.message\"></div>\r\n                    </ngb-alert>\r\n                  </p>\r\n        \r\n                  <p *ngIf=\"carregando\"  style=\"align-content: center\">\r\n                      <img  class=\"rounded mx-auto d-block\" src=\"assets/img/loading.gif\">\r\n                   </p>\r\n                </div>\r\n         \r\n                <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\">\r\n                  <div class=\"card bg-light mb-12\">\r\n                      <div style=\"cursor: pointer;\" (click)=\"show('ocultarDadosPessoais')\">\r\n                        <div class=\"card-header alert-primary\"><i class=\"fa fa-user-tie\"></i> Dados Pessoais </div>   \r\n                    </div>\r\n                    <div [hidden]=\"ocultarDadosPessoais\" class=\"card-body\">\r\n                      <div class=\"row\">\r\n                        <div class=\" col-md-4\" >\r\n                          <label>{{getLabelField('cpf')}}</label>\r\n                          <input  type=\"text\" matInput mask=\"000.000.000-00\" formControlName=\"cpf\"  class=\"form-control\"\r\n                            placeholder=\"\"  tabindex=\"0\" />\r\n                        </div>\r\n                        <div class=\" col-md-8\">\r\n                          <label>{{getLabelField('nome')}}</label>\r\n                          <input type=\"text\" formControlName=\"nome\" class=\"form-control\" placeholder=\"\" />\r\n                        </div>\r\n\r\n                        <div class=\" col-md-4\" >\r\n                          <label>{{getLabelField('celular')}}</label>\r\n                          <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-mobile-alt\"></i> </span>\r\n                            </div>\r\n                            <input type=\"text\" formControlName=\"celular\" class=\"form-control\" placeholder=\"\" matInput\r\n                              mask=\"(00) 00000-0000\" aria-label=\"Celular\" aria-describedby=\"basic-addon1\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\" col-md-4\">\r\n                          <label>{{getLabelField('email')}}</label>\r\n                          <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-envelope\"></i> </span>\r\n                            </div>\r\n                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"\" aria-label=\"Email\"\r\n                              aria-describedby=\"basic-addon1\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\" col-md-4\" >\r\n                          <label>{{getLabelField('dataNascimento')}}</label>\r\n                          <input  type=\"text\" matInput mask=\"00/00/0000\" formControlName=\"dataNascimento\"  class=\"form-control\"\r\n                            placeholder=\"\"  tabindex=\"0\" />\r\n                        </div>\r\n        \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\" >\r\n                  <div class=\"card bg-light mb-12\">\r\n                      <div style=\"cursor: pointer;\" (click)=\"show('ocultarEndereco')\">            \r\n                        <div class=\"card-header alert-primary\"><i class=\"fa fa-home\"></i> Endereço</div>\r\n                      </div>\r\n                    <div [hidden]=\"ocultarEndereco\" class=\"card-body\">\r\n                      <div class=\"row\">\r\n                        <div class=\" col-md-3\">\r\n                          <label>{{getLabelField('cep')}}</label>\r\n                          <input type=\"text\" formControlName=\"cep\" id=\"cep\" matInput mask=\"00.000-000\" class=\"form-control\"\r\n                            placeholder=\"\" />\r\n                        </div>\r\n                        <div class=\" col-md-3\">\r\n                          <label>{{getLabelField('uf')}}</label>\r\n                          <select formControlName=\"uf\" class=\"form-control\" placeholder=\"\">\r\n                            <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.sigla }}</option>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\" col-md-6\">\r\n                          <label>{{getLabelField('cidade')}}</label>\r\n                          <select formControlName=\"cidade\" class=\"form-control\" placeholder=\"\">\r\n                            <option *ngFor=\"let cidade of cidades\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\" col-md-6\">\r\n                          <label>{{getLabelField('bairro')}}</label>\r\n                          <input type=\"text\" formControlName=\"bairro\" class=\"form-control\" placeholder=\"\" />\r\n                        </div>\r\n                        <div class=\" col-md-6\">\r\n                          <label>{{getLabelField('logradouro')}}</label>\r\n                          <input type=\"text\" formControlName=\"logradouro\" class=\"form-control\" placeholder=\"\" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-12\"  style=\"margin-top:10px\" >\r\n                    <div class=\"card bg-light mb-12\">\r\n                        <div style=\"cursor: pointer;\" (click)=\"show('ocultarOuvidoria')\">\r\n                          <div class=\"card-header alert-primary\"><i class=\"fa fa-calendar-alt\"></i> Categoria:</div>\r\n                        </div>\r\n                      <div [hidden]=\"ocultarOuvidoria\" class=\"card-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\" col-md-6\">\r\n                            <label>{{getLabelField('tipo')}}</label>\r\n                            <select formControlName=\"categoria\" class=\"form-control\" placeholder=\"\">\r\n                              <option *ngFor=\"let t of listaTipos\" [value]=\"t.descricao\">{{ t.descricao }}</option>\r\n                            </select>\r\n                          </div>\r\n                          <div class=\" col-md-6\">\r\n                            <label>{{getLabelField('ies_empresa')}}</label>\r\n                            <input type=\"text\" formControlName=\"origem\" class=\"form-control\" placeholder=\"\" />\r\n                          </div>\r\n                          <div class=\" col-md-6\">\r\n                            <label>{{getLabelField('senha')}}</label>\r\n                            <input type=\"password\" formControlName=\"senha\" id=\"senha\" class=\"form-control\" placeholder=\"\" />\r\n                          </div>\r\n                          <div class=\" col-md-6\">\r\n                            <label>{{getLabelField('repita_senha')}}</label>\r\n                            <input type=\"password\" formControlName=\"senha_repita\" id=\"senha_repita\" class=\"form-control\"  placeholder=\"\" />\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n        \r\n                <div class=\"col-12 col-sm-12\">\r\n        \r\n                  <div class=\"mx-auto\"><br> <button type=\"submit\" (click)=\"salvar()\" class=\"btn btn-primary text-right\"  [disabled]=\"id !== 0\">Salvar</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"submit\" (click)=\"voltar()\" class=\"btn btn-secondary text-right\"  >VOLTAR</button>      \r\n                    <br><br><br>                    \r\n                    <hr>\r\n                  </div>\r\n        \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n</body>");

/***/ }),

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Mostly: http://ryanfait.com/sticky-footer/ */\r\n\r\n* {\r\n\tmargin: 0;\r\n}\r\n\r\nhtml, body {\r\n\theight: 100%;\r\n}\r\n\r\n.page-wrap {\r\n  min-height: 100%;\r\n  /* equal to footer height */\r\n\tmargin-bottom: -142px; \r\n  position: relative;\r\n}\r\n\r\n.page-wrap:after {\r\n  content: \"\";\r\n  display: block;\r\n}\r\n\r\n.site-footer, .page-wrap:after {\r\n  /* .push must be the same height as footer */\r\n\theight: 142px; \r\n}\r\n\r\n.site-footer {\r\n  background: orange;\r\n}\r\n\r\n#add{position: absolute; bottom: 160px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDOztBQUUvQztDQUNDLFNBQVM7QUFDVjs7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwyQkFBMkI7Q0FDNUIscUJBQXFCO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsNENBQTRDO0NBQzdDLGFBQWE7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQSxLQUFLLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW9zdGx5OiBodHRwOi8vcnlhbmZhaXQuY29tL3N0aWNreS1mb290ZXIvICovXHJcblxyXG4qIHtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuaHRtbCwgYm9keSB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5wYWdlLXdyYXAge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgLyogZXF1YWwgdG8gZm9vdGVyIGhlaWdodCAqL1xyXG5cdG1hcmdpbi1ib3R0b206IC0xNDJweDsgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wYWdlLXdyYXA6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNpdGUtZm9vdGVyLCAucGFnZS13cmFwOmFmdGVyIHtcclxuICAvKiAucHVzaCBtdXN0IGJlIHRoZSBzYW1lIGhlaWdodCBhcyBmb290ZXIgKi9cclxuXHRoZWlnaHQ6IDE0MnB4OyBcclxufVxyXG4uc2l0ZS1mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcclxufVxyXG4jYWRke3Bvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxNjBweDt9Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
        this.title = 'app works!';
    }
    ngOnInit() {
        console.log(this.route.url);
    }
};
AppComponent.ctorParameters = () => [
    { type: _login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_ngx_mask_ngx_mask_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/ngx-mask/ngx-mask.module */ "./src/app/shared/ngx-mask/ngx-mask.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pagina-nao-encontrada/pagina-nao-encontrada.component */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _guards_registroPf_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/registroPf.guard */ "./src/app/guards/registroPf.guard.ts");
/* harmony import */ var _guards_estudante_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/estudante.guard */ "./src/app/guards/estudante.guard.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-file-upload */ "../node_modules/ng2-file-upload/__ivy_ngcc__/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal-acessoNegado/modal-acessoNegado.component */ "./src/app/modal-acessoNegado/modal-acessoNegado.component.ts");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/usuario/usuario.component.ts");
/* harmony import */ var _areaParticipante_areaParticipante_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./areaParticipante/areaParticipante.component */ "./src/app/areaParticipante/areaParticipante.component.ts");
/* harmony import */ var _inscricoes_inscricoes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./inscricoes/inscricoes.component */ "./src/app/inscricoes/inscricoes.component.ts");






















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_19__["UsuarioComponent"],
            _areaParticipante_areaParticipante_component__WEBPACK_IMPORTED_MODULE_20__["AreaParticipanteComponent"],
            _inscricoes_inscricoes_component__WEBPACK_IMPORTED_MODULE_21__["InscricoesComponent"],
            _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_12__["PaginaNaoEncontradaComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_18__["ModalAcessoNegadoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _shared_ngx_mask_ngx_mask_module__WEBPACK_IMPORTED_MODULE_1__["NgxMaskModule"].forRoot(),
        ],
        entryComponents: [_modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_18__["ModalAcessoNegadoComponent"]],
        providers: [
            _login_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
            _guards_registroPf_guard__WEBPACK_IMPORTED_MODULE_15__["RegistroPfGuard"],
            _guards_estudante_guard__WEBPACK_IMPORTED_MODULE_16__["EstudanteGuard"]
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ]
    })
], AppModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/usuario/usuario.component.ts");
/* harmony import */ var _areaParticipante_areaParticipante_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./areaParticipante/areaParticipante.component */ "./src/app/areaParticipante/areaParticipante.component.ts");
/* harmony import */ var _inscricoes_inscricoes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inscricoes/inscricoes.component */ "./src/app/inscricoes/inscricoes.component.ts");









const appRoutes = [
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
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'usuario', component: _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioComponent"] },
    { path: 'areaParticipante', component: _areaParticipante_areaParticipante_component__WEBPACK_IMPORTED_MODULE_7__["AreaParticipanteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'inscricoes', component: _inscricoes_inscricoes_component__WEBPACK_IMPORTED_MODULE_8__["InscricoesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/areaParticipante/areaParticipante.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/areaParticipante/areaParticipante.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".IN_ANALYSIS{\r\n    color:red;\r\n}\r\n.AUTHORIZED{\r\n   font-weight: bold;\r\n    color: #155724;\r\n \r\n}\r\n.WAITING{\r\n    font-weight: bold;\r\n    color:rgb(255, 196, 0);\r\n}\r\n.CANCELLED{\r\n        color:red; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYVBhcnRpY2lwYW50ZS9hcmVhUGFydGljaXBhbnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtHQUNHLGlCQUFpQjtJQUNoQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjtBQUNBO1FBQ1EsU0FBUztBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FyZWFQYXJ0aWNpcGFudGUvYXJlYVBhcnRpY2lwYW50ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLklOX0FOQUxZU0lTe1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5BVVRIT1JJWkVEe1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gXHJcbn1cclxuLldBSVRJTkd7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOnJnYigyNTUsIDE5NiwgMCk7XHJcbn0gICAgXHJcbi5DQU5DRUxMRUR7XHJcbiAgICAgICAgY29sb3I6cmVkOyBcclxufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/dropdown.service */ "./src/app/shared/services/dropdown.service.ts");
/* harmony import */ var _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/consulta-cep.service */ "./src/app/shared/services/consulta-cep.service.ts");
/* harmony import */ var _shared_form_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/form-validation */ "./src/app/shared/form-validation.ts");
/* harmony import */ var _areaParticipante_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./areaParticipante.service */ "./src/app/areaParticipante/areaParticipante.service.ts");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_usuario__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../login/usuario */ "./src/app/login/usuario.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modal-acessoNegado/modal-acessoNegado.component */ "./src/app/modal-acessoNegado/modal-acessoNegado.component.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");















let AreaParticipanteComponent = class AreaParticipanteComponent {
    constructor(fb, dropdownService, authService, router, cepService, service, usuarioService, http, modalService) {
        this.fb = fb;
        this.dropdownService = dropdownService;
        this.authService = authService;
        this.router = router;
        this.cepService = cepService;
        this.service = service;
        this.usuarioService = usuarioService;
        this.http = http;
        this.modalService = modalService;
        this.usuario = new _login_usuario__WEBPACK_IMPORTED_MODULE_11__["Usuario"]();
        this.submitted = false;
        this.alerts = [];
        this.listaCaravanas = [];
        this.listaAcessoPalestra = [];
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
        this.evento01 = false;
        this.evento02 = false;
        this.evento03 = false;
        this.evento99 = false;
        this.assistiuEvento1 = 0;
        this.assistiuEvento11 = false;
        this.assistiuEvento12 = false;
        this.assistiuEvento13 = false;
        this.assistiuEvento2 = 0;
        this.assistiuEvento21 = false;
        this.assistiuEvento22 = false;
        this.assistiuEvento23 = false;
        this.assistiuEvento3 = 0;
        this.assistiuEvento31 = false;
        this.assistiuEvento32 = false;
        this.assistiuEvento99 = 0;
        this.spinnerEvento01 = false;
        this.spinnerEvento02 = false;
        this.spinnerEvento03 = false;
        this.spinnerEvento99 = false;
        this.dateNow = new Date();
        this.dDay = new Date('Sep 17 2021 20:00:00');
        this.milliSecondsInASecond = 1000;
        this.hoursInADay = 24;
        this.minutesInAnHour = 60;
        this.SecondsInAMinute = 60;
    }
    getTimeDifference() {
        this.timeDifference = this.dDay.getTime() - new Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
        // Inicializamos o objeto Date() com data e horário atual
        const date1 = new Date();
        // APRESENTACAO DE TRABALHOS CIENTIFICOS 
        const date2 = new Date('2021-09-16 08:00:00');
        const date3 = new Date('2021-09-16 18:00:00');
        if (date1.getTime() > date2.getTime() && date1.getTime() < date3.getTime()) {
            this.spinnerEvento03 = true;
        }
        // PAINEL DE GESTÃO 01 
        const date4 = new Date('2021-09-17 09:00:00');
        const date5 = new Date('2021-09-17 12:00:00');
        if (date1.getTime() > date4.getTime() && date1.getTime() < date5.getTime()) {
            this.spinnerEvento01 = true;
        }
        // PAINEL DE GESTÃO 02 
        const date6 = new Date('2021-09-17 14:00:00');
        const date7 = new Date('2021-09-17 18:00:00');
        if (date1.getTime() > date6.getTime() && date1.getTime() < date7.getTime()) {
            this.spinnerEvento02 = true;
        }
        // EVENTO PRINCIPAL 
        const date8 = new Date('2021-09-17 19:00:00');
        const date9 = new Date('2021-09-17 22:00:00');
        if (date1.getTime() > date8.getTime() && date1.getTime() < date9.getTime()) {
            this.spinnerEvento99 = true;
        }
    }
    allocateTimeUnits(timeDifference) {
        this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
        this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
        this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
    }
    // @ViewChild('cpf') firstNameElement: ElementRef;
    ngAfterViewInit() {
        //    this.firstNameElement.nativeElement.focus();
    }
    ngOnInit() {
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000)
            .subscribe(x => { this.getTimeDifference(); });
        this.service.getMeusEventos()
            .subscribe(response => {
            this.carregando = false;
            this.listaMeusEventos = response.dados;
            this.listaCaravanas = response.caravanas;
            this.listaAcessoPalestra = response.acessos_palestras;
            this.verificarAcessoPalestras();
        }, err => {
            this.carregando = false;
            this.alerts = Array.from([{ type: 'danger', message: err.message }]);
        });
        this.usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
        const iframeAoVivo = document.getElementById('iframeAoVivo');
    }
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    getLabelField(fieldName) {
        return Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_7__["getLabelAllFields"])(fieldName);
    }
    validarData(control) {
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
        var string = localStorage.getItem("usuario");
        var obj = JSON.parse(string);
        this.usuario.login = obj.nome;
        this.usuario.cpf = obj.cpf;
        this.usuario.password_anterior = "";
        this.usuario.password = "";
        this.usuario.password_conferir = "";
        const modal = this.modalService.open(content);
        modal.result.then(() => {
            console.log('SALVAR');
            this.authService.alterarSenha(this.usuario).subscribe(dados => {
                if (dados.status.codigo == 99) {
                    this.alerts = Array.from([{ type: 'danger', message: dados.status.mensagem }]);
                    this.alterarSenha(content);
                }
                else {
                    this.usuario.password = "";
                    this.usuario.password_anterior = "";
                    this.usuario.password_conferir = "";
                    console.log("Senha alterada com sucesso");
                    alert('Senha alterada com sucesso !!!');
                }
            });
        }, () => { console.log('SAIR'); });
    }
    selecionarCaravana(content) {
        var string = localStorage.getItem("usuario");
        var obj = JSON.parse(string);
        this.usuario.operacao = "SALVAR_MINHA_CARAVANA";
        this.usuario.cpf = obj.cpf;
        const modal = this.modalService.open(content);
        modal.result.then(() => {
            console.log('SALVAR');
            this.usuarioService.salvarMinhaCaravana(this.usuario).subscribe(response => {
                console.log("Status" + response.status);
                if (response.status.codigo == 0) {
                    localStorage.setItem("usuario", JSON.stringify(response.dados));
                    this.usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
                }
            }, err => {
                this.carregando = false;
                this.alerts = Array.from([{ type: 'danger', message: err.message }]);
                console.log(err);
            });
        }, () => { console.log('SAIR'); });
    }
    possuiCaravana() {
        if (typeof this.usuarioLogado.caravana == "undefined") {
            return false;
        }
        if (this.usuarioLogado.caravana.length <= 0) {
            return false;
        }
        else {
            return true;
        }
    }
    sairCaravana() {
        if (!confirm("Deseja não mais fazer parte desta Caravana ?")) {
            return;
        }
        var string = localStorage.getItem("usuario");
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
        }, err => {
            this.carregando = false;
            this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
    }
    acessoNegado() {
        var modalRef = this.modalService.open(_modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_13__["ModalAcessoNegadoComponent"]);
        return false;
    }
    logoff() {
        this.authService.logoff();
        this.router.navigate(['/login']);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    acessoStreaming(id) {
        var acesso = false;
        if (id == "31") {
            /*Sala Rio Araguaia */
            window.open("https://us02web.zoom.us/j/89233136882?pwd=eDVjdk15V28xWXF1MEhyWkdtU09MQT09", '_blank');
            return;
        }
        if (id == "32") {
            /*Serra Dourada */
            window.open("https://us04web.zoom.us/j/71601576869?pwd=VHhraXdnRVYzcEZUVTBmYjNBTVU2dz09", '_blank');
            return;
        }
        var str = "17/09/2021";
        var date = new Date(str.split('/').reverse().join('/'));
        var novaData = new Date();
        if (date > novaData) {
            alert("ATENÇÃO, palestra disponível somente  a partir do dia 17/09/2021");
            return;
        }
        if (id == "11") {
            /*Marcio Dourado*/
            window.open("https://www.youtube.com/watch?v=6yLiTjmuU4M", '_blank');
            acesso = true;
        }
        if (id == "12") {
            /*Ivan Lourenço*/
            window.open("https://www.youtube.com/watch?v=lcypRkq4ezs", '_blank');
            acesso = true;
        }
        if (id == "13") {
            /*Rejane Duarte*/
            window.open("https://www.youtube.com/watch?v=RbFsgF7poHc", '_blank');
            acesso = true;
        }
        if (id == "21") {
            /*Filipe Dunas*/
            window.open("https://www.youtube.com/watch?v=IkHYzF5qfik", '_blank');
            acesso = true;
        }
        if (id == "22") {
            /*Rafael Maciel*/
            window.open("https://www.youtube.com/watch?v=2Z_tnCN5Z1U", '_blank');
            acesso = true;
        }
        if (id == "23") {
            /*Adriano Pereira */
            window.open("https://www.youtube.com/watch?v=uDBFN-IL96k", '_blank');
            acesso = true;
        }
        if (id == "99") {
            /*ONLINE */
            alert("PARABÉNS, sua presença para esta palestra  \n foi registrada com sucesso !!!");
            //    window.open("https://www.youtube.com/watch?v=Jm5UgWO4cFU",'_blank');
            acesso = true;
        }
        if (id == "98") {
            window.open("https://www.youtube.com/live_chat?is_popout=1&v=Jm5UgWO4cFU", '_blank', 'width=800,height=600');
            acesso = true;
        }
        if (!acesso) {
            alert('ATENÇÃO, Esta Palestra ainda não está disponível !!!');
            return;
        }
        this.service.registrarVisualizacaoVideo(id).subscribe(resp => {
            this.listaAcessoPalestra = resp.dados;
            this.verificarAcessoPalestras();
        });
    }
    verificarAcessoPalestras() {
        var a;
        this.assistiuEvento1 = 0;
        this.assistiuEvento2 = 0;
        for (a of this.listaMeusEventos) {
            if (a.id == 1 && a.status == 'AUTHORIZED') {
                this.evento01 = true;
            }
            if (a.id == 2 && a.status == 'AUTHORIZED') {
                this.evento02 = true;
            }
            if (a.id == 5 && a.status == 'AUTHORIZED') {
                this.evento03 = true;
            }
            if (a.id == 6 && a.status == 'AUTHORIZED') {
                this.evento03 = true;
            }
            if (a.id == 99 && a.status == 'AUTHORIZED') {
                this.evento99 = true;
            }
        }
        for (a of this.listaAcessoPalestra) {
            if (a.id_evento == 11) {
                this.assistiuEvento11 = true;
                this.assistiuEvento1 = this.assistiuEvento1 + 33;
            }
            if (a.id_evento == 12) {
                this.assistiuEvento12 = true;
                this.assistiuEvento1 = this.assistiuEvento1 + 33;
            }
            if (a.id_evento == 13) {
                this.assistiuEvento13 = true;
                this.assistiuEvento1 = this.assistiuEvento1 + 34;
            }
            if (a.id_evento == 21) {
                this.assistiuEvento21 = true;
                this.assistiuEvento2 = this.assistiuEvento2 + 33;
            }
            if (a.id_evento == 22) {
                this.assistiuEvento22 = true;
                this.assistiuEvento2 = this.assistiuEvento2 + 33;
            }
            if (a.id_evento == 23) {
                this.assistiuEvento23 = true;
                this.assistiuEvento2 = this.assistiuEvento2 + 34;
            }
            if (a.id_evento == 31) {
                this.assistiuEvento31 = true;
            }
            if (a.id_evento == 32) {
                this.assistiuEvento32 = true;
            }
            if (a.id_evento == 99) {
                this.assistiuEvento99 = 100;
            }
        }
        const campo01 = document.getElementById('progressBarPainel01');
        campo01.style.width = this.assistiuEvento1 + '%';
        const campo02 = document.getElementById('progressBarPainel02');
        campo02.style.width = this.assistiuEvento2 + '%';
    }
    certificado() {
        // Inicializamos o objeto Date() com data e horário atual
        const date1 = new Date();
        // Inicializamos uma data no passado
        const date2 = new Date('2021-09-18 16:00:00');
        if (date1.getTime() < date2.getTime()) {
            alert("ATENÇÃO, CERTIFICADO disponível a partir do dia: \n \n 18/09/2021 às 16:00hs");
            return;
        }
        if (!this.assistiuEvento11) {
            alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a primeira Palestra do Painel de Gestão 01 !!!');
            return;
        }
        if (!this.assistiuEvento12) {
            alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a segunda Palestra do Painel de Gestão 01 !!!');
            return;
        }
        if (!this.assistiuEvento13) {
            alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a terceira Palestra do Painel de Gestão 01 !!!');
            return;
        }
        if (!this.assistiuEvento21) {
            alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a primeira Palestra do Painel de Gestão 02 !!!');
            return;
        }
        if (!this.assistiuEvento22) {
            alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a segunda Palestra do Painel de Gestão 02 !!!');
            return;
        }
        if (!this.assistiuEvento23) {
            alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a terceira Palestra do Painel de Gestão 03 !!!');
            return;
        }
        //  if (! this.assistiuEvento99){
        //alert('ATENÇÃO, sua trilha ainda não foi complentada. É necessário assistir a palestra Principal do evento !!!')
        //    return;    
        //  } 
        var string = localStorage.getItem("usuario");
        var obj = JSON.parse(string);
        var id = Number(obj.cpf) + 82984298187;
        var url = "https://conad.adm.br/sistemas/inscricoes-api/api/certificado/index.php?id=" + id;
        window.open(url, '_blank');
    }
    fichaAvaliacao() {
        // Inicializamos o objeto Date() com data e horário atual
        const date1 = new Date();
        // Inicializamos uma data no passado
        const date2 = new Date('2021-09-18 14:00:00');
        // Inicializamos uma data no passado
        const date3 = new Date('2021-09-30 01:00:00');
        if (date1.getTime() < date2.getTime() || date1.getTime() > date3.getTime()) {
            alert("ATENÇÃO, ficha de avaliação disponível no período: \n \n de 18/09/2021 às 14:00hs até 30/09/2021 às 00:00hs ");
            return;
        }
        var string = localStorage.getItem("usuario");
        var obj = JSON.parse(string);
        var id = Number(obj.cpf) + 82984298187;
        var url = "https://pt.surveymonkey.com/r/CXL2NYL";
        window.open(url, '_blank');
    }
    quiz() {
        // Inicializamos o objeto Date() com data e horário atual
        const date1 = new Date();
        // Inicializamos uma data no passado
        const date2 = new Date('2021-09-18 09:00:00');
        // Inicializamos uma data no passado
        const date3 = new Date('2021-09-18 14:30:00');
        if (date1.getTime() < date2.getTime() || date1.getTime() > date3.getTime()) {
            alert("ATENÇÃO, QUIZ disponível no período: \n \n de 18/09/2021 às 09:00hs até 18/09/2021 às 14:30hs ");
            return;
        }
        var string = localStorage.getItem("usuario");
        var obj = JSON.parse(string);
        var id = Number(obj.cpf) + 82984298187;
        var url = "https://pt.surveymonkey.com/r/conad";
        window.open(url, '_blank');
    }
};
AreaParticipanteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["DropdownService"] },
    { type: _login_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_6__["ConsultaCepService"] },
    { type: _areaParticipante_service__WEBPACK_IMPORTED_MODULE_8__["AreaParticipanteService"] },
    { type: _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_14__["UsuarioService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"] }
];
AreaParticipanteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-areaParticipante',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./areaParticipante.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/areaParticipante/areaParticipante.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./areaParticipante.component.css */ "./src/app/areaParticipante/areaParticipante.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["DropdownService"],
        _login_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_6__["ConsultaCepService"],
        _areaParticipante_service__WEBPACK_IMPORTED_MODULE_8__["AreaParticipanteService"],
        _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_14__["UsuarioService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"]])
], AreaParticipanteComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let AreaParticipanteService = class AreaParticipanteService {
    constructor(http) {
        this.http = http;
        this.API_GET_MEUS_EVENTOS = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}inscricoes/getMeusEventos.php`;
        this.API_REGISTRAR_VISUALIZACAO_VIDEO = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}inscricoes/registrarVisualizacaoVideo.php`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    getMeusEventos() {
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        return this.http.post(this.API_GET_MEUS_EVENTOS, { cpf: jsonUsuario.cpf }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    registrarVisualizacaoVideo(id_video) {
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        return this.http.post(this.API_REGISTRAR_VISUALIZACAO_VIDEO, { cpf: jsonUsuario.cpf, id: id_video }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
};
AreaParticipanteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AreaParticipanteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AreaParticipanteService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-acessoNegado/modal-acessoNegado.component */ "./src/app/modal-acessoNegado/modal-acessoNegado.component.ts");






let AuthGuard = class AuthGuard {
    constructor(authService, router, modalService) {
        this.authService = authService;
        this.router = router;
        this.modalService = modalService;
        this.listaAcesso = ['faleConosco', 'ouvidoria', 'toDo'];
    }
    canActivate(route, state) {
        console.log('AuthGuard' + state.url);
        return this.verificarAcesso(state.url);
    }
    verificarAcesso(url_destino) {
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
            var modalRef = this.modalService.open(_modal_acessoNegado_modal_acessoNegado_component__WEBPACK_IMPORTED_MODULE_5__["ModalAcessoNegadoComponent"]);
            return false;
        }
        return true;
    }
    canLoad(route) {
        console.log('canLoad: verificando se usuário pode carregar o cod módulo');
        //return this.verificarAcesso();
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], AuthGuard);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EstudanteGuard = class EstudanteGuard {
    canActivateChild(route, state) {
        //console.log(route);
        //console.log(state);
        console.log('EstudanteGuard: Guarda de rota filha');
        if (state.url.includes('editar')) {
            //alert('Usuário sem acesso');
            //return Observable.of(false);
        }
        return true;
    }
};
EstudanteGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EstudanteGuard);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RegistroPfGuard = class RegistroPfGuard {
    canActivateChild(route, state) {
        //console.log(route);
        //console.log(state);
        console.log('EntidadesGuard: Guarda de rota filha');
        if (state.url.includes('editar')) {
            //alert('Usuário sem acesso');
            //return Observable.of(false);
        }
        return true;
    }
};
RegistroPfGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RegistroPfGuard);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _login_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/usuario */ "./src/app/login/usuario.ts");







let HeaderComponent = class HeaderComponent {
    constructor(authService, router, modalService) {
        this.authService = authService;
        this.router = router;
        this.modalService = modalService;
        this.mostrarMenu = false;
        this.mostrarMenuEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.usuario = new _login_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
        this.alerts = [];
        this.usuarioLogado = "";
    }
    ngOnInit() {
    }
    userAutenticado() {
        if (localStorage.getItem("usuario") == null) {
            return false;
        }
        else {
            var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
            console.log(jsonUsuario.login);
            this.usuarioLogado = jsonUsuario.nome;
            return true;
        }
    }
    logoff() {
        this.authService.logoff();
        this.router.navigate(['/login']);
    }
    alterarSenha(content) {
        var string = localStorage.getItem("usuario");
        var obj = JSON.parse(string);
        this.usuario.login = obj.login;
        this.usuario.password_anterior = "";
        this.usuario.password = "";
        this.usuario.password_conferir = "";
        const modal = this.modalService.open(content);
        modal.result.then(() => {
            console.log('SALVAR');
            if (this.usuario.password_anterior == "") {
                this.alerts = Array.from([{ type: 'danger', message: 'Senha atual inválida' }]);
                this.alterarSenha(content);
                return;
            }
            if (this.usuario.password == "" || this.usuario.password != this.usuario.password_conferir) {
                this.alerts = Array.from([{ type: 'danger', message: 'Senha atual diferente nos campos Senha e Repetir Senha' }]);
                this.alterarSenha(content);
                return;
            }
            this.authService.alterarSenha(this.usuario).subscribe(dados => {
                if (dados.status.codigo == 99) {
                    this.alerts = Array.from([{ type: 'danger', message: dados.status.mensagem }]);
                    this.alterarSenha(content);
                }
                else {
                    this.usuario.password = "";
                    this.usuario.password_anterior = "";
                    this.usuario.password_conferir = "";
                    console.log("Senha alterada com sucesso");
                    alert('Senha alterada com sucesso !!!');
                }
            });
        }, () => { console.log('SAIR'); });
    }
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/inscricoes/inscricoes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/inscricoes/inscricoes.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".IN_ANALYSIS{\r\n    color:red;\r\n}\r\n.AUTHORIZED{\r\n    display: none;\r\n}\r\n.text-AUTHORIZED{\r\n    color:green;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zY3JpY29lcy9pbnNjcmljb2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9pbnNjcmljb2VzL2luc2NyaWNvZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5JTl9BTkFMWVNJU3tcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4uQVVUSE9SSVpFRHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRleHQtQVVUSE9SSVpFRHtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/dropdown.service */ "./src/app/shared/services/dropdown.service.ts");
/* harmony import */ var _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/consulta-cep.service */ "./src/app/shared/services/consulta-cep.service.ts");
/* harmony import */ var _shared_form_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/form-validation */ "./src/app/shared/form-validation.ts");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inscricoes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inscricoes.service */ "./src/app/inscricoes/inscricoes.service.ts");
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jsencrypt */ "../node_modules/jsencrypt/lib/index.js");
/* harmony import */ var moip_sdk_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moip-sdk-js */ "../node_modules/moip-sdk-js/index.js");
/* harmony import */ var moip_sdk_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moip_sdk_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wirecard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wirecard.service */ "./src/app/inscricoes/wirecard.service.ts");
/* harmony import */ var _wireCardObjects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wireCardObjects */ "./src/app/inscricoes/wireCardObjects.ts");
















let InscricoesComponent = class InscricoesComponent {
    constructor(fb, dropdownService, authService, router, cepService, service, serviceWireCard, http) {
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
        this.pagamento = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_15__["Pagamento"]();
        this.listaQtdParcelas = [{ codigo: '1', descricao: 'A Vista' }, { codigo: '2', descricao: '2 x ' }, { codigo: '3', descricao: '3x ' }, { codigo: '4', descricao: '4x ' }];
    }
    ;
    ngAfterViewInit() {
        const campoCep = document.getElementById('cep');
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
            .subscribe(response => {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                this.lista = response.dados;
                this.listaOriginal = response.dados;
            }
            else {
                this.lista = [];
                this.listaOriginal = [];
                this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
            }
            this.carregando = false;
        }, err => {
            this.carregando = false;
            this.alerts = Array.from([{ type: 'danger', message: err.message }]);
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
            nome: [jsonUsuario.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            email: [jsonUsuario.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            dataNascimento: [jsonUsuario.dataNascimentoFormatada],
            categoria: [jsonUsuario.categoria],
            cpf: [jsonUsuario.cpf],
            celular: [jsonUsuario.celular],
            origem: [jsonUsuario.origem],
            cep: [jsonUsuario.cep, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_form_validation__WEBPACK_IMPORTED_MODULE_8__["cepValidator"]]],
            complemento: [jsonUsuario.complemento],
            logradouro: [jsonUsuario.logradouro, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bairro: [jsonUsuario.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cidade: [jsonUsuario.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uf: [jsonUsuario.uf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cupom: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cc_nome: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cc_numero: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cc_expiracao: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cc_cod_seguranca: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cc_qtd_parcelas: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.dropdownService.getPaises().subscribe(dados => {
            this.paises = dados;
            this.dropdownService.getEstadosBr().subscribe(dados => {
                this.estados = dados;
                this.carregando = false;
            });
        });
        this.form.get('uf').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(uf => console.log('Novo estado: ', uf)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(uf => this.estados.filter(e => e.sigla === uf)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(estados => estados && estados.length > 0 ? estados[0].id : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((estadoId) => this.dropdownService.getCidades(estadoId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log)).subscribe(cidades => this.cidades = cidades);
        this.form.get('cep').statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(value => console.log('status CEP:', value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(status => status === 'VALID' ?
            this.cepService.consultaCEP(this.form.get('cep').value)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])()))
            .subscribe(dados => dados ? this.populaDadosForm(dados) : {});
    }
    getCupom() {
        const campoCupom = document.getElementById('cupom');
        this.subscription = this.service.getCupom(campoCupom.value)
            .subscribe(response => {
            console.log("Status" + response.status);
            if (response.status.codigo == 0) {
                this.valorCupom = Number(response.dados.valor).toFixed(2);
                ;
                this.cupomValido = true;
                this.calcularValor();
            }
            else {
                this.valorCupom = 0;
                this.cupomValido = false;
                this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
                this.calcularValor();
            }
            this.carregando = false;
        }, err => {
            this.carregando = false;
            this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
    }
    selecionarTipoPagamento() {
        const campoCartao = document.getElementById('cartao');
        if (campoCartao.checked) {
            this.pagamento.tipo = "C";
        }
        else {
            this.pagamento.tipo = "B";
        }
        ;
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
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    getLabelField(fieldName) {
        return Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_8__["getLabelAllFields"])(fieldName);
    }
    calcularValor() {
        this.descontoInscritosCONAD();
        this.listaCarrinho = [];
        this.valor = 0;
        var e;
        for (e of this.lista) {
            const campo = document.getElementById('id' + e.id);
            if (campo.checked) {
                this.valor = this.valor + Number(e.valor);
                this.listaCarrinho.push(e);
            }
        }
        if (this.valorCupom > 0) {
            this.valor = Number(this.valor - ((this.valor / this.valorCupom) * 100)).toFixed(2);
        }
        else {
            this.valor = Number(this.valor).toFixed(2);
        }
        this.listaQtdParcelas = [{ codigo: '1', descricao: 'A Vista' }];
        this.listaQtdParcelas.push({ codigo: '2', descricao: '2 x de R$ ' + Number(this.valor / 2).toFixed(2) });
        this.listaQtdParcelas.push({ codigo: '3', descricao: '3 x de R$ ' + Number(this.valor / 3).toFixed(2) });
        this.listaQtdParcelas.push({ codigo: '4', descricao: '4 x de R$ ' + Number(this.valor / 4).toFixed(2) });
    }
    descontoInscritosCONAD() {
        this.lista = new Array();
        const campo = document.getElementById('id99');
        if (campo.checked) {
            var a;
            for (a of this.listaOriginal) {
                const b = a;
                if (a.id == 1 || a.id == 2) {
                    a.valor = 0.00;
                }
                this.lista.push(a);
            }
        }
        else {
            var a;
            for (a of this.listaOriginal) {
                const b = a;
                if (a.id == 1 || a.id == 2) {
                    a.valor = 50.00;
                }
                this.lista.push(a);
            }
        }
    }
    ativarCupom() {
        this.ocultarCupom = false;
    }
    proximo() {
        if (Number(this.valor) <= 0) {
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
        if (this.valorCupom == 100) {
            this.service.inscricao(0, "AUTHORIZED", this.listaCarrinho, this.form.get('cupom').value).subscribe();
            this.pagamento.erro = false;
            this.pagamento.confirmado = true;
            this.carregando = false;
            this.pagamento.tipo = 'C';
            return;
        }
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
                .subscribe(response => {
                console.log("Status" + response.id);
                //ATUALIZA O ID_WIRECARD NA TABELA DE PESSOAS
                this.service.atualizarID_Wirecard(response.id).subscribe();
                this.efetuarPagamento(response.id);
            }, err => {
                let ownId = this.form.get('cpf').value + Math.floor(Math.random() * (0 - 99 + 1));
                this.subscription = this.serviceWireCard.addCliente(ownId, this.form)
                    .subscribe(response => {
                    console.log("Status" + response.id);
                    //ATUALIZA O ID_WIRECARD NA TABELA DE PESSOAS
                    this.service.atualizarID_Wirecard(response.id).subscribe();
                    this.efetuarPagamento(response.id);
                }, err => {
                    this.habilitarCampos();
                    this.carregando = false;
                    this.pagamento.processado = false;
                    this.alerts = Array.from([{ type: 'danger', message: err.error.errors[0].description }]);
                });
            });
        }
        else {
            this.efetuarPagamento(jsonUsuario.id_wirecard);
        }
    }
    efetuarPagamento(id_cliente) {
        console.log('Adicionar Pedido');
        // 2 PASSO - CLIENTE JÁ EXISTE NA BASE DA WIRECARD
        //           INSERE O PEDIDO NA WIRECARD            
        this.subscription = this.serviceWireCard.addPedido(id_cliente, this.form, this.valorCupom, this.listaCarrinho)
            .subscribe(response => {
            console.log("Pedido incluido: " + response.id);
            console.log("Adicionando Pagamento");
            const campoCartao = document.getElementById('cartao');
            if (campoCartao.checked) {
                this.pagamento.tipo = "C";
                this.efetuarPagamentoCartao(response.id);
            }
            else {
                this.pagamento.tipo = "B";
                // PAGAMENTO PELO BOLETO
                this.efetuarPagamentoBoleto(response.id);
            }
            ;
        }, err => {
            this.habilitarCampos();
            this.carregando = false;
            this.pagamento.processado = false;
            this.alerts = Array.from([{ type: 'danger', message: err.error.errors[0].description }]);
            console.log(err);
        });
    }
    efetuarPagamentoCartao(id_pedido) {
        // const pubKey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi3ySIPM5R2khxvvFD0vEskXclzWtRCSl7KRZKxYj0YRkkEcksRQkEaApQzzEC2Ax8Jx9dNM4un0JnpreSMWG4YjAeQioh4L5E3HU5AkcKdvxlx/QaCfIMj0Wi0554ZCmcviJWH8cVyUxTXMqVpAdhN0fX7GvVaPF8IMO5WpG9z1YBTBfaM/XEfk/JPuvJiG0nnD9ME7pQgn0nuA3v5sbUtdenyBukEEf9qPL6AtWaryhPBQJUlPUMwuj+bilegIXufVbZK3jPVanSwVqfFU3+mBBaKbpMUmEfznS3aplLARNI4Uow+DYed8VSfab9/YPfi2IVIKkG/kv8kl8CiVxKQIDAQAB-----END PUBLIC KEY-----";
        const pubKey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmFLYXWpgi6SrYFZNUDu8S2BiaaSKy9jAs/pHu9bVvJdsVzYdG2Ma01uaTPLq/oG2+o25ggQCbfHxWP+wk/ja+YjSgRnmLGUewSVnp2Er+tpmVILCuq3no/P6XA7ama1YOn26viJBxvL+7TBP3atQCSck12EnMlzTXUTUKjzMRfNTHF5j5E1hjrPDr3P+fkj0nP7+D2qnaYww2s3u8PnbGkNLXkcHsmp9aUijwrUR8g98FT8gjSoBUOCWj09NgfVtGOHS/47GFagAbZMVgc9HCCS5pCMKW49+1UO9Y326B+IMWPZFfZHBuh8BqS81dYsTQwW3qf4ERdYReK9xu1ShKQIDAQAB-----END PUBLIC KEY-----";
        var expiracaoDia = (this.form.get("cc_expiracao").value).substring(0, 2);
        var expiracaoAno = (this.form.get("cc_expiracao").value).substring(2, 4);
        // 3 PASSO - GERA O HASH COM OS DADOS DO CARTÃO
        moip_sdk_js__WEBPACK_IMPORTED_MODULE_13__["MoipCreditCard"]
            .setEncrypter(jsencrypt__WEBPACK_IMPORTED_MODULE_12__["default"], 'ionic')
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
                .subscribe(response => {
                if (response.status == 'CANCELLED') {
                    this.pagamento.confirmado = false;
                    this.carregando = false;
                    this.pagamento.erro = true;
                    this.pagamento.erroTipo = response.status;
                    this.pagamento.alerts = Array.from([{ type: 'danger', message: 'Não foi possível confirmar este pagamento' }]);
                }
                if (response.status == 'WAITING') {
                    this.pagamento.confirmado = false;
                    this.carregando = false;
                    this.pagamento.erro = true;
                    this.pagamento.erroTipo = response.status;
                    this.pagamento.alerts = Array.from([{ type: 'warning', message: 'Ainda não foi possível confirmar este pagamento, estamos aguardando o retorno da operadora de cartão' }]);
                }
                if (response.status == 'IN_ANALYSIS') {
                    this.pagamento.confirmado = false;
                    this.carregando = false;
                    this.pagamento.erro = true;
                    this.pagamento.erroTipo = response.status;
                    this.pagamento.alerts = Array.from([{ type: 'warning', message: 'Ainda não foi possível confirmar este pagamento, estamos aguardando o retorno da operadora de cartão' }]);
                }
                if (response.status == 'AUTHORIZED') {
                    this.pagamento.erro = false;
                    this.pagamento.confirmado = true;
                    this.carregando = false;
                    //ATUALIZA A TABELA DE EVENTOS INSCRITOS
                }
                this.service.inscricao(response.id, response.status, this.listaCarrinho, this.form.get('cupom').value).subscribe();
            }, (erroResponse) => {
                this.carregando = false;
                this.pagamento.erro = true;
                this.pagamento.alerts = Array.from([{ type: 'danger', message: erroResponse.error.errors[0].description }]);
            });
        });
    }
    efetuarPagamentoBoleto(id_pedido) {
        // 4 PASSO - GERA PAGAMENTO PELO CARTÃO DE CRÉDITO
        this.subscription = this.serviceWireCard.addPagamentoBoleto(id_pedido, this.form)
            .subscribe(response => {
            this.pagamento.confirmado = true;
            this.carregando = false;
            //ATUALIZA A TABELA DE EVENTOS INSCRITOS
            this.service.inscricao(response.id, response.status, this.listaCarrinho, this.form.get('cupom').value).subscribe();
            this.pagamento.url = response._links.payBoleto.printHref;
            var dt = response.fundingInstrument.boleto.expirationDate;
            var data = dt.substring(8, 10) + "/" + dt.substring(5, 7) + "/" + dt.substring(0, 4);
            this.pagamento.dataVencimento = data;
            this.pagamento.codigoBarras = response.fundingInstrument.boleto.lineCode;
            this.pagamento.valor = Number(response.amount.total / 100).toFixed(2);
        }, (erroResponse) => {
            this.carregando = false;
            this.pagamento.erro = true;
            this.pagamento.alerts = Array.from([{ type: 'danger', message: erroResponse.error.errors[0].description }]);
        });
    }
    validarPagamento() {
        const campoCartao = document.getElementById('cartao');
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
    }
    logoff() {
        this.authService.logoff();
        this.router.navigate(['/login']);
    }
    voltar() {
        this.alerts = [];
        if (this.checkoutEmAndamento) {
            this.checkoutEmAndamento = false;
        }
        else {
            this.router.navigate(['/areaParticipante']);
        }
    }
    sair() {
        this.router.navigate(['/areaParticipante']);
    }
    desabilitarCampos() {
        this.form.disable();
        document.getElementById("btnCheckout").disabled = true;
    }
    habilitarCampos() {
        this.form.enable();
        document.getElementById("btnCheckout").disabled = false;
    }
    copyToClipBoard(val) {
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
    openUrl(url) {
        window.open(url, "_blank");
    }
};
InscricoesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_6__["DropdownService"] },
    { type: _login_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_7__["ConsultaCepService"] },
    { type: _inscricoes_service__WEBPACK_IMPORTED_MODULE_11__["InscricoesService"] },
    { type: _wirecard_service__WEBPACK_IMPORTED_MODULE_14__["WireCardService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
InscricoesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-inscricoes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inscricoes.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/inscricoes/inscricoes.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inscricoes.component.css */ "./src/app/inscricoes/inscricoes.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_6__["DropdownService"],
        _login_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_7__["ConsultaCepService"],
        _inscricoes_service__WEBPACK_IMPORTED_MODULE_11__["InscricoesService"],
        _wirecard_service__WEBPACK_IMPORTED_MODULE_14__["WireCardService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], InscricoesComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let InscricoesService = class InscricoesService {
    constructor(http) {
        this.http = http;
        this.API_GET_EVENTOS = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}inscricoes/getEventos.php`;
        this.API_ATUALIZAR_ID_WIRECARD = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}inscricoes/atualizarIdWirecard.php`;
        this.API_GET_CUPOM = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}inscricoes/getCupom.php`;
        this.API_SALVAR_INSCRICAO = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}inscricoes/getEventos.php`;
        this.API_INSCRICOES = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}inscricoes/index.php`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    getEventos() {
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        return this.http.post(this.API_GET_EVENTOS, { cpf: jsonUsuario.cpf }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    atualizarID_Wirecard(id) {
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        return this.http.post(this.API_ATUALIZAR_ID_WIRECARD, { cpf: jsonUsuario.cpf, id_wirecard: id }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    inscricao(id, status_wirecard, lista, id_cupom) {
        var id_eventos = "";
        var e;
        for (e of lista) {
            id_eventos = id_eventos + e.id + ", ";
        }
        var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        return this.http.post(this.API_INSCRICOES, { cpf: jsonUsuario.cpf, id_pagamento_wirecard: id, eventos: id_eventos, status: status_wirecard, cupom: id_cupom }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    getCupom(nomeCupom) {
        return this.http.post(this.API_GET_CUPOM, { cupom: nomeCupom }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    salvar(form) {
        let formObj = form.getRawValue(); // {name: '', description: ''}
        let serializedForm = JSON.stringify(formObj);
        return this.http.post(this.API_SALVAR_INSCRICAO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    geBoletoGerado(url) {
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
};
InscricoesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InscricoesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], InscricoesService);



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
class UsuarioWireCard {
}
class TaxDocumentObject {
}
class ShippingAddressObject {
}
//PEDIDO
class PedidoWireCard {
    constructor() {
        this.items = new Array();
    }
}
class CustomerObject {
}
class AmountObject {
    constructor() {
        this.currency = "BRL";
    }
}
class SubTotalObject {
}
class ProductObject {
    constructor() {
        this.category = "OTHER_CATEGORIES";
        this.quantity = "1";
    }
}
// PAGAMENTO
class PagamentoCartaoWireCard {
    constructor() {
        this.statementDescriptor = "CONAD 2021";
    }
}
class PagamentoBoletoWireCard {
    constructor() {
        this.statementDescriptor = "CONAD 2021";
    }
}
class FundingInstrumentCartaoObject {
}
class FundingInstrumentBoletoObject {
}
class CreditCardObject {
    constructor() {
        this.store = "false";
    }
}
class BoletoObject {
    constructor() {
        this.logoUri = "https://conad.adm.br/sistemas/inscricoes-api/img/logo.png";
    }
}
class InstructionLinesObject {
}
class HolderObject {
}
class PhoneObject {
}
class BillingAddressObject {
}
class DeviceObject {
}
class GeoLocationObject {
}
// Dados do Pagamento 
class Pagamento {
    constructor() {
        this.tipo = "B";
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wireCardObjects */ "./src/app/inscricoes/wireCardObjects.ts");





let WireCardService = class WireCardService {
    constructor(http) {
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                //DESENV      'Authorization':	'Basic ' + "U1NXTE4yM0lCUFVZTFNNWFJFQUtVSTdaNllFM01aQ1c6VFdIVkdRRVBKWEpOWEw2MUZWSVBRVklEUTlCM0lOQTVNM1Y0UTc1Rw==",
                'Authorization': 'Basic ' + "WVRDT0dQS1JPNExCUDQyV1pLRERIRE5DMktET1dDU1U6REtBRFNONzJLR1VFRk8zTUJVSk5GQUVNR0c4TDhDVVA0VFg5VUFRVw==",
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    addClienteForm(form) {
        let formObj = form.getRawValue();
        return this.addCliente(formObj.cpf, form);
    }
    addCliente(ownId, form) {
        //    let formObj = form.getRawValue(); 
        let formObj = JSON.parse(localStorage.getItem("usuario"));
        let usuarioWireCard = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["UsuarioWireCard"]();
        usuarioWireCard.ownId = ownId;
        usuarioWireCard.fullname = formObj.nome;
        usuarioWireCard.email = formObj.email;
        usuarioWireCard.phone = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["PhoneObject"]();
        usuarioWireCard.phone.countryCode = "55";
        usuarioWireCard.phone.areaCode = formObj.prefixoCelular;
        usuarioWireCard.phone.number = formObj.numeroCelular;
        usuarioWireCard.birthDate = formObj.dataNascimento;
        usuarioWireCard.taxDocument = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["TaxDocumentObject"]();
        usuarioWireCard.taxDocument.type = "CPF";
        usuarioWireCard.taxDocument.number = formObj.cpf;
        usuarioWireCard.shippingAddress = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["ShippingAddressObject"]();
        usuarioWireCard.shippingAddress.city = formObj.cidade;
        usuarioWireCard.shippingAddress.complement = "";
        usuarioWireCard.shippingAddress.country = "BR";
        usuarioWireCard.shippingAddress.district = formObj.bairro;
        usuarioWireCard.shippingAddress.state = formObj.uf;
        usuarioWireCard.shippingAddress.street = formObj.endereco;
        usuarioWireCard.shippingAddress.streetNumber = "";
        usuarioWireCard.shippingAddress.zipCode = formObj.cep;
        let serializedForm = JSON.stringify(usuarioWireCard);
        return this.http.post(this.API_NOVO_USUARIO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    addPedido(id_wirecard, form, valorCupom, listaProdutos) {
        let formObj = form.getRawValue();
        let pedidoWireCard = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["PedidoWireCard"]();
        pedidoWireCard.ownId = formObj.cpf;
        pedidoWireCard.amount = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["AmountObject"]();
        pedidoWireCard.amount.subtotals = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["SubTotalObject"]();
        pedidoWireCard.amount.subtotals.discount = Number(Number(valorCupom) * 100);
        ;
        var e;
        for (e of listaProdutos) {
            if (Number(e.valor) > 0) {
                var productObject = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["ProductObject"]();
                productObject.product = e.descricao;
                productObject.detail = e.detalhe;
                productObject.price = Number(Number(e.valor) * 100);
                pedidoWireCard.items.push(productObject);
            }
        }
        pedidoWireCard.customer = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["CustomerObject"]();
        pedidoWireCard.customer.id = id_wirecard;
        let serializedForm = JSON.stringify(pedidoWireCard);
        return this.http.post(this.API_NOVO_PEDIDO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    addPagamentoCartao(id_ord, f, hash) {
        let form = f.getRawValue();
        let pagamentoWireCard = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["PagamentoCartaoWireCard"]();
        pagamentoWireCard.installmentCount = form.cc_qtd_parcelas;
        pagamentoWireCard.fundingInstrument = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["FundingInstrumentCartaoObject"]();
        pagamentoWireCard.fundingInstrument.method = "CREDIT_CARD";
        pagamentoWireCard.fundingInstrument.creditCard = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["CreditCardObject"]();
        pagamentoWireCard.fundingInstrument.creditCard.hash = hash;
        pagamentoWireCard.fundingInstrument.creditCard.store = "false";
        pagamentoWireCard.fundingInstrument.creditCard.holder = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["HolderObject"]();
        pagamentoWireCard.fundingInstrument.creditCard.holder.fullname = form.nome;
        if (form.dataNascimento.length == 8) {
            pagamentoWireCard.fundingInstrument.creditCard.holder.birthdate = form.dataNascimento.substring(4, 8) + "-" + form.dataNascimento.substring(2, 4) + "-" + form.dataNascimento.substring(0, 2);
        }
        else {
            pagamentoWireCard.fundingInstrument.creditCard.holder.birthdate = form.dataNascimento.substring(6, 10) + "-" + form.dataNascimento.substring(3, 5) + "-" + form.dataNascimento.substring(0, 2);
        }
        pagamentoWireCard.fundingInstrument.creditCard.holder.taxDocument = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["TaxDocumentObject"]();
        pagamentoWireCard.fundingInstrument.creditCard.holder.taxDocument.type = "CPF";
        pagamentoWireCard.fundingInstrument.creditCard.holder.taxDocument.number = form.cpf;
        pagamentoWireCard.fundingInstrument.creditCard.holder.phone = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["PhoneObject"]();
        pagamentoWireCard.fundingInstrument.creditCard.holder.phone.countryCode = "55";
        pagamentoWireCard.fundingInstrument.creditCard.holder.phone.areaCode = form.celular.substring(0, 2);
        pagamentoWireCard.fundingInstrument.creditCard.holder.phone.number = form.celular.substring(3, 15);
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["BillingAddressObject"]();
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.city = form.cidade;
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.district = "";
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.street = form.logradouro;
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.streetNumber = "";
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.zipCode = form.cep.replace(".", "").replace("-", "");
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.state = form.uf;
        pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.country = "BRA";
        pagamentoWireCard.device = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["DeviceObject"]();
        pagamentoWireCard.device.ip = "127.0.0.1";
        pagamentoWireCard.device.geolocation = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["GeoLocationObject"]();
        pagamentoWireCard.device.geolocation.latitude = "-33.867";
        pagamentoWireCard.device.geolocation.longitude = "151.206";
        pagamentoWireCard.device.userAgente = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36";
        pagamentoWireCard.device.fingerprint = "QAZXswedCVGrtgBNHyuj";
        let serializedForm = JSON.stringify(pagamentoWireCard);
        return this.http.post(this.API_NOVO_PAGAMENTO + "/" + id_ord + "/payments", serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    addPagamentoBoleto(id_ord, f) {
        var diasVencimento = 1;
        var dataVencimento = new Date(Date.now() + diasVencimento * 24 * 60 * 60 * 1000);
        let dataAtualFormatada = (this.adicionaZero(dataVencimento.getFullYear().toString()) + "-" + (this.adicionaZero(dataVencimento.getMonth() + 1).toString()) + "-" + this.adicionaZero(dataVencimento.getDate()));
        let form = f.getRawValue();
        let pagamentoWireCard = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["PagamentoBoletoWireCard"]();
        pagamentoWireCard.fundingInstrument = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["FundingInstrumentBoletoObject"]();
        pagamentoWireCard.fundingInstrument.method = "BOLETO";
        pagamentoWireCard.fundingInstrument.boleto = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["BoletoObject"]();
        pagamentoWireCard.fundingInstrument.boleto.expirationDate = dataAtualFormatada;
        pagamentoWireCard.fundingInstrument.boleto.instructionLines = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["InstructionLinesObject"]();
        pagamentoWireCard.fundingInstrument.boleto.instructionLines.first = "CONAD 2021 - Congresso Nacional de Administração";
        pagamentoWireCard.fundingInstrument.boleto.instructionLines.second = "Inscrição para o evento";
        pagamentoWireCard.fundingInstrument.boleto.instructionLines.third = "";
        pagamentoWireCard.device = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["DeviceObject"]();
        pagamentoWireCard.device.ip = "127.0.0.1";
        pagamentoWireCard.device.geolocation = new _wireCardObjects__WEBPACK_IMPORTED_MODULE_4__["GeoLocationObject"]();
        pagamentoWireCard.device.geolocation.latitude = "-33.867";
        pagamentoWireCard.device.geolocation.longitude = "151.206";
        pagamentoWireCard.device.userAgente = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36";
        pagamentoWireCard.device.fingerprint = "QAZXswedCVGrtgBNHyuj";
        let serializedForm = JSON.stringify(pagamentoWireCard);
        return this.http.post(this.API_NOVO_PAGAMENTO + "/" + id_ord + "/payments", serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    consultaPedidos(cpf) {
        return this.http.get(this.API_CONSULTA_PEDIDOS + cpf + "&limit=1", this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    configurarNotificacoes() {
        return this.http.get(this.API_SETAR_NOTIFICACOES, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
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
    }
    getPedido(id_pedido) {
        return this.http.get(this.API_GET_PEDIDO + id_pedido, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    adicionaZero(numero) {
        if (numero <= 9)
            return "0" + numero;
        else
            return numero;
    }
};
WireCardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WireCardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], WireCardService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");






let AuthService = class AuthService {
    constructor(router, http) {
        //    this.mostrarMenuEmitter.emit(false);
        this.router = router;
        this.http = http;
        this.API_LOGIN = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}login/index.php`;
        this.API_VALIDAR_CPF = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}login/validarCPF.php`;
        this.API_ALTERAR_SENHA = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}login/alterarSenha.php`;
        this.API_RECUPERAR_SENHA = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}login/recuperarSenha.php`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        this.router.navigate(['/']);
    }
    login(usuario) {
        console.log(usuario);
        return this.http.post(this.API_LOGIN, usuario, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(console.log));
    }
    validarCPF(usuario) {
        console.log(usuario);
        return this.http.post(this.API_VALIDAR_CPF, usuario, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(console.log));
    }
    alterarSenha(usuario) {
        console.log(usuario);
        return this.http.post(this.API_ALTERAR_SENHA, usuario, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(console.log));
    }
    recuperarSenha(usuario) {
        console.log(usuario);
        return this.http.post(this.API_RECUPERAR_SENHA, usuario, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(console.log));
    }
    logoff() {
        console.log("LOGOFF Realizado");
        localStorage.removeItem("usuario");
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario */ "./src/app/login/usuario.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.carregando = false;
        this.cpfNaoCadastrado = true;
        this.alerts = [];
    }
    ngAfterViewInit() {
        this.firstNameElement.nativeElement.focus();
    }
    ngOnInit() {
        this.usuario.login = "";
        this.usuario.password = "";
    }
    login() {
        this.carregando = true;
        this.authService.login(this.usuario).subscribe(resp => {
            if (resp.status.codigo == 99) {
                this.alerts = Array.from([{ type: 'danger', message: 'Usuário ou senha inválidos' }]);
                localStorage.removeItem("usuario");
                this.carregando = false;
            }
            else {
                this.usuario.password = "";
                localStorage.setItem("usuario", JSON.stringify(resp.dados));
                console.log("USUARIO AUTENTICADO");
                this.router.navigate(['/areaParticipante']);
                //        this.carregando = false;
            }
        });
    }
    proximo() {
        if (this.cpfNaoCadastrado) {
            this.validarCPF();
        }
        else {
            this.login();
        }
    }
    validarCPF() {
        if (this.usuario.login == "") {
            this.alerts = Array.from([{ type: 'danger', message: 'Informe o seu CPF !!!' }]);
            return;
        }
        if (!this.isValidCPF(this.usuario.login)) {
            this.alerts = Array.from([{ type: 'danger', message: 'CPF inválido !!!' }]);
            return;
        }
        this.authService.validarCPF(this.usuario).subscribe(dados => {
            if (dados.status.codigo == 99) {
                localStorage.removeItem("usuario");
                localStorage.setItem("cpf", this.usuario.login);
                this.carregando = false;
                this.router.navigate(['/usuario']);
            }
            else {
                this.carregando = false;
                this.cpfNaoCadastrado = false;
                document.getElementById("inputPassword").focus();
            }
        });
    }
    recuperarSenha() {
        if (this.usuario.login == "") {
            this.alerts = Array.from([{ type: 'danger', message: 'Informe o seu usuário !!!' }]);
            return;
        }
        this.authService.recuperarSenha(this.usuario).subscribe(dados => {
            if (dados.status.codigo == 99) {
                this.alerts = Array.from([{ type: 'danger', message: dados.status.mensagem }]);
                localStorage.removeItem("usuario");
                this.carregando = false;
            }
            else {
                this.alerts = Array.from([{ type: 'success', message: dados.status.mensagem }]);
            }
        });
    }
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    isValidCPF(number) {
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
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginField'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoginComponent.prototype, "firstNameElement", void 0);
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], LoginComponent);



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
class Usuario {
}


/***/ }),

/***/ "./src/app/modal-acessoNegado/modal-acessoNegado.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modal-acessoNegado/modal-acessoNegado.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWFjZXNzb05lZ2Fkby9tb2RhbC1hY2Vzc29OZWdhZG8uY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



let ModalAcessoNegadoComponent = class ModalAcessoNegadoComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.alerts = [
            {
                type: 'danger',
                message: '<b>ATENÇÃO</b>, voçê não está autorizado a executar esta operação. Solicite acesso junto ao gestor.',
            }
        ];
    }
    ;
    ngOnInit() {
    }
};
ModalAcessoNegadoComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
ModalAcessoNegadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-acessoNegado',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-acessoNegado.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/modal-acessoNegado/modal-acessoNegado.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-acessoNegado.component.css */ "./src/app/modal-acessoNegado/modal-acessoNegado.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], ModalAcessoNegadoComponent);



/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS1uYW8tZW5jb250cmFkYS9wYWdpbmEtbmFvLWVuY29udHJhZGEuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PaginaNaoEncontradaComponent = class PaginaNaoEncontradaComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaginaNaoEncontradaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagina-nao-encontrada',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pagina-nao-encontrada.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pagina-nao-encontrada.component.css */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PaginaNaoEncontradaComponent);



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

function getFormValidationErrors(controls) {
    let listErros = [];
    Object.keys(controls).forEach(key => {
        const control = controls[key];
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
            listErros = listErros.concat(getFormValidationErrors(control.controls));
        }
        const controlErrors = controls[key].errors;
        if (controlErrors !== null) {
            Object.keys(controlErrors).forEach(keyError => {
                console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
                listErros.push({ type: "danger", message: getErrorMsg(key, keyError, controlErrors[keyError]) });
            });
        }
    });
    console.log(listErros);
    return listErros;
}
function getErrorMsg(fieldName, validatorName, validatorValue) {
    const config = {
        'required': `${getLabelAllFields(fieldName)} é obrigatório.`,
        'dataInvalida': `${getLabelAllFields(fieldName)} inválida. (dd/mm/yyyy)`,
        'minlength': `${getLabelAllFields(fieldName)} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
        'maxlength': `${getLabelAllFields(fieldName)} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
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
    const config = {
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
function requiredMinCheckbox(min = 1) {
    const validator = (formArray) => {
        /* const values = formArray.controls;
        let totalChecked = 0;
        for (let i = 0; i < values.length; i++) {
          if (values[i].value) {
            totalChecked += 1;
          }
        } */
        const totalChecked = formArray.controls
            .map(v => v.value)
            .reduce((total, current) => current ? total + current : total, 0);
        return totalChecked >= min ? null : { required: true };
    };
    return validator;
}
function cepValidator(control) {
    const cep = control.value;
    if (cep && cep !== '') {
        const validacep = /^[0-9]{8}$/;
        return validacep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
}
function equalsTo(otherField) {
    const validator = (formControl) => {
        if (otherField == null) {
            throw new Error('É necessário informar um campo.');
        }
        if (!formControl.root || !formControl.root.controls) {
            return null;
        }
        const field = formControl.root.get(otherField);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('config');
const NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NEW_CONFIG');
const INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('INITIAL_CONFIG');
const initialConfig = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/app/shared/ngx-mask/config.ts");



let MaskApplierService = class MaskApplierService {
    constructor(_config) {
        this._config = _config;
        this.maskExpression = '';
        this.shownMaskExpression = '';
        this.separator = (str, char, decimalChar, precision) => {
            str += '';
            const x = str.split(decimalChar);
            const decimals = x.length > 1 ? `${decimalChar}${x[1]}` : '';
            let res = x[0];
            const rgx = /(\d+)(\d{3})/;
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
        this.percentage = (str) => {
            return Number(str) >= 0 && Number(str) <= 100;
        };
        this.getPrecision = (maskExpression) => {
            const x = maskExpression.split('.');
            if (x.length > 1) {
                return Number(x[x.length - 1]);
            }
            return Infinity;
        };
        this.checkInputPrecision = (inputValue, precision, decimalMarker) => {
            if (precision < Infinity) {
                let precisionRegEx;
                if (decimalMarker === '.') {
                    precisionRegEx = new RegExp(`\\.\\d{${precision}}.*$`);
                }
                else {
                    precisionRegEx = new RegExp(`,\\d{${precision}}.*$`);
                }
                const precisionMatch = inputValue.match(precisionRegEx);
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
    applyMaskWithPattern(inputValue, maskAndPattern) {
        const [mask, customPattern] = maskAndPattern;
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    }
    applyMask(inputValue, maskExpression, position = 0, cb = () => { }) {
        if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
            return '';
        }
        let cursor = 0;
        let result = ``;
        let multi = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        const inputArray = inputValue.toString()
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
            const precision = this.getPrecision(maskExpression);
            let strForSep;
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
            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                ? inputArray.length
                : cursor;
            this._shift.add(shiftStep + this.prefix.length || 0);
        }
        else {
            // tslint:disable-next-line
            for (let i = 0, inputSymbol = inputArray[0]; i
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
                            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
                            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
                            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
                            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
                            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
                    const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
        let shift = 1;
        let newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0);
        let res = `${this.prefix}${result}`;
        res = this.sufix ? `${this.prefix}${result}${this.sufix}` : `${this.prefix}${result}`;
        if (result.length === 0) {
            res = `${this.prefix}${result}`;
        }
        return res;
    }
    _findSpecialChar(inputSymbol) {
        const symbol = this.maskSpecialCharacters
            .find((val) => val === inputSymbol);
        return symbol;
    }
    _checkSymbolMask(inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern
            ? this.customPattern
            : this.maskAvailablePatterns;
        return this.maskAvailablePatterns[maskSymbol]
            && this.maskAvailablePatterns[maskSymbol].pattern
            && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
    }
};
MaskApplierService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_config__WEBPACK_IMPORTED_MODULE_2__["config"],] }] }
];
MaskApplierService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_2__["config"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MaskApplierService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _mask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mask.service */ "./src/app/shared/ngx-mask/mask.service.ts");
var MaskDirective_1;





let MaskDirective = MaskDirective_1 = class MaskDirective {
    constructor(
    // tslint:disable-next-line
    document, _maskService) {
        this.document = document;
        this._maskService = _maskService;
        this._position = null;
        // tslint:disable-next-line
        this.onChange = (_) => { };
        this.onTouch = () => { };
    }
    set maskExpression(value) {
        this._maskValue = value || '';
        if (!this._maskValue) {
            return;
        }
        this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue);
        this._maskService.formElementProperty = [
            'value',
            this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)
        ];
    }
    set specialCharacters(value) {
        if (!value ||
            !Array.isArray(value) ||
            (Array.isArray(value) && !value.length)) {
            return;
        }
        this._maskService.maskSpecialCharacters = value;
    }
    set patterns(value) {
        if (!value) {
            return;
        }
        this._maskService.maskAvailablePatterns = value;
    }
    set prefix(value) {
        if (!value) {
            return;
        }
        this._maskService.prefix = value;
    }
    set sufix(value) {
        if (!value) {
            return;
        }
        this._maskService.sufix = value;
    }
    set dropSpecialCharacters(value) {
        this._maskService.dropSpecialCharacters = value;
    }
    set showMaskTyped(value) {
        if (!value) {
            return;
        }
        this._maskService.showMaskTyped = value;
    }
    set shownMaskExpression(value) {
        if (!value) {
            return;
        }
        this._maskService.shownMaskExpression = value;
    }
    set showTemplate(value) {
        this._maskService.showTemplate = value;
    }
    set clearIfNotMatch(value) {
        this._maskService.clearIfNotMatch = value;
    }
    onInput(e) {
        const el = e.target;
        this._inputValue = el.value;
        if (!this._maskValue) {
            this.onChange(el.value);
            return;
        }
        const position = el.selectionStart === 1
            ? el.selectionStart + this._maskService.prefix.length
            : el.selectionStart;
        let caretShift = 0;
        this._maskService.applyValueChanges(position, (shift) => (caretShift = shift));
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
    }
    onBlur() {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    }
    onFocus(e) {
        const el = e.target;
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
    }
    a(e) {
        const el = e.target;
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
    }
    onPaste() {
        this._position = Number.MAX_SAFE_INTEGER;
    }
    /** It writes the value in the input */
    writeValue(inputValue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    // tslint:disable-next-line
    registerOnChange(fn) {
        this.onChange = fn;
        this._maskService.onChange = this.onChange;
    }
    // tslint:disable-next-line
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /** It disables the input element */
    setDisabledState(isDisabled) {
        this._maskService.formElementProperty = ['disabled', isDisabled];
    }
    _repeatPatternSymbols(maskExp) {
        return maskExp.match(/{[0-9]+}/)
            && maskExp.split('')
                .reduce((accum, currval, index) => {
                this._start = (currval === '{') ? index : this._start;
                if (currval !== '}') {
                    return this._maskService._findSpecialChar(currval) ? accum + currval : accum;
                }
                this._end = index;
                const repeatNumber = Number(maskExp
                    .slice(this._start + 1, this._end));
                const repaceWith = new Array(repeatNumber + 1)
                    .join(maskExp[this._start - 1]);
                return accum + repaceWith;
            }, '') || maskExp;
    }
};
MaskDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _mask_service__WEBPACK_IMPORTED_MODULE_4__["MaskService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mask'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], MaskDirective.prototype, "maskExpression", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MaskDirective.prototype, "specialCharacters", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MaskDirective.prototype, "patterns", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MaskDirective.prototype, "prefix", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MaskDirective.prototype, "sufix", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MaskDirective.prototype, "dropSpecialCharacters", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MaskDirective.prototype, "showMaskTyped", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MaskDirective.prototype, "shownMaskExpression", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MaskDirective.prototype, "showTemplate", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MaskDirective.prototype, "clearIfNotMatch", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MaskDirective.prototype, "onInput", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MaskDirective.prototype, "onBlur", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MaskDirective.prototype, "onFocus", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MaskDirective.prototype, "a", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('paste'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MaskDirective.prototype, "onPaste", null);
MaskDirective = MaskDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[mask]',
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MaskDirective_1),
                multi: true
            },
            _mask_service__WEBPACK_IMPORTED_MODULE_4__["MaskService"]
        ]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _mask_service__WEBPACK_IMPORTED_MODULE_4__["MaskService"]])
], MaskDirective);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mask_applier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-applier.service */ "./src/app/shared/ngx-mask/mask-applier.service.ts");



let MaskPipe = class MaskPipe {
    constructor(_maskService) {
        this._maskService = _maskService;
    }
    transform(value, mask) {
        if (!value) {
            return '';
        }
        if (typeof mask === 'string') {
            return this._maskService.applyMask(`${value}`, mask);
        }
        return this._maskService.applyMaskWithPattern(`${value}`, mask);
    }
};
MaskPipe.ctorParameters = () => [
    { type: _mask_applier_service__WEBPACK_IMPORTED_MODULE_2__["MaskApplierService"] }
];
MaskPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'mask',
        pure: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_mask_applier_service__WEBPACK_IMPORTED_MODULE_2__["MaskApplierService"]])
], MaskPipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/app/shared/ngx-mask/config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _mask_applier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mask-applier.service */ "./src/app/shared/ngx-mask/mask-applier.service.ts");





let MaskService = class MaskService extends _mask_applier_service__WEBPACK_IMPORTED_MODULE_4__["MaskApplierService"] {
    constructor(
    // tslint:disable-next-line
    document, _config, _elementRef, _renderer) {
        super(_config);
        this.document = document;
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.maskExpression = '';
        this.isNumberValue = false;
        this.showMaskTyped = false;
        this.maskIsShown = '';
        // tslint:disable-next-line
        this.onChange = (_) => { };
        this.onTouch = () => { };
        this._formElement = this._elementRef.nativeElement;
    }
    applyMask(inputValue, maskExpression, position = 0, cb = () => { }) {
        this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';
        if (!inputValue && this.showMaskTyped) {
            return this.prefix + this.maskIsShown;
        }
        const result = super.applyMask(inputValue, maskExpression, position, cb);
        if ((/dot_separator\.\d{1,}/.test(this.maskExpression) === true && this.dropSpecialCharacters === true)) {
            this.maskSpecialCharacters = this.maskSpecialCharacters.filter((item) => item !== ',');
        }
        if ((/coma_separator\.\d{1,}/.test(this.maskExpression) === true && this.dropSpecialCharacters === true)) {
            this.maskSpecialCharacters = this.maskSpecialCharacters.filter((item) => item !== '.');
        }
        Array.isArray(this.dropSpecialCharacters)
            ? this.onChange(this._removeMask(this._removeSufix(this._removePrefix(result)), this.dropSpecialCharacters))
            : this.dropSpecialCharacters === true
                ? this.onChange(this.isNumberValue
                    ? Number(this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                    : this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                : this.onChange(this._removeSufix(this._removePrefix(result)));
        let ifMaskIsShown = '';
        if (!this.showMaskTyped) {
            return result;
        }
        const resLen = result.length;
        const prefNmask = this.prefix + this.maskIsShown;
        ifMaskIsShown = prefNmask.slice(resLen);
        return result + ifMaskIsShown;
    }
    applyValueChanges(position = 0, cb = () => { }) {
        const maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        this._formElement.value = maskedInput;
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    }
    showMaskInInput() {
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
    }
    clearIfNotMatchFn() {
        if (this.clearIfNotMatch === true &&
            this.maskExpression.length !== this._formElement.value.length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    }
    set formElementProperty([name, value]) {
        this._renderer.setProperty(this._formElement, name, value);
    }
    _removeMask(value, specialCharactersForRemove) {
        return value
            ? value.replace(this._regExpForRemove(specialCharactersForRemove), '')
            : value;
    }
    _removePrefix(value) {
        if (!this.prefix) {
            return value;
        }
        return value
            ? value.replace(this.prefix, '')
            : value;
    }
    _removeSufix(value) {
        if (!this.sufix) {
            return value;
        }
        return value
            ? value.replace(this.sufix, '')
            : value;
    }
    _regExpForRemove(specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map((item) => `\\${item}`).join('|'), 'gi');
    }
};
MaskService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_config__WEBPACK_IMPORTED_MODULE_2__["config"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
MaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_2__["config"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], MaskService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/app/shared/ngx-mask/config.ts");
/* harmony import */ var _mask_applier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-applier.service */ "./src/app/shared/ngx-mask/mask-applier.service.ts");
/* harmony import */ var _mask_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mask.directive */ "./src/app/shared/ngx-mask/mask.directive.ts");
/* harmony import */ var _mask_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mask.pipe */ "./src/app/shared/ngx-mask/mask.pipe.ts");
var NgxMaskModule_1;






let NgxMaskModule = NgxMaskModule_1 = class NgxMaskModule {
    static forRoot(configValue) {
        return {
            ngModule: NgxMaskModule_1,
            providers: [
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_2__["NEW_CONFIG"],
                    useValue: configValue
                },
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_2__["INITIAL_CONFIG"],
                    useValue: _config__WEBPACK_IMPORTED_MODULE_2__["initialConfig"]
                },
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_2__["config"],
                    useFactory: _configFactory,
                    deps: [_config__WEBPACK_IMPORTED_MODULE_2__["INITIAL_CONFIG"], _config__WEBPACK_IMPORTED_MODULE_2__["NEW_CONFIG"]]
                },
            ]
        };
    }
    static forChild(_configValue) {
        return {
            ngModule: NgxMaskModule_1,
        };
    }
};
NgxMaskModule = NgxMaskModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [_mask_applier_service__WEBPACK_IMPORTED_MODULE_3__["MaskApplierService"]],
        exports: [_mask_directive__WEBPACK_IMPORTED_MODULE_4__["MaskDirective"], _mask_pipe__WEBPACK_IMPORTED_MODULE_5__["MaskPipe"]],
        declarations: [_mask_directive__WEBPACK_IMPORTED_MODULE_4__["MaskDirective"], _mask_pipe__WEBPACK_IMPORTED_MODULE_5__["MaskPipe"]]
    })
], NgxMaskModule);

/**
 * @internal
 */
function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : Object.assign(Object.assign({}, initConfig), configValue);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm2015/index.js");




let ConsultaCepService = class ConsultaCepService {
    constructor(http) {
        this.http = http;
    }
    consultaCEP(cep) {
        console.log(cep);
        // Nova variável "cep" somente com dígitos.
        cep = cep.replace(/\D/g, '');
        // Verifica se campo cep possui valor informado.
        if (cep !== '') {
            // Expressão regular para validar o CEP.
            const validacep = /^[0-9]{8}$/;
            // Valida o formato do CEP.
            if (validacep.test(cep)) {
                return this.http.get(`//viacep.com.br/ws/${cep}/json`);
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
    }
};
ConsultaCepService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConsultaCepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ConsultaCepService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");




let DropdownService = class DropdownService {
    constructor(http) {
        this.http = http;
    }
    getPaises() {
        return this.http.get('assets/dados/paises-gentilicos-google-maps.json');
    }
    getEstadosBr() {
        return this.http.get('assets/dados/estadosbr.json');
    }
    getCidades(idEstado) {
        return this.http.get('assets/dados/cidades.json')
            .pipe(
        // tslint:disable-next-line:triple-equals
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((cidades) => cidades.filter(c => c.estado == idEstado)));
    }
    getCargos() {
        return [
            { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
            { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
            { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
        ];
    }
    getTecnologias() {
        return [
            { nome: 'java', desc: 'Java' },
            { nome: 'javascript', desc: 'JavaScript' },
            { nome: 'php', desc: 'PHP' },
            { nome: 'ruby', desc: 'Ruby' }
        ];
    }
    getNewsletter() {
        return [
            { valor: 's', desc: 'Sim' },
            { valor: 'n', desc: 'Não' }
        ];
    }
};
DropdownService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DropdownService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DropdownService);



/***/ }),

/***/ "./src/app/usuario/usuario.component.css":
/*!***********************************************!*\
  !*** ./src/app/usuario/usuario.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vdXN1YXJpby5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/dropdown.service */ "./src/app/shared/services/dropdown.service.ts");
/* harmony import */ var _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/consulta-cep.service */ "./src/app/shared/services/consulta-cep.service.ts");
/* harmony import */ var _shared_form_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/form-validation */ "./src/app/shared/form-validation.ts");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usuario */ "./src/app/usuario/usuario.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












let UsuarioComponent = class UsuarioComponent {
    constructor(router, fb, dropdownService, cepService, service, http) {
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
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_10__["Usuario"]();
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
    ngAfterViewInit() {
        const campoCep = document.getElementById('cep');
        this.dropdownService.getCidades(this.form.get('uf').value).subscribe(dados => {
            this.cidades = dados;
            this.cepService.consultaCEP(this.form.get('cep').value).subscribe(dados => {
                this.populaDadosForm(dados);
            });
        });
    }
    ngOnInit() {
        var jsonUsuario;
        if (localStorage.getItem("usuario") == null) {
            jsonUsuario = { "cpf": "", "nome": "", "email": "", "sexo": "", "telefone": "", "celular": "", "endereco": "", "bairro": "", "cep": "", "cidade": "", "uf": "", "pais": "", "numRegistro": "", "categoria": "", "origem": "" };
            jsonUsuario.cpf = localStorage.getItem("cpf");
        }
        else {
            jsonUsuario = JSON.parse(localStorage.getItem("usuario"));
        }
        this.form = this.fb.group({
            nome: [jsonUsuario.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            email: [jsonUsuario.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            categoria: [jsonUsuario.categoria],
            cpf: [jsonUsuario.cpf],
            dataNascimento: [jsonUsuario.dataNascimentoFormatada],
            celular: [jsonUsuario.celular],
            origem: [jsonUsuario.origem],
            cep: [jsonUsuario.cep, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_form_validation__WEBPACK_IMPORTED_MODULE_8__["cepValidator"]]],
            complemento: [jsonUsuario.complemento],
            logradouro: [jsonUsuario.logradouro, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bairro: [jsonUsuario.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cidade: [jsonUsuario.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uf: [jsonUsuario.uf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            senha: [null],
            senha_repita: [null],
        });
        this.dropdownService.getPaises().subscribe(dados => {
            this.paises = dados;
            this.dropdownService.getEstadosBr().subscribe(dados => {
                this.estados = dados;
                this.carregando = false;
            });
        });
        this.form.get('uf').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(uf => console.log('Novo estado: ', uf)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(uf => this.estados.filter(e => e.sigla === uf)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(estados => estados && estados.length > 0 ? estados[0].id : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((estadoId) => this.dropdownService.getCidades(estadoId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log)).subscribe(cidades => this.cidades = cidades);
        this.form.get('cep').statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(value => console.log('status CEP:', value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(status => status === 'VALID' ?
            this.cepService.consultaCEP(this.form.get('cep').value)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])()))
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
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    getLabelField(fieldName) {
        return Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_8__["getLabelAllFields"])(fieldName);
    }
    validarData(control) {
        const v = control.value;
        if (null != v && v.length == 8) {
            const data = v.substr(0, 2) + "/" + v.substr(2, 2) + "/" + v.substr(4, 4);
            const patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
            if (!patternData.test(data)) {
                return { dataInvalida: true };
            }
        }
    }
    show(secao) {
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
    }
    salvar() {
        console.log('Salvando Usuario Form');
        this.alerts = [];
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            this.alerts = Object(_shared_form_validation__WEBPACK_IMPORTED_MODULE_8__["getFormValidationErrors"])(this.form.controls);
            console.log('Formulário inválido');
            return;
        }
        const campoSenha = document.getElementById('senha');
        const campoSenhaRepita = document.getElementById('senha_repita');
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
            .subscribe(response => {
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
                this.alerts = Array.from([{ type: 'success', message: response.status.mensagem }]);
            }
            else {
                this.alerts = Array.from([{ type: 'danger', message: response.status.mensagem }]);
            }
            this.carregando = false;
        }, err => {
            this.carregando = false;
            this.alerts = Array.from([{ type: 'danger', message: err.message }]);
            console.log(err);
        });
    }
    voltar() {
        this.router.navigate(['/areaParticipante']);
    }
};
UsuarioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_6__["DropdownService"] },
    { type: _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_7__["ConsultaCepService"] },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
UsuarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-usuario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./usuario.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./usuario.component.css */ "./src/app/usuario/usuario.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _shared_services_dropdown_service__WEBPACK_IMPORTED_MODULE_6__["DropdownService"],
        _shared_services_consulta_cep_service__WEBPACK_IMPORTED_MODULE_7__["ConsultaCepService"],
        _usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], UsuarioComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let UsuarioService = class UsuarioService {
    constructor(http) {
        this.http = http;
        this.API_SALVAR_USUARIO = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}usuario/salvar.php`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    salvar(form) {
        let formObj = form.getRawValue(); // {name: '', description: ''}
        formObj.operacao = "SALVAR";
        let serializedForm = JSON.stringify(formObj);
        return this.http.post(this.API_SALVAR_USUARIO, serializedForm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
    salvarMinhaCaravana(form) {
        return this.http.post(this.API_SALVAR_USUARIO, form, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UsuarioService);



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
class Usuario {
}


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! C:\Selmo\Projetos\inscricoes-estatico\admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map