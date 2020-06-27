import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form222-heart-attack',
  templateUrl: './form222-heart-attack.component.html',
  styleUrls: ['./form222-heart-attack.component.css']
})
export class Form222HeartAttackComponent implements OnInit {

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
 sessionStorage.setItem("Answer_4","Yes, I had a heart attack");
 sessionStorage.setItem("Arg_4","0");

  this.router.navigate(['/form-question=5&sympthomId=1']);
}
if(this.selectedValue==2)
{
  sessionStorage.setItem("Answer_4","No, I haven't got any heart attacks");
  sessionStorage.setItem("Arg_4","1");

  this.router.navigate(['/form-question=5&sympthomId=1']);
}


 }


}
