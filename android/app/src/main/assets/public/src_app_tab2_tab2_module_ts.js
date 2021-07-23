(self["webpackChunksplitpace"] = self["webpackChunksplitpace"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 7008:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 2477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 2055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let Tab2Page = class Tab2Page {
    constructor() {
        this.starttime = 0;
        this.compunit = localStorage.getItem('lscompunit');
        this.numtimedata = localStorage.getItem('lsnumtimedata');
        this.preddist = localStorage.getItem('lspreddist');
        this.compdistance = localStorage.getItem('lscompdistance');
        this.compdist = localStorage.getItem('lscompdist');
        this.predrace = localStorage.getItem('lspredrace');
        this.predtimeseconds = localStorage.getItem('lspredtimeseconds');
        this.predtimestring = this.convertsectoHMS(this.predtimeseconds);
        this.splitDist = 400;
        this.firstSplit = 400;
        this.splitDistMeters = 400;
        this.firstSplitMeters = 400;
        this.finalSplit = 0;
        this.finalSplitMeters = 0;
        this.numSplits = 0;
        this.completedSplits = 0;
        this.speed = 0;
        this.running = false;
        this.cumulsplit = [];
        this.lapsplit = [];
        this.timedisplay = '';
        this.time = 0;
        this.startButton = 'Start';
        this.resetButton = 'Reset';
        this.splitData = '';
        this.zerotime = true;
        this.splitunit = "m";
    }
    //intervalTimer = setInterval(drawAll, 20);
    ngOnInit() {
        if (this.splitunit == 'mi') {
            this.splitDistMeters = this.splitDist * 1609.344;
            this.firstSplitMeters = this.firstSplit * 1609.344;
            this.finalSplitMeters = this.finalSplit * 1609.344;
        }
        if (this.splitunit == 'm') {
            this.splitDistMeters = this.splitDist;
            this.firstSplitMeters = this.firstSplit;
            this.finalSplitMeters = this.finalSplit;
        }
        if (this.splitunit == 'km') {
            this.splitDistMeters = this.splitDist * 1000;
            this.firstSplitMeters = this.firstSplit * 1000;
            this.finalSplitMeters = this.finalSplit * 1000;
        }
        this.predtimestring = this.convertsectoHMS(this.predtimeseconds);
        this.timedisplay = "0.00";
        this.firstSplit = parseFloat(document.getElementById('firstSplit').value);
        if (isNaN(this.firstSplit)) {
            this.firstSplit = 400;
        }
        this.splitDist = parseFloat(document.getElementById('splitDist').value);
        if (isNaN(this.splitDist)) {
            this.splitDist = 400;
        }
        //Calculate number of splits
        this.numSplits = (parseFloat(this.preddist) - this.firstSplitMeters) / (this.splitDistMeters) + 1;
        this.finalSplitMeters = Math.round((this.numSplits - Math.floor(this.numSplits)) * this.splitDistMeters);
        if (this.numSplits - Math.floor(this.numSplits) > 0) {
            this.numSplits = Math.floor(this.numSplits) + 1;
        }
        console.log("splitunit: " + this.splitunit);
        console.log("firstsplit: " + this.firstSplit);
        console.log("firstsplitmeters: " + this.firstSplitMeters);
        console.log("splitdist: " + this.splitDist);
        console.log("splitdistmeters: " + this.splitDistMeters);
        this.speed = parseFloat(this.preddist) / parseFloat(this.predtimeseconds);
        var splitText = ' Split&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goal&nbsp;&nbsp;&nbsp;&nbsp;Actual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lap';
        splitText = splitText + "<br>" + this.setToChars(this.firstSplitMeters.toString(), 5) + " " + this.setToChars(this.convertsectoHMS(this.firstSplitMeters / this.speed), 9);
        for (let i = 1; i < this.numSplits; i++) {
            if (this.finalSplitMeters && i == this.numSplits - 1) {
                splitText = splitText + "<br>" + this.setToChars((this.firstSplitMeters + (i - 1) * this.splitDistMeters + this.finalSplitMeters), 5).toString() + " " + this.setToChars(this.convertsectoHMS(this.predtimeseconds), 9);
            }
            else {
                splitText = splitText + "<br>" + this.setToChars((this.firstSplitMeters + i * this.splitDistMeters), 5).toString() + " " + this.setToChars(this.convertsectoHMS((this.firstSplitMeters + i * this.splitDistMeters) / this.speed), 9);
            }
        }
        document.getElementById('splitData').innerHTML = splitText;
    }
    ionViewWillEnter() {
        this.compunit = localStorage.getItem('lscompunit');
        this.numtimedata = localStorage.getItem('lsnumtimedata');
        this.preddist = localStorage.getItem('lspreddist');
        this.compdistance = localStorage.getItem('lscompdistance');
        this.compdist = localStorage.getItem('lscompdist');
        this.predrace = localStorage.getItem('lspredrace');
        this.predtimeseconds = localStorage.getItem('lspredtimeseconds');
        this.predtimestring = this.convertsectoHMS(this.predtimeseconds);
        this.splitDist = 400;
        this.firstSplit = 400;
        document.getElementById('firstSplit').innerHTML = this.firstSplitMeters.toString();
        document.getElementById('splitDist').innerHTML = this.firstSplitMeters.toString();
    }
    selUnit(selectedValue) {
        var event = selectedValue.target.value;
        if (event == 'mi') {
            this.splitunit = 'mi';
            this.splitDistMeters = this.splitDist * 1609.344;
            this.firstSplitMeters = this.firstSplit * 1609.344;
            this.finalSplitMeters = this.finalSplit * 1609.344;
        }
        if (event == 'm') {
            this.splitunit = 'm';
            this.splitDistMeters = this.splitDist;
            this.firstSplitMeters = this.firstSplit;
            this.finalSplitMeters = this.finalSplit;
        }
        if (event == 'km') {
            this.splitunit = 'km';
            this.splitDistMeters = this.splitDist * 1000;
            this.firstSplitMeters = this.firstSplit * 1000;
            this.finalSplitMeters = this.finalSplit * 1000;
        }
        this.ngOnInit();
    }
    resetRace() {
        this.running = false;
        clearInterval(this.intervalTimer);
        this.startButton = "Start";
        this.ngOnInit();
    }
    startTimer() {
        if ((this.running == false)) {
            if (this.startButton == "Finished/Reset") {
                this.startButton = "Start";
                return;
            }
            var d = new Date();
            this.starttime = d.getTime();
            console.log("New start time created");
            this.running = true;
            this.startButton = 'Split';
            this.completedSplits = 0;
            this.ngOnInit();
        }
        else {
            //Run code for adding a split
            this.completedSplits = this.completedSplits + 1;
            if (this.completedSplits == this.numSplits) {
                clearInterval(this.intervalTimer);
                console.log("Interval Timer: " + this.intervalTimer);
                this.startButton = "Finished/Reset";
                this.running = false;
            }
            this.numSplits = (parseFloat(this.preddist) - this.firstSplitMeters) / (this.splitDistMeters) + 1;
            this.finalSplitMeters = Math.round((this.numSplits - Math.floor(this.numSplits)) * this.splitDistMeters);
            if (this.numSplits - Math.floor(this.numSplits) > 0) {
                this.numSplits = Math.floor(this.numSplits) + 1;
            }
            this.speed = parseFloat(this.preddist) / parseFloat(this.predtimeseconds);
            //Calculate split times
            this.cumulsplit[this.completedSplits] = this.time;
            if (this.completedSplits == 1) {
                this.lapsplit[this.completedSplits] = this.time;
            }
            else {
                this.lapsplit[this.completedSplits] = this.time - this.cumulsplit[this.completedSplits - 1];
            }
            var splitText = ' Split&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goal&nbsp;&nbsp;&nbsp;&nbsp;Actual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lap';
            splitText = splitText + "<br>" + this.setToChars(this.firstSplit.toString(), 5) + " " + this.setToChars(this.convertsectoHMS(this.firstSplit / this.speed), 9);
            splitText = splitText + " " + this.setToChars(this.convertsectoHMS(this.cumulsplit[1]), 9) + " " + this.setToChars(this.convertsectoHMS(this.lapsplit[1]), 9);
            for (let i = 1; i < this.numSplits; i++) {
                if (this.finalSplit && i == this.numSplits - 1) {
                    splitText = splitText + "<br>" + this.setToChars((this.firstSplitMeters + (i - 1) * this.splitDistMeters + this.finalSplitMeters), 5) + " " + this.setToChars(this.convertsectoHMS(this.predtimeseconds), 9);
                    if (this.completedSplits > i) {
                        splitText = splitText + "  " + this.setToChars(this.convertsectoHMS(this.cumulsplit[i + 1]), 9) + " " + this.setToChars(this.convertsectoHMS(this.lapsplit[i + 1]), 9);
                    }
                }
                else {
                    splitText = splitText + "<br>" + this.setToChars((this.firstSplitMeters) + i * this.splitDistMeters, 5) + " " + this.setToChars(this.convertsectoHMS((this.firstSplitMeters + i * this.splitDistMeters) / this.speed), 9);
                    if (this.completedSplits > i) {
                        splitText = splitText + "  " + this.setToChars(this.convertsectoHMS(this.cumulsplit[i + 1]), 9) + " " + this.setToChars(this.convertsectoHMS(this.lapsplit[i + 1]), 9);
                    }
                }
            }
            document.getElementById('splitData').innerHTML = splitText;
        }
        this.intervalTimer = setInterval(() => {
            console.log("Timer still running: " + this.intervalTimer);
            if (this.startButton == "Start") {
                this.ngOnInit();
                return;
            }
            if (this.running == false) {
                this.ngOnInit();
                return;
            }
            if (this.startButton == "Finished/Reset") {
                this.running = false;
                clearInterval(this.intervalTimer);
            }
            else {
                var n = new Date();
                this.time = (n.getTime() - this.starttime) / 1000;
                if (this.time < 60) {
                    this.timedisplay = this.time.toFixed(1).toString();
                }
                else if (this.time >= 60 && this.time < 3600) {
                    var minutes = Math.floor(this.time / 60).toString();
                    var seconds = (this.time % 60).toFixed(1).toString();
                    var txtseconds = '';
                    if (seconds.length < 4) {
                        txtseconds = '0' + seconds;
                    }
                    else {
                        txtseconds = seconds;
                    }
                    this.timedisplay = minutes + ':' + txtseconds;
                }
                else if (this.time >= 3600) {
                    var hours = Math.floor(this.time / 3600);
                    var minutes = Math.floor(this.time / 60).toString();
                    var seconds = (this.time % 60).toFixed(1).toString();
                    var txtseconds = '';
                    var txtminutes = '';
                    if (seconds.length < 4) {
                        txtseconds = '0' + seconds;
                    }
                    else {
                        txtseconds = seconds;
                    }
                    if (minutes.length < 4) {
                        txtminutes = '0' + minutes;
                    }
                    else {
                        txtminutes = minutes;
                    }
                    this.timedisplay = hours + ':' + txtminutes + ':' + txtseconds;
                }
            }
        }, 100);
    }
    getDisplayTimer(time) {
        const hours = '0' + Math.floor(time / 3600);
        const minutes = '0' + Math.floor((time % 3600) / 60);
        const seconds = '0' + Math.floor((time % 3600) % 60);
        return {
            hours: { digit1: hours.slice(-2, -1), digit2: hours.slice(-1) },
            minutes: { digit1: minutes.slice(-2, -1), digit2: minutes.slice(-1) },
            seconds: { digit1: seconds.slice(-2, -1), digit2: seconds.slice(-1) },
        };
    }
    convertsectoHMS(secondvalue) {
        var date = new Date(secondvalue * 1000);
        var hh = date.getUTCHours();
        var mm = date.getUTCMinutes();
        var ss = date.getSeconds();
        var milli = date.getMilliseconds();
        milli = Math.floor(milli / 100);
        var strhh;
        var strmm;
        var strss;
        var timeString;
        if (hh < 10) {
            strhh = '0' + hh;
        }
        else {
            strhh = hh.toString();
        }
        if (mm < 10) {
            strmm = '0' + mm;
        }
        else {
            strmm = mm.toString();
        }
        if (ss < 10) {
            strss = '0' + ss + "." + milli;
        }
        else {
            strss = ss.toString() + "." + milli;
        }
        if (secondvalue < 3600) {
            timeString = mm + ':' + strss;
        }
        else {
            timeString = strhh + ':' + strmm + ':' + strss;
        }
        return timeString;
    }
    setToChars(txt, digits) {
        var temptxt = txt.toString();
        var txtLength = temptxt.toString().length;
        var numspaces = digits - txtLength;
        for (let i = 0; i < numspaces; i++) {
            temptxt = "&nbsp;" + temptxt;
        }
        return temptxt;
    }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);



/***/ }),

