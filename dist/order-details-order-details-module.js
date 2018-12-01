(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-details-order-details-module"],{

/***/ "./src/app/layout/order-details/order-details-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/order-details/order-details-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: OrderDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsRoutingModule", function() { return OrderDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-details.component */ "./src/app/layout/order-details/order-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _order_details_component__WEBPACK_IMPORTED_MODULE_2__["OrderDetailsComponent"]
    }
];
var OrderDetailsRoutingModule = /** @class */ (function () {
    function OrderDetailsRoutingModule() {
    }
    OrderDetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrderDetailsRoutingModule);
    return OrderDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/order-details/order-details.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/order-details/order-details.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <h2 class=\"text-muted\"> <small>My Orders > Order Detail</small></h2>\n  <ngb-tabset>\n    <ngb-tab title=\"Product info\">\n      <ng-template ngbTabContent>\n\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"Package detail\">\n      <ng-template ngbTabContent>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"Assembly & Document\">\n      <ng-template ngbTabContent>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>"

/***/ }),

/***/ "./src/app/layout/order-details/order-details.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/order-details/order-details.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-image {\n  width: 100% !important; }\n\n.image-container {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.card-image {\n  width: 60%; }\n\n.active {\n  color: #3d7fbc !important;\n  border: none;\n  border-bottom: 1px solid #3d7fbc;\n  background-color: transparent !important; }\n\n.item-container {\n  background: #FFF;\n  margin: 0px;\n  margin-top: 20px; }\n\n.item-header,\n.item-content,\n.item-footer {\n  padding: 1rem;\n  border-bottom: 1px solid #f3f3f8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWlsZXNoL0lLRUEvRGFzaGJvYXJkL3NyYy9hcHAvbGF5b3V0L29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHVCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsMEJBQXdCO0VBQ3hCLGFBQVk7RUFDWixpQ0FBZ0M7RUFDaEMseUNBQXVDLEVBQ3hDOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxpQkFBZ0IsRUFDakI7O0FBRUQ7OztFQUdFLGNBQWE7RUFDYixpQ0FBZ0MsRUFDakMiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1pbWFnZSxcbntcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjM2Q3ZmJjIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNkN2ZiYztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLml0ZW0taGVhZGVyLFxuLml0ZW0tY29udGVudCxcbi5pdGVtLWZvb3RlciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2Y4O1xufVxuXG4uaXRlbS1pbWFnZSB7XG4gIC8vIHdpZHRoOiA2MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/order-details/order-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/order-details/order-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent() {
        this.alerts = [];
        this.sliders = [];
        this.items = [1, 2, 3];
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        }, {
            id: 2,
            type: 'warning',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        });
    }
    OrderDetailsComponent.prototype.ngOnInit = function () { };
    OrderDetailsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/layout/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.scss */ "./src/app/layout/order-details/order-details.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/order-details/order-details.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/order-details/order-details.module.ts ***!
  \**************************************************************/
/*! exports provided: OrderDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsModule", function() { return OrderDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-details-routing.module */ "./src/app/layout/order-details/order-details-routing.module.ts");
/* harmony import */ var _order_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-details.component */ "./src/app/layout/order-details/order-details.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OrderDetailsModule = /** @class */ (function () {
    function OrderDetailsModule() {
    }
    OrderDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _order_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"]
            ],
            declarations: [
                _order_details_component__WEBPACK_IMPORTED_MODULE_4__["OrderDetailsComponent"]
            ]
        })
    ], OrderDetailsModule);
    return OrderDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=order-details-order-details-module.js.map