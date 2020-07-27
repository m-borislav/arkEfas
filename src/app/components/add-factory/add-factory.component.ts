import { Component, OnInit } from '@angular/core';
import {CompanyServiceService} from "../../services/company-service.service";
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {FormGroup, FormControl} from "@angular/forms";
import {Device} from "../../models/device";
import {Company} from "../../models/company";

@Component({
  selector: 'app-add-factory',
  templateUrl: './add-factory.component.html',
  styleUrls: ['./add-factory.component.scss']
})
export class AddFactoryComponent implements OnInit {

  constructor(private companyService: CompanyServiceService, private fb: FormBuilder) { }

  companyGroup: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(128)]],
    location: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
  });

  onSubmit(): void {
    if (!this.companyGroup.valid) {
      return;
    }
    let company = new Company(this.companyGroup.value.name, this.companyGroup.value.location);
    this.companyService.addNewCompany(company);
    debugger;
    this.companyGroup.reset();
  }

  ngOnInit(): void {
  }

}
