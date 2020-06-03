import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-symptom',
  templateUrl: './search-symptom.component.html',
  styleUrls: ['./search-symptom.component.css']
})


export class SearchSymptomComponent  implements OnInit{
  title = 'Please select one of the common symptoms...';
  searchText: string;
  constructor() { }

  ngOnInit() {
  }
  heroes = [
    { id: 1, name: 'Bloating', country: 'India' },
    { id: 2, name: 'Cough' , country: 'USA'},
    { id: 3, name: 'Diarrhea' , country: 'UK'},
    { id: 4, name: 'Dizziness' , country: 'Canada' },
    { id: 5, name: 'Fatigue' , country: 'Russia'},
    { id: 6, name: 'Fever' , country: 'China'},
    { id: 7, name: 'Headache' , country: 'Germany'},
    { id: 8, name: 'Muscle cramp' , country: 'Hong Kong'},
    { id: 9, name: 'Nausea' , country: 'South Africa'},
    { id: 10, name: 'Throat irritation' , country: 'Sri Lanka'}
  ];
}
