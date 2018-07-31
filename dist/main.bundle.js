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

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\" id=\"navbar-scroll\">\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a class=\"navbar-brand\" id=\"profile\" routerLink=\"/home\">CLOZURE</a>\n      <button class=\"navbar-toggler navbar-toggler-right navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-bar\"></span>\n        <span class=\"navbar-toggler-bar\"></span>\n        <span class=\"navbar-toggler-bar\"></span>\n      </button>\n\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a [ngx-scroll-to]=\"'#search'\" class=\"nav-link\"><i class=\"nc-icon nc-zoom-split\"></i> Search</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [ngx-scroll-to]=\"'#video'\" class=\"nav-link\"><i class=\"nc-icon nc-settings-gear-65\"></i> Personalise</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [ngx-scroll-to]=\"'#video'\" class=\"nav-link\"><i class=\"nc-icon nc-paper\"></i> FAQ</a>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"page-header section-dark\">\n  <div class=\"banner\">\n    <!--<div class=\"filter\"></div>-->\n    <div class=\"content-center\">\n      <div class=\"container\">\n        <div class=\"title-brand\">\n          <h1 class=\"presentation-title\">PR</h1> <!-- class=\"presentation-title\" -->\n        </div>\n        <h2 class=\"presentation-subtitle\">\n          <div class=\"row\">\n            <hr class=\"hr-title-line\">\n            ⌘\n            <hr class=\"hr-title-line\">\n          </div>\n        </h2>\n        <div class=\"fog-low\"></div>\n        <h2 class=\"presentation-subtitle text-center\">Your search for the perfect house begins here</h2>\n        <br>\n        <div align=\"center\">\n          <a class=\"btn btn-info btn-round\" [ngx-scroll-to]=\"'#search'\">Let's Go</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"section video-summary\" id=\"video\" align=\"center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <app-video></app-video>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n<!--<div class=\"section section-dark-blue search-screen\" id=\"search\" >-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-12\">-->\n        <!--<router-outlet></router-outlet>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"credits\">\n      <nav class=\"footer-nav\">\n        <div>Footer contents</div>\n      </nav>\n    </div>\n  </div>\n</footer>\n\n\n\n\n"

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
                __WEBPACK_IMPORTED_MODULE_16__landingpage_landingpage_component__["a" /* LandingpageComponent */]
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
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_search_area_service__["a" /* SearchAreaService */]],
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

