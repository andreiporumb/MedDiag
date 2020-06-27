import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  createDiagnostic(value){
    return this.db.collection('diagnostics').add({
      diagnostic: value.diagnostic,
      user: value.user     
    });
  }

  getDiagnostics(){
    return this.db.collection('diagnostics').snapshotChanges();

  }
}
