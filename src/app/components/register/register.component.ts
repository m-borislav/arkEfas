import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserServiceService} from "../../services/user-service.service";
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserServiceService, private fb: FormBuilder) {
  }

  formGroup: FormGroup = this.fb.group({
    firstName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]],
    lastName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]],
    email: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(128)]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
  });


  onSubmit(): void {
    if (!this.formGroup.valid) {
      return;
    }
    const user = {
      firstName: this.formGroup.value.firstName,
      lastName: this.formGroup.value.lastName,
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
    };
    this.userService.registerNewUser(user).subscribe();
    this.formGroup.reset();
  }

  ngOnInit(): void {
  }




}
