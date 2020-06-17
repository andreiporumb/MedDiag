import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {

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
{  sessionStorage.setItem("Answer_2","Soft");

  this.router.navigate(['/form-question=2&sympthomId=1']);
}
if(this.selectedValue==2)
{  sessionStorage.setItem("Answer_2","Mild");

  this.router.navigate(['/form-question=2&sympthomId=1']);
}
if(this.selectedValue==3)
{  sessionStorage.setItem("Answer_2","Strong");

  this.router.navigate(['/form-question=2&sympthomId=1']);
}
if(this.selectedValue==4)
{  sessionStorage.setItem("Answer_2","Unbearable");

  this.router.navigate(['/form-question=2&sympthomId=1']);
}
    

 }

}
