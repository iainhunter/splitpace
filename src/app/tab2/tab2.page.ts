
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
  splitDistMeters = 400;
  firstSplitMeters = 400;
  finalSplit = 0;
  finalSplitMeters = 0;
  numSplits = 0;
  completedSplits = 0;
  speed = 0;
  running = false;
  cumulsplit = [];
  lapsplit = [];
  timedisplay = '';
  time = 0;
  startButton = 'Start';
  resetButton = 'Reset';
  splitData = '';
  private subscription;
  public intervalTimer;
  public myTimer;
  zerotime=true;

//intervalTimer = setInterval(drawAll, 20);

  ngOnInit() {
    this.predtimestring = this.convertsectoHMS(this.predtimeseconds);
    this.timedisplay = "0.00";
    this.firstSplit = parseFloat((<HTMLInputElement>document.getElementById('firstSplit')).value);
    if (isNaN(this.firstSplit)) {this.firstSplit = 400;}
    this.splitDist = parseFloat((<HTMLInputElement>document.getElementById('splitDist')).value);
    if (isNaN(this.splitDist)) {this.splitDist = 400;}
    //Calculate number of splits
    this.numSplits = (parseFloat(this.preddist)-this.firstSplitMeters)/(this.splitDistMeters)+1;
    this.finalSplitMeters = Math.round((this.numSplits-Math.floor(this.numSplits)) * this.splitDistMeters);
    if (this.numSplits-Math.floor(this.numSplits)>0) {
      this.numSplits = Math.floor(this.numSplits)+1;
    }
    
    this.speed = parseFloat(this.preddist)/parseFloat(this.predtimeseconds);

    var splitText = ' Split&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goal&nbsp;&nbsp;&nbsp;&nbsp;Actual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lap';
    splitText = splitText + "<br>" + this.setToChars(this.firstSplitMeters.toString(),5) + " " + this.setToChars(this.convertsectoHMS(this.firstSplitMeters / this.speed),9);    
    for (let i = 1; i < this.numSplits; i++) {
      if (this.finalSplitMeters && i==this.numSplits-1) {
        splitText = splitText + "<br>" + this.setToChars((this.firstSplitMeters + (i-1) * this.splitDistMeters + this.finalSplitMeters),5).toString() + " " + this.setToChars(this.convertsectoHMS(this.predtimeseconds),9);
      }
      else
      {
        splitText = splitText + "<br>" + this.setToChars((this.firstSplitMeters + i * this.splitDistMeters),5).toString() + " " + this.setToChars(this.convertsectoHMS((this.firstSplitMeters + i * this.splitDistMeters) / this.speed),9);
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

  selUnit(selectedValue: any) {
    var event = selectedValue.target.value;
    if (event == 'mi') {
      this.compunit = 'mi';
      this.splitDistMeters = this.splitDist * 1609.344;
      this.firstSplitMeters = this.firstSplit * 1609.344;
      this.finalSplitMeters = this.finalSplit * 1609.344;
    }
    if (event == 'm') {
      this.compunit = 'm';
      this.splitDistMeters = this.splitDist;
      this.firstSplitMeters = this.firstSplit;
      this.finalSplitMeters = this.finalSplit;
    }
    if (event == 'km') {
      this.compunit = 'km';
      this.splitDistMeters = this.splitDist * 1000;
      this.firstSplitMeters = this.firstSplit * 1000;
      this.finalSplitMeters = this.finalSplit * 1000;
    }
    this.ngOnInit();
  }

resetRace() {
  this.running = false;
  clearInterval(this.intervalTimer);
  this.startButton="Start"
  this.ngOnInit();
}
  startTimer() {

    if ((this.running == false)) {
      if (this.startButton == "Finished/Reset") {this.startButton = "Start"; return;}
      var d = new Date();
      this.starttime = d.getTime();
      console.log("New start time created");
      this.running = true;
      this.startButton = 'Split';
      this.completedSplits = 0;
      this.ngOnInit();
    } else {
      //Run code for adding a split
      this.completedSplits = this.completedSplits + 1;
      if (this.completedSplits == this.numSplits) { 
        clearInterval(this.intervalTimer);
        console.log("Interval Timer: " + this.intervalTimer);
        this.startButton = "Finished/Reset"; 
        this.running = false;
      }
      this.numSplits = (parseFloat(this.preddist)-this.firstSplitMeters)/(this.splitDistMeters)+1;
      this.finalSplitMeters = Math.round((this.numSplits-Math.floor(this.numSplits)) * this.splitDistMeters);
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
    var splitText = ' Split&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goal&nbsp;&nbsp;&nbsp;&nbsp;Actual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lap';
    splitText = splitText + "<br>" + this.setToChars(this.firstSplit.toString(),5) + " " + this.setToChars(this.convertsectoHMS(this.firstSplit / this.speed),9);  
    splitText = splitText + " " + this.setToChars(this.convertsectoHMS(this.cumulsplit[1]),9) + " " + this.setToChars(this.convertsectoHMS(this.lapsplit[1]),9);  
    for (let i = 1; i < this.numSplits; i++) {
      if (this.finalSplit && i==this.numSplits-1) {
        splitText = splitText + "<br>" + this.setToChars((this.firstSplitMeters + (i-1) * this.splitDistMeters + this.finalSplitMeters),5) + " " + this.setToChars(this.convertsectoHMS(this.predtimeseconds),9);
        if (this.completedSplits > i) {
          splitText = splitText + "  " + this.setToChars(this.convertsectoHMS(this.cumulsplit[i+1]),9) + " " + this.setToChars(this.convertsectoHMS(this.lapsplit[i+1]),9);
        }
      }
      else
      {
        splitText = splitText + "<br>" + this.setToChars((this.firstSplitMeters) + i * this.splitDistMeters,5) + " " + this.setToChars(this.convertsectoHMS((this.firstSplitMeters + i * this.splitDistMeters) / this.speed),9);
        if (this.completedSplits > i) {
          splitText = splitText + "  " + this.setToChars(this.convertsectoHMS(this.cumulsplit[i+1]),9) + " " + this.setToChars(this.convertsectoHMS(this.lapsplit[i+1]),9);
        }
      }

    }
    document.getElementById('splitData').innerHTML = splitText;
    }

    this.intervalTimer = setInterval(() => {
      console.log("Timer still running: " + this.intervalTimer);
      if (this.startButton=="Start") {this.ngOnInit(); return;}
      if (this.running==false) {this.ngOnInit(); return;}
      if (this.startButton == "Finished/Reset") {
        this.running = false;
        clearInterval(this.intervalTimer);
      }
      else
      {
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
    }
    },100);
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