/***/ 2055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".timerlabel {\n  font-size: 1.3em;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.fixedwidth {\n  font-family: \"Courier New\", Courier, monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSw4Q0FBQTtBQUNKOztBQUVBO0VBQ0ksOENBQUE7QUFDSiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lcmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5maXhlZHdpZHRoIHtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufSJdfQ== */");

/***/ }),

/***/ 2477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title> Timer </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">Timer</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>Goal race: {{ predrace }}<br>Goal time: {{ predtimestring }}</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n            <ion-button expand=\"block\" (click)=\"resetRace()\">\n                {{ resetButton }}\n            </ion-button>\n            <ion-item>\n                <ion-label>First split:</ion-label>\n                <input style=\"max-width: 40% !important;\" type=\"number\" id=\"firstSplit\" value=\"400\" (focusout)=\"ngOnInit()\" matInput>\n            </ion-item>\n            <ion-item>\n                <ion-label>Split distance:</ion-label>\n                <input style=\"max-width: 40% !important;\" type=\"number\" id=\"splitDist\" value=\"400\" (focusout)=\"ngOnInit()\" matInput>\n            </ion-item>\n            <ion-label>Unit</ion-label>\n            <ion-select id=\"splitunit\" value=\"m\" placeholder=\"meters\" (ionChange)=\"selUnit($event)\">\n                <ion-select-option value=\"m\">meters</ion-select-option>\n                <ion-select-option value=\"km\">kilometers</ion-select-option>\n                <ion-select-option selected value=\"mi\">miles</ion-select-option>\n            </ion-select>\n            <ion-button expand=\"block\" (click)=\"startTimer()\">\n                {{ startButton }}\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-item>\n            <ion-label class=\"timerlabel\">{{ timedisplay }}</ion-label>\n        </ion-item>\n    </ion-card>\n\n    <div id=\"splitData\" class=\"fixedwidth\" style=\"overflow-y: scroll; height: 400px\"></div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map