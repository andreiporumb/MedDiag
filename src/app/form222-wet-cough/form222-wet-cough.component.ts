import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form222-wet-cough',
  templateUrl: './form222-wet-cough.component.html',
  styleUrls: ['./form222-wet-cough.component.css']
})
export class Form222WetCoughComponent implements OnInit {

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
{
  sessionStorage.setItem("Answer_4","The mucus is thick yellow or green");
  sessionStorage.setItem("Arg_4","0");

  this.router.navigate(['/form-question=5&sympthomId=2']);
}
if(this.selectedValue==2)
{
  sessionStorage.setItem("Answer_4","The mucus is pink and frothy");
  sessionStorage.setItem("Arg_4","1");

  this.router.navigate(['/form-question=5&sympthomId=2']);
}
if(this.selectedValue==3)
{
  sessionStorage.setItem("Answer_4","Often comes in the morning");
  sessionStorage.setItem("Arg_4","2");

  this.router.navigate(['/form-question=5&sympthomId=2']);
}


 }


}
