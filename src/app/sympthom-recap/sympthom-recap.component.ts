import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { take } from 'rxjs/operators';



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
arg1: string;
arg2: string;
arg3: string;
arg4: string;
arg5: string;


  constructor(private _location: Location, private router: Router, private http: HttpClient) { }

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


    this.arg1 = sessionStorage.getItem("Arg_1");
    if(sessionStorage.getItem("Arg_2")!=undefined)
    {
      this.arg2 = sessionStorage.getItem("Arg_2");
    }
    else{
      this.arg2 = sessionStorage.getItem("Arg_22");
    }

    this.arg3 = sessionStorage.getItem("Arg_3");
    this.arg4 = sessionStorage.getItem("Arg_4");
    this.arg5 = sessionStorage.getItem("Arg_5");

    alert("Arg1: "+this.arg1+"Arg2: "+this.arg2+"Arg3: "+this.arg3+"Arg4: "+this.arg4+"Arg5: "+this.arg5);

 
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

public edited = false;
  saveTodos(): void {
   //show box msg
   this.edited = true;
   //wait 3 Seconds and hide
   setTimeout(function() {
       this.edited = false;
       console.log(this.edited);  
       var url = 'https://flask-ap-app.herokuapp.com/diagnose-porumbescu?';
       url += 'arg1=' + this.arg1;
       url += '&arg2=' + this.arg2;
       url += '&arg3=' + this.arg3;
       url += '&arg4=' + this.arg4;
       url += '&arg5=' + this.arg5;
       
       var x = this.http.get(url).subscribe(data => {
            sessionStorage.setItem('Diagnostic', data[0]);
            this.router.navigate(["/diagnostic"]);
         }, err => alert('CORS Error, please activate CORS in your browser :)'))
     
      //  from( // wrap the fetch in a from if you need an rxjs Observable
      //    fetch(
      //     url,
      //      {          
      //       headers: {
      //         'Content-Type': 'application/json',
      //         'Access-Control-Allow-Origin':'*'},
      //        method: 'GET'
            
      //    }
      //  )
      // ).subscribe(data => {
        
      //    console.log(data);
      //  });
      

       //this.router.navigate(["/"]);

   }.bind(this), 3000);

  }

}
