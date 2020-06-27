import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
  sessionStorage.setItem("Answer_1","RunnyNose");
  sessionStorage.setItem("Arg_1","0");

  this.router.navigate(['/form-question=2&sympthomId=1']);
}
if(this.selectedValue==2)
{
  sessionStorage.setItem("Answer_1","ShortnessOfBreath");
  sessionStorage.setItem("Arg_1","1");

  this.router.navigate(['/form-question=2&sympthomId=2']);
}
if(this.selectedValue==3)
{
  sessionStorage.setItem("Answer_1","Headache");
  sessionStorage.setItem("Arg_1","2");

  this.router.navigate(['/form-question=2&sympthomId=3']);
}
if(this.selectedValue==4)
{
  sessionStorage.setItem("Answer_1","Fever");
  sessionStorage.setItem("Arg_1","3");

  this.router.navigate(['/form-question=2&sympthomId=4']);
}
    

 }
}
