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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/schedule-appointment/schedule-appointment.component */ "./src/app/components/schedule-appointment/schedule-appointment.component.ts");
/* harmony import */ var _components_view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/view-appointment/view-appointment.component */ "./src/app/components/view-appointment/view-appointment.component.ts");
/* harmony import */ var _components_calender_calender_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/calender/calender.component */ "./src/app/components/calender/calender.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/help/help.component */ "./src/app/components/help/help.component.ts");



/* My route imports */







/* Service imports */


var routes = [
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'generate', component: _components_calender_calender_component__WEBPACK_IMPORTED_MODULE_9__["CalenderComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'schedule', component: _components_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleAppointmentComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'view', component: _components_view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_8__["ViewAppointmentComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'help', component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contentContainer {\r\n    padding-top: 1em;\r\n    padding-right: 3%;\r\n    padding-bottom: 1em;\r\n    padding-left: 1em;\r\n    min-height:90vh;\r\n}\r\n\r\n#entry {\r\n    background-image: url(\"https://pbs.twimg.com/media/EU3DTpiUYAEGu1-.jpg\");\r\n    min-height: 100vh; /*change to match background image height*/\r\n    background-repeat: repeat-x;\r\n    /* background-color: #424242; */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdFQUF3RTtJQUN4RSxpQkFBaUIsRUFBRSwwQ0FBMEM7SUFDN0QsMkJBQTJCO0lBQzNCLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgbWluLWhlaWdodDo5MHZoO1xyXG59XHJcblxyXG4jZW50cnkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0VVM0RUcGlVWUFFR3UxLS5qcGdcIik7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLypjaGFuZ2UgdG8gbWF0Y2ggYmFja2dyb3VuZCBpbWFnZSBoZWlnaHQqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjsgKi9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div *ngIf=\"authService.loggedIn()\" class=\"row\">\r\n  <div class=\"col-md-2\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n  <div class=\"col-md-10\">\r\n    <div id=\"contentContainer\">\r\n        <ng-flash-message></ng-flash-message>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!authService.loggedIn()\" id=\"entry\">\r\n  <div class=\"container\">\r\n      <ng-flash-message></ng-flash-message>\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n<!--Footer-->\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_calender_calender_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/calender/calender.component */ "./src/app/components/calender/calender.component.ts");
/* harmony import */ var _components_calender_header_calender_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/calender-header/calender-header.component */ "./src/app/components/calender-header/calender-header.component.ts");
/* harmony import */ var _modals_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modals/modal */ "./src/app/modals/modal.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/view-appointment/view-appointment.component */ "./src/app/components/view-appointment/view-appointment.component.ts");
/* harmony import */ var _components_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/schedule-appointment/schedule-appointment.component */ "./src/app/components/schedule-appointment/schedule-appointment.component.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/help/help.component */ "./src/app/components/help/help.component.ts");
/* harmony import */ var _components_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/forbidden/forbidden.component */ "./src/app/components/forbidden/forbidden.component.ts");





/* Calender Stuff */




/*Components*/







/*Services*/















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _components_calender_calender_component__WEBPACK_IMPORTED_MODULE_21__["CalenderComponent"],
                _components_calender_header_calender_header_component__WEBPACK_IMPORTED_MODULE_22__["CalenderHeaderComponent"],
                _modals_modal__WEBPACK_IMPORTED_MODULE_23__["Modal"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["SidebarComponent"],
                _components_view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_26__["ViewAppointmentComponent"],
                _components_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_27__["ScheduleAppointmentComponent"],
                _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_28__["ScheduleComponent"],
                _components_help_help_component__WEBPACK_IMPORTED_MODULE_29__["HelpComponent"],
                _components_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_30__["ForbiddenComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_19__["NgFlashMessagesModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__["adapterFactory"],
                }),
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_16__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"], _services_appointment_service__WEBPACK_IMPORTED_MODULE_18__["AppointmentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [_modals_modal__WEBPACK_IMPORTED_MODULE_23__["Modal"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/calender-header/calender-header.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/calender-header/calender-header.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"d-flex flex-row-reverse\" *ngIf=\"hourBlockToggle\">\r\n  <div class=\"\">\r\n    <div class=\"input-group mb-3\">\r\n      <div class=\"input-group-prepend\">\r\n        <label class=\"input-group-text\" for=\"duration\">Appointment Length</label>\r\n      </div>\r\n      <select class=\"custom-select\" name=\"Duration\" id=\"duration\" \r\n        (change)=\"hourBlockChange.emit($event.target.value)\"\r\n      >\r\n        <option value=\"2\">30mins</option>\r\n        <option value=\"1\">1hr</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"viewDateChange.next(viewDate)\"\r\n      >\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"viewDateChange.next(viewDate)\"\r\n      >\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"viewDateChange.next(viewDate)\"\r\n      >\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4 text-center\">\r\n    <h3>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4 text-right\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"viewChange.emit(CalendarView.Month)\"\r\n        [class.active]=\"view === CalendarView.Month\"\r\n      >\r\n        Month\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"viewChange.emit(CalendarView.Week)\"\r\n        [class.active]=\"view === CalendarView.Week\"\r\n      >\r\n        Week\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"viewChange.emit(CalendarView.Day)\"\r\n        [class.active]=\"view === CalendarView.Day\"\r\n      >\r\n        Day\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/calender-header/calender-header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/calender-header/calender-header.component.ts ***!
  \*************************************************************************/
/*! exports provided: CalenderHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderHeaderComponent", function() { return CalenderHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");



var CalenderHeaderComponent = /** @class */ (function () {
    function CalenderHeaderComponent() {
        this.locale = 'en';
        this.hourBlock = 2;
        this.hourBlockToggle = false;
        this.hourBlockChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalenderHeaderComponent.prototype, "view", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], CalenderHeaderComponent.prototype, "viewDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalenderHeaderComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalenderHeaderComponent.prototype, "hourBlock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalenderHeaderComponent.prototype, "hourBlockToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalenderHeaderComponent.prototype, "hourBlockChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalenderHeaderComponent.prototype, "viewChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalenderHeaderComponent.prototype, "viewDateChange", void 0);
    CalenderHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mwl-calendar-header',
            template: __webpack_require__(/*! ./calender-header.component.html */ "./src/app/components/calender-header/calender-header.component.html"),
        })
    ], CalenderHeaderComponent);
    return CalenderHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/calender/calender.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/calender/calender.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cal-day-selected,\r\n.cal-day-selected:hover {\r\n    background-color: #32a852 !important;\r\n}\r\n\r\n.cal-event-removed {\r\n    background-color: #bf000a !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWxlbmRlci9jYWxlbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsZW5kZXIvY2FsZW5kZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWwtZGF5LXNlbGVjdGVkLFxyXG4uY2FsLWRheS1zZWxlY3RlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJhODUyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYWwtZXZlbnQtcmVtb3ZlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmYwMDBhICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/calender/calender.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/calender/calender.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create Appointments</h2>\r\n<p>Current Capacity: {{appointmentsScheduledTotal}}/{{appointmentsTotal}} available</p>\r\n\r\n<div class=\"container\">\r\n  <mwl-calendar-header \r\n    [(view)]=\"view\" \r\n    [(viewDate)]=\"viewDate\"\r\n    [(hourBlock)]=\"hourBlock\"\r\n    [hourBlockToggle] = \"true\"\r\n  >\r\n  </mwl-calendar-header>\r\n\r\n  <div class=\"text-center\" style=\"margin-bottom: 20px;\">\r\n    <button type=\"button\" class=\"btn btn-lg\" (click)=\"onSubmit(mytemplate)\" style=\"background-color: blue; color: white;\">Submit Availability</button>\r\n  </div>\r\n\r\n  <div [ngSwitch]=\"view\">\r\n    <mwl-calendar-month-view\r\n      *ngSwitchCase=\"'month'\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n    >\r\n    </mwl-calendar-month-view>\r\n    <mwl-calendar-week-view\r\n      *ngSwitchCase=\"'week'\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [hourSegments] = \"hourBlock\"\r\n      [dayStartHour]=\"8\"\r\n      [dayEndHour]=\"17\"\r\n      (beforeViewRender)=\"beforeWeekOrDayViewRender($event)\"\r\n      (hourSegmentClicked)=\"hourSegmentClicked($event.date)\"\r\n      (eventClicked)=\"eventClicked($event)\"\r\n      [refresh]=\"refresh\"\r\n    >\r\n    </mwl-calendar-week-view>\r\n    <mwl-calendar-day-view\r\n      *ngSwitchCase=\"'day'\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      (hourSegmentClicked)=\"clickedDate = $event.date\"\r\n      [dayStartHour]=\"8\"\r\n      [dayEndHour]=\"23\"\r\n      [hourSegments] = \"hourBlock\"\r\n      (eventClicked)=\"eventClicked($event)\"\r\n      [refresh]=\"refresh\"\r\n    >\r\n    </mwl-calendar-day-view>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/calender/calender.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/calender/calender.component.ts ***!
  \***********************************************************/
/*! exports provided: CalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderComponent", function() { return CalenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _modals_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modals/modal */ "./src/app/modals/modal.ts");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

