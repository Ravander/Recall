import { Component, OnInit } from '@angular/core';

import { Car } from "../car";
import { VehicleService } from "../vehicle.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  car: Car = {
    license: "AAA-000",
    nickname: "Default",
    model: "Mäkiauto 007",
    year: 1990,
    lastAction: "24.12.2017",
    sumCost: 0
  };

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.vehicleService.addVehicle(this.car);
  }

}
