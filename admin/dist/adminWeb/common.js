(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/guards/faleConosco.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/faleConosco.guard.ts ***!
  \*********************************************/
/*! exports provided: FaleConoscoGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaleConoscoGuard", function() { return FaleConoscoGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FaleConoscoGuard = /** @class */ (function () {
    function FaleConoscoGuard() {
    }
    FaleConoscoGuard.prototype.canActivateChild = function (route, state) {
        //console.log(route);
        //console.log(state);
        console.log('FaleConoscoGuard: Guarda de rota filha');
        if (state.url.includes('editar')) {
            //alert('Usuário sem acesso');
            //return Observable.of(false);
        }
        return true;
    };
    FaleConoscoGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FaleConoscoGuard);
    return FaleConoscoGuard;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map