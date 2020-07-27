import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {User} from "../models/user";

import {HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient, private router: Router) { }



  registerNewUser(user: Object){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      })
    };
    return this.http.post('http://localhost:8080/register', user, httpOptions)
      .pipe(catchError(null), tap(() => {
        this.router.navigate(['/login']);
      }));
  }
}
