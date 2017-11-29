import { Component, OnInit } from '@angular/core';

import { Car } from "../car";
import { VehicleService } from "../vehicle.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  car: Car;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.car = this.vehicleService.getVehicle("GGA-888");
  }

}