module.exports = "<div class=\"page-header section-dark\">\n  <div class=\"banner\">\n    <!--<div class=\"filter\"></div>-->\n    <div class=\"content-center\">\n      <div class=\"container\">\n        <div class=\"title-brand\">\n          <h1 class=\"presentation-title\">CLZR</h1> <!-- class=\"presentation-title\" -->\n        </div>\n        <h2 class=\"presentation-subtitle\">\n          <div class=\"row\">\n            <hr class=\"hr-title-line\">\n            ⌘\n            <hr class=\"hr-title-line\">\n          </div>\n        </h2>\n        <div class=\"fog-low\"></div>\n        <h2 class=\"presentation-subtitle text-center\">Your search for the perfect house begins here</h2>\n        <br>\n        <div align=\"center\">\n          <a class=\"btn btn-info btn-round\" [ngx-scroll-to]=\"'#search'\">Let's Go</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"section section-dark-blue search-screen\" id=\"search\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"search col-md-12\">\n          <form (ngSubmit) = \"getAreaSearchResults()\" #searchForm = \"ngForm\">\n            <div class=\" form-group row col-md-12\">\n              <div class=\"col-md-3\">\n                <label for=\"housePriceTo\" class=\"col-form-label\">My budget is up to </label>\n              </div>\n              <!--<div class=\"col-md-3 float-md-left\">-->\n                <!--&lt;!&ndash;<input type=\"text\" class=\"form-control\" id=\"housePrice\"  placeholder=\"Enter your work postcode\">&ndash;&gt;-->\n                <!--<select class=\"form-control\" id=\"housePriceFrom\" [(ngModel)] = \"searchModel.minPrice\" name=\"minPrice\">-->\n                  <!--<option *ngFor=\"let price of priceRange\" value=\"{{price}}\">-->\n                    <!--{{price | currency : 'GBP' : true : '1.0'}}-->\n                  <!--</option>-->\n                <!--</select>-->\n              <!--</div>-->\n              <div class=\"col-md-3\">\n                <!--<input type=\"text\" class=\"form-control\" id=\"housePrice\"  placeholder=\"Enter your work postcode\">-->\n                <select class=\"form-control\" id=\"housePriceTo\" [(ngModel)] = \"searchModel.maxPrice\" name=\"maxPrice\">\n                  <option *ngFor=\"let price of priceRange\" value=\"{{price}}\">\n                    {{price | currency : 'GBP' : true : '1.0'}}\n                  </option>\n                </select>\n              </div>\n              <!--<div col=\"col-md-4\"></div>-->\n              <div class=\"col-md-6\"></div>\n            </div>\n            <div class=\"form-group row col-md-12\">\n              <div class=\"col-md-3\">\n                <label for=\"workzipcode\" class=\"col-form-label\">Postcodes that matter to me </label>\n              </div>\n              <div class=\"col-md-3\">\n                <input type=\"text\" class=\"form-control\" id=\"workzipcode\"\n                       [(ngModel)] = \"searchModel.workPostcode\"\n                       placeholder=\"First choice\" name=\"workPostCode\" required>\n              </div>\n              <div class=\"col-xs-1\">&nbsp;</div>\n              <!--<div class=\"col-md-1\"></div>-->\n              <!--<label for=\"homezipcode\" class=\"col-md-2 col-form-label\">I currently live at..</label>-->\n              <!--<div class=\"col-md-1\"></div>-->\n              <div class=\"col-md-3\">\n                <input type=\"text\" class=\"form-control\" id=\"homezipcode\"\n                       [(ngModel)] = \"searchModel.homePostcode\"\n                       placeholder=\"Second choice\" name=\"homePostCode\">\n              </div>\n              <div class=\"col-xs-2\"></div>\n            </div>\n            <div class=\"form-group row col-md-12\">\n              <div class=\"col-md-3\">\n                <label for=\"timeToTravel\" class=\"col-form-label\">Can travel up to</label>\n              </div>\n              <div class=\"col-md-3\">\n                <!--<input type=\"text\" class=\"form-control\" id=\"timeToTravel\"  placeholder=\"time\">-->\n                <select class=\"form-control\" id=\"timeToTravel\" [(ngModel)] = \"searchModel.timeToTravel\" name=\"timeToTravel\">\n                  <option *ngFor=\"let t of time\" value=\"{{t}}\">\n                    {{t}} mins\n                  </option>\n                </select>\n              </div>\n              <div class=\"col-xs-1\">&nbsp;</div>\n              <!--<label for=\"distanceToTravel\" class=\"col-md-2 col-form-label\">and not more than</label>-->\n              <div class=\"col-md-3\">\n                <!--<input type=\"text\" class=\"form-control\" id=\"distanceToTravel\" placeholder=\"distance\">-->\n                <select class=\"form-control\" id=\"distanceToTravel\" [(ngModel)] = \"searchModel.distanceToTravel\" name=\"distanceToTravel\">\n                  <option *ngFor=\"let dist of distance\" value=\"{{dist}}\">\n                    {{dist}} km\n                  </option>\n                </select>\n              </div>\n              <div class=\"col-xs-2\"></div>\n            </div>\n            <div class=\" form-group row col-md-12\">\n              <div class=\"col-md-3\">\n                <label class=\"col-form-label\">I love to travel by </label>\n              </div>\n                <div class=\"form-check col-md-7\" id=\"travelmode1\" >\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\"\n                         checked\n                         name=\"travelMode\" value=\"Train\"\n                         [(ngModel)] = \"searchModel.travelMode\" name=\"travelMode\" value=\"train\">\n                  <span class=\"fa fa-train\"></span> Train\n                  </label>\n                <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\"\n                         [(ngModel)] = \"searchModel.travelMode\" name=\"travelMode\" value=\"car\">\n                  <i class=\"fas fa-car\"></i> Car\n                  </label>\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" name=\"travelMode\" class=\"form-check-input\"\n                           [(ngModel)] = \"searchModel.travelMode\" name=\"travelMode\" value=\"Any\">\n                    <i class=\"fas fa-bus\"></i> Any\n                  </label>\n                <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\"\n                          name=\"travelMode\" value=\"cycle\" disabled=\"true\">\n                  <i class=\"fas fa-bicycle\"></i> Cycle\n                  </label>\n                <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\"\n                          name=\"travelMode\" value=\"walk\" disabled=\"true\">\n                  <i class=\"fas fa-walking\"></i> Walk\n                  </label>\n                </div>\n              </div>\n            <div class=\"form-group row col-md-12\">\n              <div class=\"col-md-3\"> </div>\n              <div class=\"col-md-9\">\n                <button type=\"submit\" class=\"btn btn-info btn-round\" [disabled]=\"!searchForm.form.valid\" >Search</button> &nbsp;\n                <button type=\"button\" class=\"btn btn-info btn-round\" (click) = \"resetFields()\">Reset</button>\n              </div>\n            </div>\n          </form>\n          <!--<span *ngIf=\"isLoading\" class=\"glyphicon glyphicon-repeat fast-right-spinner\"></span>-->\n          <!--<div class=\"searchresults\" *ngIf=\"submitted\">-->\n            <!--<app-search-details [searchModel]=\"outputSearchModel\"></app-search-details>-->\n          <!--</div>-->\n        <!--</div>-->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Search results -->\n<div class=\"section section-dark-blue areasearch-results-summary\" id=\"searchresults\" align=\"center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"spinning\" *ngIf=\"isLoading\">\n          <i class=\"fa fa-cog fa-spin fa-2x fa-fw\" aria-hidden=\"true\"></i>\n        </div>\n        <!-- REsults -->\n        <div class=\"search container-fluid col-md-12\" *ngIf=\"hasLoaded\">\n          <div class=\"row\">\n            <p> You have {{areaSearchResults.length}} area(s) matching your criteria </p>\n            <br>\n          </div>\n          <!-- Adding rotating cards -->\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"row col-md-12\" *ngFor=\"let searchDetail of areaSearchResults\">\n                <div class=\"col-md-4\">\n                  <div class=\"card-container\">\n                    <div class=\"card\">\n                      <div class=\"front\">\n                        <div class=\"cover\">\n                          <img src=\"assets/img/rotating_card_thumb2.png\"/>\n                        </div>\n                        <div class=\"user\">\n                          <img class=\"img-circle\" src=\"assets/img/skyline/blue_skyline.jpg\">\n                          <div class=\"img-text\"><h4>{{searchDetail.area_code}}</h4></div>\n                        </div>\n                        <div class=\"content\">\n                          <div class=\"main\">\n                            <h3 class=\"code\">{{searchDetail.area_code}}</h3>\n                            <h5 class=\"score\">Clozure score: {{searchDetail.total_score}}</h5>\n                            <p class=\"text-center\">{{searchDetail.area_name}}</p>\n                          </div>\n                          <div class=\"card-footer\">\n                            <button type=\"button\" class=\"btn btn-info btn-round \">Know More</button>\n                          </div>\n                        </div>\n                      </div> <!-- end front panel -->\n                      <div class=\"back\">\n                        <div class=\"header\">\n                          <h5 class=\"motto\">School Score: {{searchDetail.school_score}}</h5>\n                        </div>\n                        <div class=\"content\">\n                          <div class=\"main\">\n                            <h4 class=\"text-center\">Avg Journey Time: {{searchDetail.average_journey_time}}</h4>\n                            <p class=\"text-center\">Detached House Price: {{searchDetail.average_detached_house_price | currency : 'GBP' : true : '1.2'}}</p>\n\n                            <div class=\"stats-container\">\n                              <div class=\"stats\">\n                                <h4>{{searchDetail.outstanding_schools + searchDetail.good_schools + searchDetail.poor_schools}}</h4>\n                                <p>\n                                  Schools\n                                </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4>{{searchDetail.stations_count}}</h4>\n                                <p>\n                                  Train Stations\n                                </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4>{{searchDetail.safety_score}}</h4>\n                                <p>\n                                  Score Rating\n                                </p>\n                              </div>\n                            </div>\n\n                          </div>\n                        </div>\n                        <div class=\"card-footer\">\n                          <div class=\"social-links text-center\">\n                            <button type=\"button\" class=\"btn btn-info btn-round \" (click) = \"getSectorSearchResults(searchDetail)\" data-toggle=\"modal\" data-target=\"#exampleModal\">Explore</button>\n                          </div>\n                        </div>\n                      </div> <!-- end back panel -->\n                    </div> <!-- end card -->\n                  </div> <!-- end card-container -->\n                </div> <!-- end col sm 3 -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- End Results -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fadeOutUp\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" *ngIf=\"sectorLoaded\">\n        <h5 class=\"modal-title\" id=\"exampleModalTitle\">Search Results for {{sectorSearchResults[0].area_name}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"search col-md-12\">\n                <div class=\"spinning\" *ngIf=\"sectorLoading\">\n                  <i class=\"fa fa-cog fa-spin fa-2x fa-fw\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"\" *ngIf=\"sectorLoaded\">\n                  <div class=\"col-md-12\">\n                    <div class=\"card-plain\">\n                      <!--<div class=\"card-header card-header-warning\">-->\n                        <!--<p class=\"card-category\">Search Results for {{sectorSearchResults[0].area_name}}</p>-->\n                      <!--</div>-->\n                      <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                          <thead class=\"text-warning\">\n                          <th>Sector Name</th>\n                          <th>School Score</th>\n                          <th>Safety Score</th>\n                          <th>Total Score</th>\n                          </thead>\n                          <tbody *ngFor=\"let sector of sectorSearchResults\">\n                          <tr>\n                            <td>{{sector.sector_code}}</td>\n                            <td>{{sector.school_score}}</td>\n                            <td>{{sector.safety_score}}</td>\n                            <td>{{sector.total_score}}</td>\n                          </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End modal -->\n\n<!-- End of search results -->\n<!--<div class=\"section section-dark-blue sector-results-screen\" id=\"sectorResults\" >-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-12\">-->\n        <!--<div class=\"search col-md-12\">-->\n          <!--<div class=\"spinning\" *ngIf=\"sectorLoading\">-->\n            <!--<i class=\"fa fa-cog fa-spin fa-2x fa-fw\" aria-hidden=\"true\"></i>-->\n          <!--</div>-->\n          <!--<div class=\"\" *ngIf=\"sectorLoaded\">-->\n            <!--<div class=\"col-md-12\">-->\n              <!--<div class=\"card\">-->\n                <!--<div class=\"card-header card-header-warning\">-->\n                  <!--<h4 class=\"card-title\">Sector Search Results</h4>-->\n                  <!--<p class=\"card-category\">Search Results for {{sectorSearchResults[0].area_name}}</p>-->\n                <!--</div>-->\n                <!--<div class=\"card-body table-responsive\">-->\n                  <!--<table class=\"table table-hover\">-->\n                    <!--<thead class=\"text-warning\">-->\n                    <!--<th>Sector Name</th>-->\n                    <!--<th>School Score</th>-->\n                    <!--<th>Safety Score</th>-->\n                    <!--<th>Total Score</th>-->\n                    <!--</thead>-->\n                    <!--<tbody *ngFor=\"let sector of sectorSearchResults\">-->\n                    <!--<tr>-->\n                      <!--<td>{{sector.sector_code}}</td>-->\n                      <!--<td>{{sector.school_score}}</td>-->\n                      <!--<td>{{sector.safety_score}}</td>-->\n                      <!--<td>{{sector.total_score}}</td>-->\n                    <!--</tr>-->\n                    <!--</tbody>-->\n                  <!--</table>-->\n                <!--</div>-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n<!-- Sector search results -->\n\n<!-- End of sector search -->\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_SearchModel__ = __webpack_require__("./src/app/model/SearchModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_area_service__ = __webpack_require__("./src/app/services/search-area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chartist__);
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
        for (var i = 50; i <= 900; i += 10) {
            this.priceRange.push(i + '000');
        }
        for (var i = 1000; i <= 2000; i += 125) {
            this.priceRange.push(i + '000');
        }
        for (var tc = 10; tc <= 90; tc += 10) {
            this.time.push(tc);
        }
        for (var dist = 1; dist <= 100; dist += 4) {
            this.distance.push(dist);
        }
        this.searchModel.minPrice = this.priceRange[0];
        this.searchModel.maxPrice = 650000;
        this.searchModel.timeToTravel = this.time[0];
        this.searchModel.distanceToTravel = this.distance[0];
        this.searchModel.travelMode = 'train';
        this.modes = [
            { name: 'Train', value: 'train', checked: true },
            { name: 'Bus', value: 'bus', checked: false },
            { name: 'Cycle', value: 'cycle', checked: false },
            { name: 'Car', value: 'car', checked: false },
            { name: 'Walk', value: 'walk', checked: false }
        ];
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_4_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_4_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
    };
    SearchComponent.prototype.resetFields = function () {
        this.searchModel.minPrice = this.priceRange[0];
        this.searchModel.maxPrice = 650000;
        this.searchModel.timeToTravel = this.time[0];
        this.searchModel.distanceToTravel = this.distance[0];
        this.searchModel.travelMode = 'train';
        this.searchModel.workPostcode = '';
        this.searchModel.homePostcode = '';
    };
    SearchComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_4_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    SearchComponent.prototype.getAreaSearchResults = function () {
        var _this = this;
        this.isLoading = true;
        this.hasLoaded = false;
        this.areaSearchResults = [];
        console.log('##############################');
        console.log('Printing search Model for Area');
        console.log(this.searchModel.minPrice);
        console.log(this.searchModel.maxPrice);
        console.log(this.searchModel.distanceToTravel);
        console.log(this.searchModel.timeToTravel);
        console.log(this.searchModel.homePostcode);
        console.log(this.searchModel.workPostcode);
        console.log(this.searchModel.travelMode);
        console.log('##############################');
        setTimeout(function () {
            _this.searchAreaService.getAreaDetails(_this.searchModel).subscribe(function (areaDetails) {
                console.log('returned :: ' + areaDetails[0].area_code);
                console.log('returned ob :: ' + areaDetails);
                _this.areaSearchResults = areaDetails;
                _this.isLoading = false;
                _this.hasLoaded = true;
                console.log('returned... ' + _this.areaSearchResults.length);
                console.log(_this.areaSearchResults[0].area_name);
                console.log(_this.areaSearchResults[1].area_name);
                console.log(_this.areaSearchResults[2].area_name);
            });
        });
    };
    SearchComponent.prototype.getSectorSearchResults = function (areaDetail) {
        var _this = this;
        console.log(areaDetail.area_code);
        this.searchModel.areaCode = areaDetail.area_code;
        this.sectorSearchResults = [];
        this.sectorLoading = true;
        this.sectorLoaded = false;
        // this.searchModel.areaCode = this.areaCode;
        console.log('********************************');
        console.log('Printing search Model for Sector');
        console.log(this.searchModel.minPrice);
        console.log(this.searchModel.maxPrice);
        console.log(this.searchModel.distanceToTravel);
        console.log(this.searchModel.timeToTravel);
        console.log(this.searchModel.homePostcode);
        console.log(this.searchModel.workPostcode);
        console.log(this.searchModel.travelMode);
        console.log(this.searchModel.areaCode);
        console.log('********************************');
        this.displayedColumns = ['areaName', 'totalScore'];
        setTimeout(function () {
            _this.searchAreaService.getSectorDetails().subscribe(function (sectorDetails) {
                _this.sectorSearchResults = sectorDetails;
                _this.sectorLoading = false;
                _this.sectorLoaded = true;
                console.log('returned... ' + _this.sectorSearchResults.length);
            });
        });
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

module.exports = "<div class=\"video\">\n  <div class=\"embed-responsive embed-responsive-4by3\">\n    <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6vZ0iqUS6sg?rel=0\" allowfullscreen></iframe>\n  </div>\n</div>\n\n\n"

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
    // =
    //   [{
    //     areaCode: 'BR7',
    //     area_name: 'Chislehurst, Elmstead',
    //     average_detached_house_price: 1048624.0,
    //     average_flat_price: 375343.5,
    //     average_journey_time: 8.0,
    //     average_semi_detached_house_price: 559424.0,
    //     distance_to_work: 2772.0,
    //     facilities_score: 109.0,
    //     good_schools: 0,
    //     highest_house_price: 0,
    //     lowest_house_price: 0,
    //     outstanding_schools: 0,
    //     poor_schools: 0,
    //     postcode: 'BR7 5NN',
    //     primary_schools: 4,
    //     private_schools: 3,
    //     safety_score: 50,
    //     school_score: 157.0,
    //     secondary_schools: 3,
    //     sector_code: 'se9 2',
    //     stations: 'Chislehurst, Elmstead Woods',
    //     stations_count: 2,
    //     total_schools: 10,
    //     travel_score: 86.0,
    //     facilities_score_rating: 'GOLD',
    //     safety_score_rating: 'PLATINUM',
    //     travel_score_rating: 'PLATINUM',
    //     school_score_rating: 'GOLD',
    //     total_score: 350
    //   },{
    //     areaCode: 'SE9',
    //     area_name: 'Eltham, Mottingham, New Eltham, Falconwood, Chinbrook, Longlands, Kidbrooke',
    //     average_detached_house_price: 719388.0,
    //     average_flat_price: 269004.0,
    //     average_journey_time: 10.3,
    //     average_semi_detached_house_price: 491503.0,
    //     distance_to_work: 2701.0,
    //     facilities_score: 215.0,
    //     good_schools: 0,
    //     highest_house_price: 0,
    //     lowest_house_price: 0,
    //     outstanding_schools: 0,
    //     poor_schools: 0,
    //     postcode: 'SE9 6SL',
    //     primary_schools: 19,
    //     private_schools: 4,
    //     safety_score: 100,
    //     school_score: 148.0,
    //     secondary_schools: 4,
    //     sector_code: 'se9 6',
    //     stations: 'Eltham, Falconwood, Mottingham, New Eltham',
    //     stations_count: 4,
    //     total_schools: 27,
    //     travel_score: 104.0,
    //     facilities_score_rating: 'PLATINUM',
    //     safety_score_rating: 'PLATINUM',
    //     travel_score_rating: 'PLATINUM',
    //     school_score_rating: 'GOLD',
    //     total_score: 375
    //   },{
    //     areaCode: 'BR1',
    //     area_name: 'Bromley, Bickley, Downham',
    //     average_detached_house_price: 950991.0,
    //     average_flat_price: 343179.0,
    //     average_journey_time: 8.6166666667,
    //     average_semi_detached_house_price: 547071.0,
    //     distance_to_work: 4004.0,
    //     facilities_score: 180.0,
    //     good_schools: 0,
    //     highest_house_price: 0,
    //     lowest_house_price: 0,
    //     outstanding_schools: 0,
    //     poor_schools: 0,
    //     postcode: 'BR1 2EB',
    //     primary_schools: 12,
    //     private_schools: 5,
    //     safety_score: 100,
    //     school_score: 245.0,
    //     secondary_schools: 2,
    //     sector_code: 'br1 2',
    //     stations: 'Bickley, Bromley North, Bromley South, Sundridge Park',
    //     stations_count: 4,
    //     total_schools: 19,
    //     travel_score: 93.0,
    //     facilities_score_rating: 'PLATINUM',
    //     safety_score_rating: 'PLATINUM',
    //     travel_score_rating: 'PLATINUM',
    //     school_score_rating: 'PLATINUM',
    //     total_score: 400
    //   }];
    //
    function SearchAreaService(http) {
        this.http = http;
        this.serverStr = this.getAppServer();
    }
    SearchAreaService.prototype.getAppServer = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].appServer;
    };
    SearchAreaService.prototype.getAreaDetails = function (searchModel) {
        // console.log('app string :: ' + this.serverStr);
        // console.log(this.searchAreaModel);
        console.log('in service ' + searchModel.minPrice + ':' + searchModel.maxPrice + ':' + searchModel.homePostcode + ':' + searchModel.workPostcode
            + ':' + searchModel.timeToTravel + ':' + searchModel.distanceToTravel + ':' + searchModel.travelMode);
        // return of(this.searchAreaModel);
        return this.http.get(this.serverStr +
            '/getAreaDetails?work_post_code=BR7+6JN' +
            '&additional_post_code=SE12+8AW' +
            '&max_journey_time=' + searchModel.timeToTravel +
            '&max_journey_distance=' + searchModel.distanceToTravel +
            '&min_house_price=' + searchModel.minPrice +
            '&max_house_price=' + searchModel.maxPrice +
            '&pref_travel_mode=' + searchModel.travelMode);
    };
    SearchAreaService.prototype.getSectorDetails = function () {
        // console.log('app string :: ' + this.serverStr);
        // console.log(this.searchAreaModel);
        //return of(this.searchSectorModel);
        return this.http.get(this.serverStr + '/getSectorDetails?work_post_code=BR7+6JN&additional_post_code=SE12+8AW&max_journey_time=60&max_journey_distance=5000&min_house_price=300000&max_house_price=1100000&pref_travel_mode=car&area_code=SE9');
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