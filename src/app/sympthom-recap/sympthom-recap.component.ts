import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-sympthom-recap',
  templateUrl: './sympthom-recap.component.html',
  styleUrls: ['./sympthom-recap.component.css']
})
export class SympthomRecapComponent implements OnInit {
firstAnswer: string;
secondAnswer:string;
thirdAnswer: string;
fourthAnswer: string;
fifthAnswer: string;

  constructor(private _location: Location) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.firstAnswer = sessionStorage.getItem("Answer_1");
    if(sessionStorage.getItem("Answer_2")!=undefined)
    {
      this.secondAnswer = sessionStorage.getItem("Answer_2");
    }
    else{
      this.secondAnswer = sessionStorage.getItem("Answer_22");
    }
    this.thirdAnswer = sessionStorage.getItem("Answer_3");
    this.fourthAnswer = sessionStorage.getItem("Answer_4");
    this.fifthAnswer = sessionStorage.getItem("Answer_5"); 
 
  }

  backClicked() {
    this._location.back();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

clickDelay(){
  (async () => { 
    // Do something before delay
    console.log('before delay')

    await this.delay(1000);

    // Do something after
    console.log('after delay')
})();
}

}
