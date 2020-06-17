import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form22',
  templateUrl: './form22.component.html',
  styleUrls: ['./form22.component.css']
})
export class Form22Component implements OnInit {

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
  sessionStorage.setItem("Answer_3","Dry cough, without phlegm or mucus");
  this.router.navigate(['/form-question=4&sympthomId=1']);
}
if(this.selectedValue==2)
{
  sessionStorage.setItem("Answer_3","Wet cough, with phlegm or mucus");
  this.router.navigate(['/form-question=4&sympthomId=2']);
}


 }

}
