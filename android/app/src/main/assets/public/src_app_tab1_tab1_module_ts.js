"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let Tab1Page = class Tab1Page {
    constructor(pickerCtrl) {
        this.pickerCtrl = pickerCtrl;
        this.timedata = '00:04:00';
        this.predtime = 'Predicted finish time: 00:04:00';
        this.compdist = 1; //selected distance for completed distance
        this.compunit = 'mi'; //selected unit for completed distance
        this.compdistance = 1609.344; //completed distance in meters
        this.preddist = 1609.344;
        this.numtimedata = 240;
        this.predrace = '1 Mile';
        this.average = 0;
    }
    ngOnInit() {
        this.calcRace();
    }
    showBasicPicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let opts = {
                cssClass: 'academy-picker',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    { text: 'Done', cssClass: 'special-done' },
                ],
                columns: [
                    {
                        name: 'hr',
                        options: [
                            { text: '00', value: '00' },
                            { text: '01', value: '01' },
                            { text: '02', value: '02' },
                            { text: '03', value: '03' },
                            { text: '04', value: '04' },
                            { text: '05', value: '05' },
                            { text: '06', value: '06' },
                            { text: '07', value: '07' },
                            { text: '08', value: '08' },
                            { text: '09', value: '09' },
                            { text: '10', value: '10' },
                            { text: '11', value: '11' },
                            { text: '12', value: '12' },
                            { text: '13', value: '13' },
                            { text: '14', value: '14' },
                            { text: '15', value: '15' },
                            { text: '16', value: '16' },
                            { text: '17', value: '17' },
                            { text: '18', value: '18' },
                            { text: '19', value: '19' },
                            { text: '20', value: '20' },
                            { text: '21', value: '21' },
                            { text: '22', value: '22' },
                            { text: '23', value: '23' },
                            { text: '24', value: '24' },
                        ],
                    },
                    {
                        name: 'min',
                        options: [
                            { text: '00', value: '00' },
                            { text: '01', value: '01' },
                            { text: '02', value: '02' },
                            { text: '03', value: '03' },
                            { text: '04', value: '04' },
                            { text: '05', value: '05' },
                            { text: '06', value: '06' },
                            { text: '07', value: '07' },
                            { text: '08', value: '08' },
                            { text: '09', value: '09' },
                            { text: '10', value: '10' },
                            { text: '11', value: '11' },
                            { text: '12', value: '12' },
                            { text: '13', value: '13' },
                            { text: '14', value: '14' },
                            { text: '15', value: '15' },
                            { text: '16', value: '16' },
                            { text: '17', value: '17' },
                            { text: '18', value: '18' },
                            { text: '19', value: '19' },
                            { text: '20', value: '20' },
                            { text: '21', value: '21' },
                            { text: '22', value: '22' },
                            { text: '23', value: '23' },
                            { text: '24', value: '24' },
                            { text: '25', value: '25' },
                            { text: '26', value: '26' },
                            { text: '27', value: '27' },
                            { text: '28', value: '28' },
                            { text: '29', value: '29' },
                            { text: '30', value: '30' },
                            { text: '31', value: '31' },
                            { text: '32', value: '32' },
                            { text: '33', value: '33' },
                            { text: '34', value: '34' },
                            { text: '35', value: '35' },
                            { text: '36', value: '36' },
                            { text: '37', value: '37' },
                            { text: '38', value: '38' },
                            { text: '39', value: '39' },
                            { text: '40', value: '40' },
                            { text: '41', value: '41' },
                            { text: '42', value: '42' },
                            { text: '43', value: '43' },
                            { text: '44', value: '44' },
                            { text: '45', value: '45' },
                            { text: '46', value: '46' },
                            { text: '47', value: '47' },
                            { text: '48', value: '48' },
                            { text: '49', value: '49' },
                            { text: '50', value: '50' },
                            { text: '51', value: '51' },
                            { text: '52', value: '52' },
                            { text: '53', value: '53' },
                            { text: '54', value: '54' },
                            { text: '55', value: '55' },
                            { text: '56', value: '56' },
                            { text: '57', value: '57' },
                            { text: '58', value: '58' },
                            { text: '59', value: '59' },
                        ],
                    },
                    {
                        name: 'sec',
                        options: [
                            { text: '00', value: '00' },
                            { text: '01', value: '01' },
                            { text: '02', value: '02' },
                            { text: '03', value: '03' },
                            { text: '04', value: '04' },
                            { text: '05', value: '05' },
                            { text: '06', value: '06' },
                            { text: '07', value: '07' },
                            { text: '08', value: '08' },
                            { text: '09', value: '09' },
                            { text: '10', value: '10' },
                            { text: '11', value: '11' },
                            { text: '12', value: '12' },
                            { text: '13', value: '13' },
                            { text: '14', value: '14' },
                            { text: '15', value: '15' },
                            { text: '16', value: '16' },
                            { text: '17', value: '17' },
                            { text: '18', value: '18' },
                            { text: '19', value: '19' },
                            { text: '20', value: '20' },
                            { text: '21', value: '21' },
                            { text: '22', value: '22' },
                            { text: '23', value: '23' },
                            { text: '24', value: '24' },
                            { text: '25', value: '25' },
                            { text: '26', value: '26' },
                            { text: '27', value: '27' },
                            { text: '28', value: '28' },
                            { text: '29', value: '29' },
                            { text: '30', value: '30' },
                            { text: '31', value: '31' },
                            { text: '32', value: '32' },
                            { text: '33', value: '33' },
                            { text: '34', value: '34' },
                            { text: '35', value: '35' },
                            { text: '36', value: '36' },
                            { text: '37', value: '37' },
                            { text: '38', value: '38' },
                            { text: '39', value: '39' },
                            { text: '40', value: '40' },
                            { text: '41', value: '41' },
                            { text: '42', value: '42' },
                            { text: '43', value: '43' },
                            { text: '44', value: '44' },
                            { text: '45', value: '45' },
                            { text: '46', value: '46' },
                            { text: '47', value: '47' },
                            { text: '48', value: '48' },
                            { text: '49', value: '49' },
                            { text: '50', value: '50' },
                            { text: '51', value: '51' },
                            { text: '52', value: '52' },
                            { text: '53', value: '53' },
                            { text: '54', value: '54' },
                            { text: '55', value: '55' },
                            { text: '56', value: '56' },
                            { text: '57', value: '57' },
                            { text: '58', value: '58' },
                            { text: '59', value: '59' },
                        ],
                    },
                ],
            };
            let picker = yield this.pickerCtrl.create(opts);
            picker.present();
            picker.onDidDismiss().then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                let hr = yield picker.getColumn('hr');
                let min = yield picker.getColumn('min');
                let sec = yield picker.getColumn('sec');
                this.timedata =
                    hr.options[hr.selectedIndex].text +
                        ':' +
                        min.options[min.selectedIndex].text +
                        ':' +
                        sec.options[sec.selectedIndex].text;
                this.calcRace();
            }));
        });
    }
    setCompDist($event) {
        this.compdist = $event.target.value;
        this.calcRace();
    }
    selPredDist(selectedValue) {
        var event = selectedValue.target.value;
        if (event == '800m') {
            this.predrace = '800m';
            this.preddist = 800;
        }
        if (event == '1000m') {
            this.predrace = '1000m';
            this.preddist = 1000;
        }
        if (event == '1200m') {
            this.predrace = '1200m';
            this.preddist = 1200;
        }
        if (event == '1500m') {
            this.predrace = '1500m';
            this.preddist = 1500;
        }
        if (event == '1600m') {
            this.predrace = '1600m';
            this.preddist = 1600;
        }
        if (event == 'mile') {
            this.predrace = '1 Mile';
            this.preddist = 1609.344;
        }
        if (event == '2000m') {
            this.predrace = '2000m';
            this.preddist = 2000;
        }
        if (event == '3000m') {
            this.predrace = '3000m';
            this.preddist = 3000;
        }
        if (event == '3200m') {
            this.predrace = '3200m';
            this.preddist = 32000;
        }
        if (event == '2mile') {
            this.predrace = '2 Mile';
            this.preddist = 1609.344 * 2;
        }
        if (event == '5000m') {
            this.predrace = '5000m';
            this.preddist = 5000;
        }
        if (event == '10km') {
            this.predrace = '10,000m';
            this.preddist = 10000;
        }
        if (event == '20km') {
            this.predrace = '20,000m';
            this.preddist = 20000;
        }
        if (event == 'half') {
            this.predrace = 'Half Marathon';
            this.preddist = 42195 / 2;
        }
        if (event == 'marathon') {
            this.predrace = 'Marathon';
            this.preddist = 42195;
        }
        if (event == '50km') {
            this.predrace = '50km';
            this.preddist = 50000;
        }
        if (event == '100km') {
            this.predrace = '100km';
            this.preddist = 100000;
        }
        if (event == '100mi') {
            this.predrace = '100mi';
            this.preddist = 1609.344 * 100;
        }
        this.calcRace();
    }
    selUnit(selectedValue) {
        var event = selectedValue.target.value;
        if (event == 'mi') {
            this.compunit = 'mi';
        }
        if (event == 'm') {
            this.compunit = 'm';
        }
        if (event == 'km') {
            this.compunit = 'km';
        }
        this.calcRace();
    }
    calcRace() {
        if (this.compunit == 'mi') {
            this.compdistance = this.compdist * 1609.344;
        }
        if (this.compunit == 'km') {
            this.compdistance = this.compdist * 1000;
        }
        if (this.compunit == 'm') {
            this.compdistance = this.compdist;
        }
        var numcompdist = this.compdistance;
        this.numtimedata = this.convertHHMMSS(this.timedata);
        var reigel = this.numtimedata * Math.pow(this.preddist / numcompdist, 1.06);
        var cameron = ((this.numtimedata / numcompdist) *
            this.preddist *
            (13.49681 -
                0.000030363 * numcompdist +
                835.7114 / Math.pow(numcompdist, 0.7905))) /
            (13.49681 -
                0.000030363 * this.preddist +
                835.7114 / Math.pow(this.preddist, 0.7905));
        this.average = (reigel + cameron) / 2;
        console.log('compunit: ' + this.compunit);
        console.log('timedata: ' + this.numtimedata);
        console.log('preddist: ' + this.preddist);
        console.log('compdist in meters: ' + this.compdistance);
        console.log('compdist: ' + this.compdist);
        console.log('reigel: ' + reigel);
        console.log('cameron: ' + cameron);
        console.log('Average: ' + this.average);
        console.log('Predrace: ' + this.predrace);
        //Store data in local storage
        localStorage.setItem('lscompunit', this.compunit);
        localStorage.setItem('lsnumtimedata', this.numtimedata.toString());
        localStorage.setItem('lspreddist', this.preddist.toString());
        localStorage.setItem('lscompdistance', this.compdistance.toString());
        localStorage.setItem('lscompdist', this.compdist.toString());
        localStorage.setItem('lspredrace', this.predrace);
        localStorage.setItem('lspredtimeseconds', this.average.toString());
        var date = new Date(this.average * 1000);
        var hh = date.getUTCHours();
        var mm = date.getUTCMinutes();
        var ss = date.getSeconds();
        var strhh;
        var strmm;
        var strss;
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
            strss = '0' + ss;
        }
        else {
            strss = ss.toString();
        }
        if (this.average < 3600) {
            var timeString = mm + ':' + strss;
        }
        else {
            var timeString = strhh + ':' + strmm + ':' + strss;
        }
        this.predtime = 'Predicted finish time: ' + timeString;
    }
    convertHHMMSS(hms) {
        console.log('hms: ' + hms);
        var a = hms.split(':'); // split it at the colons
        console.log('a: ' + a);
        // minutes are worth 60 seconds. Hours are worth 60 minutes.
        var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
        console.log('seconds: ' + seconds);
        return seconds;
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PickerController }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".button {\n  font-size: 1.2em;\n  line-height: 1.5;\n}\n\n.predlabel {\n  font-size: 1.3em;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"/Users/iainhunter/Documents/apps/splitpace/src/assets/fonts/Roboto-Light.ttf\");\n}\n\nion-content {\n  font-family: Roboto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esd0ZBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0FBQUoiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5wcmVkbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJzsgLy9UaGlzIGlzIHdoYXQgd2UgYXJlIGdvaW5nIHRvIGNhbGxcbiAgICBzcmM6IHVybCgnL1VzZXJzL2lhaW5odW50ZXIvRG9jdW1lbnRzL2FwcHMvc3BsaXRwYWNlL3NyYy9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZicpO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Prediction\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Predict</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-card>\n\n    <ion-card-header>\n      Completed race\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-list inset>\n\n        <ion-item>\n          <ion-label>Distance:</ion-label>\n          <ion-input type=\"text\" [value]=\"compdist\" (input)=\"setCompDist($event)\"></ion-input>\n          <ion-label>Unit</ion-label>\n          <ion-select id=\"selcompunit\" value=\"mi\" placeholder=\"mile\" (ionChange)=\"selUnit($event)\">\n            <ion-select-option value=\"m\">meters</ion-select-option>\n            <ion-select-option value=\"km\">kilometers</ion-select-option>\n            <ion-select-option selected value=\"mi\">miles</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-button text- slot=\"end\" fill=\"clear\" (click)=\"showBasicPicker()\">{{ timedata }}</ion-button>\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n  \n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n      Predicted race\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-item>\n        <ion-label>Race distance</ion-label>\n        <ion-select id=\"predrace\" value=\"mile\" placeholder=\"1 Mile\" (ionChange)=\"selPredDist($event)\">\n          <ion-select-option value=\"800m\">800m</ion-select-option>\n          <ion-select-option value=\"1000m\">1000m</ion-select-option>\n          <ion-select-option value=\"1200m\">1200m</ion-select-option>\n          <ion-select-option value=\"1500m\">1500m</ion-select-option>\n          <ion-select-option value=\"1600m\">1600m</ion-select-option>\n          <ion-select-option selected value=\"mile\">1 Mile</ion-select-option>\n          <ion-select-option value=\"2000m\">2000m</ion-select-option>\n          <ion-select-option value=\"3000m\">3000m</ion-select-option>\n          <ion-select-option value=\"3200m\">3200m</ion-select-option>\n          <ion-select-option value=\"2mile\">2 Mile</ion-select-option>\n          <ion-select-option value=\"5000m\">5000m</ion-select-option>\n          <ion-select-option value=\"10000m\">10000m</ion-select-option>\n          <ion-select-option value=\"half\">Half Marathon</ion-select-option>\n          <ion-select-option value=\"20km\">20km</ion-select-option>\n          <ion-select-option value=\"marathon\">Marathon</ion-select-option>\n          <ion-select-option value=\"50km\">50km</ion-select-option>\n          <ion-select-option value=\"100km\">100km</ion-select-option>\n          <ion-select-option value=\"100mi\">100 Mile</ion-select-option>\n          </ion-select>\n      </ion-item>\n\n      </ion-card-content>\n      </ion-card>\n\n<ion-card>\n  <ion-item>\n    <ion-label class=\"predlabel\" color=\"primary\">{{ predtime }}</ion-label>\n  </ion-item>\n</ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map