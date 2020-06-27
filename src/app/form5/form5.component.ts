import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {

  selectedValue: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onItemChange(value){
    console.log(" Value is : ", value );
    this.selectedValue = value;

 }


  onContinue(){
console.log(this.selectedValue);
if(this.selectedValue==1)
{  sessionStorage.setItem("Answer_2","Between 98.6 and 100.4 °F or 37 and 38 °C");
sessionStorage.setItem("Arg_2","0");

  this.router.navigate(['/form-question=2&sympthomId=1']);
}
if(this.selectedValue==2)
{  sessionStorage.setItem("Answer_2","Between 100.4 and 104 °F or 38 and 40 °C");
sessionStorage.setItem("Arg_2","1");

  this.router.navigate(['/form-question=2&sympthomId=1']);
}
if(this.selectedValue==3)
{  sessionStorage.setItem("Answer_2","Greater than 104 °F or 40 °C");
sessionStorage.setItem("Arg_2","2");

  this.router.navigate(['/form-question=2&sympthomId=1']);
}
if(this.selectedValue==4)
{  sessionStorage.setItem("Answer_2","I haven’t checked my temperature");
sessionStorage.setItem("Arg_2","3");

  this.router.navigate(['/form-question=2&sympthomId=1']);
}
    

 }

}
