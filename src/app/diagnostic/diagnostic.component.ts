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

    var json = {
      'diagnostic': 'cough',
      'user': parsedJSON.email
    };
    sessionStorage.setItem('userEmail', parsedJSON.email);
    this.firebase.createDiagnostic(json);
    this.router.navigate(['/']);

  }

}
