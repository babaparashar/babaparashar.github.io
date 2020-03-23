(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.lazy.routing.ts":
/*!*************************************!*\
  !*** ./src/app/app.lazy.routing.ts ***!
  \*************************************/
/*! exports provided: APP_LAZY_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LAZY_ROUTING", function() { return APP_LAZY_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-registration/new-registration.component */ "./src/app/new-registration/new-registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _new_registration_fresher_fresher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-registration/fresher/fresher.component */ "./src/app/new-registration/fresher/fresher.component.ts");
/* harmony import */ var _new_registration_professional_professional_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-registration/professional/professional.component */ "./src/app/new-registration/professional/professional.component.ts");





var APP_LAZY_ROUTE = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "registration", component: _new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_1__["NewRegistrationComponent"] },
    { path: "fresher", component: _new_registration_fresher_fresher_component__WEBPACK_IMPORTED_MODULE_3__["FresherComponent"] },
    { path: "professional", component: _new_registration_professional_professional_component__WEBPACK_IMPORTED_MODULE_4__["ProfessionalComponent"] },
];
var APP_LAZY_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_LAZY_ROUTE, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["NoPreloading"],
});


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_lazy_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.lazy.routing */ "./src/app/app.lazy.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-registration/new-registration.component */ "./src/app/new-registration/new-registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _new_registration_fresher_fresher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-registration/fresher/fresher.component */ "./src/app/new-registration/fresher/fresher.component.ts");
/* harmony import */ var _new_registration_professional_professional_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-registration/professional/professional.component */ "./src/app/new-registration/professional/professional.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_6__["NewRegistrationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _new_registration_fresher_fresher_component__WEBPACK_IMPORTED_MODULE_8__["FresherComponent"],
                _new_registration_professional_professional_component__WEBPACK_IMPORTED_MODULE_9__["ProfessionalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_lazy_routing__WEBPACK_IMPORTED_MODULE_4__["APP_LAZY_ROUTING"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n\n<form [formGroup] =\"loginForm\" class=\"form-group\" (ngSubmit)=\"onSubmit()\" required>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email ID/Username</label>\n    <input type=\"email\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter Email ID/Username\" [email]=\"validateEmail\">\n    <span class=\"ortext\" *ngIf=\"username\" >Please Enter valid credentials</span>\n    \t<!-- <small *ngIf=\"username.errors?.required\" class=\"text-danger\">Email is required</small> -->\n  </div>\n  <div class=\"form-group\"> \n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"exampleInputPassword1\" placeholder=\"Enter Password\">\n    \n  </div>\n  \n  <button type=\"submit\" class=\"btn btn-primary\" rel=\"required\" (click)= \"onSubmit()\" >Login</button>\n \n  \n \n</form>\n<div class=\"orSec\"><span class=\"ortext\">or</span></div>\n<button class=\"btn btn-primary\" routerLink=\"registration\" >Registration Now</button>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb) {
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log(this.loginForm.value);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new-registration/fresher/fresher.component.css":
/*!****************************************************************!*\
  !*** ./src/app/new-registration/fresher/fresher.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-registration/fresher/fresher.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/new-registration/fresher/fresher.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  >\n\t<div *ngIf=\"personal\">\n\t\t<h2>Personal</h2>\n\t\t<form [formGroup]=\"fresherPresonalForm\">\n\t\t\t<div class=\"form-group\" >\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter your full name\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"fresherPresonalForm.controls.name.invalid && fresherPresonalForm.controls.name.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"email\" class=\"form-control\" formControlName=\"emailId\" placeholder=\"Enter your Active email id to receive relevant jobs\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"fresherPresonalForm.controls.emailId.invalid && fresherPresonalForm.controls.emailId.touched\" >emailId is invalid</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Minimum 6 Characters\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"fresherPresonalForm.controls.password.invalid && fresherPresonalForm.controls.password.touched\" >password is invalid</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"mobileNumber\" placeholder=\"Where Requiter can contract you\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"fresherPresonalForm.controls.mobileNumber.invalid && fresherPresonalForm.controls.mobileNumber.touched\" >mobileNumber is invalid</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"currentCity\" placeholder=\"city name\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"fresherPresonalForm.controls.city.invalid && fresherPresonalForm.controls.city.touched\" >city name is invalid</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"file\" class=\"form-control\" formControlName=\"resume\" placeholder=\"upload resume\" required>\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-primary btn-block\"  (click)=\"registerUser()\">Register</button>\n\t\t\t\n\t\t</form>\n\t</div>\n  <div *ngIf=\"education\">\n\t\t<h2>Education</h2>\n\t\t<form [formGroup]=\"fresherEducationForm\">\n      <div class=\"form-group\">\n\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"qualification\" placeholder=\"qualification\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"fresherEducationForm.controls.qualification.invalid && fresherEducationForm.controls.qualification.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"course\" placeholder=\"enter course\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"fresherEducationForm.controls.course.invalid && fresherEducationForm.controls.course.touched\" >this feild is require</small>\n\t\t\t</div>\n      <div class=\"form-group\">\n\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"specialization\" placeholder=\"enter specialization\"required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"fresherEducationForm.controls.specialization.invalid && fresherEducationForm.controls.specialization.touched\" >this feild is require</small>\n\t\t\t</div>      \n      <div class=\"form-group\">\n\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"institute\" placeholder=\"enter university/collage name\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"fresherEducationForm.controls.institute.invalid && fresherEducationForm.controls.institute.touched\" >this feild is require</small>\n\t\t\t</div>\n      <div class=\"form-row\" >\n        <select class=\"form-control\" formControlName=\"courceType\" >\n          <option selected=\"\"value=\"\" disabled >cource type</option>\n          <option>Full Time</option>\n          <option>Part Time</option>\n          <option>Corresspondence</option>\n        </select>&nbsp;&nbsp;&nbsp;\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\t\t\t\t\n\t\t\t<!-- <input type=\"text\" class=\"form-control\" formControlName=\"courceType\" placeholder=\"courceType\" required> -->\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"fresherEducationForm.controls.courceType.invalid && fresherEducationForm.controls.courceType.touched\" >this feild is require</small>\n        <select formControlName=\"passingYear\" class=\"form-control\" >\n              <option disabled=\"\" value=\"\" selected=\"\" aria-multiline=\"false\">passing year</option>\n              <option>2020</option>\n              <option>2019</option>\n              <option>2018</option>\n              <option>2017</option>\n              <option>2016</option>\n              <option>2015</option>\n              <option>2014</option>\n              <option>2013</option>\n              <option>2012</option>\n              <option>2011</option>\n\t\t\t  <option>2010</option>\n\t\t\t  <option>2009</option>\n              <option>2008</option>\n              <option>2007</option>\n\t\t\t  <option>2006</option>\n\t\t\t  <option>2005</option>\n              <option>2004</option>\n              <option>2003</option>\n\t\t\t  <option>2002</option>\n\t\t\t  <option>2001</option>\n              <option>2000</option>\n              <option>1999</option>\n\t\t\t  <option>1998</option>\n\t\t\t  <option>1997</option>\n              <option>1996</option>\n              <option>1995</option>\n              <option>1994</option>\n            </select>\t\t\n\t\t\t<!-- <input type=\"number\" class=\"form-control\" formControlName=\"passingYear\" placeholder=\"passingYear\" required> -->\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"fresherEducationForm.controls.passingYear.invalid && fresherEducationForm.controls.passingYear.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-row\" >\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t<input type=\"button\" class=\"form-control\" class=\"btn btn-primary\" (click)=\"addSkill()\" value=\"addSkill\">\n          </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div formArrayName=\"skills\"\n\t\t\t\t\t*ngFor=\"let skill of fresherEducationForm.controls.skills?.value; let i=index\">\n\t\t\t\t\t<div [formGroupName]=\"i\">\n\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"skillName\" placeholder=\"Add New skillName\"><br>\n        </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <input type=\"text\" class=\"form-control\" formControlName=\"skills\" placeholder=\"skills\"> -->\n\t\t\t\t\t<button class=\"btn btn-primary btn-block\"[disabled]=\"!fresherEducationForm.valid\" (click)=\"addEducationDetail()\">Continue</button>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/new-registration/fresher/fresher.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/new-registration/fresher/fresher.component.ts ***!
  \***************************************************************/
/*! exports provided: FresherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FresherComponent", function() { return FresherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FresherComponent = /** @class */ (function () {
    function FresherComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    FresherComponent.prototype.ngOnInit = function () {
        this.personal = true;
        this.fresherPresonalForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            emailId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            mobileNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            currentCity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            resume: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.fresherEducationForm = this.formBuilder.group({
            qualification: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            course: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            specialization: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            institute: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            courceType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passingYear: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            skills: this.formBuilder.array([])
        });
    };
    FresherComponent.prototype.addSkill = function () {
        var skl = this.fresherEducationForm.controls.skills;
        skl.push(this.formBuilder.group({
            skillName: ""
        }));
    };
    FresherComponent.prototype.registerUser = function () {
        console.log(this.fresherPresonalForm.controls);
        this.personal = false;
        this.education = true;
    };
    FresherComponent.prototype.addEducationDetail = function () {
        console.log(this.fresherEducationForm.controls);
    };
    FresherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fresher',
            template: __webpack_require__(/*! ./fresher.component.html */ "./src/app/new-registration/fresher/fresher.component.html"),
            styles: [__webpack_require__(/*! ./fresher.component.css */ "./src/app/new-registration/fresher/fresher.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FresherComponent);
    return FresherComponent;
}());



/***/ }),

/***/ "./src/app/new-registration/new-registration.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/new-registration/new-registration.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-registration/new-registration.component.html":
/*!******************************************************************!*\
  !*** ./src/app/new-registration/new-registration.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <button type=\"button\" class=\"action-btn fresh\" title=\"I am a Fresher\" routerLink=\"/fresher\">I am a Fresher</button>\n  <p class=\"description\">I have just graduated/I haven't worked after graduation</p>\n  <button type=\"button\"  class=\"action-btn exp\" title=\"I am a Professional\" routerLink=\"/professional\">I am a Professional</button>\n  <p class=\"description\">I have at least 1 month of work experience</p>\n\n"

/***/ }),

