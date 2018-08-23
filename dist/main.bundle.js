webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/components/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_details_search_details_component__ = __webpack_require__("./src/app/components/search-details/search-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__video_video_component__ = __webpack_require__("./src/app/components/video/video.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */] },
    { path: 'video', component: __WEBPACK_IMPORTED_MODULE_4__video_video_component__["a" /* VideoComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */] },
    { path: 'areaDetails', component: __WEBPACK_IMPORTED_MODULE_2__search_details_search_details_component__["a" /* SearchDetailsComponent */] },
    { path: 'searchArea', component: __WEBPACK_IMPORTED_MODULE_2__search_details_search_details_component__["a" /* SearchDetailsComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\" id=\"navbar-scroll\">\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <button class=\"navbar-toggler navbar-toggler-right navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-bar\"></span>\n        <span class=\"navbar-toggler-bar\"></span>\n        <span class=\"navbar-toggler-bar\"></span>\n      </button>\n      <div>\n        <a routerLink=\"/home\"  class=\"navbar-brand\" id=\"profile\" >\n          <div class=\"logo\">\n            <img src=\"../../assets/img/logo/Clozer.png\" width=\"90\" height=\"30\"/>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n      <ul class=\"navbar-nav navbar-right ml-auto\">\n        <li class=\"nav-item\">\n          <a [ngx-scroll-to]=\"'#search'\" class=\"nav-link hand-cursor\"><i class=\"nc-icon nc-zoom-split\"></i> Search</a>\n        </li>\n        <!--<li class=\"nav-item\">-->\n          <!--<a  class=\"nav-link\" href=\"\"><i class=\"nc-icon nc-settings-gear-65\"></i> Personalise</a>-->\n        <!--</li>-->\n        <li class=\"nav-item\" data-toggle=\"modal\" data-target=\"#faqModal\">\n          <a class=\"nav-link hand-cursor\"><i class=\"nc-icon nc-paper\" ></i> FAQ</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"mailto:info@clozer.co.uk\" class=\"nav-link hand-cursor\"><i class=\"nc-icon nc-send\"></i> Contact Us </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"page-header section-dark\">\n  <div class=\"banner\">\n    <!--<div class=\"filter\"></div>-->\n    <div class=\"content-center\">\n      <div class=\"container\">\n        <div class=\"title-brand\">\n          <h1 class=\"presentation-title\">CLOZER</h1> <!-- class=\"presentation-title\" -->\n        </div>\n        <h2 class=\"presentation-subtitle\">\n          <div class=\"row\">\n            <hr class=\"hr-title-line\">\n            ⌘\n            <hr class=\"hr-title-line\">\n          </div>\n        </h2>\n        <div class=\"fog-low\"></div>\n        <h2 class=\"presentation-subtitle text-center\">Your search for the perfect house begins here</h2>\n        <br>\n        <div align=\"center\">\n          <a class=\"btn btn-warning btn-round\" [ngx-scroll-to]=\"'#search'\">Let's Go</a>\n        </div>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"section video-summary\" id=\"video\" align=\"center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <app-video></app-video>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n<!--<div class=\"section section-dark-blue search-screen\" id=\"search\" >-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-12\">-->\n        <!--<router-outlet></router-outlet>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"credits\">\n      <nav class=\"footer-nav\">\n        <div><a href=\"mailto:info@clozer.co.uk\">info@clozer.co.uk</a></div>\n      </nav>\n    </div>\n  </div>\n</footer>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/components/app.component.html"),
            styles: [__webpack_require__("./src/app/components/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video_video_component__ = __webpack_require__("./src/app/components/video/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__area_details_area_details_component__ = __webpack_require__("./src/app/components/area-details/area-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sector_details_sector_details_component__ = __webpack_require__("./src/app/components/sector-details/sector-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__personalise_personalise_component__ = __webpack_require__("./src/app/components/personalise/personalise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__feedback_feedback_component__ = __webpack_require__("./src/app/components/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__faq_faq_component__ = __webpack_require__("./src/app/components/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_details_search_details_component__ = __webpack_require__("./src/app/components/search-details/search-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_search_area_service__ = __webpack_require__("./src/app/services/search-area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("./src/app/components/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__landingpage_landingpage_component__ = __webpack_require__("./src/app/components/landingpage/landingpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_HousePricePipe__ = __webpack_require__("./src/app/pipes/HousePricePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_ClozerErrorHandler__ = __webpack_require__("./src/app/services/ClozerErrorHandler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_6__video_video_component__["a" /* VideoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__area_details_area_details_component__["a" /* AreaDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sector_details_sector_details_component__["a" /* SectorDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__personalise_personalise_component__["a" /* PersonaliseComponent */],
                __WEBPACK_IMPORTED_MODULE_10__feedback_feedback_component__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_11__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_12__search_details_search_details_component__["a" /* SearchDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__landingpage_landingpage_component__["a" /* LandingpageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_HousePricePipe__["a" /* HousePricePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_angular5_data_table__["a" /* DataTableModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18__angular_material_table__["a" /* MatTableModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_search_area_service__["a" /* SearchAreaService */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_20__services_ClozerErrorHandler__["a" /* ClozerErrorHandler */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/area-details/area-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/area-details/area-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  area-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/area-details/area-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AreaDetailsComponent = /** @class */ (function () {
    function AreaDetailsComponent() {
    }
    AreaDetailsComponent.prototype.ngOnInit = function () {
    };
    AreaDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-area-details',
            template: __webpack_require__("./src/app/components/area-details/area-details.component.html"),
            styles: [__webpack_require__("./src/app/components/area-details/area-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AreaDetailsComponent);
    return AreaDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/faq/faq.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  faq works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("./src/app/components/faq/faq.component.html"),
            styles: [__webpack_require__("./src/app/components/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/components/feedback/feedback.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  feedback works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent() {
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feedback',
            template: __webpack_require__("./src/app/components/feedback/feedback.component.html"),
            styles: [__webpack_require__("./src/app/components/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header section-dark\">\n  <div class=\"banner\">\n    <!--<div class=\"filter\"></div>-->\n    <div class=\"content-center\">\n      <div class=\"container\">\n        <div class=\"title-brand\">\n          <h1 class=\"presentation-title\">CLOZER</h1> <!-- class=\"presentation-title\" -->\n        </div>\n        <h2 class=\"presentation-subtitle\">\n          <div class=\"row\">\n            <hr class=\"hr-title-line\">\n            ⌘\n            <hr class=\"hr-title-line\">\n          </div>\n        </h2>\n        <div class=\"fog-low\"></div>\n        <h2 class=\"presentation-subtitle text-center\">Your search for the perfect house begins here</h2>\n        <br>\n        <div align=\"center\">\n          <a class=\"btn btn-info btn-round\" [ngx-scroll-to]=\"'#search'\">Let's Go</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent() {
    }
    LandingpageComponent.prototype.ngOnInit = function () {
    };
    LandingpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landingpage',
            template: __webpack_require__("./src/app/components/landingpage/landingpage.component.html"),
            styles: [__webpack_require__("./src/app/components/landingpage/landingpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "./src/app/components/personalise/personalise.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/personalise/personalise.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  personalise works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/personalise/personalise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaliseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonaliseComponent = /** @class */ (function () {
    function PersonaliseComponent() {
    }
    PersonaliseComponent.prototype.ngOnInit = function () {
    };
    PersonaliseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-personalise',
            template: __webpack_require__("./src/app/components/personalise/personalise.component.html"),
            styles: [__webpack_require__("./src/app/components/personalise/personalise.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonaliseComponent);
    return PersonaliseComponent;
}());



/***/ }),

/***/ "./src/app/components/search-details/search-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-details/search-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinning\" *ngIf=\"isLoading\">\n  <i class=\"fa fa-cog fa-spin fa-2x fa-fw\" aria-hidden=\"true\"></i>\n  <span class=\"sr-only\">Saving. Hang tight!</span>\n</div>\n<div class=\"search container-fluid col-md-12\" *ngIf=\"areaSearchResults\">\n  <div class=\"row\">\n    <p> You have {{areaSearchResults.length}} area(s) matching your criteria </p>\n    <br>\n  </div>\n  <div id=\"myCarousel\" class=\"carousel slide col-md-12\" data-ride=\"carousel\">\n      <div class=\"carousel-inner row w-100 mx-auto\">\n        <div class=\"carousel-item col-md-4 active\">\n          <div class=\"card-plain bg-dark text-white text-center\">\n            <img class=\"card-img\" src=\"../../../assets/img/gradient-card.png\" alt=\"Card image\">\n            <div class=\"card-img-overlay\">\n              <h5 class=\"card-title text-white\">{{areaSearchResults[0].areaCode}}</h5>\n              <p class=\"card-text\">Area Names :  {{areaSearchResults[0].areaName}}</p>\n              <p class=\"card-text\">Total Score: {{areaSearchResults[0].totalScore}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"carousel-item col-md-4 \" *ngFor=\"let searchDetail of areaSearchResults.splice(1)\">\n          <div class=\"card-deck\">\n            <div class=\"card-plain bg-dark text-white text-center\">\n              <img class=\"card-img\" src=\"../../../assets/img/gradient-card.png\" alt=\"Card image\">\n              <div class=\"card-img-overlay\">\n                <h5 class=\"card-title text-white\">{{searchDetail.areaCode}}</h5>\n                <p class=\"card-text\">Area Names :  {{searchDetail.areaName}}</p>\n                <p class=\"card-text\">Total Score: {{searchDetail.totalScore}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n        <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n  </div>\n</div>\n\n\n<!--<div class=\"col-md-8 ml-auto mr-auto\">-->\n  <!--<div class=\"card page-carousel\">-->\n    <!--<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">-->\n\n      <!--<div class=\"carousel-inner\" role=\"listbox\">-->\n        <!--<div class=\"carousel-item active\">-->\n          <!--<div class=\"card-plain bg-dark text-white text-center\">-->\n            <!--<img class=\"card-img\" src=\"../../../assets/img/gradient-card.png\" alt=\"Card image\">-->\n            <!--<div class=\"card-img-overlay\">-->\n              <!--<h5 class=\"card-title text-white\">{{areaSearchResults[0].areaCode}}</h5>-->\n              <!--<p class=\"card-text\">Area Names :  {{areaSearchResults[0].areaName}}</p>-->\n              <!--<p class=\"card-text\">Total Score: {{areaSearchResults[0].totalScore}}</p>-->\n            <!--</div>-->\n          <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"carousel-item\" *ngFor=\"let area of areaSearchResults.splice(1); let odd = odd; let even = even;\">-->\n          <!--<div class=\"card-plain bg-dark text-white text-center\">-->\n            <!--<div *ngIf=\"odd\">-->\n              <!--<img class=\"card-img\" src=\"../../../assets/img/urban-night.jpg\" alt=\"Card image\">-->\n            <!--</div>-->\n            <!--<div *ngIf=\"even\">-->\n              <!--<img class=\"card-img\" src=\"../../../assets/img/bruno-abatti.jpg\" alt=\"Card image\">-->\n            <!--</div>-->\n            <!--<div class=\"card-img-overlay\">-->\n              <!--<h5 class=\"card-title text-white\">{{area.areaCode}} {{i}}</h5>-->\n              <!--<p class=\"card-text\">Area Names :  {{area.areaName}}</p>-->\n              <!--<p class=\"card-text\">Total Score: {{area.totalScore}}</p>-->\n            <!--</div>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n\n      <!--<a class=\"left carousel-control carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">-->\n        <!--<span class=\"fa fa-angle-left\"></span>-->\n        <!--<span class=\"sr-only\">Previous</span>-->\n      <!--</a>-->\n      <!--<a class=\"right carousel-control carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">-->\n        <!--<span class=\"fa fa-angle-right\"></span>-->\n        <!--<span class=\"sr-only\">Next</span>-->\n      <!--</a>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/search-details/search-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_area_service__ = __webpack_require__("./src/app/services/search-area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_SearchModel__ = __webpack_require__("./src/app/model/SearchModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchDetailsComponent = /** @class */ (function () {
    function SearchDetailsComponent(router, searchAreaService, searchComponent) {
        this.router = router;
        this.searchAreaService = searchAreaService;
        this.searchComponent = searchComponent;
    }
    SearchDetailsComponent.prototype.ngOnInit = function () {
        console.log('oninit called');
        this.getAreaDetails();
    };
    SearchDetailsComponent.prototype.ngAfterViewInit = function () {
        this.getAreaDetails();
    };
    SearchDetailsComponent.prototype.getAreaDetails = function () {
        var _this = this;
        this.isLoading = true;
        this.searchComplete = false;
        setTimeout(function () {
            _this.searchAreaService.getAreaDetails(_this.searchModel).subscribe(function (areaDetails) {
                _this.areaSearchResults = areaDetails;
                _this.isLoading = false;
                _this.searchComplete = true;
                console.log('returned... ' + _this.areaSearchResults.length);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SearchDetailsComponent.prototype, "areaSearchResults", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__model_SearchModel__["a" /* SearchModel */])
    ], SearchDetailsComponent.prototype, "searchModel", void 0);
    SearchDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-details',
            template: __webpack_require__("./src/app/components/search-details/search-details.component.html"),
            styles: [__webpack_require__("./src/app/components/search-details/search-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_search_area_service__["a" /* SearchAreaService */],
            __WEBPACK_IMPORTED_MODULE_4__search_search_component__["a" /* SearchComponent */]])
    ], SearchDetailsComponent);
    return SearchDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-dark-blue search-screen\" id=\"search\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"search col-md-12\">\n          <form (ngSubmit) = \"getAreaSearchResults()\" #searchForm = \"ngForm\">\n            <!--<div class=\" form-group row col-md-12\">-->\n              <!--<div class=\"col-md-6\">-->\n                <!--<h6> Get Clozer to your home..</h6>-->\n              <!--</div>-->\n              <!--&lt;!&ndash;<div col=\"col-md-4\"></div>&ndash;&gt;-->\n              <!--<div class=\"col-md-6\"></div>-->\n            <!--</div>-->\n            <br>\n            <div class=\" form-group row col-md-12\">\n              <div class=\"col-lg-3 col-md-4\">\n                <label for=\"housePriceTo\" class=\"col-form-label\">My maximum budget </label>\n              </div>\n              <div class=\"col-lg-3 col-md-4\">\n                <!--<input type=\"text\" class=\"form-control\" id=\"housePrice\"  placeholder=\"Enter your work postcode\">-->\n                <select class=\"form-control\" id=\"housePriceTo\" [(ngModel)] = \"searchModel.maxPrice\" name=\"maxPrice\">\n                  <option *ngFor=\"let price of priceRange\" value=\"{{price}}\">\n                    {{price | currency : 'GBP' : '£' : '1.0'}}\n                  </option>\n                </select>\n              </div>\n              <!--<div col=\"col-md-4\"></div>-->\n              <div class=\"col-lg-3 col-md-4\"></div>\n            </div>\n            <div class=\"form-group row col-md-12\">\n              <div class=\"col-lg-3 col-md-4\">\n                <label for=\"homezipcode\" class=\"col-form-label\">Postcodes that matter to me </label>\n              </div>\n              <div class=\"col-lg-3 col-md-4\">\n                <input type=\"text\" class=\"form-control\" id=\"homezipcode\"\n                [(ngModel)] = \"searchModel.homePostcode\"\n                placeholder=\"First choice\" name=\"homePostCode\" required>\n              </div>\n              <!--<div class=\"col-xs-1\">&nbsp;</div>-->\n              <!--<div class=\"col-md-1\"></div>-->\n              <!--<label for=\"homezipcode\" class=\"col-md-2 col-form-label\">I currently live at..</label>-->\n              <!--<div class=\"col-md-1\"></div>-->\n              <div class=\"col-lg-3 col-md-4\">\n                <!--<input type=\"text\" class=\"form-control\" id=\"homezipcode\"-->\n                       <!--[(ngModel)] = \"searchModel.homePostcode\"-->\n                       <!--placeholder=\"Second choice\" name=\"homePostCode\">-->\n                <!--<input type=\"text\" class=\"form-control\" id=\"workzipcode\"-->\n                       <!--[(ngModel)] = \"searchModel.workPostcode\"-->\n                       <!--placeholder=\"First choice\" name=\"workPostCode\" required>-->\n              </div>\n              <div class=\"col-lg-3\"></div>\n            </div>\n            <div class=\"form-group row col-lg-12\">\n              <div class=\"col-lg-3 col-md-4\">\n                <label for=\"timeToTravel\" class=\"col-form-label\">Can travel up to</label>\n              </div>\n              <div class=\"col-lg-3 col-md-4\">\n                <!--<input type=\"text\" class=\"form-control\" id=\"timeToTravel\"  placeholder=\"time\">-->\n                <select class=\"form-control\" id=\"timeToTravel\" [(ngModel)] = \"searchModel.timeToTravel\" name=\"timeToTravel\">\n                  <option *ngFor=\"let t of time\" value=\"{{t}}\">\n                    {{t}} min\n                  </option>\n                </select>\n              </div>\n              <div class=\"col-xs-1\"> </div>\n              <!--<label for=\"distanceToTravel\" class=\"col-md-2 col-form-label\">and not more than</label>-->\n              <div class=\"col-lg-3 col-md-4\">\n                <!--<input type=\"text\" class=\"form-control\" id=\"distanceToTravel\" placeholder=\"distance\">-->\n                <select class=\"form-control\" id=\"distanceToTravel\" [(ngModel)] = \"searchModel.distanceToTravel\" name=\"distanceToTravel\">\n                  <option *ngFor=\"let dist of distance\" value=\"{{dist}}\">\n                    {{dist}} mile\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\" form-group row col-md-12\">\n              <div class=\"col-lg-3 col-md-4\">\n                <label class=\"col-form-label\">I prefer to travel by </label>\n              </div>\n                <div class=\"form-check col-md-7\" id=\"travelmode1\" >\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" name=\"travelMode\" class=\"form-check-input\"\n                           [(ngModel)] = \"searchModel.travelMode\" name=\"travelMode\" value=\"any\">\n                    <i class=\"fas fa-bus\"></i> Any\n                  </label>\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\"\n                         checked\n                         name=\"travelMode\" value=\"Train\"\n                         [(ngModel)] = \"searchModel.travelMode\" name=\"travelMode\" value=\"train\">\n                    <i class=\"fa fa-train\"></i> Train\n                  </label>\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\"\n                         [(ngModel)] = \"searchModel.travelMode\" name=\"travelMode\" value=\"car\">\n                    <i class=\"fas fa-car\"></i> Car\n                  </label>\n\n                <!--<label class=\"form-check-label\">-->\n                    <!--<input type=\"radio\" class=\"form-check-input\"-->\n                          <!--name=\"travelMode\" value=\"cycle\" disabled=\"true\">-->\n                  <!--<i class=\"fas fa-bicycle\"></i> Cycle-->\n                  <!--</label>-->\n                <!--<label class=\"form-check-label\">-->\n                    <!--<input type=\"radio\" class=\"form-check-input\"-->\n                          <!--name=\"travelMode\" value=\"walk\" disabled=\"true\">-->\n                  <!--<i class=\"fas fa-walking\"></i> Walk-->\n                  <!--</label>-->\n                </div>\n              </div>\n            <div class=\" form-group row col-md-12\">\n              <div class=\"col-lg-3 col-md-4\">\n                <label class=\"col-form-label\">I prefer to live in a</label>\n              </div>\n              <div class=\"form-check col-lg-7 col-md-6\" id=\"houseType\" >\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" name=\"houseType\" class=\"form-check-input\"\n                         [(ngModel)] = \"searchModel.houseType\" name=\"houseType\" value=\"H\">\n                  <i class=\"fas fa-home\"></i> House\n                </label>\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\"\n                         checked\n                         [(ngModel)] = \"searchModel.houseType\" name=\"houseType\" value=\"A\">\n                  <i class=\"fas fa-building\"></i> Flat\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group row col-md-12\">\n              <div class=\"col-lg-3 col-md-4\"> </div>\n              <div class=\"col-lg-9 col-md-8\">\n                <button type=\"submit\" class=\"btn btn-info btn-round\" [disabled]=\"!searchForm.form.valid\" >Search</button> &nbsp;\n                <button type=\"button\" class=\"btn btn-info btn-round\" (click) = \"resetFields()\">Reset</button>\n              </div>\n            </div>\n          </form>\n          <!--<span *ngIf=\"isLoading\" class=\"glyphicon glyphicon-repeat fast-right-spinner\"></span>-->\n          <!--<div class=\"searchresults\" *ngIf=\"submitted\">-->\n            <!--<app-search-details [searchModel]=\"outputSearchModel\"></app-search-details>-->\n          <!--</div>-->\n        <!--</div>-->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End search form -->\n<!-- Search results -->\n<div class=\"section section-dark-blue areasearch-results-summary\" id=\"searchresults\" align=\"center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"spinning\" *ngIf=\"isLoading\">\n          <i class=\"fa fa-cog fa-spin fa-2x fa-fw\" aria-hidden=\"true\"></i>\n        </div>\n        <!-- REsults -->\n        <div class=\"search\" *ngIf=\"hasLoaded\">\n          <div class=\"row col-md-12\" *ngIf=\"areaSearchResults == null\">\n            <p> Server error. Please try again </p>\n          </div>\n          <div class=\"row col-md-12\" *ngIf=\"areaSearchResults != null\">\n            <p> You have {{areaSearchResults.length}} area(s) matching your criteria </p>\n          </div>\n          <br>\n          <!-- Adding rotating cards -->\n          <div class=\"container-fluid\" *ngIf=\"areaSearchResults != null\">\n              <div class=\"card-group \">\n                <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let searchDetail of areaSearchResults\">\n                  <div class=\"card-container card-plain manual-flip\">\n                    <div class=\"card\">\n                      <div class=\"front\">\n                        <div class=\"cover\">\n                          <!--<img src=\"assets/img/rotating_card_thumb2.png\"/>-->\n                          <img src=\"assets/img/cardbgtop.jpg\"/>\n                        </div>\n                        <div class=\"user\">\n                          <!--<img class=\"img-circle\" src=\"assets/img/rotating_card_thumb.jpg\">-->\n                          <img class=\"img-circle\" src=\"assets/img/cardbginner.jpg\">\n                          <div class=\"img-text\"><strong>{{searchDetail.area_code}}</strong></div>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"main\">\n                            <h3 class=\"line-height\">Clozer score: {{searchDetail.total_score}}</h3>\n                            <!--<h5 class=\"code\">{{searchDetail.area_code}}</h5>-->\n                            <br>\n                            <p class=\"text-center\">{{searchDetail.area_name}}</p>\n                            <div class=\"header\">\n                              <h5 class=\"topheader\">Travel Time: {{searchDetail.average_journey_time | number: '1.0-0'}} min </h5>\n                              <h5 class=\"topheader\">Travel Distance: {{searchDetail.distance_to_work | number: '1.0-0'}} mi </h5>\n                              <h5 class=\"topheader\">Train Stations: {{searchDetail.stations_count}} </h5>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"front-card-footer\">\n                          <button class=\"btn btn-neutral\" rel=\"tooltip\" title=\"Flip Card\" onclick=\"rotateCard(this)\">\n                            <i class=\"fas fa-share\"></i> Know More\n                          </button>\n                        </div>\n                      </div> <!-- end front panel -->\n                      <div class=\"back\">\n                          <h5 class=\"motto-end\"><strong>{{searchDetail.area_code}}</strong></h5>\n                        <div class=\"content\">\n                          <div class=\"main\">\n                            <div class=\"row stats-container\">\n                              <div class=\"col-md-12 \">\n                                <p align=\"center\" class=\"make-it-bold\"> House Price  </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.average_detached_house_price | housePricePipe}}</h4>\n                                <p class=\"card-p\">\n                                  Detached\n                                </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.average_semi_detached_house_price | housePricePipe}}</h4>\n                                <p class=\"card-p\">\n                                  Semi-detached\n                                </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.average_flat_price | housePricePipe}}</h4>\n                                <p class=\"card-p\">\n                                   Flats\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"row stats-container\">\n                              <div class=\"col-md-12\">\n                                <p align=\"center\" class=\"make-it-bold\"> Schools </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.primary_schools}}</h4>\n                                <p class=\"card-p\">\n                                  Primary\n                                </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.secondary_schools}}</h4>\n                                <p class=\"card-p\">\n                                  Secondary\n                                </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.private_schools}}</h4>\n                                <p class=\"card-p\">\n                                  Private\n                                </p>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"back-card-footer\">\n                          <div class=\"social-links text-center \">\n                            <button class=\"btn  btn-simple-card btn-round btn-info\" rel=\"tooltip\" title=\"Flip Card\" onclick=\"rotateCard(this)\">\n                              <i class=\"fas fa-reply\"></i> Back\n                            </button>\n                            <button type=\"button\" class=\"btn  btn-simple-card btn-round btn-info\" (click) = \"getSectorSearchResults(searchDetail)\" data-toggle=\"modal\" data-target=\"#sectorModal\">Explore</button>\n                          </div>\n                        </div>\n                      </div> <!-- end back panel -->\n                    </div> <!-- end card -->\n                  </div> <!-- end card-container -->\n                </div> <!-- end col sm 3 -->\n              </div>\n            </div>\n          </div>\n        <!-- End Results -->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End search results -->\n<!-- Modal -->\n<div class=\"modal fadeOutUp\" id=\"sectorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"sectorModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" *ngIf=\"sectorLoaded\">\n        <h5 class=\"modal-title\" id=\"sectorModalTitle\">Search Results for {{searchModel.areaCode}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"no-gutters\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-md-12 no-gutters\">\n              <div class=\"search col-md-12 no-gutters\">\n                <div class=\"spinning\" *ngIf=\"sectorLoading\">\n                  <i class=\"fa fa-cog fa-spin fa-2x fa-fw\" aria-hidden=\"true\"></i>\n                </div>\n                <div *ngIf=\"sectorLoaded\">\n                  <div class=\"row col-md-12\" *ngIf=\"sectorSearchResults == null\">\n                    <p> Server error. Please try again </p>\n                  </div>\n                  <div class=\"row col-md-12\" *ngIf=\"sectorSearchResults != null && sectorSearchResults.length ==0\">\n                    <p> No sectors returned </p>\n                  </div>\n                  <div class=\"togglebutton\" *ngIf=\"sectorSearchResults != null && sectorSearchResults.length > 0\">\n                    <label>\n                      <input type=\"checkbox\" id=\"sortOrder\" checked=\"{{checked}}\" (click)=\"toggle()\">\n                      <span class=\"toggle\"></span>\n                      {{seachCriteria}}\n                    </label>\n                  </div>\n                  <div class=\"\" *ngIf=\"compareByArea\">\n                  <div class=\"\"  *ngFor=\"let sector of sectorSearchResults\">\n                    <!-- Progress bars -->\n                    <!--<div class=\"col-md-12 no-gutters\">-->\n                    <hr style=\"border:3px solid #f1f1f1\">\n                      <span class=\"heading-faq\">{{sector.sector_code | uppercase }} ({{sector.sector_name | uppercase}})</span>\n                    <hr style=\"border:3px solid #f1f1f1\">\n                    <!--</div>-->\n                    <div class=\"row no-gutters\">\n                      <div class=\"side\">\n                        <div>Safety</div>\n                      </div>\n                      <div class=\"middle\">\n                        <div class=\"bar-container\">\n                          <div class=\"bar-5\" *ngIf=\"sector.safety_score_stars === 5\" [style.width.%]=\"sector.safety_score\"></div>\n                          <div class=\"bar-4\" *ngIf=\"sector.safety_score_stars === 4\" [style.width.%]=\"sector.safety_score\"></div>\n                          <div class=\"bar-3\" *ngIf=\"sector.safety_score_stars === 3\" [style.width.%]=\"sector.safety_score\"></div>\n                          <div class=\"bar-2\" *ngIf=\"sector.safety_score_stars === 2\" [style.width.%]=\"sector.safety_score\"></div>\n                          <div class=\"bar-1\" *ngIf=\"sector.safety_score_stars === 1\" [style.width.%]=\"sector.safety_score\"></div>\n                        </div>\n                      </div>\n                      <div class=\"side right\">\n                        <div>{{sector.safety_score}}</div>\n                      </div>\n                      <div class=\"side\">\n                        <div>Schools</div>\n                      </div>\n                      <div class=\"middle\">\n                        <div class=\"bar-container\">\n                          <div class=\"bar-5\" *ngIf=\"sector.school_score_stars === 5\" [style.width.%]=\"sector.school_score\"></div>\n                          <div class=\"bar-4\" *ngIf=\"sector.school_score_stars === 4\" [style.width.%]=\"sector.school_score\"></div>\n                          <div class=\"bar-3\" *ngIf=\"sector.school_score_stars === 3\" [style.width.%]=\"sector.school_score\"></div>\n                          <div class=\"bar-2\" *ngIf=\"sector.school_score_stars === 2\" [style.width.%]=\"sector.school_score\"></div>\n                          <div class=\"bar-1\" *ngIf=\"sector.school_score_stars === 1\" [style.width.%]=\"sector.school_score\"></div>\n                        </div>\n                      </div>\n                      <div class=\"side right\">\n                        <div>{{sector.school_score}}</div>\n                      </div>\n                      <div class=\"side\">\n                        <div>Travel</div>\n                      </div>\n                      <div class=\"middle\">\n                        <div class=\"bar-container\">\n                          <div class=\"bar-5\" *ngIf=\"sector.travel_score_stars === 5\" [style.width.%]=\"sector.travel_score\"></div>\n                          <div class=\"bar-4\" *ngIf=\"sector.travel_score_stars === 4\" [style.width.%]=\"sector.travel_score\"></div>\n                          <div class=\"bar-3\" *ngIf=\"sector.travel_score_stars === 3\" [style.width.%]=\"sector.travel_score\"></div>\n                          <div class=\"bar-2\" *ngIf=\"sector.travel_score_stars === 2\" [style.width.%]=\"sector.travel_score\"></div>\n                          <div class=\"bar-1\" *ngIf=\"sector.travel_score_stars === 1\" [style.width.%]=\"sector.travel_score\"></div>\n                        </div>\n                      </div>\n                      <div class=\"side right\">\n                        <div>{{sector.travel_score}}</div>\n                      </div>\n                      <div class=\"side\">\n                        <div>Facilities</div>\n                      </div>\n                      <div class=\"middle\">\n                        <div class=\"bar-container\">\n                          <div class=\"bar-5\" *ngIf=\"sector.facilities_score_stars === 5\" [style.width.%]=\"sector.facilities_score\"></div>\n                          <div class=\"bar-4\" *ngIf=\"sector.facilities_score_stars === 4\" [style.width.%]=\"sector.facilities_score\"></div>\n                          <div class=\"bar-3\" *ngIf=\"sector.facilities_score_stars === 3\" [style.width.%]=\"sector.facilities_score\"></div>\n                          <div class=\"bar-2\" *ngIf=\"sector.facilities_score_stars === 2\" [style.width.%]=\"sector.facilities_score\"></div>\n                          <div class=\"bar-1\" *ngIf=\"sector.facilities_score_stars === 1\" [style.width.%]=\"sector.facilities_score\"></div>\n                        </div>\n                      </div>\n                      <div class=\"side right\">\n                        <div>{{sector.facilities_score}}</div>\n                      </div>\n                    </div>\n\n                    <!-- End progress bars -->\n                  </div>\n                  </div>\n                  <div *ngIf=\"!compareByArea\">\n                    <div class=\"\" >\n                      <!-- Progress bars -->\n                      <div>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      <span class=\"heading-faq\">SAFETY</span>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      </div>\n                      <div class=\"row no-gutters\"  *ngFor=\"let sector of sectorSearchResults\">\n                        <div class=\"side-facility\">\n                          <div data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{sector.sector_name}}\">\n                            {{sector.sector_code | uppercase}} ({{sector.sector_name}})\n                          </div>\n                        </div>\n                        <div class=\"middle-facility\">\n                          <div class=\"bar-container\">\n                            <div class=\"bar-5\" *ngIf=\"sector.safety_score_stars === 5\" [style.width.%]=\"sector.safety_score\"></div>\n                            <div class=\"bar-4\" *ngIf=\"sector.safety_score_stars === 4\" [style.width.%]=\"sector.safety_score\"></div>\n                            <div class=\"bar-3\" *ngIf=\"sector.safety_score_stars === 3\" [style.width.%]=\"sector.safety_score\"></div>\n                            <div class=\"bar-2\" *ngIf=\"sector.safety_score_stars === 2\" [style.width.%]=\"sector.safety_score\"></div>\n                            <div class=\"bar-1\" *ngIf=\"sector.safety_score_stars === 1\" [style.width.%]=\"sector.safety_score\"></div>\n                          </div>\n                        </div>\n                        <div class=\"side-score-facility right\">\n                          <div>{{sector.safety_score}}</div>\n                        </div>\n                      </div>\n                      <div>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      <span class=\"heading-faq\">SCHOOLS</span>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      </div>\n                      <div class=\"row no-gutters\"  *ngFor=\"let sector of sectorSearchResults\">\n                        <div class=\"side-facility\">\n                          <div data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{sector.sector_name}}\">\n                            {{sector.sector_code | uppercase}} ({{sector.sector_name}}</div>\n                        </div>\n                        <div class=\"middle-facility\">\n                          <div class=\"bar-container\">\n                            <div class=\"bar-5\" *ngIf=\"sector.school_score_stars === 5\" [style.width.%]=\"sector.school_score\"></div>\n                            <div class=\"bar-4\" *ngIf=\"sector.school_score_stars === 4\" [style.width.%]=\"sector.school_score\"></div>\n                            <div class=\"bar-3\" *ngIf=\"sector.school_score_stars === 3\" [style.width.%]=\"sector.school_score\"></div>\n                            <div class=\"bar-2\" *ngIf=\"sector.school_score_stars === 2\" [style.width.%]=\"sector.school_score\"></div>\n                            <div class=\"bar-1\" *ngIf=\"sector.school_score_stars === 1\" [style.width.%]=\"sector.school_score\"></div>\n                          </div>\n                        </div>\n                        <div class=\"side-score-facility right\">\n                          <div>{{sector.school_score}}</div>\n                        </div>\n                      </div>\n                      <div>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      <span class=\"heading-faq\">TRAVEL</span>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      </div>\n                      <div class=\"row no-gutters\"  *ngFor=\"let sector of sectorSearchResults\">\n                        <div class=\"side-facility\">\n                          <div data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{sector.sector_name}}\">\n                            {{sector.sector_code | uppercase}} ({{sector.sector_name}})</div>\n                        </div>\n                        <div class=\"middle-facility\">\n                          <div class=\"bar-container\">\n                            <div class=\"bar-5\" *ngIf=\"sector.travel_score_stars === 5\" [style.width.%]=\"sector.travel_score\"></div>\n                            <div class=\"bar-4\" *ngIf=\"sector.travel_score_stars === 4\" [style.width.%]=\"sector.travel_score\"></div>\n                            <div class=\"bar-3\" *ngIf=\"sector.travel_score_stars === 3\" [style.width.%]=\"sector.travel_score\"></div>\n                            <div class=\"bar-2\" *ngIf=\"sector.travel_score_stars === 2\" [style.width.%]=\"sector.travel_score\"></div>\n                            <div class=\"bar-1\" *ngIf=\"sector.travel_score_stars === 1\" [style.width.%]=\"sector.travel_score\"></div>\n                          </div>\n                        </div>\n                        <div class=\"side-score-facility right\">\n                          <div>{{sector.travel_score}}</div>\n                        </div>\n                      </div>\n                      <div>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      <span class=\"heading-faq\">FACILITIES</span>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      </div>\n                      <div class=\"row no-gutters\"  *ngFor=\"let sector of sectorSearchResults\">\n                        <div class=\"side-facility\">\n                          <div data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{sector.sector_name}}\">\n                            {{sector.sector_code | uppercase}} ({{sector.sector_name}})</div>\n                        </div>\n                        <div class=\"middle-facility\">\n                          <div class=\"bar-container\">\n                            <div class=\"bar-5\" *ngIf=\"sector.facilities_score_stars === 5\" [style.width.%]=\"sector.facilities_score\"></div>\n                            <div class=\"bar-4\" *ngIf=\"sector.facilities_score_stars === 4\" [style.width.%]=\"sector.facilities_score\"></div>\n                            <div class=\"bar-3\" *ngIf=\"sector.facilities_score_stars === 3\" [style.width.%]=\"sector.facilities_score\"></div>\n                            <div class=\"bar-2\" *ngIf=\"sector.facilities_score_stars === 2\" [style.width.%]=\"sector.facilities_score\"></div>\n                            <div class=\"bar-1\" *ngIf=\"sector.facilities_score_stars === 1\" [style.width.%]=\"sector.facilities_score\"></div>\n                          </div>\n                        </div>\n                        <div class=\"side-score-facility right\">\n                          <div>{{sector.facilities_score}}</div>\n                        </div>\n                      </div>\n                      <!-- End progress bars -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End modal -->\n\n\n<!-- FAQ Modal -->\n<div class=\"modal fadeOutUp\" id=\"faqModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"faqModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"faqModalTitle\">FAQ</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"no-gutters\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-md-12 no-gutters\">\n              <div class=\"search col-md-12 no-gutters\">\n                <div class=\"\" >\n                  <span class=\"heading-faq\">What is Clozer?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Clozer is a platform to help home buyers find a suitable area to settle down based on personal preferences.\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                  <span class=\"heading-faq\">How is this different from Rightmove or Zoopla then?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Rightmove and Zoopla are platforms where you go search for properties once you know where you want to live.\n                      Clozer is few stages prior to that. We help you identify areas that might be suitable and then use this to find properties using Rightmove or Zoopla.\n                      <br>\n\n                      Clozer helps answer questions such as-\n                      <i>\n                      \"I work in Reading and my partner works in London Canary Wharf. We have a 2 year old. Our maximum budget is $600,000.\n                        What areas should we consider assuming both of us dont want to spend more than 45 mins traveling to work?\"</i>\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                  <span class=\"heading-faq\">But I could ask my friends or colleagues and shortlist areas?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Yes, that is an option. But if you get 15 recommendations, how do you isloate personal bias and look at these areas objectively?\n                      How do you know you are not missing areas that could be better suited for you and your family?\n\n\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                  <span class=\"heading-faq\">How should I use Clozer?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Tell Clozer where you work (or some reference postcode), your budget and your maximum commute time/distance.\n\n                      Clozer will shortlist areas & sectors and rank them based on a score calculated using several attributes.\n\n                      The score and the shortlisted areas can change if you modify your search parameters. This is because Clozer evaluates and scores individual areas by comparing against all shortlisted areas.\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                  <span class=\"heading-faq\">How is this Clozer Score calculated?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Assume for your search criteria, Clozer has shortlisted 10 areas.\n                      An independent score for these 10 areas is calculated using factors such as House Prices, Crime, Travel, Schools and\n                      Facilities (high street shops, gas stations, grocery stores, etc.).\n                      The scoring is relative (i.e) the scoring is specific to these 10 areas and is used to rank the suitability\n                      of the 20 areas based on your search criteria.\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                  <span class=\"heading-faq\">What do you mean by relative ranking/scoring?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Assume you change your search criteria (eg: increase travel time) and now we have 15 areas. These 15 areas are compared and a relative score is assigned.\n                      If an area previously had a score of 200, it could drop because another newly found area is better.\n                      This helps Clozer rank and provide suggestions most suited to you.\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End modal -->\n\n\n\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_SearchModel__ = __webpack_require__("./src/app/model/SearchModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_area_service__ = __webpack_require__("./src/app/services/search-area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchAreaService, router) {
        this.searchAreaService = searchAreaService;
        this.router = router;
        this.priceRange = [];
        this.time = [];
        this.distance = [];
        this.searchModel = new __WEBPACK_IMPORTED_MODULE_1__model_SearchModel__["a" /* SearchModel */]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.hasLoaded = false;
        this.isLoading = false;
        this.sectorLoaded = false;
        this.sectorLoading = false;
        this.showDetails = false;
        this.counts = new Array(3);
        for (var i = 50; i <= 975; i += 25) {
            this.priceRange.push(i + '000');
        }
        for (var i = 1000; i <= 2000; i += 125) {
            this.priceRange.push(i + '000');
        }
        for (var tc = 10; tc <= 90; tc += 10) {
            this.time.push(tc);
        }
        this.distance.push(1);
        for (var dist = 5; dist <= 30; dist += 5) {
            this.distance.push(dist);
        }
        this.searchModel.minPrice = this.priceRange[0];
        this.searchModel.maxPrice = 650000;
        this.searchModel.timeToTravel = this.time[0];
        this.searchModel.distanceToTravel = this.distance[0];
        this.searchModel.travelMode = 'any';
        this.searchModel.houseType = 'H';
        this.modes = [
            { name: 'Train', value: 'train', checked: true },
            { name: 'Bus', value: 'bus', checked: false },
            { name: 'Cycle', value: 'cycle', checked: false },
            { name: 'Car', value: 'car', checked: false },
            { name: 'Walk', value: 'walk', checked: false }
        ];
    };
    SearchComponent.prototype.resetFields = function () {
        this.searchModel.minPrice = this.priceRange[0];
        this.searchModel.maxPrice = 650000;
        this.searchModel.timeToTravel = this.time[0];
        this.searchModel.distanceToTravel = this.distance[0];
        this.searchModel.travelMode = 'any';
        this.searchModel.workPostcode = '';
        this.searchModel.homePostcode = '';
        this.searchModel.houseType = 'H';
    };
    SearchComponent.prototype.getAreaSearchResults = function () {
        var _this = this;
        this.isLoading = true;
        this.hasLoaded = false;
        this.areaSearchResults = [];
        // console.log('##############################');
        // console.log('Printing search Model for Area');
        //   console.log(this.searchModel.minPrice);
        //   console.log(this.searchModel.maxPrice);
        //   console.log(this.searchModel.distanceToTravel);
        //   console.log(this.searchModel.timeToTravel);
        //   console.log(this.searchModel.homePostcode);
        //   console.log(this.searchModel.workPostcode);
        //   console.log(this.searchModel.travelMode);
        //   console.log('##############################');
        setTimeout(function () {
            _this.searchAreaService.getAreaDetails(_this.searchModel).subscribe(function (areaDetails) {
                _this.areaSearchResults = areaDetails;
                _this.isLoading = false;
                _this.hasLoaded = true;
                // console.log('returned... ' + this.areaSearchResults.length);
            });
        });
    };
    SearchComponent.prototype.getSectorSearchResults = function (areaDetail) {
        var _this = this;
        // console.log(areaDetail.area_code);
        this.searchModel.areaCode = areaDetail.area_code;
        this.sectorSearchResults = [];
        this.sectorLoading = true;
        this.sectorLoaded = false;
        // this.searchModel.areaCode = this.areaCode;
        // console.log('********************************');
        // console.log('Printing search Model for Sector');
        // console.log(this.searchModel.minPrice);
        // console.log(this.searchModel.maxPrice);
        // console.log(this.searchModel.distanceToTravel);
        // console.log(this.searchModel.timeToTravel);
        // console.log(this.searchModel.homePostcode);
        // console.log(this.searchModel.workPostcode);
        // console.log(this.searchModel.travelMode);
        // console.log(this.searchModel.houseType);
        //
        // console.log(this.searchModel.areaCode);
        // console.log('********************************');
        this.displayedColumns = ['areaName', 'totalScore'];
        setTimeout(function () {
            _this.searchAreaService.getSectorDetails(_this.searchModel).subscribe(function (sectorDetails) {
                _this.sectorLoading = false;
                _this.sectorLoaded = true;
                _this.compareByArea = true;
                _this.showDetails = true;
                _this.seachCriteria = 'View by Features';
                _this.sectorSearchResults = sectorDetails;
                sectorDetails.forEach(function (sector) {
                    sector.facilities_stars = new Array(sector.facilities_score_stars);
                    sector.facilities_grey_stars = new Array(5 - sector.facilities_score_stars);
                    sector.school_stars = new Array(sector.school_score_stars);
                    sector.school_grey_stars = new Array(5 - sector.school_score_stars);
                    sector.travel_stars = new Array(sector.travel_score_stars);
                    sector.travel_grey_stars = new Array(5 - sector.travel_score_stars);
                    sector.safety_stars = new Array(sector.safety_score_stars);
                    sector.safety_grey_stars = new Array(5 - sector.safety_score_stars);
                });
                _this.sectorSearchResults = sectorDetails;
                console.log('returned... ' + _this.sectorSearchResults.length);
            });
        });
    };
    SearchComponent.prototype.toggle = function () {
        if (this.compareByArea) {
            this.compareByArea = false;
            this.checked = 'checked';
            this.seachCriteria = 'View by Sectors';
        }
        else {
            this.compareByArea = true;
            this.checked = '';
            this.seachCriteria = 'View by Features';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_SearchModel__["a" /* SearchModel */])
    ], SearchComponent.prototype, "searchModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "areaSearchResults", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "sectorSearchResults", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_SearchModel__["a" /* SearchModel */])
    ], SearchComponent.prototype, "outputSearchModel", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_search_area_service__["a" /* SearchAreaService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/sector-details/sector-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sector-details/sector-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sector-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/sector-details/sector-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectorDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectorDetailsComponent = /** @class */ (function () {
    function SectorDetailsComponent() {
    }
    SectorDetailsComponent.prototype.ngOnInit = function () {
    };
    SectorDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sector-details',
            template: __webpack_require__("./src/app/components/sector-details/sector-details.component.html"),
            styles: [__webpack_require__("./src/app/components/sector-details/sector-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectorDetailsComponent);
    return SectorDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/video/video.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/video/video.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"video\">-->\n  <!--<div class=\"embed-responsive embed-responsive-4by3\">-->\n    <!--<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6vZ0iqUS6sg?rel=0\" allowfullscreen></iframe>-->\n  <!--</div>-->\n<!--</div>-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 mr-auto ml-auto\">\n        <h4 class=\"title-about\">Let's get you Clozer</h4>\n        <h5 class=\"description\">\n          Clozer helps you find the best location to settle down based on your preferences.\n          Tell Clozer a reference postcode (eg: work), your travel preferences and your budget and a few more details - Clozer does the rest for you.\n          Find your ideal location in a matter of few clicks.\n          So, are you ready?\n        </h5>\n        <!--<br>-->\n        <!--<a  class=\"btn btn-danger btn-round\" [ngx-scroll-to]=\"'#search'\">See Clozer in action</a>-->\n      </div>\n    </div>\n    <br/><br/>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"info\">\n          <div class=\"icon icon-danger\">\n            <i class=\"nc-icon nc-atom\"></i>\n          </div>\n          <div class=\"description\">\n            <h5 class=\"info-title\">Clozer Score</h5>\n            <p>\n              Locate your ideal neighbourhood based on Clozer scores - an efficient ranking algorithm using factors such as safety, schools, facilities, travel and more\n            </p>\n            <!--<a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>-->\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"info\">\n          <div class=\"icon icon-danger\">\n            <i class=\"nc-icon nc-zoom-split\"></i>\n          </div>\n          <div class=\"description\">\n            <h5 class=\"info-title\">Search</h5>\n            <p class=\"description\">Use a reference postcode (e.g. work) to find areas based on budget, distance and travel preferences  </p>\n            <!--<a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>-->\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"info\">\n          <div class=\"icon icon-danger\">\n            <i class=\"nc-icon nc-chart-pie-36\"></i>\n          </div>\n          <div class=\"description\">\n            <h5 class=\"info-title\">Analyse</h5>\n            <p>Compare postal sectors across areas and analyse suggested options to narrow down your search</p>\n            <!--<a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>-->\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"info\">\n          <div class=\"icon icon-danger\">\n            <i class=\"nc-icon nc-settings\"></i>\n          </div>\n          <div class=\"description\">\n            <h5 class=\"info-title no-top-margin\">Personalise</h5>\n            <p>Choose what matters to you and your loved ones - schools, travel, medical facilities, etc.\n              Your search.....personalized!</p>\n            <!--<a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>-->\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <!--<div class=\"row \">-->\n      <!--<div class=\"col-md-8 mr-auto ml-auto\">-->\n        <!--<a  class=\"btn btn-danger btn-round\" [ngx-scroll-to]=\"'#search'\">See Clozer in action</a>-->\n      <!--</div>-->\n    <!--</div>-->\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/components/video/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-video',
            template: __webpack_require__("./src/app/components/video/video.component.html"),
            styles: [__webpack_require__("./src/app/components/video/video.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/model/SearchModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModel; });
var SearchModel = /** @class */ (function () {
    function SearchModel() {
    }
    return SearchModel;
}());



/***/ }),

/***/ "./src/app/pipes/HousePricePipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousePricePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HousePricePipe = /** @class */ (function () {
    function HousePricePipe() {
    }
    HousePricePipe.prototype.transform = function (value) {
        if (value < 9000) {
            return value + '';
        }
        else if (value >= 100000 && value < 1000000) {
            // console.log(Math.floor(value/1000));
            return '£' + (value / 1000).toFixed(0) + 'K';
        }
        else {
            // console.log(value/1000000);
            // console.log(Math.floor(value/1000000));
            return '£' + (value / 1000000).toFixed(2) + 'M';
        }
    };
    HousePricePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'housePricePipe' })
    ], HousePricePipe);
    return HousePricePipe;
}());



/***/ }),

/***/ "./src/app/services/ClozerErrorHandler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClozerErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClozerErrorHandler = /** @class */ (function () {
    function ClozerErrorHandler() {
    }
    ClozerErrorHandler.prototype.handleError = function (error) {
        // do something with the exception
        console.log('Handling errors');
    };
    ClozerErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ClozerErrorHandler);
    return ClozerErrorHandler;
}());



/***/ }),

/***/ "./src/app/services/search-area.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchAreaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchAreaService = /** @class */ (function () {
    function SearchAreaService(http) {
        this.http = http;
        this.searchAreaModel = [{
                area_code: 'BR7',
                area_name: 'Chislehurst, Elmstead',
                average_detached_house_price: 1048624.0,
                average_flat_price: 375343.5,
                average_journey_time: 8.0,
                average_semi_detached_house_price: 559424.0,
                distance_to_work: 2772.0,
                facilities_score: 109.0,
                good_schools: 0,
                highest_house_price: 0,
                lowest_house_price: 0,
                outstanding_schools: 0,
                poor_schools: 0,
                postcode: 'BR7 5NN',
                primary_schools: 4,
                private_schools: 3,
                safety_score: 50,
                school_score: 157.0,
                secondary_schools: 3,
                sector_code: '',
                stations: 'Chislehurst, Elmstead Woods',
                stations_count: 2,
                total_schools: 10,
                travel_score: 86.0,
                facilities_score_rating: 'GOLD',
                safety_score_rating: 'PLATINUM',
                travel_score_rating: 'PLATINUM',
                school_score_rating: 'GOLD',
                total_score: 350
            }, {
                area_code: 'SE9',
                area_name: 'Eltham, Mottingham, New Eltham, Falconwood, Chinbrook, Longlands, Kidbrooke',
                average_detached_house_price: 719388.0,
                average_flat_price: 269004.0,
                average_journey_time: 10.3,
                average_semi_detached_house_price: 491503.0,
                distance_to_work: 2701.0,
                facilities_score: 215.0,
                good_schools: 0,
                highest_house_price: 0,
                lowest_house_price: 0,
                outstanding_schools: 0,
                poor_schools: 0,
                postcode: 'SE9 6SL',
                primary_schools: 19,
                private_schools: 4,
                safety_score: 100,
                school_score: 148.0,
                secondary_schools: 4,
                sector_code: '',
                stations: 'Eltham, Falconwood, Mottingham, New Eltham',
                stations_count: 4,
                total_schools: 27,
                travel_score: 104.0,
                facilities_score_rating: 'PLATINUM',
                safety_score_rating: 'PLATINUM',
                travel_score_rating: 'PLATINUM',
                school_score_rating: 'GOLD',
                total_score: 375
            }, {
                area_code: 'BR1',
                area_name: 'Bromley, Bickley, Downham',
                average_detached_house_price: 950991.0,
                average_flat_price: 343179.0,
                average_journey_time: 8.6166666667,
                average_semi_detached_house_price: 547071.0,
                distance_to_work: 4004.0,
                facilities_score: 180.0,
                good_schools: 0,
                highest_house_price: 0,
                lowest_house_price: 0,
                outstanding_schools: 0,
                poor_schools: 0,
                postcode: 'BR1 2EB',
                primary_schools: 12,
                private_schools: 5,
                safety_score: 100,
                school_score: 245.0,
                secondary_schools: 2,
                sector_code: '',
                stations: 'Bickley, Bromley North, Bromley South, Sundridge Park',
                stations_count: 4,
                total_schools: 19,
                travel_score: 93.0,
                facilities_score_rating: 'PLATINUM',
                safety_score_rating: 'PLATINUM',
                travel_score_rating: 'PLATINUM',
                school_score_rating: 'PLATINUM',
                total_score: 400
            }];
        this.searchSectorModel = [{
                area_code: 'BR7',
                area_name: 'Chislehurst, Elmstead',
                average_detached_house_price: 1048624.0,
                average_flat_price: 375343.5,
                average_journey_time: 8.0,
                average_semi_detached_house_price: 559424.0,
                distance_to_work: 2772.0,
                facilities_score: 109.0,
                good_schools: 0,
                highest_house_price: 0,
                lowest_house_price: 0,
                outstanding_schools: 0,
                poor_schools: 0,
                postcode: 'BR7 5NN',
                primary_schools: 4,
                private_schools: 3,
                safety_score: 50,
                school_score: 157.0,
                secondary_schools: 3,
                sector_code: 'se9 2',
                sector_name: 'Eltham South',
                stations: 'Chislehurst, Elmstead Woods',
                stations_count: 2,
                total_schools: 10,
                travel_score: 86.0,
                facilities_score_rating: 'GOLD',
                facilities_score_stars: 3,
                facilities_stars: [],
                facilities_grey_stars: [],
                safety_score_rating: 'PLATINUM',
                safety_score_stars: 4,
                safety_stars: [],
                safety_grey_stars: [],
                travel_score_rating: 'PLATINUM',
                travel_score_stars: 4,
                travel_stars: [],
                travel_grey_stars: [],
                school_score_rating: 'GOLD',
                school_score_stars: 3,
                school_stars: [],
                school_grey_stars: [],
                total_score: 350
            }, {
                area_code: 'SE9',
                area_name: 'Eltham, Mottingham, New Eltham, Falconwood, Chinbrook, Longlands, Kidbrooke',
                average_detached_house_price: 719388.0,
                average_flat_price: 269004.0,
                average_journey_time: 10.3,
                average_semi_detached_house_price: 491503.0,
                distance_to_work: 2701.0,
                facilities_score: 215.0,
                good_schools: 0,
                highest_house_price: 0,
                lowest_house_price: 0,
                outstanding_schools: 0,
                poor_schools: 0,
                postcode: 'SE9 6SL',
                primary_schools: 19,
                private_schools: 4,
                safety_score: 90,
                school_score: 148.0,
                secondary_schools: 4,
                sector_code: 'se9 6',
                sector_name: 'Eltham South',
                stations: 'Eltham, Falconwood, Mottingham, New Eltham',
                stations_count: 4,
                total_schools: 27,
                travel_score: 104.0,
                facilities_score_rating: 'GOLD',
                facilities_score_stars: 3,
                facilities_stars: [],
                facilities_grey_stars: [],
                safety_score_rating: 'PLATINUM',
                safety_score_stars: 4,
                safety_stars: [],
                safety_grey_stars: [],
                travel_score_rating: 'PLATINUM',
                travel_score_stars: 4,
                travel_stars: [],
                travel_grey_stars: [],
                school_score_rating: 'GOLD',
                school_score_stars: 3,
                school_stars: [],
                school_grey_stars: [],
                total_score: 375
            }, {
                area_code: 'BR1',
                area_name: 'Bromley, Bickley, Downham',
                average_detached_house_price: 950991.0,
                average_flat_price: 343179.0,
                average_journey_time: 8.6166666667,
                average_semi_detached_house_price: 547071.0,
                distance_to_work: 4004.0,
                facilities_score: 180.0,
                good_schools: 0,
                highest_house_price: 0,
                lowest_house_price: 0,
                outstanding_schools: 0,
                poor_schools: 0,
                postcode: 'BR1 2EB',
                primary_schools: 12,
                private_schools: 5,
                safety_score: 44,
                school_score: 245.0,
                secondary_schools: 2,
                sector_code: 'br1 2',
                sector_name: 'Bromley',
                stations: 'Bickley, Bromley North, Bromley South, Sundridge Park',
                stations_count: 4,
                total_schools: 19,
                travel_score: 93.0,
                facilities_score_rating: 'GOLD',
                facilities_score_stars: 3,
                facilities_stars: [],
                facilities_grey_stars: [],
                safety_score_rating: 'PLATINUM',
                safety_score_stars: 4,
                safety_stars: [],
                safety_grey_stars: [],
                travel_score_rating: 'PLATINUM',
                travel_score_stars: 4,
                travel_stars: [],
                travel_grey_stars: [],
                school_score_rating: 'GOLD',
                school_score_stars: 3,
                school_stars: [],
                school_grey_stars: [],
                total_score: 400
            }];
        this.serverStr = this.getAppServer();
    }
    SearchAreaService.prototype.getAppServer = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].appServer;
    };
    SearchAreaService.prototype.getAreaDetails = function (searchModel) {
        console.log('in service ' + searchModel.minPrice + ':' + searchModel.maxPrice + ':' + searchModel.homePostcode + ':' + searchModel.workPostcode
            + ':' + searchModel.timeToTravel + ':' + searchModel.distanceToTravel + ':' + searchModel.travelMode);
        // return of(this.searchAreaModel);
        return this.http.get(this.serverStr +
            '/getAreaDetails?work_post_code=' + searchModel.homePostcode.replace(' ', '+') +
            '&additional_post_code=' +
            '&max_journey_time=' + searchModel.timeToTravel +
            '&max_journey_distance=' + searchModel.distanceToTravel +
            '&min_house_price=' + searchModel.minPrice +
            '&max_house_price=' + searchModel.maxPrice +
            '&pref_travel_mode=' + searchModel.travelMode +
            '&house_type=' + searchModel.houseType +
            '&nresults=6');
    };
    SearchAreaService.prototype.getSectorDetails = function (searchModel) {
        console.log('in service ' + searchModel.minPrice + ':' + searchModel.maxPrice + ':' + searchModel.homePostcode + ':' + searchModel.workPostcode);
        // return of(this.searchSectorModel);
        // return of (null);
        return this.http.get(this.serverStr +
            '/getSectorDetails?work_post_code=' + searchModel.homePostcode.replace(' ', '+') +
            '&additional_post_code=' +
            '&max_journey_time=' + searchModel.timeToTravel +
            '&max_journey_distance=' + searchModel.distanceToTravel +
            '&min_house_price=' + searchModel.minPrice +
            '&max_house_price=' + searchModel.maxPrice +
            '&pref_travel_mode=' + searchModel.travelMode +
            "&house_type=" + searchModel.houseType +
            '&area_code=' + searchModel.areaCode);
    };
    SearchAreaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SearchAreaService);
    return SearchAreaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    appServer: 'https://pettai-rap.herokuapp.com'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_components_app_module__ = __webpack_require__("./src/app/components/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_components_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map