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
  if(sessionStorage["Answer_2"]==undefined){
      sessionStorage.setItem("Answer_2","LessThan3Weeks");

  }
  else{
    sessionStorage.setItem("Answer_22","LessThan3Weeks");

  }

  this.router.navigate(['/form-question=3&sympthomId=1']);
}
if(this.selectedValue==2)
{
  if(sessionStorage["Answer_2"]==undefined){
    sessionStorage.setItem("Answer_2","Between 3 and 8 weeks");

}
else{
  sessionStorage.setItem("Answer_22","Between 3 and 8 weeks");

}
  this.router.navigate(['/form-question=3&sympthomId=1']);
}
if(this.selectedValue==3)
{
  if(sessionStorage["Answer_2"]==undefined){
    sessionStorage.setItem("Answer_2","More than 8 weeks");

}
else{
  sessionStorage.setItem("Answer_22","More than 8 weeks");

}
  this.router.navigate(['/form-question=3&sympthomId=1']);
}

    

 }

}