/***/ "./src/app/new-registration/new-registration.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/new-registration/new-registration.component.ts ***!
  \****************************************************************/
/*! exports provided: NewRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRegistrationComponent", function() { return NewRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewRegistrationComponent = /** @class */ (function () {
    function NewRegistrationComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    NewRegistrationComponent.prototype.ngOnInit = function () {
    };
    NewRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-registration',
            template: __webpack_require__(/*! ./new-registration.component.html */ "./src/app/new-registration/new-registration.component.html"),
            styles: [__webpack_require__(/*! ./new-registration.component.css */ "./src/app/new-registration/new-registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewRegistrationComponent);
    return NewRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/new-registration/professional/professional.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/new-registration/professional/professional.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-registration/professional/professional.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/new-registration/professional/professional.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n\t<div *ngIf=\"personal\">\n\t\t<h2>Personal </h2>\n\t\t<form [formGroup]=\"professionalUserRegistrationForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"userName\" placeholder=\"enter full name\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"professionalUserRegistrationForm.controls.userName.invalid && professionalUserRegistrationForm.controls.userName.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"email\" class=\"form-control\" formControlName=\"emailId\" placeholder=\"enter emailid\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"professionalUserRegistrationForm.controls.emailId.invalid && professionalUserRegistrationForm.controls.emailId.touched\" >emailId is invalid</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"enter password\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"professionalUserRegistrationForm.controls.password.invalid && professionalUserRegistrationForm.controls.password.touched\" >password is invalid</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"mobileNumber\" placeholder=\"enter mobile number\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"professionalUserRegistrationForm.controls.mobileNumber.invalid && professionalUserRegistrationForm.controls.mobileNumber.touched\" >mobileNumber is invalid</small>\n\t\t\t</div>\n\t\t\t<label>Total work Experience</label>\n\t\t\t<div class=\"form-row\" >\n\t\t\t\t<select formControlName=\"yearExperience\" class=\"form-control\" >\n              <option disabled=\"\" value=\"\" selected=\"\" aria-multiline=\"false\">select</option>\n              <option>0</option>\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n              <option>5+</option>\n              <option>10+</option>\n              <option>15+</option>\n              <option>20+</option>\n              <option>25+</option>\n              <option>30+</option>\n            </select>\n\t\t\t\t<label>Year(s)</label>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"professionalUserRegistrationForm.controls.yearExperience.invalid && professionalUserRegistrationForm.controls.yearExperience.touched\" >Input is invalid</small>\n\t\t\t\t<select formControlName=\"monthExperience\" class=\"form-control\" style=\"width:6cm;\">\n              <option disabled=\"\"  value=\"\"selected=\"\" aria-multiline=\"false\">select</option>\n              <option>0</option>\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n              <option>6</option>\n              <option>7</option>\n              <option>8</option>\n              <option>9</option>\n              <option>10</option>\n              <option>11</option>\n            </select>\n\t\t\t\t<label>Month(s)</label>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"professionalUserRegistrationForm.controls.monthExperience.invalid && professionalUserRegistrationForm.controls.monthExperience.touched\" >Input is invalid</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" style=\"margin-top:1em;\">\n\t\t\t\t<input type=\"file\" class=\"form-control\" formControlName=\"resume\" placeholder=\"upload resume\" required>\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-primary btn-block\" [disabled]=\"!professionalUserRegistrationForm.valid\" (click)=\"registerUser()\">Register</button>\n\t\t</form>\n\t</div>\n\t\n\t<div *ngIf=\"employment\">\n\t\t<h2>Employment</h2>\n\t\t<form [formGroup]=\"employmentForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"designation\" placeholder=\"qualification\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"employmentForm.controls.designation.invalid && employmentForm.controls.designation.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"companyName\" placeholder=\"enter course\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"employmentForm.controls.companyName.invalid && employmentForm.controls.companyName.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<label>Annual Salary</label>\n\t\t\t<div class=\"form-row\" style=\"margin-top: 0.5em;\">\n\t\t\t\t<select formControlName=\"salaryLakhs\" class=\"form-control\" style=\"width:6cm;\">\n              <option disabled=\"\" value=\"\" selected=\"\" aria-multiline=\"false\">select</option>\n              <option>0</option>\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n              <option>5+</option>\n              <option>10+</option>\n              <option>15+</option>\n              <option>20+</option>\n              <option>25+</option>\n              <option>30+</option>\n            </select>&nbsp;&nbsp;&nbsp;\n\t\t\t\t<label>Lakhs</label>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"employmentForm.controls.salaryLakhs.invalid && employmentForm.controls.salaryLakhs.touched\" >Input is invalid</small>\n\t\t\t\t<select formControlName=\"salaryThousands\" class=\"form-control\" style=\"width:6cm;\">\n              <option disabled=\"\" value=\"\" selected=\"\" aria-multiline=\"false\">select</option>\n              <option>5+</option>\n              <option>15+</option>\n              <option>20+</option>\n              <option>25+</option>\n              <option>30+</option>\n              <option>35+</option>\n              <option>40+</option>\n              <option>45+</option>\n              <option>50+</option>\n              <option>55+</option>\n              <option>60+</option>\n              <option>65+</option>\n              <option>70+</option>\n              <option>75+</option>\n              <option>80+</option>\n              <option>85+</option>\n              <option>90+</option>\n              <option>95+</option>\n            </select>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t<label>Thousands</label>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"employmentForm.controls.salaryThousands.invalid && employmentForm.controls.salaryThousands.touched\" >Input is invalid</small>\n\t\t\t</div>\n\t\t\t<label>Working Since</label>\n\t\t\t<div class=\"form-row\" style=\"margin-top: 0.5em;\">\n\t\t\t\t<select formControlName=\"startYear\" class=\"form-control\" style=\"width:4cm;\">\n              <option disabled=\"\" value=\"\" selected=\"\" aria-multiline=\"false\">year</option>\n              <option>2020</option>\n              <option>2019</option>\n              <option>2018</option>\n              <option>2017</option>\n              <option>2016</option>\n              <option>2015</option>\n              <option>2014</option>\n              <option>2013</option>\n              <option>2012</option>\n              <option>2011</option>\n              <option>2010</option>\n            </select>&nbsp;&nbsp;&nbsp;\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"employmentForm.controls.startYear.invalid && employmentForm.controls.startYear.touched\" >Input is invalid</small>\n\t\t\t\t<select formControlName=\"startMonth\" class=\"form-control\" style=\"width:4cm;\">\n              <option disabled=\"\" value=\"\" selected=\"\" aria-multiline=\"false\">month</option>\n              <option>January</option>\n              <option>February</option>\n              <option>March</option>\n              <option>April</option>\n              <option>May</option>\n              <option>June</option>\n              <option>July</option>\n              <option>August</option>\n              <option>September</option>\n              <option>October</option>\n              <option>Navember</option>\n              <option>December</option>\n            </select>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"employmentForm.controls.startMonth.invalid && employmentForm.controls.startMonth.touched\" >Input is invalid</small>\n\t\t\t\t<label> To</label>&nbsp;&nbsp;&nbsp;\n\t\t\t\t<select formControlName=\"endYear\" class=\"form-control\" style=\"width:4cm;\">\n              <option disabled=\"\" value=\"\" selected=\"\" aria-multiline=\"false\">year</option>\n              <option>2020</option>\n              <option>2019</option>\n              <option>2018</option>\n              <option>2017</option>\n              <option>2016</option>\n              <option>2015</option>\n              <option>2014</option>\n              <option>2013</option>\n              <option>2012</option>\n              <option>2011</option>\n              <option>2010</option>\n            </select>&nbsp;&nbsp;&nbsp;\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"employmentForm.controls.endYear.invalid && employmentForm.controls.endYear.touched\" >Input is invalid</small>\n\t\t\t\t<select formControlName=\"endMonth\" class=\"form-control\" style=\"width:4cm;\">\n              <option disabled=\"\" value=\"\" selected=\"\" aria-multiline=\"false\">month</option>\n              <option>January</option>\n              <option>February</option>\n              <option>March</option>\n              <option>April</option>\n              <option>May</option>\n              <option>June</option>\n              <option>July</option>\n              <option>August</option>\n              <option>September</option>\n              <option>October</option>\n              <option>Navember</option>\n              <option>December</option>\n            </select>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"employmentForm.controls.endMonth.invalid && employmentForm.controls.endMonth.touched\" >Input is invalid</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" style=\"margin-top:1em;\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"city\" placeholder=\"city name\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"employmentForm.controls.city.invalid && employmentForm.controls.city.touched\" >Input is invalid</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"noticePeriod\">\n          <option disabled value=\"\" selected=\"\">select duration of notice period</option>\n          <option>15 days or less</option>\n          <option>1 Month</option>\n          <option>2 Months</option>\n          <option>3 Months</option>\n          <option> More than 3 Months</option>\n        </select>\n\t\t\t</div>\n\t\t\t<div class=\"form-row\" style=\"margin-top: 1em;\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"md-form\">\n\t\t\t\t\t\t<input type=\"button\" class=\"form-control\" class=\"btn btn-primary\" (click)=\"addSkill()\" value=\"addSkill\">\n          </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div formArrayName=\"skills\"\n\t\t\t\t\t*ngFor=\"let skill of employmentForm.controls.skills?.value; let i=index\">\n\t\t\t\t\t<div [formGroupName]=\"i\">\n\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"skillName\" placeholder=\"Add New skill\"><br>\n        </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"industry\">\n          <option disabled  value=\"\"selected=\"\">industry</option>\n          <option>Accounting/Finance</option>\n          <option>Animation</option>\n          <option>Banking</option>\n          <option>Construction/Engineering</option>\n          <option>Export/Import</option>\n          <option>Insurance</option>\n          <option>IT-Hardware & Networking</option>\n          <option>IT-Software/Software Services</option>\n          <option>Medical Devices/Equipments</option>\n          <option>Mining</option>\n        </select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"functionalArea\">\n          <option disabled  value=\"\"selected=\"\">functionalArea</option>\n          <option>Accounts/Finance/Tax/CS</option>\n          <option>Agent</option>\n          <option>Banking/Insurance</option>\n          <option>Architecture</option>\n          <option>Engineering Design/R&D</option>\n          <option>Technical Staff/Support</option>\n          <option>IT Software-Client Server</option>\n          <option>IT Software-DBA</option>\n          <option>IT Software-ECommerce</option>\n          <option>IT Software-Embedded</option>\n          <option>IT Software-Middelware</option>\n          <option>IT Software-Mobile</option>\n        </select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"role\">\n          <option disabled value=\"\" selected=\"\">role</option>\n          <option>Software Developer</option>\n          <option>Team Lead/Tech Lead</option>\n          <option>System Analyst</option>\n          <option>Tech Architect</option>\n          <option>Database Architect/Designer</option>\n          <option>DBA</option>\n          <option>Network Admin</option>\n          <option>System Admin</option>\n          <option>Business Analyst</option>\n          <option>QA</option>\n        </select>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<button class=\"btn btn-primary btn-block\"[disabled]=\"!employmentForm.valid\" (click)=\"addEmploymentDetail()\">Continue</button>\n\t\t</form>\n\t</div>\n\n\t<div *ngIf=\"education\">\n\t\t<h2>Education</h2>\n\t\t<form [formGroup]=\"educationForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"qualification\">\n          <option disabled value=\"\"selected=\"\">Highest Qualification</option>\n          <option>Doctrate/PhD</option>\n          <option>Masters/Post-Graduation</option>\n          <option>Graduation/Diploma</option>\n          <option>12th</option>\n          <option>10th</option>\n        </select>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"educationForm.controls.qualification.invalid && educationForm.controls.qualification.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"course\">\n          <option disabled value=\"\" selected=\"\">cource</option>\n          <option>CA</option>\n          <option>CS</option>\n          <option>M.A.</option>\n          <option>M.Com</option>\n          <option>M.Ed</option>\n          <option>M.Tech</option>\n          <option>B.Tech/B.E.</option>\n          <option>B.Com</option>\n          <option>B.Ed</option>\n          <option>Other</option>\n        </select>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"educationForm.controls.course.invalid && educationForm.controls.course.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"specialization\">\n          <option disabled value=\"\" selected=\"\">specialization</option>\n          <option>Anatomy</option>\n          <option>Ayurveda</option>\n          <option>Cardiology</option>\n          <option>Mechanical</option>\n          <option>Computers</option>\n          <option>Civil</option>\n          <option>Electrical</option>\n          <option>Other</option>\n        </select>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"educationForm.controls.specialization.invalid && educationForm.controls.specialization.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"institute\" placeholder=\" university/collage name\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"educationForm.controls.institute.invalid && educationForm.controls.institute.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"courceType\">\n          <option selected=\"\"value=\"\" disabled >select type</option>\n          <option>Full Time</option>\n          <option>Part Time</option>\n          <option>Corresspondence</option>\n        </select>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"employmentForm.controls.courceType.invalid && employmentForm.controls.courceType.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"passingYear\" placeholder=\"passingYear\" required>\n\t\t\t\t<small class=\"form-text text-danger\" *ngIf=\"educationForm.controls.passingYear.invalid && educationForm.controls.passingYear.touched\" >this feild is require</small>\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-primary btn-block\"[disabled]=\"!employmentForm.valid\" (click)=\"addEducationDetail()\">Continue</button>\n\t\t</form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/new-registration/professional/professional.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/new-registration/professional/professional.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfessionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalComponent", function() { return ProfessionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessionalComponent = /** @class */ (function () {
    function ProfessionalComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ProfessionalComponent.prototype.ngOnInit = function () {
        this.personal = true;
        this.professionalUserRegistrationForm = this.formBuilder.group({
            userName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            emailId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobileNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            yearExperience: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            monthExperience: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            resume: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.employmentForm = this.formBuilder.group({
            designation: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companyName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            salaryLakhs: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            salaryThousands: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            startYear: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            startMonth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endYear: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endMonth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            noticePeriod: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            skills: this.formBuilder.array([]),
            industry: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            functionalArea: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.educationForm = this.formBuilder.group({
            qualification: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cource: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            specialization: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            institute: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            courceType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passingYear: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ProfessionalComponent.prototype.addSkill = function () {
        var skl = this.employmentForm.controls.skills;
        skl.push(this.formBuilder.group({
            skillName: ""
        }));
    };
    ProfessionalComponent.prototype.registerUser = function () {
        alert("personal information added successfully!");
        console.log(this.professionalUserRegistrationForm.controls);
        this.personal = false;
        this.employment = true;
        this.education = false;
    };
    ProfessionalComponent.prototype.addEmploymentDetail = function () {
        alert("employmetn detail added successfully!!");
        this.personal = false;
        this.employment = false;
        this.education = true;
    };
    ProfessionalComponent.prototype.addEducationDetail = function () {
        alert("education detail added successfully!");
    };
    ProfessionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-professional',
            template: __webpack_require__(/*! ./professional.component.html */ "./src/app/new-registration/professional/professional.component.html"),
            styles: [__webpack_require__(/*! ./professional.component.css */ "./src/app/new-registration/professional/professional.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfessionalComponent);
    return ProfessionalComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\program files\sd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map