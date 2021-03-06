import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private pickerCtrl: PickerController) {}
  timedata = '00:04:00';
  predtime = 'Predicted finish time: 00:04:00';
  compdist = 1; //selected distance for completed distance
  compunit = 'mi'; //selected unit for completed distance
  compdistance = 1609.344; //completed distance in meters
  preddist = 1609.344;
  numtimedata = 240;
  predrace = '1 Mile';
  average = 0;

  ngOnInit() {
    this.calcRace();
  }
  
  async showBasicPicker() {
    let opts: PickerOptions = {
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
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async (data) => {
      let hr = await picker.getColumn('hr');
      let min = await picker.getColumn('min');
      let sec = await picker.getColumn('sec');
      this.timedata =
        hr.options[hr.selectedIndex].text +
        ':' +
        min.options[min.selectedIndex].text +
        ':' +
        sec.options[sec.selectedIndex].text;
      this.calcRace();
    });
  }

  setCompDist($event) {
    this.compdist = $event.target.value;
    this.calcRace();
  }

  selPredDist(selectedValue: any) {
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

  selUnit(selectedValue: any) {
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
    var cameron =
      ((this.numtimedata / numcompdist) *
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
    } else {
      strhh = hh.toString();
    }
    if (mm < 10) {
      strmm = '0' + mm;
    } else {
      strmm = mm.toString();
    }
    if (ss < 10) {
      strss = '0' + ss;
    } else {
      strss = ss.toString();
    }

    if (this.average < 3600) {
      var timeString = mm + ':' + strss;
    } else {
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
}
