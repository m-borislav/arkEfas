import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {Device} from "../models/device";

@Injectable({
  providedIn: 'root'
})

export class DeviceServiceService {
  constructor(private http: HttpClient, private router: Router){}

  addNewDevice(device: Device){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accepts: localStorage.getItem('token')
      })
    };
    return this.http.post('api/device/add', device, httpOptions)
      .pipe(catchError(null), tap(() => {
        this.router.navigate(['/company/equipment']);
      }));
  }
}
