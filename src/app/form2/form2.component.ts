import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

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
  this.router.navigate(['/form-question=3&sympthomId=1']);
}
if(this.selectedValue==2)
{
  this.router.navigate(['/form-question=3&sympthomId=1']);
}
if(this.selectedValue==3)
{
  this.router.navigate(['/form-question=3&sympthomId=1']);
}

    

 }

}
