import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form2222-veins',
  templateUrl: './form2222-veins.component.html',
  styleUrls: ['./form2222-veins.component.css']
})
export class Form2222VeinsComponent implements OnInit {

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
  sessionStorage.setItem("Answer_5","Yes, I have noticed a distension or thickening of the veins on my neck");

  this.router.navigate(['/sympthom-recap']);
}
if(this.selectedValue==2)
{
  sessionStorage.setItem("Answer_5","No, I haven't noticed a distension or thickening of the veins on my neck");

  this.router.navigate(['/sympthom-recap']);
}


 }

}
