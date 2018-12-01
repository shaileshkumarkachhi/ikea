(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"assets/images/logo_header.png\" alt=\"\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n      <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n        <!-- <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i> -->\n    </button>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav ml-auto\">\n\n      <!-- <li class=\"nav-item dropdown\" ngbDropdown>\n        <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n          <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n        </a>\n        <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\n          <li class=\"media\">\n            <img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\">\n            <div class=\"media-body\">\n              <h5 class=\"mt-0 mb-1\">John Smith</h5>\n              <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n              <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n            </div>\n          </li>\n          <li class=\"media\">\n            <img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\">\n            <div class=\"media-body\">\n              <h5 class=\"mt-0 mb-1\">John Smith</h5>\n              <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n              <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n            </div>\n          </li>\n          <li class=\"media\">\n            <img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\" />\n            <div class=\"media-body\">\n              <h5 class=\"mt-0 mb-1\">John Smith</h5>\n              <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n              <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n            </div>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n          <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n        </a>\n        <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n          <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>\n                    </a>\n          <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>\n                    </a>\n          <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>\n                    </a>\n          <li class=\"dropdown-divider\"></li>\n          <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'View All' | translate }}\n                    </a>\n        </div>\n      </li> -->\n      <li class=\"nav-item dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n          <i class=\"fa fa-user\"></i> John Smith <b class=\"caret\"></b>\n        </a>\n        <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n            <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\n          </a>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n            <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\n          </a>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n            <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\n          </a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n            <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #FFF;\n  box-shadow: 0 0 11px rgba(0, 0, 0, 0.13); }\n  :host .navbar .navbar-brand {\n    color: #3e89bb; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #3e89bb; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWlsZXNoL0lLRUEvRGFzaGJvYXJkL3NyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLHVCQUgwQjtFQUkxQix5Q0FBdUMsRUFVeEM7RUFiSDtJQUtNLGVBQWMsRUFDZjtFQU5MO0lBUU0sWUFBVyxFQUlaO0VBWkw7TUFVUSxlQUFjLEVBQ2Y7RUFYUDtFQWVJLGFBQVksRUFxQmI7RUFwQ0g7SUFpQk0sOEJBQTZCO0lBQzdCLGtCQUFpQixFQUlsQjtFQXRCTDtNQW9CUSxvQkFBbUIsRUFDcEI7RUFyQlA7SUF5QlEsZ0JBQWU7SUFDZixpQkFBZ0IsRUFDakI7RUEzQlA7SUE2QlEsVUFBUyxFQUNWO0VBOUJQO0lBZ0NRLGdCQUFlO0lBQ2YsVUFBUyxFQUNWIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbjpob3N0IHtcbiAgLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMCwgMCwgMCwgLjEzKTtcbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgIGNvbG9yOiAjM2U4OWJiO1xuICAgIH1cbiAgICAubmF2LWl0ZW0+YSB7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzNlODliYjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm1lc3NhZ2VzIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgLm1lZGlhIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAubWVkaWEtYm9keSB7XG4gICAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIC5zbWFsbCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5sYXN0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.pushRightClass = 'push-right';
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n  <div class=\"list-group\">\n    <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;\n      <span>{{ 'Dashboard' | translate }}</span>\n    </a>\n    <a routerLink=\"/my-orders\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-shopping-cart\"></i>&nbsp;\n      <span>{{ 'My Orders' | translate }}</span>\n    </a>\n    <a routerLink=\"/my-account\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-user-o\"></i>&nbsp;\n      <span>{{ 'My Account' | translate }}</span>\n    </a>\n    <a routerLink=\"/login\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;\n      <span>{{ 'Sign Out' | translate }}</span>\n    </a>\n    <!-- <div class=\"header-fields\">\n      <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\n        <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\n      </a>\n      <div class=\"nested-menu\">\n        <a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">\n          <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\n        </a>\n        <li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">\n          <ul class=\"submenu\">\n            <li>\n              <a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\n                            {{ 'English' | translate }}\n                        </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\n                            {{ 'French' | translate }}\n                        </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\n                            {{ 'Urdu' | translate }}\n                        </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\n                            {{ 'Spanish' | translate }}\n                        </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\n                            {{ 'Italian' | translate }}\n                        </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\n                            {{ 'Farsi' | translate }}\n                        </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\n                            {{ 'German' | translate }}\n                        </a>\n            </li>\n          </ul>\n        </li>\n      </div>\n      <div class=\"nested-menu\">\n        <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\n          <span><i class=\"fa fa-user\"></i>&nbsp; John Smith</span>\n        </a>\n        <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\n          <ul class=\"submenu\">\n            <li>\n              <a href=\"javascript:void(0)\">\n                <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <span><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>\n              </a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\n              </a>\n            </li>\n          </ul>\n        </li>\n      </div>\n    </div> -->\n  </div>\n\n  <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\n    <i class=\"fa fa-fw fa-angle-double-left\"></i>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #FFF;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #FFF;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #f2f2f2;\n    color: #3e89bb; }\n  .sidebar .list-group a.router-link-active {\n    background: #f2f2f2;\n    color: #3e89bb; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #FFF; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #f2f2f2; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #FFF;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #f2f2f2; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n  .toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  background: #FFF;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n  .toggle-button i {\n    font-size: 23px; }\n  .toggle-button:hover {\n    background: #f2f2f2;\n    color: #fff; }\n  .collapsed {\n  width: 50px; }\n  .collapsed span {\n    display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWlsZXNoL0lLRUEvRGFzaGJvYXJkL3NyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLFVBQVM7RUFDVCxZQUFXO0VBQ1gsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsdUJBYjRCO0VBYzVCLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLG9CQUFtQjtFQUtuQixpQ0FBZ0MsRUFnRmpDO0VBckdEO0lBeUJNLGlCQTFCd0I7SUEyQnhCLFVBQVM7SUFDVCxpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLHNCQUFxQixFQUl0QjtFQWpDTDtNQStCUSxtQkFBa0IsRUFDbkI7RUFoQ1A7SUFtQ00sb0JBQWdEO0lBQ2hELGVBQWMsRUFDZjtFQXJDTDtJQXVDTSxvQkFBZ0Q7SUFDaEQsZUFBYyxFQUNmO0VBekNMO0lBMkNNLGtCQUFpQixFQUlsQjtFQS9DTDtNQTZDUSwrQ0FBOEMsRUFDL0M7RUE5Q1A7SUFtRE0sb0JBQW1CO0lBQ25CLGFBQVksRUFDYjtFQXJETDtJQXVETSxnQkFBZTtJQUNmLGFBQVk7SUFDWixpQkFBZ0IsRUFtQmpCO0VBNUVMO01BMkRRLFlBQVc7TUFDWCxzQkFBcUI7TUFDckIsaUJBQWdCO01BQ2hCLGlCQS9Ec0IsRUFzRXZCO0VBckVQO1FBZ0VVLG1CQUFrQjtRQUNsQixlQUFjO1FBQ2Qsd0JBQXVCO1FBQ3ZCLGtCQUFpQixFQUNsQjtFQXBFVDs7TUF3RVEsWUFBVztNQUNYLGNBQWE7TUFDYixxQkFBb0IsRUFDckI7RUEzRVA7SUE4RU0sb0JBQWdELEVBQ2pEO0VBL0VMO0lBaUZNLGtCQUFpQjtJQUNqQixhQUFZLEVBaUJiO0VBbkdMO01BcUZVLGlCQUFnQjtNQUNoQix1QkF2Rm9CO01Bd0ZwQiw0QkFBMkIsRUFPNUI7RUE5RlQ7UUF5RlksWUFBVyxFQUNaO0VBMUZYO1FBNEZZLFlBQVcsRUFDWjtFQTdGWDtNQWdHVSxvQkFBZ0QsRUFDakQ7RUFNVDtFQUVJLGdCQUFlLEVBQ2hCO0VBSEg7RUFLSSxzQkFBcUIsRUFDdEI7RUFOSDtFQVFJLGNBQWE7RUFDYixVQUFTLEVBQ1Y7RUFWSDtFQWFNLGVBQWM7RUFDZCxzQkFBcUI7RUFDckIsYUFBWSxFQVFiO0VBdkJMO0lBa0JVLFlBQVc7SUFDWCxjQUFhO0lBQ2IsZUFBYyxFQUNmO0VBTVQ7RUFDRTtJQUNFLFVBQVM7SUFDVCxVQUFTLEVBQ1YsRUFBQTtFQUdIO0VBQ0U7SUFDRSx5QkFBd0IsRUFDekIsRUFBQTtFQUdIO0VBQ0U7SUFDRSxjQUFhLEVBQ2QsRUFBQTtFQUdIO0VBQ0UsV0FBVSxFQUNYO0VBRUQ7RUFDRSx3Q0FBd0Q7RUFDeEQsbUJBQWtCLEVBQ25CO0VBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsd0NBQXdELEVBQ3pEO0VBRUQ7RUFDRSxnQkFBZTtFQUNmLGFBQVk7RUFDWixnQkFBZTtFQUNmLGNBQWE7RUFDYixVQUFTO0VBRVQsaUJBQWdCO0VBUWhCLDJCQUEwQjtFQUsxQixpQ0FBZ0MsRUFDakM7RUFyQkQ7SUFTSSxnQkFBZSxFQUNoQjtFQVZIO0lBWUksb0JBQWdEO0lBQ2hELFlBQVcsRUFDWjtFQVNIO0VBQ0UsWUFBVyxFQUlaO0VBTEQ7SUFHSSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4uc2lkZWJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgdG9wOiA1NnB4O1xuICBsZWZ0OiAyMzVweDtcbiAgd2lkdGg6IDIzNXB4O1xuICBtYXJnaW4tbGVmdDogLTIzNXB4O1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgLmxpc3QtZ3JvdXAge1xuICAgIGEubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIC5mYSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgICBjb2xvcjogIzNlODliYjtcbiAgICB9XG4gICAgYS5yb3V0ZXItbGluay1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xuICAgICAgY29sb3I6ICMzZTg5YmI7XG4gICAgfVxuICAgIC5oZWFkZXItZmllbGRzIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgPi5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc2lkZWJhci1kcm9wZG93biB7XG4gICAgKjpmb2N1cyB7XG4gICAgICBib3JkZXItcmFkaXVzOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAucGFuZWwtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYTpob3ZlcixcbiAgICAgIGE6Zm9jdXMge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5wYW5lbC10aXRsZTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgfVxuICAgIC5wYW5lbC1jb2xsYXBzZSB7XG4gICAgICBib3JkZXItcmFkaW91czogMDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIC5wYW5lbC1ib2R5IHtcbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubmVzdGVkLW1lbnUge1xuICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm5lc3RlZCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIHVsLnN1Ym1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gICYgLmV4cGFuZCB7XG4gICAgdWwuc3VibWVudSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGxpIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2lkZWJhciB7XG4gICAgdG9wOiA1NHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgfVxufVxuXG5AbWVkaWEgcHJpbnQge1xuICAuc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaGVhZGVyLWZpZWxkcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG4udG9nZ2xlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIzNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvdHRvbTogMDtcbiAgLy8gY29sb3I6ICM7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5OTk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29sbGFwc2VkIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "collapsedEvent", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'my-orders', loadChildren: './my-orders/my-orders.module#MyOrdersModule' },
            { path: 'order-details', loadChildren: './order-details/order-details.module#OrderDetailsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\n    <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWlsZXNoL0lLRUEvRGFzaGJvYXJkL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtJLHlDQUF3QyxFQUMzQzs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSTtJQUNJLDRCQUEyQixFQUM5QixFQUFBOztBQUVMO0VBQ0k7SUFDSSwyQkFBMEI7SUFDMUIsNEJBQTJCLEVBQzlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubWFpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbGxhcHNlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map