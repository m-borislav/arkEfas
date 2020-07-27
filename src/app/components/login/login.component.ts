import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {FormGroup, FormControl} from "@angular/forms";
import {UserServiceService} from "../../services/user-service.service";
import {LoginServiceService} from "../../services/login-service.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private fb: FormBuilder) {}

  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(128)]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
  });

  onSubmit(): void {
    if (!this.loginForm.valid) {
      return;
    }
    let user = new User('Test', 'User','email@qwe', 'qwertyui');
    this.loginService.loginUser(user);
    this.loginForm.reset();
  }

  ngOnInit(): void {
  }

}
