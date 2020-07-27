import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user: User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    /*return this.http.post('/login', user, httpOptions)
      .pipe(catchError(null), tap(() => {
        this.router.navigate(['/profile']);
        localStorage.setItem('userData', JSON.stringify(user));
        localStorage.setItem('token', 'Bearer '+user.token);

      }));*/
    //debugger;
    this.http.post<User>('http://localhost:8080/login', user, httpOptions)
  .subscribe(user => {
    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('token', 'Bearer '+user.token);
    this.router.navigate(['/profile']);
    });
  }
}
