(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["signup-signup-module"], {

    /***/
    "./src/app/signup/signup-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/
    /*! exports provided: SignupRoutingModule */
    /***/
      (function(module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
      /* harmony import */
      var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./signup.component */ "./src/app/signup/signup.component.ts");
      var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };



      var routes = [{
        path: '',
        component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
      }];
      var SignupRoutingModule = /** @class */ (function() {
        function SignupRoutingModule() {}
        SignupRoutingModule = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          })
        ], SignupRoutingModule);
        return SignupRoutingModule;
      }());



      /***/
    }),

    /***/
    "./src/app/signup/signup.component.html":
    /*!**********************************************!*\
      !*** ./src/app/signup/signup.component.html ***!
      \**********************************************/
    /*! no static exports found */
    /***/
      (function(module, exports) {

      module.exports = "<div class=\"login-page\" [@routerTransition]>\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-8\">\n      <br/>\n      <img src=\"assets/images/logo.svg\" />\n      <br/>\n      <h3>Wellcome to IKEA SellNext</h3>\n      <br/>\n      <div class=\"login-container\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <img src=\"assets/images/ikea_store.png\" class=\"store-image\" />\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-container\">\n              <form role=\"form\">\n                <div class=\"form-content\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"{{ 'Full Name' | translate }}\">\n                  </div>\n\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"{{ 'Email' | translate }}\">\n                  </div>\n\n                  <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"{{ 'Password' | translate }}\">\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"{{ 'Repeat Password' | translate }}\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <a class=\"btn login-btn\" [routerLink]=\"['/dashboard']\">{{ 'Register' | translate }}</a>\n                  </div>\n                </div>\n                <a [routerLink]=\"['/login']\">{{ 'Log in' | translate }}</a>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

      /***/
    }),

    /***/
    "./src/app/signup/signup.component.scss":
    /*!**********************************************!*\
      !*** ./src/app/signup/signup.component.scss ***!
      \**********************************************/
    /*! no static exports found */
    /***/
      (function(module, exports) {

      module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #f3f4f8;\n  text-align: center;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid #f3f3f8;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #f3f4f8;\n    box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #f3f4f8;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n\n.login-container {\n  background: #FFF; }\n\n.store-image {\n  width: 100%; }\n\n.form-container {\n  padding: 1rem;\n  padding-right: 1.5rem; }\n\n.login-btn {\n  width: 100%;\n  background: #1752b2;\n  color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWlsZXNoL0lLRUEvRGFzaGJvYXJkL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULGVBQWM7RUFDZCxvQkFaK0I7RUFhL0IsbUJBQWtCO0VBRWxCLGFBQVksRUE2RGI7O0FBdkVEO0lBWUksV0FBVSxFQUNYOztBQWJIO0lBZUksYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixnQkFBZTtJQUNmLHVCQUFzQjtJQUN0QixpQkFBZ0IsRUFDakI7O0FBcEJIO0lBc0JJLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixpQ0FBZ0M7SUFFaEMsaUJBQWdCLEVBQ2pCOztBQTVCSDtJQThCSSxpQ0FuQzZCO0lBb0M3QixpQkFBZ0IsRUFDakI7O0FBaENIO0lBbUNJLG9CQUFtQjtJQUNuQixnQ0FBK0I7SUFDL0Isb0JBMUM2QjtJQTJDN0IsMkNBQTBDO0lBQzFDLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2hCOztBQTFDSDs7OztJQStDSSxhQUE2QjtJQUM3Qix3QkFBd0M7SUFDeEMsY0FBYSxFQUNkOztBQWxESDtJQW9ESSxpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLG9CQUFtQjtJQUNuQixnQkFBZSxFQUloQjs7QUEzREg7TUF5RE0sZ0NBQStCLEVBQ2hDOztBQTFETDtJQWdFSSxnQkFBZSxFQUNoQjs7QUFqRUg7SUFvRUksbUJBQWtCO0lBQ2xCLHVCQUFzQixFQUN2Qjs7QUFHSDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGNBQWE7RUFDYixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICNmM2Y0Zjg7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9naW4tcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAzZW07XG4gIC5jb2wtbGctNCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuaW5wdXQtbGcge1xuICAgIGhlaWdodDogNDZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuaW5wdXQtdW5kZXJsaW5lIHtcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmM2YzZjg7XG4gICAgLy8gY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuaW5wdXQtdW5kZXJsaW5lOmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLnJvdW5kZWQtYnRuIHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgfVxuICAucm91bmRlZC1idG46aG92ZXIsXG4gIC5yb3VuZGVkLWJ0bjpmb2N1cyxcbiAgLnJvdW5kZWQtYnRuOmFjdGl2ZSxcbiAgLnJvdW5kZWQtYnRuOnZpc2l0ZWQge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIHNtYWxsIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgfVxuICB9XG4gIC5mb3JtLWdyb3VwIHtcbiAgICAvLyBwYWRkaW5nOiAwcHggMDtcbiAgfVxuICAuZm9ybS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG4gIH1cbiAgLnVzZXItYXZhdGFyIHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgfVxufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cblxuLnN0b3JlLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn1cblxuLmxvZ2luLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMTc1MmIyO1xuICBjb2xvcjogI0ZGRjtcbn0iXX0= */"

      /***/
    }),

    /***/
    "./src/app/signup/signup.component.ts":
    /*!********************************************!*\
      !*** ./src/app/signup/signup.component.ts ***!
      \********************************************/
    /*! exports provided: SignupComponent */
    /***/
      (function(module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
      /* harmony import */
      var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../router.animations */ "./src/app/router.animations.ts");
      /* harmony import */
      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
      var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata = (undefined && undefined.__metadata) || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };



      var SignupComponent = /** @class */ (function() {
        function SignupComponent(translate) {
          this.translate = translate;
          this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
          this.translate.setDefaultLang('en');
          var browserLang = this.translate.getBrowserLang();
          this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        }
        SignupComponent.prototype.ngOnInit = function() {};
        SignupComponent = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__( /*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__( /*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
          }),
          __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
        ], SignupComponent);
        return SignupComponent;
      }());



      /***/
    }),

    /***/
    "./src/app/signup/signup.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/
    /*! exports provided: SignupModule */
    /***/
      (function(module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
      /* harmony import */
      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
      /* harmony import */
      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
      /* harmony import */
      var _signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./signup.component */ "./src/app/signup/signup.component.ts");
      var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };





      var SignupModule = /** @class */ (function() {
        function SignupModule() {}
        SignupModule = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
              _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignupRoutingModule"]
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]]
          })
        ], SignupModule);
        return SignupModule;
      }());



      /***/
    })

  }
]);
//# sourceMappingURL=signup-signup-module.js.map