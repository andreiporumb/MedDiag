import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, first } from 'rxjs/operators';


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
    return this.db.collection('diagnostics').snapshotChanges() .pipe(
      map((snaps) =>
        snaps.map((snap) => {
          return new Object({
            id: snap.payload.doc.id,
            ...(snap.payload.doc.data() as {})
          });
        })
      ),
      first()
    );;
  }
}
