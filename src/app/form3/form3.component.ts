import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

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
  this.router.navigate(['/form-question=2&sympthomId=1']);
}
if(this.selectedValue==2)
{
  this.router.navigate(['/form-question=2&sympthomId=2']);
}
if(this.selectedValue==3)
{
  this.router.navigate(['/form-question=2&sympthomId=3']);
}
if(this.selectedValue==4)
{
  this.router.navigate(['/form-question=2&sympthomId=4']);
}
    

 }

}
