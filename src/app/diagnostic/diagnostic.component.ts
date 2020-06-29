import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FirebaseService } from 'src/app/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {
  diagnosticId: string;
  profileJson: string = null;
  diagnosticName:string;

  constructor(public auth: AuthService, public firebase: FirebaseService, private router: Router) { }

  ngOnInit() {
     this.diagnosticId = sessionStorage.getItem("Diagnostic");
//      this.auth.getUser$(data => {
//  console.log(data);    
//  }).subscribe(data => {
//    console.log(data);    
//    });

  
  }

  createDiagnostic(){
    console.log(name);
    this.auth.userProfile$.subscribe(
      profile => this.profileJson = JSON.stringify(profile, null, 2)
    );
    var parsedJSON = JSON.parse(this.profileJson);
    this.getDiagnosticName();
    var json = {
      'diagnostic': this.diagnosticName,
      'user': parsedJSON.email
    };
    sessionStorage.setItem('userEmail', parsedJSON.email);
    this.firebase.createDiagnostic(json);
    this.router.navigate(['/diagnostic-list']);
    
  }

  getDiagnosticName(){
    switch(this.diagnosticId){
      case '1':
        this.diagnosticName = 'Common cold';
        break;
      case '2':
        this.diagnosticName = 'Respiratory Syncytial Virus (RSV)';
        break;
      case '3':
        this.diagnosticName = 'Respiratory Syncytial Virus (RSV)';
        break;
      case '4':
        this.diagnosticName = 'Respiratory Syncytial Virus (RSV)';
        break;
      case '5':
        this.diagnosticName = 'Broken blood vessels in your nose';
        break;
      case '6':
        this.diagnosticName = 'Broken blood vessels in your nose';
        break;
      case '7':
        this.diagnosticName = 'Acute bronchitis';
        break;
      case '8':
        this.diagnosticName = 'Acute bronchitis';
        break;
      case '9':
        this.diagnosticName = 'Acute bronchitis';
        break;
      case '10':
        this.diagnosticName = 'Pneumonia';
        break;
      case '11':
        this.diagnosticName = 'Pneumonia';
        break;
      case '12':
        this.diagnosticName = 'Pneumonia';
        break;
      case '13':
        this.diagnosticName = 'Chronic bronchitis';
        break;
      case '14':
        this.diagnosticName = 'COVID-19';
        break;
      case '15':
        this.diagnosticName = 'COVID-19';
        break;
      case '16':
        this.diagnosticName = 'COVID-19';
        break;
      case '17':
        this.diagnosticName = 'Viral Pneumonia';
        break;
      case '18':
        this.diagnosticName = 'Viral Pneumonia';
        break;
      case '19':
        this.diagnosticName = 'Viral Pneumonia';
        break;
      case '20':
        this.diagnosticName = 'Viral Pneumonia';
        break;
      case '21':
        this.diagnosticName = 'Viral Pneumonia';
        break;
      case '22':
        this.diagnosticName = 'Viral Pneumonia';
        break;
      default:
        this.diagnosticName = 'Diagnostic could not be sent to the server.';
        break;


    }
  }

}