//CalenderComponent








var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CalenderComponent = /** @class */ (function () {
    function CalenderComponent(dialog, aptSrv, authSrv, router) {
        var _this = this;
        this.dialog = dialog;
        this.aptSrv = aptSrv;
        this.authSrv = authSrv;
        this.router = router;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Week;
        this.viewDate = new Date();
        this.hourBlock = 2;
        this.events = [];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.facultyID = "";
        this.aptDates = new Array();
        this.aptDatesSet = new Set();
        this.canceledDates = [];
        this.canceledDatesSet = new Set();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.canceledDates.push(event);
                    var dt = event.start.getTime();
                    _this.canceledDatesSet.add(dt);
                    _this.data = event;
                    if ('duration' in _this.data && _this.data.duration == "1.00") {
                        _this.canceledDatesSet.add(new Date(dt + 1800000).getTime()); //30 mins to ms
                    }
                    _this.events = _this.events.filter(function (e) { return e !== event; });
                }
            }
        ];
    }
    CalenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get faculty ID
        var u = this.authSrv.getUser();
        if ('FacultyID' in u && u.FacultyID) {
            this.facultyID = u.FacultyID;
        }
        else {
            this.router.navigate(['/']);
            return;
        }
        if (this.facultyID) {
            this.aptSrv.getAppointments({
                FacultyID: this.facultyID
            }).subscribe(function (data) {
                _this.appointmentsScheduledTotal = 0;
                _this.appointmentsTotal = 0;
                _this.data = data;
                if ('appointments' in data) {
                    for (var _i = 0, _a = _this.data.appointments; _i < _a.length; _i++) {
                        var apt = _a[_i];
                        var color = colors.yellow;
                        if (apt.Status === 'Scheduled') {
                            color = colors.blue;
                            _this.appointmentsScheduledTotal++;
                        }
                        _this.appointmentsTotal++;
                        var st = new Date(apt.StartTime);
                        st.setHours(st.getHours() - st.getTimezoneOffset() / 60);
                        var endTime = new Date(st);
                        endTime.setMinutes(endTime.getMinutes() + (apt.Duration * 60));
                        _this.events.push({
                            start: new Date(st),
                            end: endTime,
                            title: " ID# " + apt.ID + ', Room ' + apt.Location,
                            color: color,
                            actions: _this.actions,
                            id: apt.ID,
                            professor: apt.FacultyID,
                            student: apt.StudentID,
                            location: apt.Location.trim(),
                            duration: apt.Duration
                        });
                    }
                }
                _this.refresh.next();
            });
        }
    };
    CalenderComponent.prototype.eventClicked = function (_a) {
        var event = _a.event;
        this.data = event;
        var st = this.aptSrv.fmtDate(this.data.start);
        var et = this.aptSrv.fmtDate(this.data.end);
        this.dialog.open(_modals_modal__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
            data: {
                start: st,
                end: et,
                title: "Appointment",
                status: (this.data.student ? "Scheduled" : "Available"),
                location: this.data.location ? this.data.location : "(unspecified)",
                view: 'view'
            }
        });
    };
    CalenderComponent.prototype.beforeWeekOrDayViewRender = function (event) {
        this.hourColumns = event.hourColumns;
        this.addSelectedDayViewClass();
    };
    CalenderComponent.prototype.hourSegmentClicked = function (date) {
        var dt = date.getTime();
        if (dt > Date.now()) {
            if (this.aptDatesSet.has(dt)) {
                this.aptDatesSet.delete(dt);
            }
            else if (!this.canceledDatesSet.has(dt)) {
                this.aptDatesSet.add(dt);
            }
            // draw selections 
            this.selectedDayViewDate = date;
            this.addSelectedDayViewClass();
            this.aptDates.push(date);
        }
        else {
            console.log("Invalid date time");
        }
    };
    CalenderComponent.prototype.onSubmit = function () {
        var _this = this;
        var aptStr = [];
        for (var _i = 0, _a = Array.from(this.aptDatesSet); _i < _a.length; _i++) {
            var apt = _a[_i];
            var d = new Date(parseInt(apt));
            var s = this.aptSrv.fmtAppointment(d, (this.hourBlock == 1 ? 60 : 30));
            aptStr.push(s);
        }
        var dialogRef = this.dialog.open(_modals_modal__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
            data: {
                view: 'make',
                appointments: aptStr,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //post
            if (result) {
                var room = typeof result.room !== "undefined" && result.room ? result.room : "";
                _this.aptSrv.postAvailability(_this.aptDatesSet, _this.canceledDates, _this.facultyID, (_this.hourBlock == 1 ? 1.0 : 0.5), room).subscribe(function (data) {
                    if (data.success) {
                        _this.events = [];
                        _this.canceledDates = [];
                        _this.aptDatesSet.clear();
                        _this.canceledDatesSet.clear();
                        _this.appointmentsScheduledTotal = 0;
                        _this.appointmentsTotal = 0;
                    }
                    _this.aptSrv.getAppointments({
                        FacultyID: _this.facultyID
                    }).subscribe(function (data) {
                        _this.data = data;
                        if ('appointments' in data) {
                            //if array and if length > 1 
                            for (var _i = 0, _a = _this.data.appointments; _i < _a.length; _i++) {
                                var apt = _a[_i];
                                var color = colors.yellow;
                                if (apt.Status === 'Scheduled') {
                                    color = colors.blue;
                                    _this.appointmentsScheduledTotal++;
                                }
                                _this.appointmentsTotal++;
                                var st = new Date(apt.StartTime);
                                st.setHours(st.getHours() - st.getTimezoneOffset() / 60);
                                var endTime = new Date(st);
                                endTime.setMinutes(endTime.getMinutes() + (apt.Duration * 60));
                                _this.events.push({
                                    start: st,
                                    end: endTime,
                                    title: 'Room ' + apt.Location,
                                    color: color,
                                    actions: _this.actions,
                                    id: apt.ID,
                                    professor: apt.FacultyID,
                                    student: apt.StudentID,
                                    location: apt.Location.trim(),
                                    duration: apt.Duration
                                });
                            }
                        }
                        _this.refresh.next();
                    });
                });
            }
        });
    };
    CalenderComponent.prototype.addSelectedDayViewClass = function () {
        var _this = this;
        this.hourColumns.forEach(function (column) {
            column.hours.forEach(function (hourSegment) {
                hourSegment.segments.forEach(function (segment) {
                    delete segment.cssClass;
                    if (_this.aptDatesSet.has(segment.date.getTime())) {
                        segment.cssClass = 'cal-day-selected';
                    }
                    //part of deleted group
                    if (_this.canceledDatesSet.has(segment.date.getTime())) {
                        segment.cssClass = 'cal-event-removed';
                    }
                });
            });
        });
    };
    CalenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-availability',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./calender.component.html */ "./src/app/components/calender/calender.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./calender.component.css */ "./src/app/components/calender/calender.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_appointment_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], CalenderComponent);
    return CalenderComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:1em;\">\r\n    <h2>Dashboard</h2>\r\n</div>\r\n<div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/forbidden/forbidden.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/forbidden/forbidden.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yYmlkZGVuL2ZvcmJpZGRlbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/forbidden/forbidden.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/forbidden/forbidden.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>403</h1>\r\n<h3>Forbidden</h3>\r\n\r\n<p>\r\n  You are not authorized to view the current URL.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/forbidden/forbidden.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/forbidden/forbidden.component.ts ***!
  \*************************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/components/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.css */ "./src/app/components/forbidden/forbidden.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./src/app/components/help/help.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/help/help.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#helpContainer {\r\n    min-height: 90vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVscENvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/help/help.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/help/help.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"helpContainer\">\r\n  <div class=\"\" style=\"margin-top: 1em;\">\r\n    <h2>Help</h2>\r\n  </div>\r\n  <div style=\"margin-top: 1em;\">\r\n    <p>\r\n      Contact us at <a href=\"#\">torroapts@torro.edu</a> or submit a help ticket below.\r\n    </p>\r\n  </div>\r\n  <div style=\"width:75%;\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"formGroupExampleName\"><b>Name</b></label>\r\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleName\" placeholder=\"Name\" value=\"{{name}}\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"formGroupExampleEmail\"><b>Email</b></label>\r\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleEmail\" placeholder=\"Email\" value=\"{{email}}\">\r\n      </div>\r\n      <div style=\"margin-bottom:10px;\"><b>What can we help you with today?</b></div>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"radio1\" value=\"1\" checked>\r\n        <label class=\"form-check-label\" for=\"radio1\">\r\n          General Question\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"radio2\" value=\"2\">\r\n        <label class=\"form-check-label\" for=\"radio2\">\r\n          Feature request\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"radio3\" value=\"3\">\r\n        <label class=\"form-check-label\" for=\"radio3\">\r\n          Bug report\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"radio4\" value=\"4\">\r\n        <label class=\"form-check-label\" for=\"radio4\">\r\n          My account\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"radio5\" value=\"5\">\r\n        <label class=\"form-check-label\" for=\"radio5\">\r\n          Other\r\n        </label>\r\n      </div>\r\n      <br>\r\n      <div class=\"form-group\">\r\n        <label for=\"messageTA\"><b>Message</b></label>\r\n        <textarea class=\"form-control\" id=\"messageTA\" rows=\"3\"></textarea>\r\n      </div>\r\n      <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit Ticket</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/help/help.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var HelpComponent = /** @class */ (function () {
    function HelpComponent(authSrv) {
        this.authSrv = authSrv;
    }
    HelpComponent.prototype.ngOnInit = function () {
        var user = this.authSrv.getUser();
        this.name = user.FirstName.trim() + " " + user.LastName.trim();
        this.email = user.Email.trim();
    };
    HelpComponent.prototype.onSubmit = function () {
        alert("You ticket has been submitted. A Torro team staff member will contact you shortly.");
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/components/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/components/help/help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-md-5\" style=\"text-align: center;\">\n            <img src=\"https://www.csudh.edu/Assets/csudh-sites/brand/images/2018-06-15-Athletics-Secondary-Logo.png\"/>\n        </div>\n        <div class=\"col-md-7\">\n            <h2 class=\"page-header\">Login</h2>\n            <form (submit)=\"onLoginSubmit()\">\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n            </div>\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n            </div>\n            <div class=\"text-right\">\n                <a href=\"#\">Forgot Password</a>\n            </div>\n            <div class=\"text-center\">\n                <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n            </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(ngFlashMessageService, authService, router) {
        this.ngFlashMessageService = ngFlashMessageService;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            Email: this.email,
            Password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            _this.data = data;
            if (_this.data.success) {
                _this.authService.storeUserData(_this.data.token, _this.data.user);
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ['Login in Successful'],
                    dismissible: true,
                    timeout: 3000,
                    type: 'success'
                });
                window.location.href = window.location.origin + "/dashboard";
                //this.router.navigate(['/dashboard']);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: [_this.data.msg],
                    dismissible: true,
                    timeout: 3000,
                    type: 'danger'
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#userName {\r\n    /* font-size: large; */\r\n    padding-right: 10px;\r\n}\r\n\r\n#userName i {\r\n    font-size: x-large;\r\n    padding-right: 5px;\r\n}\r\n\r\n#toroHeader {\r\n    font-size: large;\r\n    vertical-align: middle;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    font-weight: bold;\r\n    color: #850038;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VzZXJOYW1lIHtcclxuICAgIC8qIGZvbnQtc2l6ZTogbGFyZ2U7ICovXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jdXNlck5hbWUgaSB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiN0b3JvSGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjODUwMDM4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-light bg-light\">\r\n    <div class=\"container-fluid\">\r\n        <a class=\"\" href=\"\\\">\r\n          <img width=\"150px\" src=\"https://www.csudh.edu/Assets/csudh-sites/brand/images/2018-06-18-csudh-logo-mark-on-white.png\" />\r\n          <div class=\"navbar-brand\" id=\"toroHeader\">Toro Scheduler</div>\r\n        </a>\r\n        <form class=\"d-flex\">\r\n            <!-- Register will likey be removed if using google login-->\r\n            <button *ngIf=\"!authService.loggedIn()\" class=\"btn btn-outline-success me-2\" type=\"button\" [routerLink]=\"['/register']\">Register</button>\r\n            <button *ngIf=\"!authService.loggedIn()\" class=\"btn btn-outline-dark me-2\" type=\"button\" [routerLink]=\"['/login']\">Login</button>\r\n\r\n            <div *ngIf=\"authService.loggedIn()\" id=\"userName\">\r\n              <i class=\"fas fa-user-circle\"></i> \r\n              {{lastname}}, {{firstname}}\r\n            </div>\r\n            <button *ngIf=\"authService.loggedIn()\" class=\"btn btn-outline-dark me-2\" type=\"button\" (click)=\"onLogoutClick()\">Logout</button>\r\n        </form>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(ngFlashMessageService, authService, router) {
        this.ngFlashMessageService = ngFlashMessageService;
        this.authService = authService;
        this.router = router;
        this.lastname = "";
        this.firstname = "";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var user = this.authService.getUser();
        if (user) {
            this.lastname = 'LastName' in user ? user.LastName.trim() : "";
            this.firstname = 'FirstName' in user ? user.FirstName.trim() : "";
        }
        var userType = this.authService.getType();
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.ngFlashMessageService.showFlashMessage({
            messages: ['You are now logged out'],
            dismissible: true,
            timeout: 3000,
            type: 'success'
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class='page-header'>{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"row\">\n        <div class=\"col-md-4\" style=\"text-align: center;\">\n            <img src=\"https://www.csudh.edu/Assets/csudh-sites/brand/images/2018-06-15-Athletics-Secondary-Logo.png\"/>\n        </div>\n        <div class=\"col-md-8\">\n            <h2 class=\"page-header\">Create an Account!</h2>\n            <form (submit)=\"onRegisterSubmit()\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 form-group\">\n                        <label>First Name</label>\n                        <input type=\"text\" [(ngModel)]=\"firstname\" name=\"firstname\" class=\"form-control\">\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                        <label>Last Name</label>\n                        <input type=\"text\" [(ngModel)]=\"lastname\" name=\"lastname\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                <div class=\"col-md-6 form-group\">\n                    <label>ID #</label>\n                    <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\">\n                </div>\n                <div class=\"col-md-6 form-group\" style=\"margin-top:30px;\">\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"type\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"student\">\n                        <label class=\"form-check-label\" for=\"inlineRadio1\">Student</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"type\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"faculty\">\n                        <label class=\"form-check-label\" for=\"inlineRadio2\">Faculty</label>\n                    </div>\n                </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Email</label>\n                    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label>Password</label>\n                    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n                </div>\n                <div class=\"row\">\n                <div class=\"col text-center\">\n                    <input type=\"submit\" class=\"btn btn-primary\" value=\"Register Account\" style=\"width:50%; padding:10px; margin-top:10px;\">\n                </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, ngFlashMessageService, authService, router) {
        this.validateService = validateService;
        this.ngFlashMessageService = ngFlashMessageService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            FirstName: this.firstname,
            LastName: this.lastname,
            Id: this.id,
            Type: this.type,
            Email: this.email,
            Password: this.password,
            StudentID: null,
            FacultyID: null,
        };
        //required fields
        if (!this.validateService.validateRegister(user)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ["Please complete all fields to register"],
                dismissible: true,
                timeout: false,
                type: 'danger'
            });
            return false;
        }
        if (!this.validateService.validateEmail(user.Email)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Please enter a valid email'],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
            return false;
        }
        if (user.Type == "faculty") {
            user.FacultyID = user.Id;
        }
        else {
            user.StudentID = user.Id;
        }
        // register user
        this.authService.registerUser(user).subscribe(function (resdata) {
            _this.data = resdata;
            if (_this.data.success) {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ['You are now registered, You may now login'],
                    dismissible: true,
                    timeout: 3000,
                    type: 'success'
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ['Error: Something went wrong, Please try again later'],
                    dismissible: true,
                    timeout: 3000,
                    type: 'danger'
                });
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/schedule-appointment/schedule-appointment.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/schedule-appointment/schedule-appointment.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#scheduleAptContainer {\r\n    margin-top: 1em;\r\n}\r\n\r\n#noAppointmentText {\r\n    margin-top: 1em;\r\n    display: unset;\r\n    text-align: center;\r\n}\r\n\r\n#noAppointmentText p {\r\n    margin-top: 1em !important;\r\n}\r\n\r\n.form-control {\r\n    width: 90% !important;\r\n}\r\n\r\n.aptRow {\r\n    /* border-bottom: 1px solid #e9e9e9;\r\n    margin-bottom: 1em; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS1hcHBvaW50bWVudC9zY2hlZHVsZS1hcHBvaW50bWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7eUJBQ3FCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS1hcHBvaW50bWVudC9zY2hlZHVsZS1hcHBvaW50bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NjaGVkdWxlQXB0Q29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuI25vQXBwb2ludG1lbnRUZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbm9BcHBvaW50bWVudFRleHQgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcHRSb3cge1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07ICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/schedule-appointment/schedule-appointment.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/schedule-appointment/schedule-appointment.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" id=\"scheduleAptContainer\">\r\n  <h2>Schedule an Appointment</h2>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 form-group\" style=\"padding: 1.5em;\">\r\n    <label for=\"professors\">Faculty: </label>\r\n    <select class=\"form-control\" id=\"professors\" [(ngModel)]=\"selectedFaculty\" (change)=\"facultyChange()\">\r\n      <option value=\"\"></option>\r\n      <option *ngFor=\"let fac of faculty\" \r\n          [value]=\"fac.FacultyID\" \r\n      >\r\n        {{fac.LastName}}, {{fac.FirstName}}\r\n      </option>\r\n    </select>\r\n\r\n    <div *ngIf=\"!noApts && selectedFaculty.length > 0, else elseBlock\">\r\n      <br> <!--Change this to a row-->\r\n      <label for=\"aptDate\">Date: </label>\r\n      <select class=\"form-control\" id=\"aptDate\" [(ngModel)]=\"selectedDay\" (change)=\"dateChange()\">\r\n        <option value=\"\"></option>\r\n        <option *ngFor=\"let date of availableDatesSet\" \r\n            [value]=\"date\"\r\n        >\r\n          {{date}}\r\n        </option>\r\n      </select>\r\n  \r\n      <br> <!--Change this to a row-->\r\n      <label for=\"aptTime\">Time: </label>\r\n      <select class=\"form-control\" id=\"aptTime\" [(ngModel)]=\"selectedTime\" (change)=\"timeChange()\">\r\n        <option value=\"\"></option>\r\n        <option *ngFor=\"let time of availableTimes\" \r\n            [value]=\"time\"\r\n        >\r\n          {{time}}\r\n        </option>\r\n      </select>\r\n\r\n      <hr>\r\n\r\n      <div *ngFor=\"let dets of aptDetails\" class=\"row aptRow\">\r\n        <div class=\"col-md-9\">\r\n          <div><b>{{dets.faculty}}</b></div>\r\n          <div>{{dets.start}} - {{dets.end}}</div>\r\n          <div>{{dets.duration}} mins</div>\r\n          <div>Room {{dets.location}}</div>\r\n          <hr>\r\n        </div>        \r\n        <div class=\"col-md-3\">\r\n          <button class=\"btn btn-info btn-sm\" (click)=\"scheduleApt(dets.id)\">Schedule</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <ng-template #elseBlock>\r\n      <div id=\"noAppointmentText\">\r\n        <p>No Appointments Available.</p>\r\n      </div>\r\n    </ng-template>\r\n    \r\n  </div>\r\n\r\n  <div class=\"col-md-8\" style=\"padding: 2em; border: 1px solid black\">\r\n    <app-schedule\r\n      [events]=\"events\"\r\n      [eventClicked]=\"eventClicked\"\r\n      [notifier]=\"childNotifier\"\r\n    ></app-schedule>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/schedule-appointment/schedule-appointment.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/schedule-appointment/schedule-appointment.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ScheduleAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleAppointmentComponent", function() { return ScheduleAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _modals_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modals/modal */ "./src/app/modals/modal.ts");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var ScheduleAppointmentComponent = /** @class */ (function () {
    function ScheduleAppointmentComponent(dialog, aptSrv, authSrv) {
        this.dialog = dialog;
        this.aptSrv = aptSrv;
        this.authSrv = authSrv;
        this.events = [];
        this.actions = [];
        this.availableTimes = [];
        this.selectedFaculty = "";
        this.availableDates = [];
        this.availableDatesSet = new Set();
        this.noApts = false;
        this.childNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ScheduleAppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var u = this.authSrv.getUser();
        if ('StudentID' in u) {
            this.studentID = u.StudentID;
        }
        //get available faculty.
        this.aptSrv.getFaculty().subscribe(function (data) {
            _this.data = data;
            _this.faculty = [];
            if (_this.data.success) {
                for (var _i = 0, _a = _this.data.faculty; _i < _a.length; _i++) {
                    var f = _a[_i];
                    _this.faculty.push({
                        FacultyID: f.FacultyID,
                        FirstName: f.FirstName.trim(),
                        LastName: f.LastName.trim()
                    });
                }
            }
        });
    };
    ScheduleAppointmentComponent.prototype.eventClicked = function (args) {
        if ('event' in args) {
            this.data = args.event;
            var st = this.aptSrv.fmtDate(this.data.start);
            var et = this.aptSrv.fmtDate(this.data.end);
            var dialogRef = this.dialog.open(_modals_modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
                data: {
                    start: st,
                    end: et,
                    title: "Appointment",
                    status: (this.data.student ? "Scheduled" : "Available"),
                    location: this.data.location ? this.data.location : "(unspecified)",
                    view: 'view'
                }
            });
        }
    };
    ScheduleAppointmentComponent.prototype.getAppointments = function (facultyID) {
        var _this = this;
        this.aptSrv.getAppointments({
            FacultyID: facultyID,
            Open: true
        }).subscribe(function (data) {
            _this.data = data;
            if ('appointments' in data) {
                for (var _i = 0, _a = _this.data.appointments; _i < _a.length; _i++) {
                    var apt = _a[_i];
                    var st = new Date(apt.StartTime);
                    st.setHours(st.getHours() - st.getTimezoneOffset() / 60);
                    var endTime = new Date(st);
                    endTime.setMinutes(endTime.getMinutes() + (apt.Duration * 60));
                    if (st.getTime() <= Date.now()) {
                        continue;
                    }
                    _this.events.push({
                        start: st,
                        end: endTime,
                        title: 'Room ' + apt.Location,
                        cssClass: 'cal-event-available',
                        actions: _this.actions,
                        id: apt.ID,
                        professor: apt.FacultyID,
                        student: apt.StudentID,
                        location: apt.Location.trim(),
                        duration: (apt.Duration * 60)
                    });
                    var dateFormated = _this.aptSrv.fmtDate(st, "date");
                    _this.availableDates.push({
                        eventID: apt.ID,
                        d: dateFormated,
                        t: _this.aptSrv.fmtDate(st, "time"),
                        value: st
                    });
                    _this.availableDatesSet.add(dateFormated);
                }
                _this.childNotifier.next(null);
            }
            if (_this.availableDates.length < 1) {
                _this.noApts = true;
            }
        });
    };
    ScheduleAppointmentComponent.prototype.facultyChange = function () {
        this.noApts = false;
        this.events = [];
        this.availableDates = [];
        this.availableDatesSet.clear();
        this.availableTimes = [];
        this.selectedDay = "";
        this.selectedTime = "";
        this.aptDetails = [];
        if (this.selectedFaculty) {
            this.getAppointments(this.selectedFaculty);
        }
    };
    ScheduleAppointmentComponent.prototype.dateChange = function () {
        this.availableTimes = [];
        this.selectedTime = "";
        for (var _i = 0, _a = this.availableDates; _i < _a.length; _i++) {
            var dt = _a[_i];
            if (this.selectedDay === dt.d) {
                this.availableTimes.push(dt.t);
            }
        }
        this.loadAvailableApts();
    };
    ScheduleAppointmentComponent.prototype.timeChange = function () {
        this.loadAvailableApts();
    };
    ScheduleAppointmentComponent.prototype.loadAvailableApts = function () {
        var apts = [];
        var instructor = "";
        for (var _i = 0, _a = this.faculty; _i < _a.length; _i++) {
            var f = _a[_i];
            if (this.selectedFaculty === f.FacultyID) {
                instructor = f.LastName + ", " + f.FirstName;
                break;
            }
        }
        for (var _b = 0, _c = this.availableDates; _b < _c.length; _b++) {
            var apt = _c[_b];
            if (apt.d === this.selectedDay) {
                console.log(this.selectedTime);
                console.log(apt.t);
                if (this.selectedTime && this.selectedTime !== apt.t) {
                    continue;
                }
                var eventX = void 0;
                for (var _d = 0, _e = this.events; _d < _e.length; _d++) {
                    var evt = _e[_d];
                    if (apt.eventID === evt.id) {
                        eventX = evt;
                        break;
                    }
                }
                if (eventX) {
                    var objX = {
                        location: eventX.location ? eventX.location : "(unspecified)",
                        start: this.aptSrv.fmtDate(eventX.start),
                        end: this.aptSrv.fmtDate(eventX.end),
                        faculty: instructor,
                        duration: eventX.duration,
                        id: eventX.id,
                        date: apt.d,
                        startTime: apt.t,
                    };
                    apts.push(objX);
                    //this.refresh.next();
                }
            }
        }
        this.aptDetails = apts;
    };
    ScheduleAppointmentComponent.prototype.scheduleApt = function (aptId) {
        var _this = this;
        var event;
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var ev = _a[_i];
            if (aptId === ev.id) {
                event = ev;
                break;
            }
        }
        if (event) {
            var st = this.aptSrv.fmtDate(event.start);
            var et = this.aptSrv.fmtDate(event.end);
            var dialogRef = this.dialog.open(_modals_modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
                data: {
                    start: st,
                    end: et,
                    title: "Appointment",
                    status: (event.student ? "Scheduled" : "Available"),
                    location: event.location ? event.location : "(unspecified)",
                    view: 'schedule'
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.schedule(aptId); //or event.id
                }
            });
        }
    };
    ScheduleAppointmentComponent.prototype.schedule = function (id) {
        var _this = this;
        if (id) {
            this.aptSrv.scheduleAppointment(id, this.studentID).subscribe(function (data) {
                _this.data = data;
                if (_this.data.success) {
                    alert(_this.data.msg);
                    _this.events = _this.events.filter(function (evt) {
                        return id !== evt.id;
                    });
                    _this.aptDetails = _this.aptDetails.filter(function (apt) {
                        return id !== apt.id;
                    });
                }
                else {
                    alert("No luck, try again later?");
                }
            });
        }
    };
    ScheduleAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule-appointment',
            template: __webpack_require__(/*! ./schedule-appointment.component.html */ "./src/app/components/schedule-appointment/schedule-appointment.component.html"),
            styles: [__webpack_require__(/*! ./schedule-appointment.component.css */ "./src/app/components/schedule-appointment/schedule-appointment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _services_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ScheduleAppointmentComponent);
    return ScheduleAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/components/schedule/schedule.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cal-week-view .cal-time-events .cal-day-column {\r\n    margin-right: 10px;\r\n}\r\n\r\n.cal-week-view .cal-hour {\r\n    width: calc(100% + 10px);\r\n}\r\n\r\n.cal-day-selected,\r\n.cal-day-selected:hover {\r\n    background-color: #32a852 !important;\r\n}\r\n\r\n.cal-event-available {\r\n    background-color: #0066ff !important;\r\n}\r\n\r\n.cal-event-scheduled {\r\n    background-color: #9933ff !important;\r\n}\r\n\r\n.cal-event-removed {\r\n    background-color: #bf000a !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxMHB4KTtcclxufVxyXG5cclxuLmNhbC1kYXktc2VsZWN0ZWQsXHJcbi5jYWwtZGF5LXNlbGVjdGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmE4NTIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhbC1ldmVudC1hdmFpbGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FsLWV2ZW50LXNjaGVkdWxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkzM2ZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYWwtZXZlbnQtcmVtb3ZlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmYwMDBhICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/schedule/schedule.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-calendar-header \r\n  [(view)]=\"view\" \r\n  [(viewDate)]=\"viewDate\"\r\n  [(hourBlock)]=\"hourBlock\"\r\n>\r\n</mwl-calendar-header>\r\n\r\n<div [ngSwitch]=\"view\">\r\n  <mwl-calendar-month-view\r\n    *ngSwitchCase=\"'month'\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n  >\r\n  </mwl-calendar-month-view>\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"'week'\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [hourSegments] = \"hourBlock\"\r\n    [dayStartHour]=\"8\"\r\n    [dayEndHour]=\"17\"\r\n    (beforeViewRender)=\"beforeWeekOrDayViewRender($event)\"\r\n    (eventClicked)=\"eventClicked($event)\"\r\n    [refresh]=\"refresh\"\r\n  >\r\n  </mwl-calendar-week-view>\r\n  <mwl-calendar-day-view\r\n    *ngSwitchCase=\"'day'\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [dayStartHour]=\"8\"\r\n    [dayEndHour]=\"23\"\r\n    [hourSegments] = \"hourBlock\"\r\n    (eventClicked)=\"eventClicked($event)\"\r\n    [refresh]=\"refresh\"\r\n  >\r\n  </mwl-calendar-day-view>\r\n</div>"

/***/ }),

/***/ "./src/app/components/schedule/schedule.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.ts ***!
  \***********************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");






var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(dialog, aptSrv) {
        this.dialog = dialog;
        this.aptSrv = aptSrv;
        this.events = [];
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Week;
        this.viewDate = new Date();
        this.hourBlock = 2;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifier.subscribe(function (data) {
            _this.refreshView();
        });
    };
    ScheduleComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    ScheduleComponent.prototype.beforeWeekOrDayViewRender = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"])
    ], ScheduleComponent.prototype, "notifier", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], ScheduleComponent.prototype, "eventClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ScheduleComponent.prototype, "events", void 0);
    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/components/schedule/schedule.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/components/schedule/schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .sidebar a {\r\n    padding: 15px;\r\n    margin-right: 2em;\r\n    margin-left: 1em;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .sidebar a:hover {\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  .sidebar .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    font-size: 32px;\r\n  }\r\n  \r\n  .openbtn {\r\n    font-size: 26px;\r\n    cursor: pointer;\r\n    background-color: #111;\r\n    color: white;\r\n    padding: 10px 15px;\r\n    border: none;\r\n    text-align: end;\r\n  }\r\n  \r\n  .openbtn:hover {\r\n    background-color: #444;\r\n  }\r\n  \r\n  #main {\r\n    transition: margin-left .5s;\r\n    padding: 16px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciBhIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgLmNsb3NlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcbiAgXHJcbiAgLm9wZW5idG4ge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICB9XHJcbiAgXHJcbiAgLm9wZW5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICB9XHJcbiAgXHJcbiAgI21haW4ge1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidebar\" class=\"sidebar\">\r\n  <button class=\"openbtn\" (click)=\"toogleNav()\">☰ </button>\r\n  <div *ngIf=\"showSidebar\">\r\n    <a [routerLink]=\"['/dashboard']\"><i class=\"fas fa-columns\"></i> Dashboard</a>\r\n    <a *ngIf=\"authService.isFaculty()\" [routerLink]=\"['/generate']\"><i class=\"far fa-calendar-plus\"></i> Add Availability</a>\r\n    <a *ngIf=\"authService.isStudent()\" [routerLink]=\"['/schedule']\"><i class=\"fas fa-calendar-check\"></i> Schedule Appointments</a>\r\n    <a [routerLink]=\"['/view']\"><i class=\"far fa-calendar-alt\"></i> View Appointments</a>\r\n    <a [routerLink]=\"['/help']\"><i class=\"fas fa-info-circle\"></i> Help</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
        this.showSidebar = true;
    }
    SidebarComponent.prototype.toogleNav = function () {
        console.log("What did you expect would happen?");
        this.showSidebar = !this.showSidebar;
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/view-appointment/view-appointment.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/view-appointment/view-appointment.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#scheduleBtn {\r\n    background-color: blueviolet;\r\n}\r\n\r\n#viewAptContainer {\r\n    margin-top: 1em;\r\n}\r\n\r\n#noAppointmentText {\r\n    display: unset;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LWFwcG9pbnRtZW50L3ZpZXctYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aWV3LWFwcG9pbnRtZW50L3ZpZXctYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzY2hlZHVsZUJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG59XHJcblxyXG4jdmlld0FwdENvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbiNub0FwcG9pbnRtZW50VGV4dCB7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/view-appointment/view-appointment.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/view-appointment/view-appointment.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" id=\"viewAptContainer\">\r\n  <h2>View Appointments</h2>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\" style=\"padding: 1.5em;\">\r\n    <!-- Student View -->\r\n    <div *ngIf=\"userType === 'student'\">\r\n      <div>\r\n        <button [routerLink]=\"['/schedule']\" class=\"btn\" id=\"scheduleBtn\" style=\"background-color: rgb(78, 17, 136); color:white;\">Schedule Appointment</button>\r\n      </div>\r\n      <hr>\r\n      <div style=\"margin-top:2em;\">\r\n        <div *ngIf=\"events.length > 0\">\r\n            <div class=\"row\" *ngFor=\"let event of aptDetails\" style=\"margin-top: 10px;\">\r\n              <div class=\"col-md-9\">\r\n                <div><b>Faculty: {{event.professor}}</b></div>\r\n                <div>{{event.facultyEmail}}</div>\r\n                <div>Time: {{event.start}} - {{event.end}}</div>\r\n                <div>Duration: {{event.duration}} mins</div>\r\n                <div>Location: Room {{event.location}}</div>\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-md-3 text-center\">\r\n                <button class=\"btn btn-primary btn-sm\" (click)=\"cancelAppointment(event.id)\">Cancel</button>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"events.length == 0\" class=\"row\" id=\"noAppointmentText\">\r\n          <p>You have no scheduled apointments at this time.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Faculty View -->\r\n    <div *ngIf=\"userType === 'faculty'\">\r\n      <div>\r\n        <div>\r\n          You have <b>{{events.length}}</b> scheduled Appointments.\r\n        </div>\r\n        <br>\r\n        <div *ngIf=\"events.length > 0\">\r\n          <div class=\"row\" *ngFor=\"let event of aptDetails\" style=\"margin-top: 10px;\">\r\n            <div class=\"col-md-9\">\r\n              <div><b>{{event.student}}</b> ID#{{event.studentID}}</div>\r\n              <div>{{event.studentEmail}}</div>\r\n              <div>Time: {{event.start}} - {{event.end}}</div>\r\n              <div>Duration: {{event.duration}} mins</div>\r\n              <div>Location: Room {{event.location}}</div>\r\n              <hr>\r\n            </div>\r\n            <div class=\"col-md-3 text-center\">\r\n              <button class=\"btn btn-primary btn-sm\" (click)=\"cancelAppointment(event.id)\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"events.length == 0\" id=\"noAppointmentText\">\r\n          <p>You have no student scheduled apointments at this time.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- Change header for this view -->\r\n  <div class=\"col-md-8\" style=\"padding: 2em; border: 1px solid black\">\r\n    <app-schedule\r\n      [events]=\"events\"\r\n      [eventClicked]=\"eventClicked\"\r\n      [notifier]=\"childNotifier\"\r\n    ></app-schedule>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/view-appointment/view-appointment.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/view-appointment/view-appointment.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAppointmentComponent", function() { return ViewAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _modals_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modals/modal */ "./src/app/modals/modal.ts");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







var ViewAppointmentComponent = /** @class */ (function () {
    function ViewAppointmentComponent(dialog, aptSrv, authSrv) {
        this.dialog = dialog;
        this.aptSrv = aptSrv;
        this.authSrv = authSrv;
        this.events = [];
        this.actions = [];
        this.childNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.studentID = null;
        this.facultyID = null;
        this.aptDetails = [];
    }
    ViewAppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var u = this.authSrv.getUser();
        this.userType = this.authSrv.getType();
        var aptData = {};
        if ('StudentID' in u && this.userType === "student") {
            this.studentID = u.StudentID;
            aptData.StudentID = u.StudentID;
        }
        else if ('FacultyID' in u && this.userType === "faculty") {
            this.facultyID = u.FacultyID;
            aptData.FacultyID = u.StudentID;
        }
        if (Object.keys(aptData).length === 0) {
            return;
        }
        this.aptSrv.getAppointments(aptData).subscribe(function (data) {
            _this.data = data;
            if ('appointments' in data) {
                //if array and if length > 1 
                for (var _i = 0, _a = _this.data.appointments; _i < _a.length; _i++) {
                    var apt = _a[_i];
                    if (!apt.StudentID) {
                        continue;
                    }
                    var st = new Date(apt.StartTime);
                    st.setHours(st.getHours() - st.getTimezoneOffset() / 60);
                    var endTime = new Date(st);
                    endTime.setMinutes(endTime.getMinutes() + (apt.Duration * 60));
                    var loc = apt.Location.trim() ? apt.Location.trim() : "(unspecified)";
                    _this.events.push({
                        start: st,
                        end: endTime,
                        title: 'Room ' + apt.Location,
                        actions: _this.actions,
                        id: apt.ID,
                        professor: apt.FacultyLastName + ", " + apt.FacultyFirstName,
                        professorID: apt.FacultyID,
                        student: apt.StudentLastName + ", " + apt.StudentFirstName,
                        studentID: apt.StudentID,
                        location: loc,
                        duration: (apt.Duration * 60),
                        studentEmail: apt.StudentEmail,
                        facultyEmail: apt.FacultyEmail
                    });
                    _this.aptDetails.push({
                        start: _this.aptSrv.fmtDate(st),
                        end: _this.aptSrv.fmtDate(endTime),
                        id: apt.ID,
                        professor: apt.FacultyLastName + ", " + apt.FacultyFirstName,
                        professorID: apt.FacultyID,
                        student: apt.StudentLastName + ", " + apt.StudentFirstName,
                        studentID: apt.StudentID,
                        location: loc,
                        duration: (apt.Duration * 60),
                        studentEmail: apt.StudentEmail,
                        facultyEmail: apt.FacultyEmail
                    });
                }
            }
            _this.childNotifier.next(null);
        });
    };
    ViewAppointmentComponent.prototype.eventClicked = function (args) {
        if ('event' in args) {
            this.data = args.event;
            var st = this.aptSrv.fmtDate(this.data.start);
            var et = this.aptSrv.fmtDate(this.data.end);
            this.dialog.open(_modals_modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
                data: {
                    start: st,
                    end: et,
                    title: "Appointment",
                    faculty: this.data.professor,
                    student: this.data.student,
                    status: (this.data.student ? "Scheduled" : "Available"),
                    location: this.data.location ? this.data.location : "(unspecified)",
                    view: 'view'
                }
            });
        }
    };
    ViewAppointmentComponent.prototype.cancelAppointment = function (id) {
        var _this = this;
        if (!id) {
            return alert("Unable to cancel appointment at this time.");
        }
        var event = null;
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var evt = _a[_i];
            if (evt.id === id) {
                event = evt;
                break;
            }
        }
        if (!event) {
            return alert("Unable to cancel appointment at this time.");
        }
        var st = this.aptSrv.fmtDate(event.start);
        var et = this.aptSrv.fmtDate(event.end);
        var dialogRef = this.dialog.open(_modals_modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
            data: {
                start: st,
                end: et,
                title: "Appointment",
                faculty: event.professor,
                location: event.location ? event.location : "(unspecified)",
                view: 'cancel'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.aptSrv.cancelAppointment(id).subscribe(function (data) {
                    //remove from event array
                    _this.events = _this.events.filter(function (evt) {
                        return id !== evt.id;
                    });
                    _this.aptDetails = _this.aptDetails.filter(function (evt) {
                        return id !== evt.id;
                    });
                    //refresh table
                    _this.childNotifier.next(null);
                    alert("Successfully Cancelled appointment");
                });
            }
        });
    };
    ViewAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-appointment',
            template: __webpack_require__(/*! ./view-appointment.component.html */ "./src/app/components/view-appointment/view-appointment.component.html"),
            styles: [__webpack_require__(/*! ./view-appointment.component.css */ "./src/app/components/view-appointment/view-appointment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _services_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], ViewAppointmentComponent);
    return ViewAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/modals/modal-dialog.html":
/*!******************************************!*\
  !*** ./src/app/modals/modal-dialog.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data.view == 'make'\">\r\n  <h2 mat-dialog-title class=\"text-center\">Add Availability</h2>\r\n  <mat-dialog-content class=\"mat-typography\">\r\n\r\n  <div *ngIf=\"data.appointments.length > 0\" class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon1\">Room #</span>\r\n    </div>\r\n    <input [(ngModel)]=\"data.room\" id=\"room\" type=\"text\" class=\"form-control\" aria-label=\"Room\" />\r\n  </div>\r\n  <p>Appointments:</p>\r\n  <ul>\r\n      <li *ngFor=\"let apt of data.appointments\">\r\n          {{ apt }}\r\n      </li>\r\n  </ul>\r\n\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Confirm</button>\r\n  </mat-dialog-actions>\r\n</div>\r\n\r\n<!-- View Appointment -->\r\n<div *ngIf=\"data.view == 'view'\">\r\n  <h3>{{data.title}}</h3>\r\n  <br>\r\n  <p *ngIf=\"data.faculty\">Faculty: {{data.faculty}}</p>\r\n  <p *ngIf=\"data.student\">Student: {{data.student}}</p>\r\n  <p>Start time: {{data.start}}</p>\r\n  <p>End time: {{data.end}}</p>\r\n  <p>Location: Room {{data.location}}</p>\r\n  <p>Status: {{data.status}}</p>\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close>Close</button>\r\n  </mat-dialog-actions>\r\n</div>\r\n\r\n<!-- Schedule Appointment -->\r\n<div *ngIf=\"data.view == 'schedule'\">\r\n  <h3>{{data.title}}</h3>\r\n  <br>\r\n  <p>Start time: {{data.start}}</p>\r\n  <p>End time: {{data.end}}</p>\r\n  <p>Location: Room {{data.location}}</p>\r\n  <p>Status: {{data.status}}</p>\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close>Close</button><!--returns empty string -->\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Schedule</button>\r\n  </mat-dialog-actions>\r\n  <!--cicking outside of modal closes it and returns undefined-->\r\n</div>\r\n\r\n<!-- Cancel Appointment -->\r\n<div *ngIf=\"data.view == 'cancel'\">\r\n  <h3>{{data.title}}</h3>\r\n  <br>\r\n  <p *ngIf=\"data.faculty\">Faculty: {{data.faculty}}</p>\r\n  <p *ngIf=\"data.student\">Student: {{data.student}}</p>\r\n  <p>Start time: {{data.start}}</p>\r\n  <p>End time: {{data.end}}</p>\r\n  <p>Location: {{data.location}}</p>\r\n  <div class=\"form-group green-border-focus\">\r\n    <label for=\"cancelReason\" style=\"vertical-align: top; margin-right: 5px;\">Reason:</label>\r\n    <textarea id=\"cancelReason\" rows=\"2\"></textarea>\r\n  </div>\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close>Close</button>\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Cancel Appointment</button>\r\n  </mat-dialog-actions>\r\n</div>"

/***/ }),

