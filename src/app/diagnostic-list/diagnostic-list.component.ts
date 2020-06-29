import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-diagnostic-list',
  templateUrl: './diagnostic-list.component.html',
  styleUrls: ['./diagnostic-list.component.css']
})
export class DiagnosticListComponent implements OnInit {
  personEmail: string;
  personDiagnostics: string;
  parsed: JSON;
  diagnostics: Observable<any>;


  constructor(public firebase: FirebaseService) { }

  ngOnInit() {
    this.personEmail = sessionStorage.getItem('userEmail');
    //this.getPersonDiagnostics();
    this.diagnostics =  this.firebase.getDiagnostics();
  }

  getPersonDiagnostics(){
     this.firebase.getDiagnostics().subscribe(data => {
      console.log(data);   
    });
   // var parsedJSON = JSON.parse(this.personDiagnostics);
    //this.parsed = parsedJSON;
   // console.log(this.parsed);
  }

}


