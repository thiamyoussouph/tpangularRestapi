import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Apprenant} from "../../models/Apprenant";

@Injectable({
  providedIn: 'root'
})
export class AprenantService {
  private apiUrl = 'http://localhost:8000/api/apprenants';
  constructor(private http:HttpClient) { }
  getApprenants(): Observable<{ success: boolean, data: Apprenant[] }> {
    return this.http.get<{ success: boolean, data: Apprenant[] }>(this.apiUrl);
  }

  ajouterApprenant(apprenant: Apprenant): Observable<any> {
    return this.http.post<any>(this.apiUrl, apprenant);
  }
}