/***/ "./src/app/modals/modal.ts":
/*!*********************************!*\
  !*** ./src/app/modals/modal.ts ***!
  \*********************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/appointment.service */ "./src/app/services/appointment.service.ts");




var Modal = /** @class */ (function () {
    function Modal(data, aptSrv) {
        this.data = data;
        this.aptSrv = aptSrv;
    }
    Modal.prototype.setView = function (s) {
        this.view = s;
    };
    Modal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-content-example-dialog',
            template: __webpack_require__(/*! ./modal-dialog.html */ "./src/app/modals/modal-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _services_appointment_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentService"]])
    ], Modal);
    return Modal;
}());



/***/ }),

/***/ "./src/app/services/appointment.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/appointment.service.ts ***!
  \*************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppointmentService = /** @class */ (function () {
    function AppointmentService(http) {
        this.http = http;
    }
    AppointmentService.prototype.fmtAppointment = function (date, duration) {
        var date2 = new Date(date);
        date2.setMinutes(date.getMinutes() + duration);
        var s = date.toLocaleString('en-US') + " - " + date2.toLocaleString('en-US');
        var d = (duration == 60) ? " (1hr)" : " (30mins)";
        s += d;
        return s;
    };
    AppointmentService.prototype.fmtDate = function (date, type) {
        if (type === void 0) { type = ""; }
        var y = date.getFullYear();
        var mo = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var mi = date.getMinutes();
        var mins = "";
        var ampm = "";
        if (h > 12) {
            h -= 12;
            ampm = "PM";
        }
        else {
            ampm = "AM";
        }
        if (mi < 10) {
            mins = "0" + mi;
        }
        else {
            mins = "" + mi;
        }
        if (type === "date") {
            return mo + "/" + d + "/" + y;
        }
        else if (type === "time") {
            return h + ":" + mins + " " + ampm;
        }
        return mo + "/" + d + "/" + y + " " + h + ":" + mins + " " + ampm;
    };
    AppointmentService.prototype.cancelAppointment = function (aptID) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var data = {
            AppointmentID: aptID
        };
        return this.http.post('http://localhost:3000/api/cancelAppointment', data, httpOptions);
    };
    AppointmentService.prototype.scheduleAppointment = function (aptID, studentID) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var data = {
            AppointmentID: aptID,
            StudentID: studentID
        };
        return this.http.post('http://localhost:3000/api/setAppointment', data, httpOptions);
    };
    AppointmentService.prototype.getAppointments = function (params) {
        var data = {};
        if (typeof params.FacultyID !== "undefined" && params.FacultyID) {
            data.FacultyID = params.FacultyID;
        }
        if (typeof params.StudentID !== "undefined") {
            data.StudentID = params.StudentID;
        }
        if (typeof params.Open !== "undefined" && params.Open) {
            data.Open = params.Open;
        }
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/api/getAppointments', data, httpOptions);
    };
    AppointmentService.prototype.postAvailability = function (dateTimes, removedDT, facultyID, duration, room) {
        var token = localStorage.getItem('id_token');
        var user = JSON.parse(localStorage.getItem('user'));
        var apts = [];
        if (typeof user.FacultyID !== "undefined") {
            for (var _i = 0, _a = Array.from(dateTimes.values()); _i < _a.length; _i++) {
                var dt = _a[_i];
                var date = new Date(dt).toISOString();
                apts.push({
                    Location: room,
                    StartTime: date,
                    FacultyID: facultyID,
                    Duration: duration,
                    Token: token
                });
            }
            if (removedDT.length > 0) {
                for (var _b = 0, removedDT_1 = removedDT; _b < removedDT_1.length; _b++) {
                    var r = removedDT_1[_b];
                    if ('id' in r) {
                        apts.push({
                            ID: r.id,
                            Location: r.location,
                            StartTime: r.start,
                            FacultyID: r.professor,
                            Duration: r.duration
                        });
                    }
                }
            }
        }
        if (apts.length > 0) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return this.http.post('http://localhost:3000/api/createAppointments', apts, httpOptions);
        }
    };
    AppointmentService.prototype.getFaculty = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/api/faculty', {}, httpOptions);
    };
    AppointmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppointmentService);
    return AppointmentService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.userType = null;
        this.isloggedIn = null;
    }
    AuthService.prototype.registerUser = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/api/register', user, httpOptions);
    };
    AuthService.prototype.authenticateUser = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/api/auth', user, httpOptions);
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        // if (this.isloggedIn != null) {
        //   return this.isloggedIn;
        // }
        var myRawToken = localStorage.getItem('id_token');
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        if (myRawToken) {
            var isExpired = helper.isTokenExpired(myRawToken);
            if (!isExpired) {
                return true;
            }
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getUser = function () {
        if (this.user) {
            return this.user;
        }
        var user = localStorage.getItem('user');
        if (user) {
            this.user = JSON.parse(user);
            return this.user;
        }
        return null;
    };
    AuthService.prototype.getType = function () {
        if (this.userType) {
            return this.userType;
        }
        var currentUser = this.getUser();
        if (currentUser) {
            if (currentUser.FacultyID) {
                this.userType = 'faculty';
            }
            else if (currentUser.StudentID) {
                this.userType = 'student';
            }
        }
        return this.userType;
    };
    AuthService.prototype.isFaculty = function () {
        return this.getType() === 'faculty';
    };
    AuthService.prototype.isStudent = function () {
        return this.getType() === 'student';
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        return (user.FirstName != undefined &&
            user.LastName != undefined &&
            user.Id != undefined &&
            user.Email != undefined &&
            user.Password != undefined &&
            user.Type != undefined);
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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

module.exports = __webpack_require__(/*! C:\Users\kevin\Projects\tscheduler\client-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map