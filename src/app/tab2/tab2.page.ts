import { Component } from '@angular/core';
import { timer } from "rxjs";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor() {}
  
  compunit = localStorage.getItem("lscompunit");
  numtimedata = localStorage.getItem("lsnumtimedata");
  preddist = localStorage.getItem("lspreddist");
  compdistance = localStorage.getItem("lscompdistance");
  compdist = localStorage.getItem("lscompdist");
  predrace = localStorage.getItem("lspredrace");
  timedisplay="";
  time=0;

startTimer() {
  timer(0, 100).subscribe(ec => {
    this.time=this.time+0.1;
    if (this.time<600){
      this.timedisplay = this.time.toFixed(1).toString();
      console.log(this.time);
    }
  });

  console.log("compunit: " + this.compunit);
  console.log("timedata: " + this.numtimedata);
  console.log("preddist: " + this.preddist);
  console.log("compdist in meters: " + this.compdistance);
  console.log("compdist: " + this.compdist);
  console.log("Predrace: " + this.predrace);

}
getDisplayTimer(time: number) {
  const hours = '0' + Math.floor(time / 3600);
  const minutes = '0' + Math.floor(time % 3600 / 60);
  const seconds = '0' + Math.floor(time % 3600 % 60);
  
  return {
  hours: { digit1: hours.slice(-2, -1), digit2: hours.slice(-1) },
  minutes: { digit1: minutes.slice(-2, -1), digit2: minutes.slice(-1) },
  seconds: { digit1: seconds.slice(-2, -1), digit2: seconds.slice(-1) },
  };
}
}
