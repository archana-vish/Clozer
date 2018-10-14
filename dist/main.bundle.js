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

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\" id=\"navbar-scroll\">\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <button class=\"navbar-toggler navbar-toggler-right navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-bar\"></span>\n        <span class=\"navbar-toggler-bar\"></span>\n        <span class=\"navbar-toggler-bar\"></span>\n      </button>\n      <div>\n        <a routerLink=\"/home\"  class=\"navbar-brand\" id=\"profile\" >\n          <div class=\"logo\">\n            <img src=\"../../assets/img/logo/Clozer.png\" width=\"90\" height=\"30\"/>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n      <ul class=\"navbar-nav navbar-right ml-auto\">\n        <li class=\"nav-item\">\n          <a [ngx-scroll-to]=\"'#search'\" class=\"nav-link hand-cursor\"><i class=\"nc-icon nc-zoom-split\"></i> Search</a>\n        </li>\n        <!--<li class=\"nav-item\">-->\n          <!--<a  class=\"nav-link\" href=\"\"><i class=\"nc-icon nc-settings-gear-65\"></i> Personalise</a>-->\n        <!--</li>-->\n        <li class=\"nav-item\" data-toggle=\"modal\" data-target=\"#faqModal\">\n          <a class=\"nav-link hand-cursor\"><i class=\"nc-icon nc-paper\" ></i> FAQ</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"mailto:info@clozer.co.uk\" class=\"nav-link hand-cursor\"><i class=\"nc-icon nc-send\"></i> Contact Us </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"page-header section-dark\">\n  <div class=\"banner\">\n    <!--<div class=\"filter\"></div>-->\n    <div class=\"content-center\">\n      <div class=\"container\">\n        <div class=\"title-brand\">\n          <h1 class=\"presentation-title\">CLOZER</h1> <!-- class=\"presentation-title\" -->\n        </div>\n        <h2 class=\"presentation-subtitle\">\n          <div class=\"row\">\n            <hr class=\"hr-title-line\">\n            ⌘\n            <hr class=\"hr-title-line\">\n          </div>\n        </h2>\n        <div class=\"fog-low\"></div>\n        <h2 class=\"presentation-subtitle text-center\">Your search for the perfect house begins here</h2>\n        <br>\n        <div align=\"center\">\n          <a class=\"btn btn-warning btn-round\" [ngx-scroll-to]=\"'#search'\">Let's Go</a>\n        </div>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>\n<!--<div class=\"section-dark-blue google-maps\" id=\"gmaps\" align=\"center\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-12\">-->\n        <!--<app-areamaps></app-areamaps>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<!--<div class=\"section google-maps\" id=\"searchmaps\" align=\"center\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-12\">-->\n        <!--<app-findaddressonmap></app-findaddressonmap>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<!--<div class=\"section google-maps\" id=\"multiplepins\" align=\"center\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-12\">-->\n        <!--<app-multiplepins></app-multiplepins>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<div class=\"section video-summary\" id=\"video\" align=\"center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <app-video></app-video>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n<!--<div class=\"section section-dark-blue search-screen\" id=\"search\" >-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-12\">-->\n        <!--<router-outlet></router-outlet>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<div class=\"section personalise-summary\" id=\"personalise\" align=\"center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <app-personalise></app-personalise>\n      </div>\n    </div>\n  </div>\n</div>\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"credits\">\n      <nav class=\"footer-nav\">\n        <div><a href=\"mailto:info@clozer.co.uk\">info@clozer.co.uk</a></div>\n      </nav>\n    </div>\n  </div>\n</footer>\n\n\n\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__video_video_component__ = __webpack_require__("./src/app/components/video/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_details_area_details_component__ = __webpack_require__("./src/app/components/area-details/area-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sector_details_sector_details_component__ = __webpack_require__("./src/app/components/sector-details/sector-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__personalise_personalise_component__ = __webpack_require__("./src/app/components/personalise/personalise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feedback_feedback_component__ = __webpack_require__("./src/app/components/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__faq_faq_component__ = __webpack_require__("./src/app/components/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_details_search_details_component__ = __webpack_require__("./src/app/components/search-details/search-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_search_area_service__ = __webpack_require__("./src/app/services/search-area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing_module__ = __webpack_require__("./src/app/components/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__landingpage_landingpage_component__ = __webpack_require__("./src/app/components/landingpage/landingpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_HousePricePipe__ = __webpack_require__("./src/app/pipes/HousePricePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_ClozerErrorHandler__ = __webpack_require__("./src/app/services/ClozerErrorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__areamaps_areamaps_component__ = __webpack_require__("./src/app/components/areamaps/areamaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__findaddressonmap_findaddressonmap_component__ = __webpack_require__("./src/app/components/findaddressonmap/findaddressonmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__multiplepins_multiplepins_component__ = __webpack_require__("./src/app/components/multiplepins/multiplepins.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__video_video_component__["a" /* VideoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__area_details_area_details_component__["a" /* AreaDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sector_details_sector_details_component__["a" /* SectorDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__personalise_personalise_component__["a" /* PersonaliseComponent */],
                __WEBPACK_IMPORTED_MODULE_11__feedback_feedback_component__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_12__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_13__search_details_search_details_component__["a" /* SearchDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__landingpage_landingpage_component__["a" /* LandingpageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_HousePricePipe__["a" /* HousePricePipe */],
                __WEBPACK_IMPORTED_MODULE_22__areamaps_areamaps_component__["a" /* AreamapsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__findaddressonmap_findaddressonmap_component__["a" /* FindaddressonmapComponent */],
                __WEBPACK_IMPORTED_MODULE_24__multiplepins_multiplepins_component__["a" /* MultiplepinsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_angular5_data_table__["a" /* DataTableModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCxS2trHOjgbAMnJsJZfjK14NKJ75eDj44'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_search_area_service__["a" /* SearchAreaService */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_21__services_ClozerErrorHandler__["a" /* ClozerErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_4__agm_core__["c" /* GoogleMapsAPIWrapper */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
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

/***/ "./src/app/components/areamaps/areamaps.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/areamaps/areamaps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-dark-blue search-screen\" id=\"search\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"maps col-md-12\">\n          <agm-map #agm [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"15\" style=\"width: 100%\">\n            <agm-marker *ngFor=\"let n of numbers\" [latitude]=\"lat\" [longitude]=\"lng\"> </agm-marker>\n          </agm-map>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/areamaps/areamaps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreamapsComponent; });
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

var AreamapsComponent = /** @class */ (function () {
    function AreamapsComponent() {
        this.numbers = [1, 2, 3];
    }
    AreamapsComponent.prototype.ngOnInit = function () {
        this.findUser();
    };
    AreamapsComponent.prototype.findUser = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log('location obtained...');
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
            //return null;
        }
        var geocoder = new google.maps.Geocoder();
        var address = 'BR7';
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                alert(latitude);
            }
        });
    };
    AreamapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-areamaps',
            template: __webpack_require__("./src/app/components/areamaps/areamaps.component.html"),
            styles: [__webpack_require__("./src/app/components/areamaps/areamaps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AreamapsComponent);
    return AreamapsComponent;
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

/***/ "./src/app/components/findaddressonmap/findaddressonmap.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/findaddressonmap/findaddressonmap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-dark-blue search-screen\" id=\"search\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"maps col-md-12\">\n          <agm-map [(latitude)]=\"location.lat\" [(longitude)]=\"location.lng\" [(zoom)]=\"location.zoom\" [disableDefaultUI]=\"true\" [zoomControl]=\"true\" [(fitBounds)]='location.viewport'>\n            <agm-marker [(latitude)]=\"location.marker.lat\" [(longitude)]=\"location.marker.lng\" [markerDraggable]=\"location.marker.draggable\" (dragEnd)='markerDragEnd($event)'></agm-marker>\n          </agm-map>\n\n\n\n        </div>\n        <div class=\"container-fluid\">\n          <button (click)='updateOnMap()' type=\"submit\" class=\"btn btn-primary\">Search</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/findaddressonmap/findaddressonmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindaddressonmapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core_services__ = __webpack_require__("./node_modules/@agm/core/services.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindaddressonmapComponent = /** @class */ (function () {
    function FindaddressonmapComponent(mapsApiLoader, zone, wrapper) {
        var _this = this;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.location = {
            lat: 51.678418,
            lng: 7.809007,
            marker: {
                lat: 51.678418,
                lng: 7.809007,
                draggable: false
            },
            zoom: 5
        };
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.mapsApiLoader.load().then(function () {
            _this.geocoder = new google.maps.Geocoder();
        });
    }
    FindaddressonmapComponent.prototype.ngOnInit = function () {
        this.location.marker.draggable = false;
    };
    FindaddressonmapComponent.prototype.updateOnMap = function () {
        var full_address = ['BR7', 'SE9'];
        for (var _i = 0, full_address_1 = full_address; _i < full_address_1.length; _i++) {
            var address = full_address_1[_i];
            this.findLocation(address);
        }
    };
    FindaddressonmapComponent.prototype.findLocation = function (address) {
        var _this = this;
        if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            'address': address
        }, function (results, status) {
            console.log(results);
            if (status == google.maps.GeocoderStatus.OK) {
                // decompose the result
                if (results[0].geometry.location) {
                    _this.location.lat = results[0].geometry.location.lat();
                    _this.location.lng = results[0].geometry.location.lng();
                    _this.location.marker.lat = results[0].geometry.location.lat();
                    _this.location.marker.lng = results[0].geometry.location.lng();
                    _this.location.marker.draggable = true;
                    _this.location.viewport = results[0].geometry.viewport;
                }
                _this.map.triggerResize();
            }
            else {
                alert("Sorry, this search produced no results.");
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* AgmMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* AgmMap */])
    ], FindaddressonmapComponent.prototype, "map", void 0);
    FindaddressonmapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-findaddressonmap',
            template: __webpack_require__("./src/app/components/findaddressonmap/findaddressonmap.component.html"),
            styles: [__webpack_require__("./src/app/components/findaddressonmap/findaddressonmap.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__agm_core__["d" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__agm_core_services__["a" /* GoogleMapsAPIWrapper */]])
    ], FindaddressonmapComponent);
    return FindaddressonmapComponent;
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

/***/ "./src/app/components/multiplepins/multiplepins.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/multiplepins/multiplepins.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-dark-blue search-screen\" id=\"search\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"maps col-md-12\">\n          <agm-map [latitude]=\"locs[0].lat\" [longitude]=\"locs[0].lng\" [zoom]=\"12\">\n            <agm-marker  *ngFor=\"let loc of locs\" [(latitude)]=\"loc.lat\" [(longitude)]=\"loc.lng\" title=\"bb\"></agm-marker>\n          </agm-map>\n        </div>\n        <div class=\"container-fluid\">\n          <button (click)='updateOnMap()' type=\"submit\" class=\"btn btn-primary\">Search</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/multiplepins/multiplepins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiplepinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core_services__ = __webpack_require__("./node_modules/@agm/core/services.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// interface MapPoints {
//   lat: number;
//   lng: number;
// }
var MultiplepinsComponent = /** @class */ (function () {
    function MultiplepinsComponent(mapsApiLoader, zone, wrapper) {
        var _this = this;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.locations = new Array();
        this.location = {
            lat: 51.678418,
            lng: 7.809007,
            marker: {
                lat: 51.678418,
                lng: 7.809007,
                draggable: false,
                clickable: true
            },
            zoom: 5
        };
        this.mapPoints = {
            lat: 51.678418,
            lng: 7.809007
        };
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.mapsApiLoader.load().then(function () {
            _this.geocoder = new google.maps.Geocoder();
        });
        // this.icon = {
        //   url: '../../../assets/img/logo/Clozer.png',
        //   size: new this.google.maps.Size(64,64),
        //   scaledSize: new this.google.maps.Size(128,64)
        // }
        this.locs =
            [
                { 'lat': 51.4151862, 'lng': 0.07603349999999409 },
                { 'lat': 51.4414439, 'lng': 0.07603349999999409 }
            ];
    }
    MultiplepinsComponent.prototype.ngOnInit = function () {
        this.location.marker.draggable = false;
    };
    MultiplepinsComponent.prototype.updateOnMap = function () {
        var full_address = ['BR7', 'SE9'];
        for (var _i = 0, full_address_1 = full_address; _i < full_address_1.length; _i++) {
            var address = full_address_1[_i];
            var mapPoint = this.findLocation(address);
            console.log('values pushed :: ' + mapPoint.lat + ' : ' + mapPoint.lng);
        }
        this.map.triggerResize();
        //console.log('locations :: ' + this.locations)
    };
    MultiplepinsComponent.prototype.findLocation = function (address) {
        var _this = this;
        if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            'address': address
        }, function (results, status) {
            console.log(results);
            if (status == google.maps.GeocoderStatus.OK) {
                // decompose the result
                _this.locations.push(results[0]);
                console.log('value pushed :: ' + _this.locs.length);
                if (results[0].geometry.location) {
                    _this.location.lat = results[0].geometry.location.lat();
                    _this.location.lng = results[0].geometry.location.lng();
                    _this.location.marker.lat = results[0].geometry.location.lat();
                    _this.location.marker.lng = results[0].geometry.location.lng();
                    _this.location.marker.draggable = false;
                    _this.location.marker.clickable = true;
                    _this.location.marker.title = 'xx';
                    _this.location.viewport = results[0].geometry.viewport;
                    //this.mapPoints;
                    _this.mapPoints.lat = _this.location.lat;
                    _this.mapPoints.lng = _this.location.lng;
                    console.log('Pushing...' + _this.mapPoints.lat + ' : ' + _this.mapPoints.lng);
                    // this.locs.push({'lat':this.mapPoints.lat, 'lng':this.mapPoints.lng});
                    _this.locs.push(results[0].geometry.location.toJSON());
                    console.log(results[0].geometry.viewport);
                    console.log(results[0].geometry.location.toJSON());
                    // TODO
                    //this.locs.push(this.mapPoints);
                }
            }
            else {
                alert("Sorry, this search produced no results.");
                return null;
            }
            // this.locs.push(this.mapPoints);
            // console.log(this.locs.length);
            // for (let loc of this.locs) {
            //   console.log('long '+ loc.lat+ ' lat : ' + loc.lng);
            // }
        });
        return this.mapPoints;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* AgmMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* AgmMap */])
    ], MultiplepinsComponent.prototype, "map", void 0);
    MultiplepinsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-multiplepins',
            template: __webpack_require__("./src/app/components/multiplepins/multiplepins.component.html"),
            styles: [__webpack_require__("./src/app/components/multiplepins/multiplepins.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__agm_core__["d" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__agm_core_services__["a" /* GoogleMapsAPIWrapper */]])
    ], MultiplepinsComponent);
    return MultiplepinsComponent;
}());



/***/ }),

/***/ "./src/app/components/personalise/personalise.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/personalise/personalise.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\n  <div class=\"col-md-8 mr-auto ml-auto\">\n    <h4 class=\"title-about\">What Clozer can do..</h4>\n  </div>\n</div>\n<div class=\"video\">\n  <div class=\"embed-responsive embed-responsive-4by3\">\n    <iframe class=\"embed-responsive-item\" width=\"560\" height=\"315\"  src=\"https://www.youtube.com/embed/qL9zcT-K8p8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"section section-dark-blue search-screen\" id=\"search\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"maps col-md-12\">\n          <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"15\">\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"> </agm-marker>\n          </agm-map>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"spinning\" *ngIf=\"isLoading\">\n  <i class=\"fa fa-cog fa-spin fa-2x fa-fw\" aria-hidden=\"true\"></i>\n</div>\n<div class=\"search container-fluid col-md-12\" *ngIf=\"areaSearchResults\">\n  <div class=\"row\">\n    <p> You have {{areaSearchResults.length}} area(s) matching your criteria </p>\n    <br>\n  </div>\n\n  <!-- Include maps here -->\n  <div class=\"section section-dark-blue search-screen\" id=\"search\" >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"maps col-md-12\">\n            aaaaa\n            <!--<agm-map *ngFor=\"let area of areaSearchResults\" [(latitude)]=\"area.ref_postcode_lat\" [(longitude)]=\"area.ref_postcode_lng\" zoom=\"12\" [disableDefaultUI]=\"true\" [zoomControl]=\"true\">-->\n              <!--<agm-marker [(latitude)]=\"area.ref_postcode_lat\" [(longitude)]=\"area.ref_postcode_lng\" markerDraggable=false></agm-marker>-->\n            <!--</agm-map>-->\n            <agm-map latitude=51.409156 longitude=0.054646 zoom=\"12\">\n              <agm-marker *ngFor=\"let area of areaSearchResults\" [(latitude)]=\"area.ref_postcode_lat\" [(longitude)]=\"area.ref_postcode_lng\"> </agm-marker>\n            </agm-map>\n          </div>\n          <div class=\"container-fluid\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End of maps -->\n\n  <div id=\"myCarousel\" class=\"carousel slide col-md-12\" data-ride=\"carousel\">\n      <div class=\"carousel-inner row w-100 mx-auto\">\n        <div class=\"carousel-item col-md-4 active\">\n          <div class=\"card-plain bg-dark text-white text-center\">\n            <img class=\"card-img\" src=\"../../../assets/img/gradient-card.png\" alt=\"Card image\">\n            <div class=\"card-img-overlay\">\n              <h5 class=\"card-title text-white\">{{areaSearchResults[0].areaCode}}</h5>\n              <p class=\"card-text\">Area Names :  {{areaSearchResults[0].areaName}}</p>\n              <p class=\"card-text\">Total Score: {{areaSearchResults[0].totalScore}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"carousel-item col-md-4 \" *ngFor=\"let searchDetail of areaSearchResults\">\n          <div class=\"card-deck\">\n            <div class=\"card-plain bg-dark text-white text-center\">\n              <img class=\"card-img\" src=\"../../../assets/img/gradient-card.png\" alt=\"Card image\">\n              <div class=\"card-img-overlay\">\n                <h5 class=\"card-title text-white\">{{searchDetail.area_code}}</h5>\n                <p class=\"card-text\">Area Names :  {{searchDetail.area_name}}</p>\n                <p class=\"card-text\">Total Score: {{searchDetail.total_score}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n        <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n  </div>\n</div>\n\n\n\n\n\n\n\n"

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
                //console.log('returned... ' + this.areaSearchResults.length);
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

module.exports = "<div class=\"section section-dark-blue search-screen\" id=\"search\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"search col-md-12\">\n          <form (ngSubmit) = \"getAreaSearchResults()\" #searchForm = \"ngForm\">\n            <!--<div class=\" form-group row col-md-12\">-->\n              <!--<div class=\"col-md-6\">-->\n                <!--<h6> Get Clozer to your home..</h6>-->\n              <!--</div>-->\n              <!--&lt;!&ndash;<div col=\"col-md-4\"></div>&ndash;&gt;-->\n              <!--<div class=\"col-md-6\"></div>-->\n            <!--</div>-->\n            <br>\n            <div class=\" form-group row col-md-12\">\n              <div class=\"col-lg-3 col-md-4\">\n                <label for=\"housePriceTo\" class=\"col-form-label\">My maximum budget </label>\n              </div>\n              <div class=\"col-lg-3 col-md-4\">\n                <!--<input type=\"text\" class=\"form-control\" id=\"housePrice\"  placeholder=\"Enter your work postcode\">-->\n                <select class=\"form-control\" id=\"housePriceTo\" [(ngModel)] = \"searchModel.maxPrice\" name=\"maxPrice\">\n                  <option *ngFor=\"let price of priceRange\" value=\"{{price}}\">\n                    {{price | currency : 'GBP' : '£' : '1.0'}}\n                  </option>\n                </select>\n              </div>\n              <!--<div col=\"col-md-4\"></div>-->\n              <div class=\"col-lg-3 col-md-4\"></div>\n            </div>\n            <div class=\"form-group row col-md-12\">\n              <div class=\"col-lg-3 col-md-4\">\n                <label for=\"homezipcode\" class=\"col-form-label\">Postcodes that matter to me </label>\n              </div>\n              <div class=\"col-lg-3 col-md-4\">\n                <input type=\"text\" class=\"form-control uppercase-text\" id=\"homezipcode\"\n                [(ngModel)] = \"searchModel.homePostcode\"\n                placeholder=\"Eg: NW1 1AA\" name=\"homePostCode\" required (mouseout)=\"transformPostcode(searchModel.homePostcode)\">\n              </div>\n              <!--<div class=\"col-xs-1\">&nbsp;</div>-->\n              <!--<div class=\"col-md-1\"></div>-->\n              <!--<label for=\"homezipcode\" class=\"col-md-2 col-form-label\">I currently live at..</label>-->\n              <!--<div class=\"col-md-1\"></div>-->\n              <div class=\"col-lg-3 col-md-4\">\n                <!--<input type=\"text\" class=\"form-control\" id=\"homezipcode\"-->\n                       <!--[(ngModel)] = \"searchModel.homePostcode\"-->\n                       <!--placeholder=\"Second choice\" name=\"homePostCode\">-->\n                <!--<input type=\"text\" class=\"form-control\" id=\"workzipcode\"-->\n                       <!--[(ngModel)] = \"searchModel.workPostcode\"-->\n                       <!--placeholder=\"First choice\" name=\"workPostCode\" required>-->\n              </div>\n              <div class=\"col-lg-3\"></div>\n            </div>\n            <div class=\"form-group row col-lg-12\">\n              <div class=\"col-lg-3 col-md-4\">\n                <label for=\"timeToTravel\" class=\"col-form-label\">Can travel up to</label>\n              </div>\n              <div class=\"col-lg-3 col-md-4\">\n                <!--<input type=\"text\" class=\"form-control\" id=\"timeToTravel\"  placeholder=\"time\">-->\n                <select class=\"form-control\" id=\"timeToTravel\" [(ngModel)] = \"searchModel.timeToTravel\" name=\"timeToTravel\">\n                  <option *ngFor=\"let t of time\" value=\"{{t}}\">\n                    {{t}} min\n                  </option>\n                </select>\n              </div>\n              <div class=\"col-xs-1\"> </div>\n              <!--<label for=\"distanceToTravel\" class=\"col-md-2 col-form-label\">and not more than</label>-->\n              <div class=\"col-lg-3 col-md-4\">\n                <!--<input type=\"text\" class=\"form-control\" id=\"distanceToTravel\" placeholder=\"distance\">-->\n                <select class=\"form-control\" id=\"distanceToTravel\" [(ngModel)] = \"searchModel.distanceToTravel\" name=\"distanceToTravel\">\n                  <option *ngFor=\"let dist of distance\" value=\"{{dist}}\">\n                    {{dist}} mile\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\" form-group row col-md-12\">\n              <div class=\"col-lg-3 col-md-4\">\n                <label class=\"col-form-label\">I prefer to travel by </label>\n              </div>\n                <div class=\"form-check col-md-7\" id=\"travelmode1\" >\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" name=\"travelMode\" class=\"form-check-input\"\n                           [(ngModel)] = \"searchModel.travelMode\" name=\"travelMode\" value=\"any\">\n                    <i class=\"fas fa-bus\"></i> Any\n                  </label>\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\"\n                         checked\n                         name=\"travelMode\" value=\"Train\"\n                         [(ngModel)] = \"searchModel.travelMode\" name=\"travelMode\" value=\"train\">\n                    <i class=\"fa fa-train\"></i> Train\n                  </label>\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\"\n                         [(ngModel)] = \"searchModel.travelMode\" name=\"travelMode\" value=\"car\">\n                    <i class=\"fas fa-car\"></i> Car\n                  </label>\n\n                <!--<label class=\"form-check-label\">-->\n                    <!--<input type=\"radio\" class=\"form-check-input\"-->\n                          <!--name=\"travelMode\" value=\"cycle\" disabled=\"true\">-->\n                  <!--<i class=\"fas fa-bicycle\"></i> Cycle-->\n                  <!--</label>-->\n                <!--<label class=\"form-check-label\">-->\n                    <!--<input type=\"radio\" class=\"form-check-input\"-->\n                          <!--name=\"travelMode\" value=\"walk\" disabled=\"true\">-->\n                  <!--<i class=\"fas fa-walking\"></i> Walk-->\n                  <!--</label>-->\n                </div>\n              </div>\n            <div class=\" form-group row col-md-12\">\n              <div class=\"col-lg-3 col-md-4\">\n                <label class=\"col-form-label\">I prefer to live in a</label>\n              </div>\n              <div class=\"form-check col-lg-7 col-md-6\" id=\"houseType\" >\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" name=\"houseType\" class=\"form-check-input\"\n                         [(ngModel)] = \"searchModel.houseType\" name=\"houseType\" value=\"H\">\n                  <i class=\"fas fa-home\"></i> House\n                </label>\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\"\n                         checked\n                         [(ngModel)] = \"searchModel.houseType\" name=\"houseType\" value=\"A\">\n                  <i class=\"fas fa-building\"></i> Flat\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group row col-md-12\">\n              <div class=\"col-lg-3 col-md-4\"> </div>\n              <div class=\"col-lg-9 col-md-8\">\n                <button type=\"submit\" class=\"btn btn-info btn-round\" [disabled]=\"!searchForm.form.valid\" [ngx-scroll-to]=\"'#searchresults'\">Search</button> &nbsp;\n                <button type=\"button\" class=\"btn btn-info btn-round\" (click) = \"resetFields()\">Reset</button>\n              </div>\n            </div>\n          </form>\n          <!--<span *ngIf=\"isLoading\" class=\"glyphicon glyphicon-repeat fast-right-spinner\"></span>-->\n          <!--<div class=\"searchresults\" *ngIf=\"submitted\">-->\n            <!--<app-search-details [searchModel]=\"outputSearchModel\"></app-search-details>-->\n          <!--</div>-->\n        <!--</div>-->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End search form -->\n<!-- Try alignment -->\n<!--<div class=\"togglebutton row\" >-->\n  <!--<div class=\"col-8\">-->\n    <!--<label>-->\n      <!--<input type=\"checkbox\" id=\"sortOrder1\" checked=\"{{checked}}\" (click)=\"toggle()\">-->\n      <!--<span class=\"toggle\"></span>-->\n      <!--{{seachCriteria}}-->\n    <!--</label>-->\n  <!--</div>-->\n  <!--<div class=\"col-4\">-->\n    <!--<label>-->\n      <!--<input type=\"checkbox\" id=\"mapView1\" checked=\"{{checked}}\" (click)=\"toggle()\">-->\n      <!--<span class=\"toggle\"></span>-->\n      <!--View Map aaaaa {{myicon}} {{myicon.url}}-->\n    <!--</label>-->\n  <!--</div>-->\n<!--</div>-->\n\n<!-- End try -->\n<!-- Search results -->\n<div class=\"section section-dark-blue areasearch-results-summary\" id=\"searchresults\" align=\"center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"spinning\" *ngIf=\"isLoading\">\n          <i class=\"fa fa-cog fa-spin fa-2x fa-fw\" aria-hidden=\"true\"></i>\n        </div>\n        <!-- REsults -->\n        <div class=\"search\" *ngIf=\"hasLoaded\">\n          <div class=\"row col-md-12\" *ngIf=\"areaSearchResults == null\">\n            <p> Server error. Please try again </p>\n          </div>\n          <div class=\"row col-md-12\" *ngIf=\"areaSearchResults != null\">\n            <p> You have {{areaSearchResults.length}} area(s) matching your criteria </p>\n          </div>\n          <!-- Include maps here -->\n          <div class=\"section section-dark-blue search-screen\" id=\"search-maps\" *ngIf=\"areaSearchResults != null\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"maps col-md-12\">\n                    <!--<agm-map *ngFor=\"let area of areaSearchResults\" [(latitude)]=\"area.ref_postcode_lat\" [(longitude)]=\"area.ref_postcode_lng\" zoom=\"12\" [disableDefaultUI]=\"true\" [zoomControl]=\"true\">-->\n                    <!--<agm-marker [(latitude)]=\"area.ref_postcode_lat\" [(longitude)]=\"area.ref_postcode_lng\" markerDraggable=false></agm-marker>-->\n                    <!--</agm-map>-->\n                    <!--<agm-map [latitude]=\"areaSearchResults[0].ref_postcode_lat\" [longitude]=\"areaSearchResults[0].ref_postcode_lng\" [zoom]=\"15\">-->\n                      <!--<agm-marker *ngFor=\"let area of areaSearchResults\" [(latitude)]=\"area.ref_postcode_lat\" [(longitude)]=\"area.ref_postcode_lng\"> </agm-marker>-->\n                    <!--</agm-map>-->\n                    <!--<agm-map [latitude]=\"locs[0].lat\" [longitude]=\"locs[0].lng\" [zoom]=\"12\">-->\n                      <!--<agm-marker  *ngFor=\"let loc of locs\" [(latitude)]=\"loc.lat\" [(longitude)]=\"loc.lng\" title=\"bb\"  ></agm-marker>-->\n                    <!--</agm-map>-->\n\n                    <agm-map [latitude]=\"areaSearchResults[0].ref_postcode_lat\" [longitude]=\"areaSearchResults[0].ref_postcode_lng\" [zoom]=\"10\">\n                    <!--<agm-marker *ngFor=\"let area of areaSearchResults\" [(latitude)]=\"area.ref_postcode_lat\" [(longitude)]=\"area.ref_postcode_lng\" [title]=\"area.area_code\" [label]=\"area.area_code\" [iconUrl]=\"{-->\n                      <!--url: '../../../assets/img/logo/icon.png',-->\n                      <!--scaledSize: {-->\n                        <!--width: 20,-->\n                        <!--height: 20-->\n                      <!--}-->\n                    <!--}\">-->\n                      <div *ngFor=\"let area of areaSearchResults\">\n                        <agm-marker [latitude]=\"location.lat\"\n                                    [longitude]=\"location.lng\"\n                                    [title]=\"searchModel.homePostcode | uppercase\">\n                        </agm-marker>\n                      <agm-marker #amap\n                                  [(latitude)]=\"area.ref_postcode_lat\"\n                                  [(longitude)]=\"area.ref_postcode_lng\"\n                                  [title]=\"area.area_code\"\n                                  [iconUrl]=\"iconUrl\"\n                                  size=\"10\"\n                                  [animation]=\"'DROP'\"\n                                  >\n                        <agm-info-window class=\"label-maps\">{{area.area_code}}</agm-info-window>\n                    </agm-marker>\n                      </div>\n                    </agm-map>\n                  </div>\n                  <div class=\"container-fluid\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- End of maps -->\n          <br>\n          <!-- Adding rotating cards -->\n          <div class=\"container-fluid\" *ngIf=\"areaSearchResults != null\">\n              <div class=\"card-group \">\n                <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let searchDetail of areaSearchResults\">\n                  <div class=\"card-container card-plain manual-flip\">\n                    <div class=\"card\">\n                      <div class=\"front\">\n                        <div class=\"cover\">\n                          <!--<img src=\"assets/img/rotating_card_thumb2.png\"/>-->\n                          <img src=\"assets/img/cardbgtop.jpg\"/>\n                        </div>\n                        <div class=\"user\">\n                          <!--<img class=\"img-circle\" src=\"assets/img/rotating_card_thumb.jpg\">-->\n                          <img class=\"img-circle\" src=\"assets/img/cardbginner.jpg\">\n                          <div class=\"img-text\"><strong>{{searchDetail.area_code}}</strong></div>\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"main\">\n                            <h3 class=\"line-height\">Clozer score: {{searchDetail.total_score}}</h3>\n                            <!--<h5 class=\"code\">{{searchDetail.area_code}}</h5>-->\n                            <br>\n                            <p class=\"text-center\">{{searchDetail.area_name}}</p>\n                            <div class=\"header\">\n                              <h5 class=\"topheader\">Travel Time: {{searchDetail.average_journey_time | number: '1.0-0'}} min </h5>\n                              <h5 class=\"topheader\">Travel Distance: {{searchDetail.distance_to_work | number: '1.0-0'}} mi </h5>\n                              <h5 class=\"topheader\">Train Stations: {{searchDetail.stations_count}} </h5>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"front-card-footer\">\n                          <button class=\"btn btn-neutral\" rel=\"tooltip\" title=\"Flip Card\" onclick=\"rotateCard(this)\">\n                            <i class=\"fas fa-share\"></i> Know More\n                          </button>\n                        </div>\n                      </div> <!-- end front panel -->\n                      <div class=\"back\">\n                          <h5 class=\"motto-end\"><strong>{{searchDetail.area_code}}</strong></h5>\n                        <div class=\"content\">\n                          <div class=\"main\">\n                            <div class=\"row stats-container\">\n                              <div class=\"col-md-12 \">\n                                <p align=\"center\" class=\"make-it-bold\"> House Price  </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.average_detached_house_price | housePricePipe}}</h4>\n                                <p class=\"card-p\">\n                                  Detached\n                                </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.average_semi_detached_house_price | housePricePipe}}</h4>\n                                <p class=\"card-p\">\n                                  Semi-detached\n                                </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.average_flat_price | housePricePipe}}</h4>\n                                <p class=\"card-p\">\n                                   Flats\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"row stats-container\">\n                              <div class=\"col-md-12\">\n                                <p align=\"center\" class=\"make-it-bold\"> Schools </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.primary_schools}}</h4>\n                                <p class=\"card-p\">\n                                  Primary\n                                </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.secondary_schools}}</h4>\n                                <p class=\"card-p\">\n                                  Secondary\n                                </p>\n                              </div>\n                              <div class=\"stats\">\n                                <h4 class=\"h4-card\">{{searchDetail.private_schools}}</h4>\n                                <p class=\"card-p\">\n                                  Private\n                                </p>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"back-card-footer\">\n                          <div class=\"social-links text-center \">\n                            <button class=\"btn  btn-simple-card btn-round btn-info\" rel=\"tooltip\" title=\"Flip Card\" onclick=\"rotateCard(this)\">\n                              <i class=\"fas fa-reply\"></i> Back\n                            </button>\n                            <button type=\"button\" class=\"btn  btn-simple-card btn-round btn-info\" (click) = \"getSectorSearchResults(searchDetail)\" data-toggle=\"modal\" data-target=\"#sectorModal\">Explore</button>\n                          </div>\n                        </div>\n                      </div> <!-- end back panel -->\n                    </div> <!-- end card -->\n                  </div> <!-- end card-container -->\n                </div> <!-- end col sm 3 -->\n              </div>\n            </div>\n          </div>\n        <!-- End Results -->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End search results -->\n<!-- Modal -->\n<div class=\"modal fadeOutUp\" id=\"sectorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"sectorModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" *ngIf=\"sectorLoaded\">\n        <h5 class=\"modal-title\" id=\"sectorModalTitle\">Search Results for {{searchModel.areaCode}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"no-gutters\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-md-12 no-gutters\">\n              <div class=\"search col-md-12 no-gutters\">\n                <div class=\"spinning\" *ngIf=\"sectorLoading\">\n                  <i class=\"fa fa-cog fa-spin fa-2x fa-fw\" aria-hidden=\"true\"></i>\n                </div>\n                <div *ngIf=\"sectorLoaded\">\n                  <div class=\"row col-md-12\" *ngIf=\"sectorSearchResults == null\">\n                    <p> Server error. Please try again </p>\n                  </div>\n                  <div class=\"row col-md-12\" *ngIf=\"sectorSearchResults != null && sectorSearchResults.length ==0\">\n                    <p> No sectors returned </p>\n                  </div>\n                  <div class=\"togglebutton row\" *ngIf=\"sectorSearchResults != null && sectorSearchResults.length > 0\">\n                    <div class=\"col-8\">\n                      <label>\n                        <input type=\"checkbox\" id=\"sortOrder\" checked=\"{{checked}}\" (click)=\"toggle()\">\n                        <span class=\"toggle\"></span>\n                        {{seachCriteria}}\n                      </label>\n                    </div>\n                    <div class=\"col-4\">\n                      <label>\n                        <input type=\"checkbox\" id=\"mapView\" checked=\"{{checkedMap}}\" (click)=\"toggleMap()\">\n                        <span class=\"toggle\"></span>\n                        {{mapTitle}}\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"\" *ngIf=\"showMap\">\n                    <div class=\"container\">\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <div class=\"maps col-md-12\">\n                            <!--<agm-map *ngFor=\"let area of areaSearchResults\" [(latitude)]=\"area.ref_postcode_lat\" [(longitude)]=\"area.ref_postcode_lng\" zoom=\"12\" [disableDefaultUI]=\"true\" [zoomControl]=\"true\">-->\n                            <!--<agm-marker [(latitude)]=\"area.ref_postcode_lat\" [(longitude)]=\"area.ref_postcode_lng\" markerDraggable=false></agm-marker>-->\n                            <!--</agm-map>-->\n                            <!--<agm-map [latitude]=\"areaSearchResults[0].ref_postcode_lat\" [longitude]=\"areaSearchResults[0].ref_postcode_lng\" [zoom]=\"15\">-->\n                            <!--<agm-marker *ngFor=\"let area of areaSearchResults\" [(latitude)]=\"area.ref_postcode_lat\" [(longitude)]=\"area.ref_postcode_lng\"> </agm-marker>-->\n                            <!--</agm-map>-->\n                            <!--<agm-map [latitude]=\"locs[0].lat\" [longitude]=\"locs[0].lng\" [zoom]=\"12\">-->\n                            <!--<agm-marker  *ngFor=\"let loc of locs\" [(latitude)]=\"loc.lat\" [(longitude)]=\"loc.lng\" title=\"bb\"  ></agm-marker>-->\n                            <!--</agm-map>-->\n                            <div  >\n                            <agm-map [latitude]=\"sectorSearchResults[0].ref_postcode_lat\" [longitude]=\"sectorSearchResults[0].ref_postcode_lng\" [zoom]=\"12\">\n                              <agm-marker [latitude]=\"location.lat\"\n                                          [longitude]=\"location.lng\"\n                                          [title]=\"searchModel.homePostcode | uppercase\">\n                              </agm-marker>\n                              <agm-marker *ngFor=\"let area of sectorSearchResults\"\n                                          [(latitude)]=\"area.ref_postcode_lat\"\n                                          [(longitude)]=\"area.ref_postcode_lng\"\n                                          [title]=\"area.sector_name\"\n                                          [iconUrl]=\"iconUrl\"\n                                          [animation]=\"'DROP'\">\n                                <agm-info-window class=\"label-maps\">{{area.sector_code | uppercase }} ({{area.sector_name | uppercase}})</agm-info-window>\n                              </agm-marker>\n                            </agm-map>\n                            </div>\n                          </div>\n                          <div class=\"container-fluid\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"\" *ngIf=\"compareByArea\">\n                  <div class=\"\"  *ngFor=\"let sector of sectorSearchResults\">\n                    <!-- Progress bars -->\n                    <!--<div class=\"col-md-12 no-gutters\">-->\n                    <hr style=\"border:3px solid #f1f1f1\">\n                      <span class=\"heading-faq\">{{sector.sector_code | uppercase }} ({{sector.sector_name | uppercase}})</span>\n                    <hr style=\"border:3px solid #f1f1f1\">\n                    <!--</div>-->\n                    <div class=\"row no-gutters\">\n                      <div class=\"side\">\n                        <div>Safety</div>\n                      </div>\n                      <div class=\"middle\">\n                        <div class=\"bar-container\">\n                          <div class=\"bar-5\" *ngIf=\"sector.safety_score_stars === 5\" [style.width.%]=\"sector.safety_score\"></div>\n                          <div class=\"bar-4\" *ngIf=\"sector.safety_score_stars === 4\" [style.width.%]=\"sector.safety_score\"></div>\n                          <div class=\"bar-3\" *ngIf=\"sector.safety_score_stars === 3\" [style.width.%]=\"sector.safety_score\"></div>\n                          <div class=\"bar-2\" *ngIf=\"sector.safety_score_stars === 2\" [style.width.%]=\"sector.safety_score\"></div>\n                          <div class=\"bar-1\" *ngIf=\"sector.safety_score_stars === 1\" [style.width.%]=\"sector.safety_score\"></div>\n                        </div>\n                      </div>\n                      <div class=\"side right\">\n                        <div>{{sector.safety_score}}</div>\n                      </div>\n                      <div class=\"side\">\n                        <div>Schools</div>\n                      </div>\n                      <div class=\"middle\">\n                        <div class=\"bar-container\">\n                          <div class=\"bar-5\" *ngIf=\"sector.school_score_stars === 5\" [style.width.%]=\"sector.school_score\"></div>\n                          <div class=\"bar-4\" *ngIf=\"sector.school_score_stars === 4\" [style.width.%]=\"sector.school_score\"></div>\n                          <div class=\"bar-3\" *ngIf=\"sector.school_score_stars === 3\" [style.width.%]=\"sector.school_score\"></div>\n                          <div class=\"bar-2\" *ngIf=\"sector.school_score_stars === 2\" [style.width.%]=\"sector.school_score\"></div>\n                          <div class=\"bar-1\" *ngIf=\"sector.school_score_stars === 1\" [style.width.%]=\"sector.school_score\"></div>\n                        </div>\n                      </div>\n                      <div class=\"side right\">\n                        <div>{{sector.school_score}}</div>\n                      </div>\n                      <div class=\"side\">\n                        <div>Travel</div>\n                      </div>\n                      <div class=\"middle\">\n                        <div class=\"bar-container\">\n                          <div class=\"bar-5\" *ngIf=\"sector.travel_score_stars === 5\" [style.width.%]=\"sector.travel_score\"></div>\n                          <div class=\"bar-4\" *ngIf=\"sector.travel_score_stars === 4\" [style.width.%]=\"sector.travel_score\"></div>\n                          <div class=\"bar-3\" *ngIf=\"sector.travel_score_stars === 3\" [style.width.%]=\"sector.travel_score\"></div>\n                          <div class=\"bar-2\" *ngIf=\"sector.travel_score_stars === 2\" [style.width.%]=\"sector.travel_score\"></div>\n                          <div class=\"bar-1\" *ngIf=\"sector.travel_score_stars === 1\" [style.width.%]=\"sector.travel_score\"></div>\n                        </div>\n                      </div>\n                      <div class=\"side right\">\n                        <div>{{sector.travel_score}}</div>\n                      </div>\n                      <div class=\"side\">\n                        <div>Facilities</div>\n                      </div>\n                      <div class=\"middle\">\n                        <div class=\"bar-container\">\n                          <div class=\"bar-5\" *ngIf=\"sector.facilities_score_stars === 5\" [style.width.%]=\"sector.facilities_score\"></div>\n                          <div class=\"bar-4\" *ngIf=\"sector.facilities_score_stars === 4\" [style.width.%]=\"sector.facilities_score\"></div>\n                          <div class=\"bar-3\" *ngIf=\"sector.facilities_score_stars === 3\" [style.width.%]=\"sector.facilities_score\"></div>\n                          <div class=\"bar-2\" *ngIf=\"sector.facilities_score_stars === 2\" [style.width.%]=\"sector.facilities_score\"></div>\n                          <div class=\"bar-1\" *ngIf=\"sector.facilities_score_stars === 1\" [style.width.%]=\"sector.facilities_score\"></div>\n                        </div>\n                      </div>\n                      <div class=\"side right\">\n                        <div>{{sector.facilities_score}}</div>\n                      </div>\n                    </div>\n\n                    <!-- End progress bars -->\n                  </div>\n                  </div>\n                  <div *ngIf=\"!compareByArea\">\n                    <div class=\"\" >\n                      <!-- Progress bars -->\n                      <div>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      <span class=\"heading-faq\">SAFETY</span>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      </div>\n                      <div class=\"row no-gutters\"  *ngFor=\"let sector of sectorSearchResults\">\n                        <div class=\"side-facility\">\n                          <div data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{sector.sector_name}}\">\n                            {{sector.sector_code | uppercase}} ({{sector.sector_name}})\n                          </div>\n                        </div>\n                        <div class=\"middle-facility\">\n                          <div class=\"bar-container\">\n                            <div class=\"bar-5\" *ngIf=\"sector.safety_score_stars === 5\" [style.width.%]=\"sector.safety_score\"></div>\n                            <div class=\"bar-4\" *ngIf=\"sector.safety_score_stars === 4\" [style.width.%]=\"sector.safety_score\"></div>\n                            <div class=\"bar-3\" *ngIf=\"sector.safety_score_stars === 3\" [style.width.%]=\"sector.safety_score\"></div>\n                            <div class=\"bar-2\" *ngIf=\"sector.safety_score_stars === 2\" [style.width.%]=\"sector.safety_score\"></div>\n                            <div class=\"bar-1\" *ngIf=\"sector.safety_score_stars === 1\" [style.width.%]=\"sector.safety_score\"></div>\n                          </div>\n                        </div>\n                        <div class=\"side-score-facility right\">\n                          <div>{{sector.safety_score}}</div>\n                        </div>\n                      </div>\n                      <div>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      <span class=\"heading-faq\">SCHOOLS</span>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      </div>\n                      <div class=\"row no-gutters\"  *ngFor=\"let sector of sectorSearchResults\">\n                        <div class=\"side-facility\">\n                          <div data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{sector.sector_name}}\">\n                            {{sector.sector_code | uppercase}} ({{sector.sector_name}})</div>\n                        </div>\n                        <div class=\"middle-facility\">\n                          <div class=\"bar-container\">\n                            <div class=\"bar-5\" *ngIf=\"sector.school_score_stars === 5\" [style.width.%]=\"sector.school_score\"></div>\n                            <div class=\"bar-4\" *ngIf=\"sector.school_score_stars === 4\" [style.width.%]=\"sector.school_score\"></div>\n                            <div class=\"bar-3\" *ngIf=\"sector.school_score_stars === 3\" [style.width.%]=\"sector.school_score\"></div>\n                            <div class=\"bar-2\" *ngIf=\"sector.school_score_stars === 2\" [style.width.%]=\"sector.school_score\"></div>\n                            <div class=\"bar-1\" *ngIf=\"sector.school_score_stars === 1\" [style.width.%]=\"sector.school_score\"></div>\n                          </div>\n                        </div>\n                        <div class=\"side-score-facility right\">\n                          <div>{{sector.school_score}}</div>\n                        </div>\n                      </div>\n                      <div>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      <span class=\"heading-faq\">TRAVEL</span>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      </div>\n                      <div class=\"row no-gutters\"  *ngFor=\"let sector of sectorSearchResults\">\n                        <div class=\"side-facility\">\n                          <div data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{sector.sector_name}}\">\n                            {{sector.sector_code | uppercase}} ({{sector.sector_name}})</div>\n                        </div>\n                        <div class=\"middle-facility\">\n                          <div class=\"bar-container\">\n                            <div class=\"bar-5\" *ngIf=\"sector.travel_score_stars === 5\" [style.width.%]=\"sector.travel_score\"></div>\n                            <div class=\"bar-4\" *ngIf=\"sector.travel_score_stars === 4\" [style.width.%]=\"sector.travel_score\"></div>\n                            <div class=\"bar-3\" *ngIf=\"sector.travel_score_stars === 3\" [style.width.%]=\"sector.travel_score\"></div>\n                            <div class=\"bar-2\" *ngIf=\"sector.travel_score_stars === 2\" [style.width.%]=\"sector.travel_score\"></div>\n                            <div class=\"bar-1\" *ngIf=\"sector.travel_score_stars === 1\" [style.width.%]=\"sector.travel_score\"></div>\n                          </div>\n                        </div>\n                        <div class=\"side-score-facility right\">\n                          <div>{{sector.travel_score}}</div>\n                        </div>\n                      </div>\n                      <div>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      <span class=\"heading-faq\">FACILITIES</span>\n                      <hr style=\"border:3px solid #f1f1f1\">\n                      </div>\n                      <div class=\"row no-gutters\"  *ngFor=\"let sector of sectorSearchResults\">\n                        <div class=\"side-facility\">\n                          <div data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{sector.sector_name}}\">\n                            {{sector.sector_code | uppercase}} ({{sector.sector_name}})</div>\n                        </div>\n                        <div class=\"middle-facility\">\n                          <div class=\"bar-container\">\n                            <div class=\"bar-5\" *ngIf=\"sector.facilities_score_stars === 5\" [style.width.%]=\"sector.facilities_score\"></div>\n                            <div class=\"bar-4\" *ngIf=\"sector.facilities_score_stars === 4\" [style.width.%]=\"sector.facilities_score\"></div>\n                            <div class=\"bar-3\" *ngIf=\"sector.facilities_score_stars === 3\" [style.width.%]=\"sector.facilities_score\"></div>\n                            <div class=\"bar-2\" *ngIf=\"sector.facilities_score_stars === 2\" [style.width.%]=\"sector.facilities_score\"></div>\n                            <div class=\"bar-1\" *ngIf=\"sector.facilities_score_stars === 1\" [style.width.%]=\"sector.facilities_score\"></div>\n                          </div>\n                        </div>\n                        <div class=\"side-score-facility right\">\n                          <div>{{sector.facilities_score}}</div>\n                        </div>\n                      </div>\n                      <!-- End progress bars -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End modal -->\n\n\n<!-- FAQ Modal -->\n<div class=\"modal fadeOutUp\" id=\"faqModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"faqModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"faqModalTitle\">FAQ</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"no-gutters\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-md-12 no-gutters\">\n              <div class=\"search col-md-12 no-gutters\">\n                <div class=\"\" >\n                  <span class=\"heading-faq\">What is Clozer?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Clozer is a platform to help home buyers find a suitable area to settle down based on personal preferences.\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                  <span class=\"heading-faq\">How is this different from Rightmove or Zoopla then?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Rightmove and Zoopla are platforms where you go search for properties once you know where you want to live.\n                      Clozer is few stages prior to that. We help you identify areas that might be suitable and then use this to find properties using Rightmove or Zoopla.\n                      <br>\n\n                      Clozer helps answer questions such as-\n                      <i>\n                      \"I work in Reading and my partner works in London Canary Wharf. We have a 2 year old. Our maximum budget is $600,000.\n                        What areas should we consider assuming both of us dont want to spend more than 45 mins traveling to work?\"</i>\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                  <span class=\"heading-faq\">But I could ask my friends or colleagues and shortlist areas?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Yes, that is an option. But if you get 15 recommendations, how do you isloate personal bias and look at these areas objectively?\n                      How do you know you are not missing areas that could be better suited for you and your family?\n\n\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                  <span class=\"heading-faq\">How should I use Clozer?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Tell Clozer where you work (or some reference postcode), your budget and your maximum commute time/distance.\n\n                      Clozer will shortlist areas & sectors and rank them based on a score calculated using several attributes.\n\n                      The score and the shortlisted areas can change if you modify your search parameters. This is because Clozer evaluates and scores individual areas by comparing against all shortlisted areas.\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                  <span class=\"heading-faq\">How is this Clozer Score calculated?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Assume for your search criteria, Clozer has shortlisted 10 areas.\n                      An independent score for these 10 areas is calculated using factors such as House Prices, Crime, Travel, Schools and\n                      Facilities (high street shops, gas stations, grocery stores, etc.).\n                      The scoring is relative (i.e) the scoring is specific to these 10 areas and is used to rank the suitability\n                      of the 20 areas based on your search criteria.\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                  <span class=\"heading-faq\">What do you mean by relative ranking/scoring?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      Assume you change your search criteria (eg: increase travel time) and now we have 15 areas. These 15 areas are compared and a relative score is assigned.\n                      If an area previously had a score of 200, it could drop because another newly found area is better.\n                      This helps Clozer rank and provide suggestions most suited to you.\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                  <span class=\"heading-faq\">What is the maximum Clozer score for an area?</span>\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-md-12\">\n                      500\n                    </div>\n                  </div>\n                  <hr style=\"border:3px solid #f1f1f1\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End modal -->\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_SearchModel__ = __webpack_require__("./src/app/model/SearchModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_area_service__ = __webpack_require__("./src/app/services/search-area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core_services__ = __webpack_require__("./node_modules/@agm/core/services.js");
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
    function SearchComponent(searchAreaService, router, mapsApiLoader, zone, wrapper) {
        var _this = this;
        this.searchAreaService = searchAreaService;
        this.router = router;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.priceRange = [];
        this.time = [];
        this.distance = [];
        this.searchModel = new __WEBPACK_IMPORTED_MODULE_1__model_SearchModel__["a" /* SearchModel */]();
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.mapsApiLoader.load().then(function () {
            _this.geocoder = new google.maps.Geocoder();
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.hasLoaded = false;
        this.isLoading = false;
        this.sectorLoaded = false;
        this.sectorLoading = false;
        this.showDetails = false;
        this.showMap = true;
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
        this.searchModel.timeToTravel = this.time[1];
        this.searchModel.distanceToTravel = this.distance[1];
        this.searchModel.travelMode = 'any';
        this.searchModel.houseType = 'H';
        this.modes = [
            { name: 'Train', value: 'train', checked: true },
            { name: 'Bus', value: 'bus', checked: false },
            { name: 'Cycle', value: 'cycle', checked: false },
            { name: 'Car', value: 'car', checked: false },
            { name: 'Walk', value: 'walk', checked: false }
        ];
        this.locs =
            [
                { 'lat': 51.4151862, 'lng': 0.07603349999999409 },
                { 'lat': 51.4414439, 'lng': 0.07603349999999409 }
            ];
        this.iconUrl = {
            url: '../../../assets/img/logo/icon.png',
            scaledSize: {
                height: 20,
                width: 20
            }
        };
    };
    SearchComponent.prototype.resetFields = function () {
        this.searchModel.minPrice = this.priceRange[0];
        this.searchModel.maxPrice = 650000;
        this.searchModel.timeToTravel = this.time[1];
        this.searchModel.distanceToTravel = this.distance[1];
        this.searchModel.travelMode = 'any';
        this.searchModel.workPostcode = '';
        this.searchModel.homePostcode = '';
        this.searchModel.houseType = 'H';
    };
    SearchComponent.prototype.showAreaDetails = function (areaCode) {
        var infowindow = new google.maps.InfoWindow({});
        infowindow.setContent(areaCode);
    };
    SearchComponent.prototype.getAreaSearchResults = function () {
        var _this = this;
        this.isLoading = true;
        this.hasLoaded = false;
        this.areaSearchResults = [];
        this.transformPostcode(this.searchModel.homePostcode);
        setTimeout(function () {
            _this.findLocation(_this.searchModel.homePostcode);
            _this.searchAreaService.getAreaDetails(_this.searchModel).subscribe(function (areaDetails) {
                _this.areaSearchResults = areaDetails;
                _this.isLoading = false;
                _this.hasLoaded = true;
            });
        });
    };
    SearchComponent.prototype.findLocation = function (address) {
        var _this = this;
        if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                // decompose the result
                if (results[0].geometry.location) {
                    _this.location = { 'lat': results[0].geometry.location.lat(),
                        'lng': results[0].geometry.location.lng() };
                    _this.location.viewport = results[0].geometry.viewport;
                }
                //  this.map.triggerResize();
            }
            else {
                // alert("Sorry, this search produced no results.");
            }
        });
    };
    SearchComponent.prototype.getSectorSearchResults = function (areaDetail) {
        var _this = this;
        this.searchModel.areaCode = areaDetail.area_code;
        this.sectorSearchResults = [];
        this.sectorLoading = true;
        this.sectorLoaded = false;
        this.displayedColumns = ['areaName', 'totalScore'];
        setTimeout(function () {
            _this.searchAreaService.getSectorDetails(_this.searchModel).subscribe(function (sectorDetails) {
                _this.sectorLoading = false;
                _this.sectorLoaded = true;
                _this.compareByArea = true;
                _this.showDetails = true;
                _this.seachCriteria = 'View by Features';
                _this.mapTitle = 'Hide Map';
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
            });
        });
    };
    SearchComponent.prototype.transformPostcode = function (postcode) {
        postcode = postcode.replace(/\s/g, '');
        this.searchModel.homePostcode = postcode.substring(0, postcode.length - 3) + ' ' + postcode.substring(postcode.length - 3);
        return (postcode.substring(0, postcode.length - 3) + ' ' + postcode.substring(postcode.length - 3));
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
    SearchComponent.prototype.toggleMap = function () {
        if (this.showMap) {
            this.mapTitle = 'Show Map';
            this.checkedMap = '';
            this.showMap = false;
        }
        else {
            this.mapTitle = 'Hide Map';
            this.checkedMap = 'checked';
            this.showMap = true;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_search_area_service__["a" /* SearchAreaService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["d" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core_services__["a" /* GoogleMapsAPIWrapper */]])
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

module.exports = "<!--<div class=\"video\">-->\n  <!--<div class=\"embed-responsive embed-responsive-4by3\">-->\n    <!--<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6vZ0iqUS6sg?rel=0\" allowfullscreen></iframe>-->\n  <!--</div>-->\n<!--</div>-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 mr-auto ml-auto\">\n        <h4 class=\"title-about\">Let's get you Clozer</h4>\n        <h5 class=\"description\">\n          Clozer helps you find the best location to settle down based on your preferences.\n          Tell Clozer a reference postcode (eg: work), your travel preferences and your budget and a few more details - Clozer does the rest for you.\n          Find your ideal location in a matter of clicks.\n          So, are you ready?\n        </h5>\n        <!--<br>-->\n        <!--<a  class=\"btn btn-danger btn-round\" [ngx-scroll-to]=\"'#search'\">See Clozer in action</a>-->\n      </div>\n    </div>\n    <br/><br/>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"info\">\n          <div class=\"icon icon-danger\">\n            <i class=\"nc-icon nc-atom\"></i>\n          </div>\n          <div class=\"description\">\n            <h5 class=\"info-title\">Clozer Score</h5>\n            <p>\n              Locate your ideal neighbourhood based on Clozer scores - an efficient ranking algorithm using factors such as safety, schools, facilities, travel and more\n            </p>\n            <!--<a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>-->\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"info\">\n          <div class=\"icon icon-danger\">\n            <i class=\"nc-icon nc-zoom-split\"></i>\n          </div>\n          <div class=\"description\">\n            <h5 class=\"info-title\">Search</h5>\n            <p class=\"description\">Use a reference postcode (eg work) to find areas based on budget, distance and travel preferences  </p>\n            <!--<a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>-->\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"info\">\n          <div class=\"icon icon-danger\">\n            <i class=\"nc-icon nc-chart-pie-36\"></i>\n          </div>\n          <div class=\"description\">\n            <h5 class=\"info-title\">Analyse</h5>\n            <p>Compare postal sectors across areas and analyse suggested options to narrow down your search</p>\n            <!--<a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>-->\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"info\">\n          <div class=\"icon icon-danger\">\n            <i class=\"nc-icon nc-settings\"></i>\n          </div>\n          <div class=\"description\">\n            <h5 class=\"info-title no-top-margin\">Personalise</h5>\n            <p>Choose what matters to you and your loved ones - schools, travel, medical facilities, etc.\n              Your search.....personalised!</p>\n            <!--<a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>-->\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <!--<div class=\"row \">-->\n      <!--<div class=\"col-md-8 mr-auto ml-auto\">-->\n        <!--<h4 class=\"title-about\">What Clozer can do..</h4>-->\n      <!--</div>-->\n    <!--</div>-->\n  </div>\n\n<!--<div class=\"video\">-->\n<!--<div class=\"embed-responsive embed-responsive-4by3\">-->\n<!--<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/rCrVCm-qdNE\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>-->\n<!--</div>-->\n<!--</div>-->\n\n\n"

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
        //console.log('Handling errors');
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
                total_score: 350,
                ref_postcode_lat: 51.409156,
                ref_postcode_lng: 0.054646
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
                total_score: 375,
                ref_postcode_lat: 51.409156,
                ref_postcode_lng: 0.054646
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
                total_score: 400,
                ref_postcode_lat: 51.409156,
                ref_postcode_lng: 0.054646
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
                total_score: 350,
                ref_postcode_lat: 51.409156,
                ref_postcode_lng: 0.054646
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
                total_score: 375,
                ref_postcode_lat: 51.409156,
                ref_postcode_lng: 0.054646
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
                total_score: 400,
                ref_postcode_lat: 51.409156,
                ref_postcode_lng: 0.054646
            }];
        this.serverStr = this.getAppServer();
    }
    SearchAreaService.prototype.getAppServer = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].appServer;
    };
    SearchAreaService.prototype.getAreaDetails = function (searchModel) {
        //console.log('in service ' + searchModel.minPrice + ':' + searchModel.maxPrice + ':' + searchModel.homePostcode + ':' + searchModel.workPostcode
        //+ ':' + searchModel.timeToTravel + ':' + searchModel.distanceToTravel + ':' + searchModel.travelMode);
        // return of(this.searchAreaModel);
        return this.http.get(this.serverStr +
            '/getAreaDetails?work_post_code=' + encodeURIComponent(searchModel.homePostcode) +
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
        //console.log('in service ' + searchModel.minPrice + ':' + searchModel.maxPrice + ':' + searchModel.homePostcode + ':' + searchModel.workPostcode);
        // return of(this.searchSectorModel);
        // return of (null);
        return this.http.get(this.serverStr +
            '/getSectorDetails?work_post_code=' + encodeURIComponent(searchModel.homePostcode) +
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
    appServer: 'https://pettai-rap.herokuapp.com',
    mapKey: 'AIzaSyCxS2trHOjgbAMnJsJZfjK14NKJ75eDj44'
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