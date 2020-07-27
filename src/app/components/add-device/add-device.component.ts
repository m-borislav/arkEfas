import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {FormGroup, FormControl} from "@angular/forms";
import {DeviceServiceService} from "../../services/device-service.service";
import {Device} from "../../models/device";

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  constructor(private deviceService: DeviceServiceService, private fb: FormBuilder) {
  }

  deviceGroup: FormGroup = this.fb.group({
    place: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]],
    deviceType: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]],
  });

  onSubmit(): void {
    if (!this.deviceGroup.valid) {
      return;
    }
    let device = new Device(this.deviceGroup.value.place, this.deviceGroup.value.deviceType);
    //debugger;
    this.deviceService.addNewDevice(device);
    this.deviceGroup.reset();
  }

  ngOnInit(): void {
  }

}
