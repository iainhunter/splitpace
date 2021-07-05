import { timer } from 'rxjs';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  starttime = 0;
  compunit = localStorage.getItem('lscompunit');
  numtimedata = localStorage.getItem('lsnumtimedata');
  preddist = localStorage.getItem('lspreddist');
  compdistance = localStorage.getItem('lscompdistance');
  compdist = localStorage.getItem('lscompdist');
  predrace = localStorage.getItem('lspredrace');
  predtimeseconds = localStorage.getItem('lspredtimeseconds');
  predtimestring = this.convertsectoHMS(this.predtimeseconds);
  splitDist = 400;
  firstSplit = 400;

  timedisplay = '';
  time = 0;
  startButton = 'Start';
  splitData = '';

  ngOnInit() {
    var splitText = 'Split     Goal     Actual    Cumul<br>';
    this.predtimestring = this.convertsectoHMS(this.predtimeseconds);

    var splitText = splitText + "    0       1:00.0   1:00.0   1:00.0";
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
    document.getElementById('firstSplit').innerHTML = this.firstSplit.toString();
    document.getElementById('splitDist').innerHTML = this.firstSplit.toString();

  }

  startTimer() {
    var d = new Date();
    this.starttime = d.getTime();
    if ((this.startButton = 'Start')) {
      this.startButton = 'Split';
    } else {
      //Run code for adding a split
    }

    timer(0, 100).subscribe((ec) => {
      var n = new Date();
      this.time = (n.getTime() - this.starttime) / 1000;
      if (this.time < 60) {
        this.timedisplay = this.time.toFixed(1).toString();
        console.log(this.time);
      } else if (this.time >= 60 && this.time < 3600) {
        var minutes = Math.floor(this.time / 60).toString();
        var seconds = (this.time % 60).toFixed(1).toString();
        var txtseconds = '';
        if (seconds.length < 4) {
          txtseconds = '0' + seconds;
        } else {
          txtseconds = seconds;
        }
        this.timedisplay = minutes + ':' + txtseconds;
      } else if (this.time >= 3600) {
        var hours = Math.floor(this.time / 3600);
        var minutes = Math.floor(this.time / 60).toString();
        var seconds = (this.time % 60).toFixed(1).toString();
        var txtseconds = '';
        var txtminutes = '';
        if (seconds.length < 4) {
          txtseconds = '0' + seconds;
        } else {
          txtseconds = seconds;
        }
        if (minutes.length < 4) {
          txtminutes = '0' + minutes;
        } else {
          txtminutes = minutes;
        }
        this.timedisplay = hours + ':' + txtminutes + ':' + txtseconds;
      }
    });

    console.log('compunit: ' + this.compunit);
    console.log('timedata: ' + this.numtimedata);
    console.log('preddist: ' + this.preddist);
    console.log('compdist in meters: ' + this.compdistance);
    console.log('compdist: ' + this.compdist);
    console.log('Predrace: ' + this.predrace);
  }

  getDisplayTimer(time: number) {
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
    var strhh;
    var strmm;
    var strss;
    var timeString;

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

    if (secondvalue < 3600) {
      timeString = mm + ':' + strss;
    } else {
      timeString = strhh + ':' + strmm + ':' + strss;
    }
    return timeString;
  }
}
