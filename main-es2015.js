(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/altf4/Code/eyeballer/webui/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "6WZR":
/*!***********************************!*\
  !*** ./src/app/base-materials.ts ***!
  \***********************************/
/*! exports provided: BaseMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseMaterialModule", function() { return BaseMaterialModule; });
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");

























const modules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_0__["MatBadgeModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"]
];
class BaseMaterialModule {
}
BaseMaterialModule.ɵfac = function BaseMaterialModule_Factory(t) { return new (t || BaseMaterialModule)(); };
BaseMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: BaseMaterialModule });
BaseMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ imports: [modules, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_0__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](BaseMaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_0__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_0__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"]] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'weballer';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _base_materials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-materials */ "6WZR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_eyeballer_eyeballer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/eyeballer/eyeballer.component */ "rGg0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__["NgxDropzoneModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _base_materials__WEBPACK_IMPORTED_MODULE_4__["BaseMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_eyeballer_eyeballer_component__WEBPACK_IMPORTED_MODULE_7__["EyeballerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__["NgxDropzoneModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _base_materials__WEBPACK_IMPORTED_MODULE_4__["BaseMaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"]] }); })();


/***/ }),

/***/ "rGg0":
/*!*************************************************************!*\
  !*** ./src/app/components/eyeballer/eyeballer.component.ts ***!
  \*************************************************************/
/*! exports provided: EyeballerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeballerComponent", function() { return EyeballerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base64-arraybuffer */ "g5Dd");
/* harmony import */ var base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs */ "zhpf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");











function EyeballerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EyeballerComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Drop your screenshots below: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ngx-dropzone", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function EyeballerComponent_div_12_Template_ngx_dropzone_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r4.onSelect($event); return ctx_r4.startEyeball(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Files dropped here are ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "not uploaded anywhere.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " No data leaves your computer at all on this tool. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Note:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " For best results, ensure your screenshots are taken natively in a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "16:10 aspect ratio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " (ie: 1440x900 or other) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Source code available at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "GitHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EyeballerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "mat-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " This processing is happening in your browser. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "There is no backend.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Loading Images: ", ctx_r2.images.size, " of ", ctx_r2.imageCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.loadPercent());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Classifying: ", ctx_r2.eyeballedCount, " of ", ctx_r2.imageCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.eyeballPercent());
} }
function EyeballerComponent_div_14_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r7 = ctx.$implicit;
    const index_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-index", index_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", key_r7, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r6.images.get(key_r7), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.isWebapp(key_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.isCustom404(key_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.isLoginPage(key_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.isOldLooking(key_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.isParked(key_r7));
} }
function EyeballerComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-toolbar-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r9.selected.webapp = 0; return ctx_r9.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Must Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r11.selected.webapp = 1; return ctx_r11.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Webapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r12.selected.webapp = 2; return ctx_r12.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Never Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-toolbar-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r13.selected.oldLooking = 0; return ctx_r13.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Must Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r14.selected.oldLooking = 1; return ctx_r14.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Old Looking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r15.selected.oldLooking = 2; return ctx_r15.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Never Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-toolbar-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r16.selected.loginPage = 0; return ctx_r16.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Must Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r17.selected.loginPage = 1; return ctx_r17.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Login Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r18.selected.loginPage = 2; return ctx_r18.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Never Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-toolbar-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r19.selected.custom404 = 0; return ctx_r19.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Must Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r20.selected.custom404 = 1; return ctx_r20.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Custom 404");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r21.selected.custom404 = 2; return ctx_r21.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Never Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-toolbar-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r22.selected.parked = 0; return ctx_r22.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Must Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r23.selected.parked = 1; return ctx_r23.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Parked Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r24.selected.parked = 2; return ctx_r24.updateSelections(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Never Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Total Selected:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_div_14_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.exportResults(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "What do these labels mean?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, EyeballerComponent_div_14_div_71_Template, 16, 8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.webapp === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.webapp === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.webapp === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.classifications.webapp.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.oldLooking === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.oldLooking === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.oldLooking === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.classifications.oldLooking.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.loginPage === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.loginPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.loginPage === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.classifications.loginPage.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.custom404 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.custom404 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.custom404 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.classifications.custom404.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.parked === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.parked === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.selected.parked === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.classifications.parked.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedScreens.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.selectedScreens.slice(0, 8));
} }
class EyeballerComponent {
    constructor() {
        this.offset = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["scalar"](127.5);
        this.images = new Map();
        this.confidence = 0.6;
        this.width = 224;
        this.height = 224;
        this.tfFilesCompleted = false;
        this.tfFiles = [];
        this.imageCount = 0;
        this.loadedCount = 0;
        this.finishedLoading = false;
        this.eyeballing = false;
        this.eyeballCompleted = false;
        this.eyeballedCount = 0;
        this.classifications = {
            custom404: [],
            loginPage: [],
            webapp: [],
            oldLooking: [],
            parked: [],
        };
        // What labels are selected?
        // This is a tri-state:
        //  0 means "always select"
        //  1 means "don't care"
        //  2 means "never select"
        this.selected = {
            custom404: 2,
            loginPage: 1,
            webapp: 0,
            oldLooking: 1,
            parked: 2,
        };
        this.selectedScreens = [];
    }
    ngOnInit() {
        this.fetchTfFiles();
    }
    onSelect(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.imageCount = event.addedFiles.length;
            yield Promise.all(event.addedFiles.map((file) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const dataString = yield this.dataURI(file);
                this.images.set(file.name, dataString);
            })));
        });
    }
    onRemove(event) {
        this.images.delete(event.name);
    }
    isWebapp(key) {
        if (this.classifications.webapp.includes(key)) {
            return "Webapp";
        }
        return "";
    }
    isCustom404(key) {
        if (this.classifications.custom404.includes(key)) {
            return "Custom 404";
        }
        return "";
    }
    isLoginPage(key) {
        if (this.classifications.loginPage.includes(key)) {
            return "Login Page";
        }
        return "";
    }
    isOldLooking(key) {
        if (this.classifications.oldLooking.includes(key)) {
            return "Old Looking";
        }
        return "";
    }
    isParked(key) {
        if (this.classifications.parked.includes(key)) {
            return "Parked Domain";
        }
        return "";
    }
    fetchTfFiles() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resp = yield fetch('assets/tf/model.json');
            const manifest = yield resp.json();
            const paths = Array.from((_a = manifest.weightsManifest[0]) === null || _a === void 0 ? void 0 : _a.paths);
            this.tfFiles = [];
            resp = yield fetch('assets/tf/model.json');
            const blob = yield resp.blob();
            this.tfFiles.push(new File([blob], 'model.json'));
            yield Promise.all(paths.map((path) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const tfFile = yield this.fetchTfFile(path);
                this.tfFiles.push(tfFile);
            })));
            this.tfFilesCompleted = true;
        });
    }
    fetchTfFile(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const base = name.split('/').reverse()[0];
            const resp = yield fetch(`assets/tf/${base}`);
            const blob = yield resp.blob();
            return new File([blob], base);
        });
    }
    startEyeball() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.eyeballScan();
            yield this.updateSelections();
        });
    }
    updateSelections() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // First thing: load up all the images into the set
            let selectedScreensSet = new Set([]);
            for (let entry of this.classifications.webapp) {
                selectedScreensSet.add(entry);
            }
            for (let entry of this.classifications.oldLooking) {
                selectedScreensSet.add(entry);
            }
            for (let entry of this.classifications.loginPage) {
                selectedScreensSet.add(entry);
            }
            for (let entry of this.classifications.custom404) {
                selectedScreensSet.add(entry);
            }
            for (let entry of this.classifications.parked) {
                selectedScreensSet.add(entry);
            }
            let selectionsArray = Array.from(selectedScreensSet);
            // Calculate intersections for each "must include" selections
            if (this.selected.webapp === 0) {
                let tempArray = selectionsArray.filter(value => this.classifications.webapp.includes(value));
                selectionsArray = tempArray;
            }
            if (this.selected.oldLooking === 0) {
                let tempArray = selectionsArray.filter(value => this.classifications.oldLooking.includes(value));
                selectionsArray = tempArray;
            }
            if (this.selected.loginPage === 0) {
                let tempArray = selectionsArray.filter(value => this.classifications.loginPage.includes(value));
                selectionsArray = tempArray;
            }
            if (this.selected.custom404 === 0) {
                let tempArray = selectionsArray.filter(value => this.classifications.custom404.includes(value));
                selectionsArray = tempArray;
            }
            if (this.selected.parked === 0) {
                let tempArray = selectionsArray.filter(value => this.classifications.parked.includes(value));
                selectionsArray = tempArray;
            }
            // Now remove any "Must not include" selection
            selectedScreensSet = new Set(selectionsArray);
            if (this.selected.webapp === 2) {
                for (let entry of this.classifications.webapp) {
                    selectedScreensSet.delete(entry);
                }
            }
            if (this.selected.oldLooking === 2) {
                for (let entry of this.classifications.oldLooking) {
                    selectedScreensSet.delete(entry);
                }
            }
            if (this.selected.loginPage === 2) {
                for (let entry of this.classifications.loginPage) {
                    selectedScreensSet.delete(entry);
                }
            }
            if (this.selected.custom404 === 2) {
                for (let entry of this.classifications.custom404) {
                    selectedScreensSet.delete(entry);
                }
            }
            if (this.selected.parked === 2) {
                for (let entry of this.classifications.parked) {
                    selectedScreensSet.delete(entry);
                }
            }
            this.selectedScreens = Array.from(selectedScreensSet);
        });
    }
    eyeballScan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.eyeballing = true;
            const model = yield _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["loadLayersModel"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["io"].browserFiles(this.tfFiles));
            const keys = Array.from(this.images.keys());
            yield Promise.all(keys.map((key) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.classifyImage(key, model);
            })));
        });
    }
    classifyImage(key, model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const img = new Image(this.width, this.height);
            img.src = this.images.get(key);
            this.loadedCount++;
            // On error, basically just ignore the image
            img.onerror = () => {
                this.eyeballedCount++;
                if (this.eyeballedCount >= this.imageCount) {
                    this.eyeballing = false;
                    this.eyeballCompleted = true;
                    this.updateSelections();
                }
            };
            img.onload = () => {
                const tensor = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["browser"].fromPixels(img)
                    .resizeNearestNeighbor([224, 224])
                    .toFloat()
                    .sub(this.offset)
                    .div(this.offset)
                    .expandDims();
                const predictions = model.predict(tensor).dataSync();
                if (predictions[0] > this.confidence) {
                    this.classifications.custom404.push(key);
                }
                if (predictions[1] > this.confidence) {
                    this.classifications.loginPage.push(key);
                }
                if (predictions[2] > this.confidence) {
                    this.classifications.webapp.push(key);
                }
                if (predictions[3] > this.confidence) {
                    this.classifications.oldLooking.push(key);
                }
                if (predictions[4] > this.confidence) {
                    this.classifications.parked.push(key);
                }
                this.eyeballedCount++;
                if (this.eyeballedCount >= this.imageCount) {
                    this.eyeballing = false;
                    this.eyeballCompleted = true;
                    this.updateSelections();
                }
            };
        });
    }
    dataURI(file) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const buf = yield file.arrayBuffer();
            let ext = (_a = file.name.split('.').reverse()[0]) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
            if (!["jpg", "jpeg", "png", "gif", "bmp"].some(allow => allow === ext)) {
                ext = "jpg";
            }
            return `data:image/${encodeURIComponent(ext)};base64,${base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__["encode"](buf)}`;
        });
    }
    eyeballPercent() {
        return (this.eyeballedCount / this.imageCount) * 100;
    }
    loadPercent() {
        return (this.images.size / this.imageCount) * 100;
    }
    restart() {
        window.location.reload();
    }
    exportResults() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const str = this.selectedScreens.join("\n");
            const blob = new Blob([str], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            window.open(url);
        });
    }
}
EyeballerComponent.ɵfac = function EyeballerComponent_Factory(t) { return new (t || EyeballerComponent)(); };
EyeballerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EyeballerComponent, selectors: [["app-eyeballer"]], decls: 15, vars: 4, consts: [["color", "primary", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "app-toolbar"], ["src", "assets/eyeballer_logo.png", "width", "46", "height", "60"], ["fxFlex", ""], ["mat-raised-button", "", 3, "click"], [1, "fas", "fa-fw", "fa-undo"], [4, "ngIf"], ["mode", "indeterminate"], [3, "change"], [2, "font-weight", "bold"], ["href", "https://github.com/BishopFox/eyeballer", "target", "_blank", "rel", "noopener noreferrer"], ["mode", "determinate", 3, "value"], [1, "results-container"], [2, "height", "40px"], [1, "button-spacer"], ["mat-raised-button", "", "color", "primary", 1, "label-button", 3, "disabled", "click"], ["mat-raised-button", "", "color", "basic", 1, "label-button", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 1, "label-button", 3, "disabled", "click"], [1, "label-count"], ["mat-raised-button", "", "color", "primary", "mat-raised-button", "", 1, "label-button", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 1, "export-button", 3, "click"], ["href", "https://github.com/BishopFox/eyeballer#what-the-labels-mean", "target", "_blank", "rel", "noopener noreferrer"], [1, "eyeballed-class-container"], [4, "ngFor", "ngForOf"], [1, "result-card"], ["mat-card-image", "", 1, "preview-image", 3, "src"], [1, "webapp-label"], [1, "custom-404-label"], [1, "login-label"], [1, "old-looking-label"], [1, "parked-label"]], template: function EyeballerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Eyeballer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Bishop Fox R&D");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EyeballerComponent_Template_button_click_8_listener() { return ctx.restart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Restart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EyeballerComponent_div_11_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EyeballerComponent_div_12_Template, 23, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EyeballerComponent_div_13_Template, 13, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EyeballerComponent_div_14_Template, 72, 22, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.tfFilesCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tfFilesCompleted && !ctx.eyeballing && !ctx.eyeballCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tfFilesCompleted && ctx.eyeballing && !ctx.eyeballCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tfFilesCompleted && !ctx.eyeballing && ctx.eyeballCompleted);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"]], styles: [".app-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n  \n}\n\n.not-completed-container[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n.not-completed-message[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.results-container[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: 1fr;\n}\n\n.eyeballed-class-container[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 1em;\n  margin: 1em;\n}\n\n.result-card[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.result-card[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.result-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.result-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 70px;\n  height: 70px;\n  z-index: 10;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.fill-space[_ngcontent-%COMP%] {\n  flex: auto;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.webapp-label[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.old-looking-label[_ngcontent-%COMP%] {\n  background-color: green;\n  color: white;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.login-label[_ngcontent-%COMP%] {\n  background-color: purple;\n  color: white;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.custom-404-label[_ngcontent-%COMP%] {\n  background-color: orange;\n  color: white;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.parked-label[_ngcontent-%COMP%] {\n  background-color: red;\n  color: white;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.label-count[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 50px !important;\n  min-width: unset !important;\n}\n\n.label-button[_ngcontent-%COMP%] {\n  width: 130px !important;\n  min-width: unset !important;\n}\n\n.button-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.export-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V5ZWJhbGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUEwQix5QkFBQTtFQUMxQixNQUFBO0VBQVEseUNBQUE7RUFDUixhQUFBO0VBQWUsK0RBQUE7QUFJbkI7O0FBREE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtDQUFBO0FBR0o7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBRUEsMEJBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBR0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBSUY7O0FBREE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtBQUlGIiwiZmlsZSI6ImV5ZWJhbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtdG9vbGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgICB0b3A6IDA7IC8qIFNldHMgdGhlIHN0aWNreSB0b29sYmFyIHRvIGJlIG9uIHRvcCAqL1xuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cbn1cblxuLm5vdC1jb21wbGV0ZWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbn1cblxuLm5vdC1jb21wbGV0ZWQtbWVzc2FnZSB7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBncmlkLXJvdzogMi8zO1xufVxuXG4ucmVzdWx0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cblxuLmV5ZWJhbGxlZC1jbGFzcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgyNTBweCwgYXV0byk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1nYXA6IDFlbTtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnJlc3VsdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5yZXN1bHQtY2FyZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLnJlc3VsdC1jYXJkOmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogLjU7XG59XG5cbi5yZXN1bHQtY2FyZCA+IGRpdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmZpbGwtc3BhY2Uge1xuICAgIGZsZXg6IGF1dG87XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByZXZpZXctaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlYmFwcC1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG4ub2xkLWxvb2tpbmctbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cbi5sb2dpbi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cbi5jdXN0b20tNDA0LWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xufVxuLnBhcmtlZC1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLmxhYmVsLWNvdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA1MHB4IWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB1bnNldCFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1idXR0b257XG4gIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdW5zZXQhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZXhwb3J0LWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_eyeballer_eyeballer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/eyeballer/eyeballer.component */ "rGg0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _components_eyeballer_eyeballer_component__WEBPACK_IMPORTED_MODULE_1__["EyeballerComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map