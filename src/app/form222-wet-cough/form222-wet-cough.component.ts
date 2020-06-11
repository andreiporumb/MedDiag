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
  this.router.navigate(['/form-question=4&sympthomId=1']);
}
if(this.selectedValue==2)
{
  this.router.navigate(['/form-question=4&sympthomId=2']);
}


 }


}
