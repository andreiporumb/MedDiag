import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const flaskDiagnosisServerURL = 'assets/data/smartphone.json';



@Injectable({
  providedIn: 'root'
})
export class DiagnosisApiService {

  constructor(private http: HttpClient) { }
}
