(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["my-orders-my-orders-module"], {

    /***/
    "./src/app/layout/my-orders/components/index.ts":
    /*!******************************************************!*\
      !*** ./src/app/layout/my-orders/components/index.ts ***!
      \******************************************************/
    /*! exports provided: OredrDetailsComponent */
    /***/
      (function(module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */
      var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./order-details/order-details.component */ "./src/app/layout/my-orders/components/order-details/order-details.component.ts");
      /* harmony reexport (safe) */
      __webpack_require__.d(__webpack_exports__, "OredrDetailsComponent", function() { return _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_0__["OredrDetailsComponent"]; });




      /***/
    }),

    /***/
    "./src/app/layout/my-orders/components/order-details/order-details.component.html":
    /*!****************************************************************************************!*\
      !*** ./src/app/layout/my-orders/components/order-details/order-details.component.html ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/
      (function(module, exports) {

      module.exports = "<div class=\"row item-container\">\n  <div class=\"col-md-12 item-header\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        Order placed<br>\n        <strong>22 November 2018</strong>\n      </div>\n      <div class=\"col-md-2\">\n        Total<br>\n        <strong>$446.00</strong>\n      </div>\n      <div class=\"col-md-3\">\n        Ship to<br>\n        <strong>Debbie M Hart</strong>\n      </div>\n      <div class=\"col-md-3\">\n        Oredr Status<br>\n        <strong>Delivery Picked up</strong>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 item-content\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <img src=\"assets/images/table.png\" class=\"item-image\" alt=\"\">\n      </div>\n      <div class=\"col-md-9\">\n        <strong>Table</strong>\n        <br/> $223.00\n        <br/>   <br/> QTY 2\n        <span class=\"btn rounded-btn-paid float-right\" disabled> <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Paid </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 item-footer\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> &nbsp; Track Order</div>\n      <div class=\"col-md-2\"><i class=\"fa fa-repeat\" aria-hidden=\"true\"></i> &nbsp; Reschedule</div>\n      <div class=\"col-md-2\"><i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>&nbsp; Feedback</div>\n      <div class=\"col-md-2\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>&nbsp;Write Review</div>\n      <div class=\"col-md-2\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>&nbsp; Change Delivery Date</div>\n      <div class=\"col-md-2\"><i class=\"fa fa-fax\" aria-hidden=\"true\"></i> &nbsp; Order Details</div>\n    </div>\n  </div>\n</div>"

      /***/
    }),

    /***/
    "./src/app/layout/my-orders/components/order-details/order-details.component.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/layout/my-orders/components/order-details/order-details.component.scss ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/
      (function(module, exports) {

      module.exports = ".image-container {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.card-image {\n  width: 60%; }\n\n.active {\n  color: #3d7fbc !important;\n  border: none;\n  border-bottom: 1px solid #3d7fbc;\n  background-color: transparent !important; }\n\n.item-container {\n  background: #FFF;\n  margin: 0px;\n  margin-top: 20px; }\n\n.item-header,\n.item-content,\n.item-footer {\n  padding: 1rem;\n  border-bottom: 1px solid #f3f3f8; }\n\n.item-header {\n  background-image: linear-gradient(225deg, red, red 21px, transparent 10px, transparent); }\n\n.rounded-btn-paid {\n  border-radius: 50px;\n  color: green;\n  background: #FFF;\n  border: 2px solid #f2f2f2;\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px; }\n\n.rounded-btn-pending {\n  border-radius: 50px;\n  color: green;\n  background: #FFF;\n  border: 2px solid #f2f2f2;\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px; }\n\n.rounded-btn:hover,\n.rounded-btn:focus,\n.rounded-btn:active,\n.rounded-btn:visited {\n  color: #3d7fbc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWlsZXNoL0lLRUEvRGFzaGJvYXJkL3NyYy9hcHAvbGF5b3V0L215LW9yZGVycy9jb21wb25lbnRzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsMEJBQXdCO0VBQ3hCLGFBQVk7RUFDWixpQ0FBZ0M7RUFDaEMseUNBQXVDLEVBQ3hDOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxpQkFBZ0IsRUFDakI7O0FBRUQ7OztFQUdFLGNBQWE7RUFDYixpQ0FBZ0MsRUFDakM7O0FBRUQ7RUFDRSx3RkFBdUYsRUFDeEY7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQiwwQkFBb0M7RUFDcEMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQiwwQkFBb0M7RUFDcEMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDaEI7O0FBRUQ7Ozs7RUFJRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbXktb3JkZXJzL2NvbXBvbmVudHMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogIzNkN2ZiYyFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZDdmYmM7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pdGVtLWhlYWRlcixcbi5pdGVtLWNvbnRlbnQsXG4uaXRlbS1mb290ZXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmODtcbn1cblxuLml0ZW0taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgcmVkLCByZWQgMjFweCwgdHJhbnNwYXJlbnQgMTBweCwgdHJhbnNwYXJlbnQpO1xufVxuXG4ucm91bmRlZC1idG4tcGFpZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiBncmVlbjtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0MiwgMjQyLCAyNDIpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5yb3VuZGVkLWJ0bi1wZW5kaW5nIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IGdyZWVuO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQyLCAyNDIsIDI0Mik7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cblxuLnJvdW5kZWQtYnRuOmhvdmVyLFxuLnJvdW5kZWQtYnRuOmZvY3VzLFxuLnJvdW5kZWQtYnRuOmFjdGl2ZSxcbi5yb3VuZGVkLWJ0bjp2aXNpdGVkIHtcbiAgY29sb3I6ICMzZDdmYmM7XG59Il19 */"

      /***/
    }),

    /***/
    "./src/app/layout/my-orders/components/order-details/order-details.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/layout/my-orders/components/order-details/order-details.component.ts ***!
      \**************************************************************************************/
    /*! exports provided: OredrDetailsComponent */
    /***/
      (function(module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "OredrDetailsComponent", function() { return OredrDetailsComponent; });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

      var OredrDetailsComponent = /** @class */ (function() {
        function OredrDetailsComponent() {}
        OredrDetailsComponent.prototype.ngOnInit = function() {};
        OredrDetailsComponent = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-row',
            template: __webpack_require__( /*! ./order-details.component.html */ "./src/app/layout/my-orders/components/order-details/order-details.component.html"),
            styles: [__webpack_require__( /*! ./order-details.component.scss */ "./src/app/layout/my-orders/components/order-details/order-details.component.scss")]
          }),
          __metadata("design:paramtypes", [])
        ], OredrDetailsComponent);
        return OredrDetailsComponent;
      }());



      /***/
    }),

    /***/
    "./src/app/layout/my-orders/my-orders-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/layout/my-orders/my-orders-routing.module.ts ***!
      \**************************************************************/
    /*! exports provided: DashboardRoutingModule */
    /***/
      (function(module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
      /* harmony import */
      var _my_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./my-orders.component */ "./src/app/layout/my-orders/my-orders.component.ts");
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
        component: _my_orders_component__WEBPACK_IMPORTED_MODULE_2__["MyOrdersComponent"]
      }];
      var DashboardRoutingModule = /** @class */ (function() {
        function DashboardRoutingModule() {}
        DashboardRoutingModule = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          })
        ], DashboardRoutingModule);
        return DashboardRoutingModule;
      }());



      /***/
    }),

    /***/
    "./src/app/layout/my-orders/my-orders.component.html":
    /*!***********************************************************!*\
      !*** ./src/app/layout/my-orders/my-orders.component.html ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
      (function(module, exports) {

      module.exports = "<div [@routerTransition]>\n  <h2 class=\"text-muted\"> <small>My Orders</small></h2>\n  <ngb-tabset>\n    <ngb-tab title=\"All Orders\">\n      <ng-template ngbTabContent>\n        <app-order-row *ngFor=\"let item of items\"></app-order-row>\n      </ng-template>\n    </ngb-tab>\n    <!-- <ngb-tab title=\"Pendding Orders\">\n      <ng-template ngbTabContent>\n        <app-order-row *ngFor=\"let item of items\"></app-order-row>\n      </ng-template>\n    </ngb-tab> -->\n    <ngb-tab title=\"Open\" [disabled]=\"true\">\n      <ng-template ngbTabContent>\n        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.\n          Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"Cancelled\" [disabled]=\"true\">\n      <ng-template ngbTabContent>\n        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.\n          Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>"

      /***/
    }),

    /***/
    "./src/app/layout/my-orders/my-orders.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/layout/my-orders/my-orders.component.scss ***!
      \***********************************************************/
    /*! no static exports found */
    /***/
      (function(module, exports) {

      module.exports = ".dashboard-image {\n  width: 100% !important; }\n\n.image-container {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.card-image {\n  width: 60%; }\n\n.active {\n  color: #3d7fbc !important;\n  border: none;\n  border-bottom: 1px solid #3d7fbc;\n  background-color: transparent !important; }\n\n.item-container {\n  background: #FFF;\n  margin: 0px;\n  margin-top: 20px; }\n\n.item-header,\n.item-content,\n.item-footer {\n  padding: 1rem;\n  border-bottom: 1px solid #f3f3f8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWlsZXNoL0lLRUEvRGFzaGJvYXJkL3NyYy9hcHAvbGF5b3V0L215LW9yZGVycy9teS1vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx1QkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLFdBQVUsRUFDWDs7QUFFRDtFQUNFLDBCQUF3QjtFQUN4QixhQUFZO0VBQ1osaUNBQWdDO0VBQ2hDLHlDQUF1QyxFQUN4Qzs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsaUJBQWdCLEVBQ2pCOztBQUVEOzs7RUFHRSxjQUFhO0VBQ2IsaUNBQWdDLEVBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L215LW9yZGVycy9teS1vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWltYWdlLFxue1xuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmQtaW1hZ2Uge1xuICB3aWR0aDogNjAlO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICMzZDdmYmMhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2Q3ZmJjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaXRlbS1oZWFkZXIsXG4uaXRlbS1jb250ZW50LFxuLml0ZW0tZm9vdGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjg7XG59XG5cbi5pdGVtLWltYWdlIHtcbiAgLy8gd2lkdGg6IDYwJTtcbn0iXX0= */"

      /***/
    }),

    /***/
    "./src/app/layout/my-orders/my-orders.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/layout/my-orders/my-orders.component.ts ***!
      \*********************************************************/
    /*! exports provided: MyOrdersComponent */
    /***/
      (function(module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
      /* harmony import */
      var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../router.animations */ "./src/app/router.animations.ts");
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


      var MyOrdersComponent = /** @class */ (function() {
        function MyOrdersComponent() {
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
        MyOrdersComponent.prototype.ngOnInit = function() {};
        MyOrdersComponent.prototype.closeAlert = function(alert) {
          var index = this.alerts.indexOf(alert);
          this.alerts.splice(index, 1);
        };
        MyOrdersComponent = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__( /*! ./my-orders.component.html */ "./src/app/layout/my-orders/my-orders.component.html"),
            styles: [__webpack_require__( /*! ./my-orders.component.scss */ "./src/app/layout/my-orders/my-orders.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
          }),
          __metadata("design:paramtypes", [])
        ], MyOrdersComponent);
        return MyOrdersComponent;
      }());



      /***/
    }),

    /***/
    "./src/app/layout/my-orders/my-orders.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/layout/my-orders/my-orders.module.ts ***!
      \******************************************************/
    /*! exports provided: MyOrdersModule */
    /***/
      (function(module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "MyOrdersModule", function() { return MyOrdersModule; });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
      /* harmony import */
      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
      /* harmony import */
      var _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./my-orders-routing.module */ "./src/app/layout/my-orders/my-orders-routing.module.ts");
      /* harmony import */
      var _my_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./my-orders.component */ "./src/app/layout/my-orders/my-orders.component.ts");
      /* harmony import */
      var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components */ "./src/app/layout/my-orders/components/index.ts");
      /* harmony import */
      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../shared */ "./src/app/shared/index.ts");
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







      var MyOrdersModule = /** @class */ (function() {
        function MyOrdersModule() {}
        MyOrdersModule = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
              _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
              _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"]
            ],
            declarations: [
              _my_orders_component__WEBPACK_IMPORTED_MODULE_4__["MyOrdersComponent"],
              _components__WEBPACK_IMPORTED_MODULE_5__["OredrDetailsComponent"]
            ]
          })
        ], MyOrdersModule);
        return MyOrdersModule;
      }());



      /***/
    })

  }
]);
//# sourceMappingURL=my-orders-my-orders-module.js.map