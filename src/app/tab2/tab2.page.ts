import { timer, interval } from 'rxjs';
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
  finalSplit = 0;
  numSplits = 0;
  completedSplits = 0;
  speed = 0;
  running = false;
  cumulsplit = [];
  lapsplit = [];
  timedisplay = '';
  time = 0;
  startButton = 'Start';
  splitData = '';
  private subscription;
  public intervallTimer = interval(100);

  ngOnInit() {
    this.predtimestring = this.convertsectoHMS(this.predtimeseconds);
    this.timedisplay = "0.00";

    //Calculate number of splits
    this.numSplits = (parseFloat(this.preddist)-this.firstSplit)/(this.splitDist)+1;
    this.finalSplit = Math.round((this.numSplits-Math.floor(this.numSplits)) * this.splitDist);
    if (this.numSplits-Math.floor(this.numSplits)>0) {
      this.numSplits = Math.floor(this.numSplits)+1;
    }
    
    this.speed = parseFloat(this.preddist)/parseFloat(this.predtimeseconds);

    var splitText = ' Split&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goal&nbsp;&nbsp;&nbsp;&nbsp;Actual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cumul';
    splitText = splitText + "<br>" + this.setToChars(this.firstSplit.toString(),5) + " " + this.setToChars(this.convertsectoHMS(this.firstSplit / this.speed),9);    
    for (let i = 1; i < this.numSplits; i++) {
      if (this.finalSplit && i==this.numSplits-1) {
        splitText = splitText + "<br>" + this.setToChars((this.firstSplit + (i-1) * this.splitDist + this.finalSplit),5).toString() + " " + this.setToChars(this.convertsectoHMS(this.predtimeseconds),9);
      }
      else
      {
        splitText = splitText + "<br>" + this.setToChars((this.firstSplit + i * this.splitDist),5).toString() + " " + this.setToChars(this.convertsectoHMS((this.firstSplit + i * this.splitDist) / this.speed),9);
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
    document.getElementById('firstSplit').innerHTML = this.firstSplit.toString();
    document.getElementById('splitDist').innerHTML = this.firstSplit.toString();

  }

  startTimer() {
    if ((this.running == false)) {
      var d = new Date();
      this.starttime = d.getTime();
      this.running = true;
      this.startButton = 'Split';
      this.completedSplits = 0;
    } else {
      //Run code for adding a split
      this.completedSplits = this.completedSplits + 1;
      if (this.completedSplits == this.numSplits) { 
        this.subscription.unsubscribe();
        this.startButton = "Finished"; 
        this.running = false;
    }
      this.numSplits = (parseFloat(this.preddist)-this.firstSplit)/(this.splitDist)+1;
      this.finalSplit = Math.round((this.numSplits-Math.floor(this.numSplits)) * this.splitDist);
      if (this.numSplits-Math.floor(this.numSplits)>0) {
        this.numSplits = Math.floor(this.numSplits)+1;
      }
    
    this.speed = parseFloat(this.preddist)/parseFloat(this.predtimeseconds);

    //Calculate split times
    this.cumulsplit[this.completedSplits] = this.time;
    if (this.completedSplits==1) {
      this.lapsplit[this.completedSplits] = this.time;
    }
    else
    {
      this.lapsplit[this.completedSplits] = this.time - this.cumulsplit[this.completedSplits - 1];
    }
    var splitText = ' Split&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goal&nbsp;&nbsp;&nbsp;&nbsp;Actual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cumul';
    splitText = splitText + "<br>" + this.setToChars(this.firstSplit.toString(),5) + " " + this.setToChars(this.convertsectoHMS(this.firstSplit / this.speed),9);  
    splitText = splitText + " " + this.setToChars(this.convertsectoHMS(this.lapsplit[1]),9) + " " + this.setToChars(this.convertsectoHMS(this.cumulsplit[1]),9);  
    for (let i = 1; i < this.numSplits; i++) {
      if (this.finalSplit && i==this.numSplits-1) {
        splitText = splitText + "<br>" + this.setToChars((this.firstSplit + (i-1) * this.splitDist + this.finalSplit),5) + " " + this.setToChars(this.convertsectoHMS(this.predtimeseconds),9);
        if (this.completedSplits > i) {
          splitText = splitText + "  " + this.setToChars(this.convertsectoHMS(this.lapsplit[i+1]),9) + " " + this.setToChars(this.convertsectoHMS(this.cumulsplit[i+1]),9);
        }
      }
      else
      {
        splitText = splitText + "<br>" + this.setToChars((this.firstSplit) + i * this.splitDist,5) + " " + this.setToChars(this.convertsectoHMS((this.firstSplit + i * this.splitDist) / this.speed),9);
        if (this.completedSplits > i) {
          splitText = splitText + "  " + this.setToChars(this.convertsectoHMS(this.lapsplit[i+1]),9) + " " + this.setToChars(this.convertsectoHMS(this.cumulsplit[i+1]),9);
        }
      }

    }
    document.getElementById('splitData').innerHTML = splitText;
    }

    this.subscription = this.intervallTimer.subscribe(() => {

      if (this.startButton == "Finished") {
        console.log("Finished: " + this.startButton);
          this.subscription.unsubscribe();
      }

      var n = new Date();
      this.time = (n.getTime() - this.starttime) / 1000;

      if (this.time < 60) {
        this.timedisplay = this.time.toFixed(1).toString();
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
    var milli = date.getMilliseconds();
    milli = Math.floor(milli/100);

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
      strss = '0' + ss + "." + milli;
    } else {
      strss = ss.toString() + "." + milli;
    }

    if (secondvalue < 3600) {
      timeString = mm + ':' + strss;
    } else {
      timeString = strhh + ':' + strmm + ':' + strss;
    }
    return timeString;
  }

  setToChars(txt,digits) {
    var temptxt = txt.toString();
    var txtLength = temptxt.toString().length;
    var numspaces = digits - txtLength;
    for (let i = 0; i < numspaces; i++) {
      temptxt = "&nbsp;" + temptxt;
    }
    return temptxt;
  }
}
