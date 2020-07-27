import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {Company} from "../models/company";

@Injectable({
  providedIn: 'root'
})

export class CompanyServiceService {
  constructor(private http: HttpClient, private router: Router) { }


  addNewCompany(company: Company){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accepts: localStorage.getItem('token')
      })
    };
    return this.http.post('http://localhost:8080/company/add', company, httpOptions)
      .pipe(catchError(null), tap(() => {
        this.router.navigate(['/company']);
      }));
  }
}
